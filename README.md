# 🧘 MoodMirror

<div align="center">
  
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/GenKit%20AI-FF6B35?style=for-the-badge&logo=google&logoColor=white" alt="GenKit AI">
  

  <h3>Find peace through reflection. ✨</h3>
  <p><em>Spiritual wisdom powered by AI and sacred verses</em></p>
  
  <a href="#features">Features</a> • <a href="#installation">Installation</a> • <a href="#usage">Usage</a> • <a href="#contributing">Contributing</a>

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [AI Integration](#ai-integration)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

**MoodMirror** is a serene spiritual reflection app that combines sacred Qur'anic verses with AI-powered insights to help users navigate emotions and find inner peace. Built with modern web technologies and designed for calm, introspective moments.

### Perfect For:
- 🧘 Meditation and mindfulness practitioners
- 📖 Qur'anic study and reflection
- 💭 Emotional self-awareness
- 🌙 Daily spiritual practice

---

## ✨ Features

### 🎨 **Emotion & Theming**
- Visual emotion selection grid with smooth theme transitions
- Mood-specific colors and dynamic animations
- Responsive design for all devices

### 📖 **Qur'anic Integration**
- Dynamic Qur'anic verses matched to emotions
- English translations provided
- Verse references and citations included

### 🤖 **AI-Powered Reflections**
- GenKit AI with Google Gemini integration
- Single-line spiritual reflections
- Context-aware insights based on emotion and verse

### 🎭 **User Experience**
- Calming, minimalist interface
- Radix UI accessible components
- Smooth page transitions
- Real-time reflection generation

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15.5.9 + Turbopack |
| **UI** | React 19.2.1 + Tailwind CSS 3.4.1 |
| **AI** | GenKit + Google Gemini |
| **Language** | TypeScript |
| **Components** | Radix UI, Zod validation |

---

## 📦 Installation

### Prerequisites
- Node.js 18.17+ ([Download](https://nodejs.org/))
- npm 8.0+
- Google Gemini API Key (free at [Google AI Studio](https://aistudio.google.com/app/apikey))

### Step 1: Clone Repository
```bash
git clone https://github.com/TechySakib/MoodMirror.git
cd MoodMirror
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Environment Variables

Create `.env.local` in project root:

```env
NEXT_PUBLIC_GOOGLE_GENAI_API_KEY=your_api_key_here
```

Get your API key:
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy and paste into `.env.local`

### Step 4: Start Development Server
```bash
npm run dev
```

Open `http://localhost:9002` in your browser.

---

## ⚙️ Configuration

### Environment Variables

Edit `.env.local`:

```env
# Required
NEXT_PUBLIC_GOOGLE_GENAI_API_KEY=your_key

# Optional
PORT=9002
LOG_LEVEL=debug
```

### Customize Emotions & Verses

Edit `src/lib/emotions.ts`:

```typescript
export const emotions = [
  {
    name: 'Sadness',
    color: 'bg-blue-500',
    verse: 'Verily, with hardship comes ease...',
    translation: 'English translation here',
    reference: 'Qur\'an 94:5'
  },
  // Add more emotions
];
```

### GenKit Configuration

Edit `src/ai/genkit.ts`:

```typescript
const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY,
    }),
  ],
  model: 'google-gemini-pro',
});
```

---

## 📖 Usage

### First-Time Experience

1. **Select Emotion** → Click emotion from grid
2. **View Verse** → See Qur'anic verse displayed
3. **Read Translation** → English translation below verse
4. **Get Reflection** → AI-generated spiritual insight
5. **Explore** → Select another emotion for new perspective

### Available Emotions
- 😢 Sadness
- 😰 Anxiety
- 😌 Calm
- 🙏 Hopeful
- 😔 Reflective
- 😞 Grieving
- 😤 Frustrated
- 😊 Content

### Tips for Best Experience
- Use in quiet, calm environment
- Spend 3-5 minutes per emotion
- Journal your insights afterward
- Revisit daily for different perspectives

---

## 🏗️ Project Structure

```
MoodMirror/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Main app page
│   │   ├── layout.tsx                  # Root layout
│   │   └── globals.css                 # Global styles
│   ├── ai/
│   │   ├── genkit.ts                   # GenKit config
│   │   └── flows/
│   │       └── generate-spiritual-reflection.ts
│   ├── components/
│   │   ├── mood-mirror/
│   │   │   ├── EmotionGrid.tsx
│   │   │   └── HeroCard.tsx
│   │   └── ui/                         # Radix UI components
│   ├── lib/
│   │   ├── emotions.ts                 # Emotion & verse data
│   │   ├── types.ts                    # TypeScript types
│   │   └── utils.ts                    # Utilities
│   └── styles/
│       └── tailwind.css
├── public/
│   ├── images/
│   └── fonts/
├── patches/
│   └── buffer-equal-constant-time+1.0.1.patch
├── .env.local                          # Environment variables (create)
├── .env.example                        # Template
├── next.config.js                      # Next.js config
├── tailwind.config.js                  # Tailwind config
├── tsconfig.json                       # TypeScript config
├── package.json
└── README.md
```

---

## 🤖 AI Integration

### How It Works

```
User Selects Emotion
        ↓
Lookup Qur'anic Verse
        ↓
Send to GenKit Flow
        ↓
Google Gemini Model
        ↓
Generate Reflection
        ↓
Display to User
```

### GenKit Flow

In `src/ai/flows/generate-spiritual-reflection.ts`:

```typescript
export const generateSpiritualReflection = ai.defineFlow(
  {
    name: 'generateSpiritualReflection',
    inputSchema: z.object({
      emotion: z.string(),
      verse: z.string(),
      translation: z.string(),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    const response = await ai.generate({
      model: 'google-gemini-pro',
      prompt: `Generate spiritual reflection for emotion: ${input.emotion}...`,
    });
    return response.text();
  }
);
```

### Testing AI

```bash
# Start GenKit dev server
npm run genkit:dev

# Opens UI at http://localhost:4000
# Test flows and model responses
```

---

## 🚀 Available Scripts

```bash
# Development
npm run dev                    # Start dev server on port 9002
npm run dev -- -p 3000       # Custom port

# Production
npm run build                 # Build for production
npm start                     # Start production server

# Quality & Tools
npm run lint                  # Run ESLint
npm run typecheck            # Check TypeScript types
npm run genkit:dev           # GenKit dev server
npm run genkit:watch         # GenKit with watch mode
```

---

## 🐛 Troubleshooting

### Node 26 Compatibility
**Error:** "SlowBuffer is not available"

**Solution:**
```bash
npm install
npm run dev
```
The fix is already included via patch-package.

### API Key Issues
**Error:** "API key not found"

**Solution:**
1. Verify `.env.local` exists with your API key
2. Check key is correctly copied from [Google AI Studio](https://aistudio.google.com/app/apikey)
3. Restart server: `npm run dev`

### Port Already in Use
**Error:** "Port 9002 already in use"

**Solution:**
```bash
# Linux/macOS - kill process on port 9002
lsof -ti:9002 | xargs kill -9

# Or use different port
npm run dev -- -p 3000
```

### Dependencies Failed
**Error:** "npm ERR!" during install

**Solution:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Verify Node version
node --version  # Should be 18.17+
```

### AI Reflection Not Generating
**Error:** "Reflection generation failed"

**Solution:**
1. Check internet connection
2. Verify API key is valid
3. Check API usage in [Google Cloud Console](https://console.cloud.google.com/)
4. Check browser console (F12) for errors

### Styling Issues
**Error:** "Page appears unstyled"

**Solution:**
```bash
rm -rf .next
npm run build
npm run dev
```

---

## 🤝 Contributing

### How to Contribute

```bash
# Fork and clone
git clone https://github.com/TechySakib/MoodMirror.git
cd MoodMirror

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "[FEATURE] Add new emotions

- Added 3 new emotions
- Updated emotions.ts
- Added Qur'anic verses"

# Push and create PR
git push origin feature/your-feature-name
```

### Contribution Areas

- 🎨 **UI/Design:** Emotions, colors, animations
- 📖 **Content:** Verses, translations, reflections
- 🤖 **AI:** Improve prompts, add models
- 🐛 **Bugs:** Fix issues and edge cases
- 📚 **Docs:** Improve guides and examples

### Code Guidelines

```typescript
// Use clear variable names
const emotionName = "Sadness";  // ✅ Good

// Add comments for complex logic
/**
 * Generate spiritual reflection based on emotion
 * @param emotion - User's current emotion
 * @returns Single-line reflection
 */
function generateReflection(emotion: string): string {
  // Implementation
}

// Use TypeScript for type safety
interface Emotion {
  name: string;
  verse: string;
  translation: string;
}
```
---

## 📞 Support

**Questions or bugs?**

- 🐛 [GitHub Issues](https://github.com/TechySakib/MoodMirror/issues)
- 📧 Email: nazmus.sakib1@northsouth.edu
- 💬 [GitHub Discussions](https://github.com/TechySakib/MoodMirror/discussions)

---

## 🎓 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GenKit Docs](https://firebase.google.com/docs/genkit)
- [Google Gemini API](https://ai.google.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🙏 Acknowledgments

- Next.js & React teams
- Tailwind CSS community
- GenKit AI framework
- Google Gemini model
- Radix UI components

---

<div align="center">

### Made with 🕯️ for spiritual seekers

**Find Your Inner Peace. 🧘‍♀️**

[Back to Top ⬆️](#-moodmirror)

*Last Updated: May 2026*

</div>
