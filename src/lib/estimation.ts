import type { Chapter } from '../data/chapters';
import type { ProgressMap } from './storage';
export const PATTERN={perSubject:25,total:75,marksPerCorrect:4,marksPerWrong:-1,subjectMarks:100,totalMarks:300};
export const DEFAULT_READINESS:Record<string,number>={'Easy / Confident':0.82,'Need Revision':0.48,'Hard':0.12,'Unmarked':0.22};
export type Scenario='Conservative'|'Typical'|'Optimistic';
export function estimateCoverage(chapters:Chapter[],progress:ProgressMap,subject:'All'|'Physics'|'Chemistry'|'Mathematics',accuracy:number,attemptWillingness:number,scenario:Scenario,includeRevision:boolean){
 const mult=scenario==='Conservative'?0.82:scenario==='Optimistic'?1.18:1;
 const selected=subject==='All'?chapters:chapters.filter(c=>c.subject===subject);
 const subjects=['Physics','Chemistry','Mathematics'] as const;
 const bySubject=subjects.map(s=>{
  const cs=selected.filter(c=>c.subject===s);
  // Historical chapter means are unavailable for unverified rows. Use an explicit equal-share planning proxy, never call it historical.
  const available=PATTERN.perSubject;
  let expected=0,easy=0,revision=0,hard=0;
  for(const c of cs){
   const st=progress[c.id]?.status??'Unmarked';
   const p=st==='Easy / Confident'?DEFAULT_READINESS[st]:st==='Need Revision'?(includeRevision?DEFAULT_READINESS[st]:0):DEFAULT_READINESS[st];
   const proxy=(available/Math.max(1,cs.length))*mult;
   expected+=proxy*p*attemptWillingness;
   if(st==='Easy / Confident') easy+=proxy;
   else if(st==='Need Revision') revision+=proxy;
   else if(st==='Hard') hard+=proxy;
  }
  expected=Math.min(25,expected);
  const correct=expected*accuracy,wrong=expected*(1-accuracy);
  return {subject:s,available,easy:Math.min(25,easy),revision:Math.min(25,revision),hard:Math.min(25,hard),attempted:expected,correct,wrong,unattempted:Math.max(0,available-expected),marks:correct*4-wrong,proxy:true};
 });
 return {subjects:bySubject,total:{available:75,attempted:bySubject.reduce((a,b)=>a+b.attempted,0),correct:bySubject.reduce((a,b)=>a+b.correct,0),wrong:bySubject.reduce((a,b)=>a+b.wrong,0),unattempted:bySubject.reduce((a,b)=>a+b.unattempted,0),marks:bySubject.reduce((a,b)=>a+b.marks,0)},method:'Planning proxy only — chapter-level verified 2026 shift means are not bundled.'};
}
export type RankInput={physics:number;chemistry:number;mathematics:number;manualTotal:string;manualPercentile:string;shift:string};
export function rankEstimate(input:RankInput){
 const subjectEntered=[input.physics,input.chemistry,input.mathematics].some(v=>Number.isFinite(v)&&v!==0);
 const total=input.manualTotal.trim()!==''?Number(input.manualTotal):subjectEntered?input.physics+input.chemistry+input.mathematics:NaN;
 const percentile=input.manualPercentile.trim()!==''?Number(input.manualPercentile):NaN;
 // Score-to-percentile is intentionally not fabricated. If no manually entered percentile, report no numeric result.
 if(!Number.isFinite(total)||total<0||total>300)return {total,percentile:null,rankLow:null,rankHigh:null,note:'Enter valid marks from 0 to 300.'};
 if(Number.isFinite(percentile)){
  if(percentile<0||percentile>100)return {total,percentile:null,rankLow:null,rankHigh:null,note:'Percentile must be between 0 and 100.'};
  // broad candidate-count mapping is a transparent rough conversion, not an official exact rank.
  const candidates=1500000; const central=Math.max(1,Math.round((100-percentile)/100*candidates)+1);
  return {total,percentile,rankLow:Math.max(1,Math.floor(central*.92)),rankHigh:Math.ceil(central*1.08),note:'Rank range is an approximate percentile-to-rank conversion using an illustrative 1.5 million-candidate baseline. Replace baseline with verified 2026 unique-candidate count for a more defensible estimate.'};
 }
 return {total,percentile:null,rankLow:null,rankHigh:null,note:'Raw marks alone are not enough for a defensible percentile without a verified shift-specific 2026 calibration. Enter a known/assumed percentile to estimate an indicative rank.'};
}
