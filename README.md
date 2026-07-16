# The Next-Gen Wealth Beat

A complete, ready-to-deploy website for the newsletter. You never need to touch code — everything you'd want to change lives in two places:

- **`src/config.ts`** — your name, tagline, LinkedIn, Beehiiv link, disclaimer
- **`content/issues/`** — one markdown file per issue; add a file, the site updates itself

## Part 1 — Put it live (about 20 minutes, all free)

### Step 1: GitHub

1. Create a free account at github.com.
2. Click **New repository**, name it `nextgen-wealth-beat`, keep it **Public** (or Private — both work), click **Create repository**.
3. On the empty repo page, click **"uploading an existing file"**.
4. Drag in **everything inside this folder** (all files and folders — but NOT `node_modules` or `dist` if they exist).
5. Click **Commit changes**.

### Step 2: Vercel

1. Go to vercel.com and sign up **with your GitHub account**.
2. Click **Add New → Project**, pick the `nextgen-wealth-beat` repo, click **Import**.
3. Vercel auto-detects Astro. Don't change anything. Click **Deploy**.
4. Two minutes later you have a live URL like `nextgen-wealth-beat.vercel.app`.

From now on, every commit to GitHub redeploys the site automatically.

### Step 3: Custom domain (optional but recommended)

1. Buy your domain at Porkbun or Namecheap (~$12/yr).
2. In Vercel: your project → **Settings → Domains** → add the domain.
3. Copy the DNS records Vercel shows you into your registrar's DNS settings.
4. Wait up to an hour. Done.
5. Open `astro.config.mjs` on GitHub (pencil icon to edit), replace `https://example.com` with your real domain, commit.

### Step 4: Beehiiv (email list)

1. Create a free publication at beehiiv.com with the same name.
2. Copy your subscribe page URL (looks like `https://something.beehiiv.com/subscribe`).
3. On GitHub, open `src/config.ts`, click the pencil icon, paste that URL into `subscribeUrl: ''`, and add your LinkedIn URL while you're there. Commit.
4. Subscribe buttons now appear across the site automatically.

## Part 2 — Publish an issue (every Sunday, 2 minutes once written)

1. Draft the issue using `PROMPT.md`, edit it hard, verify every number.
2. On GitHub, open the `content/issues` folder → **Add file → Create new file**.
3. Name it `YYYY-MM-DD-issue-N.md` (e.g. `2026-07-26-issue-2.md`).
4. Paste in the structure from `TEMPLATE.md`, fill in the frontmatter (title, date, issue, dek) and your content.
5. Click **Commit changes**. The site rebuilds and your issue is live in ~1 minute.
6. Also paste the issue into Beehiiv and send it to your email list.
7. Post the link on LinkedIn with a 2-sentence hook.

Delete the placeholder issue (`content/issues/2026-07-19-issue-1.md`) once your real Issue No. 1 is ready — or just overwrite its contents.

## Part 3 — Common edits

| Want to change… | Edit this |
| --- | --- |
| Name, tagline, byline, disclaimer, links | `src/config.ts` |
| About page text / add your photo | `src/pages/about.astro` (photo goes in `/public` as `me.jpg`) |
| Colors and fonts | `src/styles/global.css` (top of file) |
| Weekly structure | `TEMPLATE.md` and `PROMPT.md` |

## Running it locally (optional — not required)

If you ever want to preview on your own machine: install Node.js, then run `npm install` and `npm run dev` in this folder, and open the URL it prints.

---

*Reminder: confirm with your firm's compliance/outside-business-activity policy before publishing, and keep everything educational — no recommendations, no price targets.*
