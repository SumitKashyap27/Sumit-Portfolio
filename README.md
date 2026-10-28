# Sumit Kashyap Portfolio

Responsive React + Vite portfolio with separate Home, About, Works, Resume, and Contact routes. Shared navigation, footer, and reusable project and section components are included.

## Run on Windows

Open PowerShell in this folder (the folder containing `package.json`), then run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`. The ZIP originally placed this project one directory down, which caused `ENOENT`; run the commands from this folder, not its parent.

To create a production build, run `npm.cmd run build`.

## Images and resume to add

Place the original image files in `public/images/` with these exact names:

- `hero-left.jpg` — greenery photo
- `sumit-portrait.jpg` — main portrait (navy jacket and white hoodie)
- `hero-right.jpg` — coastline photo
- `about-portrait.png` — About page portrait with VR headset
- `project-urban-trash.png`
- `project-reputeup.png`
- `project-unnathi.png`
- `project-designathon.png`
- `project-madhu.png`
- `project-lovefinity.png`
- `project-opengrad.png`
- `project-fun-designs.png`
- `project-karghawale.png`

Add your actual resume PDF as `public/resume.pdf`. The original ZIP did not contain these image or resume files, so the site needs them before it can visually match the screenshots. Use the original individual photos and project screenshots rather than full-page screenshot crops. Create `public/images/` if it does not exist.

Before publishing, confirm that the email, social links, location, experience figures, and project descriptions are yours. The contact form opens the visitor's email app; it does not store submissions on a server.

## Deploy to Vercel

Import this project folder into Vercel as a Vite app. The included `vercel.json` sends page routes back to the app so direct links such as `/about` work after deployment. Build command: `npm run build`; output directory: `dist`.
