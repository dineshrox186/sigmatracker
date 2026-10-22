import type { Chapter } from '../data/chapters';
import type { ProgressMap } from './storage';
import {questionDistribution2026,questionDistributionShifts} from '../data/chapterStats';
export const PATTERN={perSubject:25,total:75,marksPerCorrect:4,marksPerWrong:-1,subjectMarks:100,totalMarks:300};
export const DEFAULT_READINESS:Record<string,number>={'Easy / Confident':0.82,'Need Revision':0.48,'Hard':0.12,'Unmarked':0.22};
export type Scenario='Conservative'|'Typical'|'Optimistic';
export function estimateCoverage(chapters:Chapter[],progress:ProgressMap,subject:'All'|'Physics'|'Chemistry'|'Mathematics',accuracy:number,attemptWillingness:number,scenario:Scenario,includeRevision:boolean){
 const selected=subject==='All'?chapters:chapters.filter(c=>c.subject===subject);
 const subjects=['Physics','Chemistry','Mathematics'] as const;
 const aliases:Record<string,string[]> = {
  p01:['Units & Measurements'],p02:['Motion in a Straight Line'],p03:['Motion in a Plane'],p04:['Laws of Motion'],p05:['Work, Power & Energy'],p06:['Centre of Mass and Collision'],p07:['Rotational Motion'],p08:['Gravitation'],p09:['Properties of Matter (solids, fluids and thermal properties)'],p10:['Properties of Matter (solids, fluids and thermal properties)'],p11:['Properties of Matter (solids, fluids and thermal properties)'],p12:['Heat and Thermodynamics'],p13:['Heat and Thermodynamics'],p14:['Simple Harmonic Motion'],p15:['Waves'],p16:['Electrostatics'],p17:['Electrostatics','Capacitor'],p18:['Current Electricity'],p19:['Magnetic Effect of Current'],p20:['Magnetic Properties of Matter'],p21:['Electromagnetic Induction'],p22:['Alternating Current'],p23:['Electromagnetic Waves'],p24:['Geometrical Optics'],p25:['Wave Optics'],p26:['Dual Nature of Radiation'],p27:['Atoms and Nuclei'],p28:['Atoms and Nuclei'],p29:['Semiconductor'],p30:['Units & Measurements'],
  c01:['Some Basic Concepts of Chemistry'],c02:['Structure of Atom'],c03:['Chemical Bonding & Molecular Structure'],c04:['Thermodynamics'],c05:['Solutions'],c06:['Chemical Equilibrium','Ionic Equilibrium'],c07:['Redox Reactions'],c08:['Electrochemistry'],c09:['Chemical Kinetics and Nuclear Chemistry'],c10:['Periodic Table & Periodicity'],c11:['p-Block Elements'],c12:['d- and f-Block Elements'],c13:['Coordination Compounds'],c14:['Practical Organic Chemistry'],c15:['Basics of Organic Chemistry'],c16:['Hydrocarbons'],c17:['Haloalkanes and Haloarenes'],c18:['Alcohols, Phenols and Ethers'],c19:['Aldehydes, Ketones and Carboxylic Acids'],c20:['Compounds Containing Nitrogen'],c21:['Biomolecules'],c22:['Practical Organic Chemistry'],
  m01:['Sets and Relations','Functions'],m02:['Complex Numbers'],m03:['Quadratic Equation and Inequalities'],m04:['Matrices and Determinants'],m05:['Matrices and Determinants'],m06:['Permutations and Combinations'],m07:['Binomial Theorem'],m08:['Sequences and Series'],m09:['Trigonometric Ratio and Identities','Inverse Trigonometric Functions'],m10:['Limits, Continuity and Differentiability'],m11:['Limits, Continuity and Differentiability'],m12:['Applications of Derivatives'],m13:['Indefinite Integrals'],m14:['Definite Integration'],m15:['Area Under Curves'],m16:['Differential Equations'],m17:['Straight Lines and Pair of Straight Lines'],m18:['Circle'],m19:['Conic Sections (Parabola, Ellipse and Hyperbola)'],m20:['3D Geometry'],m21:['Vector Algebra'],m22:['Statistics'],m23:['Probability']
 };
 const bySubject=subjects.map(sub=>{
  const cs=selected.filter(c=>c.subject===sub);
  let low=0,high=0,matched=0;
  const used=new Set<string>();
  for(const c of cs){
   const status=progress[c.id]?.status??'Unmarked';
   const factor=status==='Easy / Confident'?1:status==='Need Revision'&&includeRevision?0.5:0;
   if(!factor) continue;
   const topics=aliases[c.id]??[];
   for(const topic of topics){
    const row=questionDistribution2026.find(x=>x.subject===sub&&x.topic===topic);
    if(!row||used.has(row.topic))continue;
    used.add(row.topic); matched++;
    low+=Math.floor(row.questions/questionDistributionShifts)*factor;
    high+=Math.ceil(row.questions/questionDistributionShifts)*factor;
   }
  }
  low=Math.max(0,Math.floor(low*attemptWillingness));
  high=Math.max(low,Math.ceil(high*attemptWillingness));
  // Cap question-range width at 10, centered around the midpoint rather than pinning the lower bound.
  if(high-low>5){const mid=(low+high)/2;low=Math.max(0,Math.round(mid-2.5));high=low+5;}
  const expected=(low+high)/2;
  const correct=expected*accuracy,wrong=expected*(1-accuracy);
  const perQuestionMarks=accuracy*4-(1-accuracy);
  const marksMid=((low+high)/2)*perQuestionMarks;
  const marksLow=Math.max(0,Math.round(marksMid-10));
  const marksHigh=Math.max(marksLow,Math.round(marksMid+10));
  return {subject:sub,available:Math.min(25,cs.length),low,high,attempted:expected,correct,wrong,unattempted:Math.max(0,25-expected),marksLow,marksHigh,marks:correct*4-wrong,matched,proxy:true};
 });
 const visible=bySubject.filter(x=>subject==='All'||x.subject===subject);
 let low=visible.reduce((n,x)=>n+x.low,0),high=visible.reduce((n,x)=>n+x.high,0);
 if(high-low>10){const mid=(low+high)/2;low=Math.max(0,Math.round(mid-5));high=low+10;}
 const expected=(low+high)/2,markPerQuestion=accuracy*4-(1-accuracy);
 const marksMid=((low+high)/2)*markPerQuestion;
 const marksLow=Math.max(0,Math.round(marksMid-10)),marksHigh=Math.round(marksMid+10);
 return {subjects:bySubject,total:{available:75,low,high,attempted:expected,correct:expected*accuracy,wrong:expected*(1-accuracy),unattempted:Math.max(0,75-expected),marksLow,marksHigh,marks:expected*markPerQuestion},method:'Range based on 2026 question totals divided across 19 shifts; Easy / Confident chapters count fully and Need Revision chapters count at 50%. Question range width is capped at 10 questions and centered on its midpoint; marks range is centered on the midpoint of the estimated marks.'};
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
