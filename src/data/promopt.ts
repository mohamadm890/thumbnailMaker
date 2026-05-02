import { emotionMap } from "./emotionMap";
import { focusMap } from "./focusMap";

export type Emotion = keyof typeof emotionMap;
export type MainFocus = keyof typeof focusMap;

type BuildPromptInput = {
    idea: string;
    emotion: Emotion;
    main_focus: MainFocus;
  };


export function buildPrompt({ idea, emotion, main_focus }: BuildPromptInput) {
  const e = emotionMap[emotion];
  const f = focusMap[main_focus];

  if (!e || !f) {
    throw new Error("Invalid emotion or main_focus");
  }

  return `
Create a viral YouTube thumbnail.

Idea: ${idea}

Emotion: ${emotion}
Main Focus: ${main_focus}

Visual Style:
- Lighting: ${e.lighting}
- Expression: ${e.expression}
- Energy: ${e.energy}

Layout:
- Composition: ${f.composition}
- Subject: ${f.subject}

Background:
Clean, cinematic, high contrast, based on idea

Backdrop:
Match emotional tone of ${emotion}

Style:
Ultra realistic, cinematic lighting, high CTR YouTube thumbnail, 16:9
`;
}