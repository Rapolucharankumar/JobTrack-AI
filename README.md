# 🏺 JobTrack AI — Digital Clay Edition

> [!IMPORTANT]
> ## 🙌 Credits & Inspiration
> The idea for this project was inspired by **Geethu (Geethika)**, who pointed out a common problem many job seekers face — accidentally applying to the same company multiple times across different platforms because it's difficult to remember where and when an application was submitted.
> 
> Her observation led to the concept of building a **Job Application Tracker** that helps users organize, track, and manage their job applications in one place while preventing duplicate applications.
> 
> 🔗 **Idea Credit:**
> **Geethika** – UI/UX Designer  
> LinkedIn: [Geethika - UI/UX Designer](https://linkedin.com/in/geethika-uiux)
> 
> Special thanks to Geethika for the inspiration behind this project.

**JobTrack AI** is a tactile, visually rich job application tracker built with a **High-Fidelity Claymorphism** design system. It transforms the mundane task of job hunting into a playful, 3D-inspired digital experience.

![Design Preview](https://raw.githubusercontent.com/Rapolucharankumar/JobTrack-AI/main/public/clay-preview.png) *(Note: Add a real preview image to public folder if available)*

## ✨ Features

- **Tactile UI (Clay Engine)**: Every component feels like physical clay, with deep multi-layered shadows, rounded surfaces, and "squishy" interactive feedback.
- **Bento Dashboard**: A modern, organized overview of your applications using a masonry-style grid and "Stat Orbs."
- **Duplicate Prevention**: Automatically detects if you've already applied for a role at the same company, saving you from embarrassing double-applications.
- **Glassmorphism Accents**: Blends soft clay textures with translucent glass effects for a premium, multi-dimensional feel.

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database / Auth**: [Supabase](https://supabase.com/)
- **Typography**: Nunito (Headings) & DM Sans (Body)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Framer-like transitions

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- A Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rapolucharankumar/JobTrack-AI.git
   cd JobTrack-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
