# MoodMirror

MoodMirror is a spiritual reflection app built with Next.js, React, Tailwind CSS, and GenKit AI. It helps users reflect on their mood using emotion-driven Qur'anic verses, smooth theme transitions, and AI-generated spiritual reflections.

## Key Features

- Emotion selection grid with mood-specific themes and transitions
- Dynamic Qur'anic verse display and English translation
- AI-powered single-line spiritual reflections using GenKit and Google Gemini
- Modern UI built with Tailwind CSS, Radix UI components, and React
- Responsive layout with animation-friendly page transitions

## Technology Stack

- Next.js 15.5.9 with Turbopack
- React 19.2.1
- Tailwind CSS 3.4.1
- GenKit AI with `@genkit-ai/google-genai`
- Zod for schema validation
- Firebase SDK for future integration
- patch-package for dependency fixes

## Repository Structure

- `src/app/page.tsx` — main app entrypoint with the emotion selector and hero card layout
- `src/ai/genkit.ts` — GenKit configuration and plugin initialization
- `src/ai/flows/generate-spiritual-reflection.ts` — AI flow definition for generating spiritual reflections
- `src/components/mood-mirror/EmotionGrid.tsx` — emotion selector grid component
- `src/components/mood-mirror/HeroCard.tsx` — display card for verse and reflection output
- `src/lib/emotions.ts` — emotion and verse data definitions
- `src/lib/types.ts` — shared TypeScript types
- `src/lib/utils.ts` — shared helper utilities
- `patches/` — patch-package fixes for runtime compatibility

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/TechySakib/MoodMirror.git
cd MoodMirror
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```text
http://localhost:9002
```

## Available Scripts

- `npm run dev` — start the Next.js development server on port `9002`
- `npm run build` — build the production app
- `npm run start` — start the built production app
- `npm run lint` — run Next.js linting
- `npm run typecheck` — run TypeScript type checking
- `npm run genkit:dev` — launch GenKit dev server for AI flow development
- `npm run genkit:watch` — launch GenKit dev server with watch mode

## AI Integration

The app uses GenKit AI with the Google Gemini plugin:

- AI config is defined in `src/ai/genkit.ts`
- The main flow is in `src/ai/flows/generate-spiritual-reflection.ts`
- The app sends emotion, verse, and translation data into the flow and receives a single-line reflection output

## Troubleshooting

### Node 26 Compatibility

A runtime issue was fixed for Node 26 where `SlowBuffer` was no longer available in a dependency used by the Google AI plugin. The fix is persisted with `patch-package` in `patches/buffer-equal-constant-time+1.0.1.patch`.

If the app fails during startup, run:

```bash
npm install
```

and then restart the app.

### Common Fixes

- Ensure `node_modules` is installed
- Verify the app is running on `http://localhost:9002`
- If AI calls fail, confirm environment variables/API keys are configured for Google AI usage

## Contribution

If you want to contribute:

1. Create a branch for your feature or fix
2. Submit a pull request with details of your change
3. Include tests or documentation updates when applicable

## Notes

This repo is designed to be a calm, reflective mood-check experience powered by both curated verse content and AI-guided reflections. The current implementation is focused on presentation, emotion-driven UX, and AI flow integration.
