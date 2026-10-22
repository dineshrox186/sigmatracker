import type { Chapter } from './chapters';
/**
 * No complete, auditable official NTA chapter-tagged frequency table was verified for this bundle.
 * Missing observations stay null. Add sourced per-shift observations here; do not infer fake ranges.
 */
export type ChapterStats = {
 chapterId:string; january?:{min:number|null;max:number|null;mean:number|null;median:number|null;shiftsAnalysed:number;shiftsAppeared:number|null};
 april?:{min:number|null;max:number|null;mean:number|null;median:number|null;shiftsAnalysed:number;shiftsAppeared:number|null};
 source:string;verifiedOn:string;confidence:'High'|'Medium'|'Low'|'Unavailable';notes:string;
};
export const chapterStats: ChapterStats[] = [];
export const statsFor = (chapter:Chapter) => chapterStats.find(s=>s.chapterId===chapter.id);
export const sources = [
 {name:'NTA — 2026 syllabus',url:'https://jeemain.nta.nic.in/document/syllabus-2026/',kind:'Official',note:'Syllabus baseline and unit names.'},
 {name:'NTA — 2026 archive',url:'https://jeemain.nta.nic.in/2026-archive/',kind:'Official',note:'Information bulletin, syllabus, FAQ and public notices.'},
 {name:'NTA — Question papers / sitemap',url:'https://jeemain.nta.nic.in/sitemap/',kind:'Official',note:'Published question-paper links for some shifts; availability is not a complete tagged frequency dataset.'},
 {name:'NTA — 2026 score analysis PDF',url:'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260423459353913.pdf',kind:'Official',note:'Official score analysis reference.'},
 {name:'NTA — result notice',url:'https://nta.ac.in/Download/Notice/Notice_20260423195407.pdf',kind:'Official',note:'Official result notice.'},
 {name:'PrepOwl — chapter weightage',url:'https://prepowl.ai/blog/jee-main-2027-chapter-wise-weightage',kind:'Secondary',note:'Secondary chapter-tagging reference; definitions require reconciliation.'},
 {name:'Competishun — chapterwise weightage',url:'https://competishun.com/chapterwise-weightage-for-jee-mains/',kind:'Secondary',note:'Secondary chapter-wise analysis.'},
 {name:'April 2026 shift analysis',url:'https://www.adarshbarnwal.com/jee-main-2026-april-all-shift-analysis/',kind:'Secondary',note:'Shift analysis; use with stated sample and tagging method.'},
 {name:'January 2026 shift analysis',url:'https://www.adarshbarnwal.com/jee-main-2026-january-all-shift-analysis/',kind:'Secondary',note:'Shift analysis; use with stated sample and tagging method.'},
 {name:'Careers360 — marks vs percentile',url:'https://engineering.careers360.com/articles/jee-main-marks-vs-percentile',kind:'Secondary',note:'Approximate score-percentile context, not official per-shift calibration.'},
 {name:'College Pravesh — 2026 rank vs percentile',url:'https://www.collegepravesh.com/insights/jee-main-2026-rank-vs-percentile/',kind:'Secondary',note:'Rank/percentile reference; confirm year and candidate count.'}
] as const;
