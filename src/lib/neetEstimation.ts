import type { NeetChapter, NeetSubject } from '../data/neetChapters';
import { neetQuestionDistribution2026, neetQuestionDistributionShifts } from '../data/neetChapterStats';
import type { ProgressMap } from './storage';

export const NEET_PATTERN = {
  questionsBySubject: { Physics: 45, Chemistry: 45, Biology: 90 } as Record<NeetSubject, number>,
  totalQuestions: 180,
  marksPerCorrect: 4,
  marksPerWrong: -1,
  totalMarks: 720
};

export function estimateNeetCoverage(chapters:NeetChapter[],progress:ProgressMap,subject:'All'|NeetSubject,accuracy:number,attemptWillingness:number){
  const selected=subject==='All'?chapters:chapters.filter(c=>c.subject===subject);
  const subjects:NeetSubject[]=['Physics','Chemistry','Biology'];
  const bySubject=subjects.map(sub=>{
    const cs=selected.filter(c=>c.subject===sub);
    let expected=0,matched=0;
    for(const c of cs){
      const status=progress[c.id]?.status??'Unmarked';
      const factor=status==='Easy / Confident'?1:status==='Need Revision'?.75:0;
      if(!factor)continue;
      const row=neetQuestionDistribution2026.find(r=>r.chapterId===c.id);
      if(!row)continue;
      expected+=(row.questions/neetQuestionDistributionShifts)*factor;
      matched++;
    }
    const cap=NEET_PATTERN.questionsBySubject[sub];
    expected=Math.max(0,Math.min(cap,expected*attemptWillingness));
    const low=Math.max(0,Math.floor(expected*.9));
    const high=Math.min(cap,Math.max(low,Math.ceil(expected*1.1)));
    const attempted=(low+high)/2;
    const correct=attempted*accuracy,wrong=attempted*(1-accuracy);
    const perQuestionMarks=accuracy*4-(1-accuracy);
    const marksMid=attempted*perQuestionMarks;
    const marksLow=Math.max(0,Math.round(marksMid-5));
    const marksHigh=Math.min(cap*4,Math.max(marksLow,Math.round(marksMid+5)));
    return {subject:sub,available:cap,low,high,attempted,correct,wrong,unattempted:Math.max(0,cap-attempted),marksLow,marksHigh,marks:correct*4-wrong,matched,proxy:true};
  });
  const visible=bySubject.filter(x=>subject==='All'||x.subject===subject);
  let low=visible.reduce((n,x)=>n+x.low,0),high=visible.reduce((n,x)=>n+x.high,0);
  const cap=visible.reduce((n,x)=>n+x.available,0);
  if(high-low>Math.round(cap*.08)){const mid=(low+high)/2;const half=Math.round(cap*.04);low=Math.max(0,Math.round(mid-half));high=Math.min(cap,low+half*2);}
  const expected=(low+high)/2,markPerQuestion=accuracy*4-(1-accuracy);
  const marksMid=expected*markPerQuestion;
  const marksLow=Math.max(0,Math.round(marksMid-(subject==='All'?10:5)));
  const marksHigh=Math.min(cap*4,Math.max(marksLow,Math.round(marksMid+(subject==='All'?10:5))));
  return {subjects:bySubject,total:{available:cap,low,high,attempted:expected,correct:expected*accuracy,wrong:expected*(1-accuracy),unattempted:Math.max(0,cap-expected),marksLow,marksHigh,marks:expected*markPerQuestion},method:'Coverage uses chapter-tagged counts from the two 2026 NEET sittings averaged per paper. Easy / Confident chapters use full weight and Need Revision chapters use 75%; Hard / Unmarked chapters are excluded. Counts are planning estimates, not official NTA chapter allocations.'};
}

type NeetRankInput={physics:number;chemistry:number;biology:number;mathematics?:number;manualTotal:string;manualPercentile:string;shift:string};
const NEET_MARKS_RANK_2026:readonly [number,number][]=[
 [0,1999895],[38,1950000],[54,1900000],[76,1800000],[102,1650000],[119,1550000],
 [135,1450000],[150,1350000],[167,1250000],[176,1200000],[193,1100000],[212,1000000],
 [232,900000],[253,800000],[275,700000],[299,600000],[325,500000],[340,450000],
 [355,400000],[372,347000],[386,307000],[400,270000],[413,242973],[430,200000],
 [444,178000],[460,150000],[474,127000],[493,100000],[500,90000],[523,62000],
 [535,50000],[542,44000],[557,36800],[575,20000],[590,13608],[600,10469],
 [615,6151],[622,4667],[641,2100],[653,1277],[660,883],[681,253],[696,46],
 [700,19],[705,8],[710,4],[715,1],[720,1]
];
function neetRankFromMarks(marks:number){
  if(marks<=NEET_MARKS_RANK_2026[0][0])return NEET_MARKS_RANK_2026[0][1];
  for(let i=1;i<NEET_MARKS_RANK_2026.length;i++){
    const [x2,r2]=NEET_MARKS_RANK_2026[i], [x1,r1]=NEET_MARKS_RANK_2026[i-1];
    if(marks<=x2){
      const fraction=(marks-x1)/(x2-x1);
      return Math.max(1,Math.round(r1+(r2-r1)*fraction));
    }
  }
  return 1;
}
export function estimateNeetRank(input:NeetRankInput){
  const physics=Number(input.physics)||0, chemistry=Number(input.chemistry)||0, biology=Number(input.biology)||0;
  const manualTotal=input.manualTotal.trim()!==''?Number(input.manualTotal):NaN;
  const subjectEntered=[input.physics,input.chemistry,input.biology].some(v=>Number.isFinite(Number(v))&&Number(v)!==0);
  const total=Number.isFinite(manualTotal)?manualTotal:subjectEntered?physics+chemistry+biology:NaN;
  if(!Number.isFinite(total)||total<0||total>720)return {total,percentile:null,rankLow:null,rankHigh:null,note:'Enter valid marks from 0 to 720.'};
  const candidates=1999895;
  let percentile:number;
  let central:number;
  const manual=input.manualPercentile.trim()!=='';
  if(manual){
    percentile=Number(input.manualPercentile);
    if(!Number.isFinite(percentile)||percentile<0||percentile>100)return {total,percentile:null,rankLow:null,rankHigh:null,note:'Percentile must be between 0 and 100.'};
    central=Math.max(1,Math.round((100-percentile)/100*candidates)+1);
  }else{
    central=neetRankFromMarks(total);
    percentile=Math.max(0,100-(central-1)/candidates*100);
  }
  return {total,percentile:Number(percentile.toFixed(4)),rankLow:Math.max(1,Math.floor(central*.92)),rankHigh:Math.ceil(central*1.08),note:manual?'Rank range uses your entered percentile and an approximately 2-million candidate baseline.':'Rank is interpolated from published 2026 marks-versus-rank reference points. NEET rank-to-marks varies by paper difficulty and tie-breaks; treat this as a planning range, not an official prediction.'};
}
