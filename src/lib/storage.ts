import type { PrepStatus } from '../data/chapters';
export type ExamMode = 'JEE' | 'NEET';
export type ChapterProgress = {status:PrepStatus;notes:string;lastRevised:string;lastPracticed:string;confidence:number;targetDate:string;completion:number;theory:boolean;pyq:boolean;timed:boolean};
export type ProgressMap = Record<string,ChapterProgress>;
const JEE_KEY='jee-prep-2027:chapter-progress:v1';
const NEET_KEY='neet-prep-2027:chapter-progress:v1';
export const defaultProgress=():ChapterProgress=>({status:'Unmarked',notes:'',lastRevised:'',lastPracticed:'',confidence:0,targetDate:'',completion:0,theory:false,pyq:false,timed:false});
export function loadProgress(exam:ExamMode='JEE'):ProgressMap { try { const raw=localStorage.getItem(exam==='JEE'?JEE_KEY:NEET_KEY); return raw?JSON.parse(raw):{}; } catch { return {}; } }
export function saveProgress(progress:ProgressMap,exam:ExamMode='JEE'){try{localStorage.setItem(exam==='JEE'?JEE_KEY:NEET_KEY,JSON.stringify(progress));}catch(e){console.error('Could not save progress',e);}}
export function exportBackup(progress:ProgressMap,rank?:unknown,exam:ExamMode='JEE'){return JSON.stringify({app:'Sigma Tracker',exam,version:3,exportedAt:new Date().toISOString(),progress,rank},null,2);}
export const RANK_KEY='jee-prep-2027:rank-estimator:v1';
export function rankStorageKey(exam:ExamMode='JEE'){return exam==='JEE'?RANK_KEY:'neet-prep-2027:rank-estimator:v1';}

export type StatusAssumption = { accuracy: number; attemptRate: number };
export type StatusAssumptions = Record<PrepStatus, StatusAssumption>;
export const DEFAULT_STATUS_ASSUMPTIONS: StatusAssumptions = {
  'Easy / Confident': { accuracy: 85, attemptRate: 100 },
  'Need Revision': { accuracy: 85, attemptRate: 75 },
  'Hard': { accuracy: 85, attemptRate: 0 },
  'Unmarked': { accuracy: 85, attemptRate: 0 }
};
export function assumptionsStorageKey(exam: ExamMode='JEE'){return exam==='JEE'?'jee-prep-2027:status-assumptions:v1':'neet-prep-2027:status-assumptions:v1';}
export function loadStatusAssumptions(exam: ExamMode='JEE'): StatusAssumptions {
  try {
    const raw=localStorage.getItem(assumptionsStorageKey(exam));
    const saved=raw?JSON.parse(raw) as Partial<StatusAssumptions>:null;
    return {...DEFAULT_STATUS_ASSUMPTIONS,...saved,
      'Easy / Confident':{...DEFAULT_STATUS_ASSUMPTIONS['Easy / Confident'],...saved?.['Easy / Confident']},
      'Need Revision':{...DEFAULT_STATUS_ASSUMPTIONS['Need Revision'],...saved?.['Need Revision']},
      'Hard':{...DEFAULT_STATUS_ASSUMPTIONS['Hard'],...saved?.['Hard']},
      'Unmarked':{...DEFAULT_STATUS_ASSUMPTIONS['Unmarked'],...saved?.['Unmarked']}
    };
  } catch { return {...DEFAULT_STATUS_ASSUMPTIONS}; }
}
export function saveStatusAssumptions(value: StatusAssumptions,exam: ExamMode='JEE'){try{localStorage.setItem(assumptionsStorageKey(exam),JSON.stringify(value));}catch(e){console.error('Could not save estimator assumptions',e);}}
