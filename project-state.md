# Project state
Last updated: 2026-09-13

## Works
- Next.js (App Router, TypeScript, plain CSS) site is live on Vercel: https://ai-workshop-3j5yp472d-pace-ai2.vercel.app/
- Supabase project is created and linked to the repo.
- Slice 1 (sign up and log in) is merged: `/signup`, `/login`, `/dashboard`, middleware-protected routes, Supabase Auth session cookies. Confirmed with a local production build.
- Slice 2 (add and manage tasks) code is written on this PR's branch: add a task with a title + course name, mark it complete/incomplete, delete it. Persisted to a new `tasks` table in Supabase, one row per task, scoped to the signed-in user via row-level security. Not yet verified against the live deployment — needs the SQL run in Supabase first (see PR description/reply).

## Broken or flaky
- Not yet checked whether Supabase's "confirm email" setting is on for this project. If it is, a brand-new signup won't get a live session immediately and will bounce to /login instead of /dashboard until the email is confirmed. Worth a quick manual signup test.

## Environment notes
- `npm run dev` / `npm run build` confirmed against package.json — they're the standard Next.js scripts.
- The `tasks` table does not exist yet in Supabase — it must be created by hand via the SQL Editor (see the SQL provided with Slice 2) before the task list will work.

## Next session
- Run the Slice 2 SQL in Supabase, verify all four Slice 2 done-criteria on the Vercel preview, then flip its status to done in roadmap.md and move to Slice 3 (group by course, surface soonest due date).
