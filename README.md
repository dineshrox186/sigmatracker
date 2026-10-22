# JEE Main Preparation Desk (2027)

A frontend-only React + TypeScript + Vite app. No API keys, backend, or account required. All user progress is saved in browser `localStorage`.

## Start
1. Install Node.js 18+.
2. Unzip the folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

Production build: `npm run build`

## Data honesty
- Active syllabus baseline: JEE Main 2026 official syllabus, used as a planning baseline until a 2027 syllabus is verified.
- The chapter catalogue now matches the chapter-only list from your existing `dineshrox186/sigmatracker` repository (`index.html`, dataset `jee-main-2026-chapters-v2`): 30 Physics, 22 Chemistry and 23 Mathematics entries (75 total). This preserves the established tracker taxonomy rather than expanding it with extra or duplicate textbook subchapters.
- NTA publishes the official syllabus, exam pattern, question papers/notices and result information. It does **not** publish a verified official chapter-tagged frequency table or an official marks-to-percentile curve for every shift in a reusable complete table.
- Because a complete, reconciled shift-by-shift chapter dataset was not verifiable for this bundle, chapter-level 2026 frequency cells intentionally say “Not verified” instead of inventing values. The distribution page provides source links and explains the coverage limitation. Add verified per-shift data in `src/data/chapterStats.ts` when available.
- Rank estimator is an indicative model, not an NTA prediction. The included percentile/rank calibration is deliberately broad and labelled illustrative. Replace/add observations only with source-documented 2026 points. NTA percentile is normalized per shift; raw marks alone cannot produce an exact percentile.
- Exam pattern baseline is 75 questions / 300 marks, 25 per subject, +4 correct and −1 incorrect for Paper 1, per the 2026 information bulletin. Verify the latest official bulletin before relying on future exam settings.

## Local data / backup
Use Backup & Restore to export or import JSON. Browser data remains on that device/browser until exported. Clearing site data can erase it.

## Official sources
- Syllabus: https://jeemain.nta.nic.in/document/syllabus-2026/
- 2026 archive and bulletin: https://jeemain.nta.nic.in/2026-archive/
- 2026 official website: https://jeemain.nta.nic.in/2026/
- Documents: https://jeemain.nta.nic.in/documents/
- Sitemap / papers: https://jeemain.nta.nic.in/sitemap/
- NTA result notice: https://nta.ac.in/Download/Notice/Notice_20260423195407.pdf
- NTA score analysis PDF: https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260423459353913.pdf

Secondary chapter-tagging sources (not NTA official):
- https://prepowl.ai/blog/jee-main-2027-chapter-wise-weightage
- https://competishun.com/chapterwise-weightage-for-jee-mains/
- https://www.adarshbarnwal.com/jee-main-2026-april-all-shift-analysis/
- https://www.adarshbarnwal.com/jee-main-2026-january-all-shift-analysis/
- https://engineering.careers360.com/articles/jee-main-marks-vs-percentile
- https://www.collegepravesh.com/insights/jee-main-2026-rank-vs-percentile/

## Important caveat
This is a working local-first study planner and estimation tool, but the chapter frequency and rank calibration are not presented as fully verified official data. That would require an auditable shift-by-shift question-paper tagging dataset and documented score/percentile observations. No fabricated chapter frequencies are included.
