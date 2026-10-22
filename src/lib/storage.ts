import type { PrepStatus } from '../data/chapters';
export type ChapterProgress = {status:PrepStatus;notes:string;lastRevised:string;lastPracticed:string;confidence:number;targetDate:string;completion:number;theory:boolean;pyq:boolean;timed:boolean};
export type ProgressMap = Record<string,ChapterProgress>;
const KEY='jee-prep-2027:chapter-progress:v1';
export const defaultProgress=():ChapterProgress=>({status:'Unmarked',notes:'',lastRevised:'',lastPracticed:'',confidence:0,targetDate:'',completion:0,theory:false,pyq:false,timed:false});
export function loadProgress():ProgressMap { try { const raw=localStorage.getItem(KEY); return raw?JSON.parse(raw):{}; } catch { return {}; } }
export function saveProgress(progress:ProgressMap){try{localStorage.setItem(KEY,JSON.stringify(progress));}catch(e){console.error('Could not save progress',e);}}
export function exportBackup(progress:ProgressMap,rank?:unknown){return JSON.stringify({app:'JEE Main Preparation Desk',version:2,exportedAt:new Date().toISOString(),progress,rank},null,2);}
export const RANK_KEY='jee-prep-2027:rank-estimator:v1';
