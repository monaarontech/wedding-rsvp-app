# 💒 Raymond & Dianne Wedding Invitation & RSVP App

A modern, responsive, elegant wedding invitation web application built with **React**, **Vite**, **Tailwind CSS**, and zero-cost **Google Sheets** integration.

---

## 🚀 Quick Start (Local Testing)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

---

## 📊 Connecting to Google Sheets (2 Minutes)

1. Open a new [Google Sheet](https://sheets.new).
2. Set up row 1 headers:
   `Timestamp` | `Name` | `Attendance` | `Guest Count` | `Dietary` | `Message`
3. Click **Extensions** > **Apps Script**.
4. Replace the contents of `Code.gs` with the script inside [`google-apps-script.js`](./google-apps-script.js).
5. Click **Deploy** > **New deployment** > Select **Web app**:
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
6. Click **Deploy**, authorize, and copy your **Web App URL** (e.g. `https://script.google.com/macros/s/.../exec`).
7. Create a `.env` file in this project root:
   ```env
   VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

---

## 🌐 Deploying to Vercel (Free Hosting)

### Method A: Via GitHub (Recommended)
1. Push this project folder to your GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Under **Environment Variables**, add:
   - Key: `VITE_GOOGLE_SHEET_URL`
   - Value: Your Google Apps Script Web App URL
5. Click **Deploy**!

### Method B: Via Vercel CLI
```bash
npx vercel
```
