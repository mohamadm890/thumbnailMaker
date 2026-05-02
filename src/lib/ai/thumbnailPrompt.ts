type ThumbnailForm = {
  action: string;
  emotions: string[];
  focus: string;
};

export function buildThumbnailPrompt(form: ThumbnailForm): string {
  const emotionText = form.emotions?.length
    ? form.emotions.join(", ")
    : "neutral";

  const action = form.action?.trim() || "an engaging scene";
  const focus = form.focus?.trim() || "subject";

  return `
A high-impact YouTube thumbnail designed for maximum CTR.

MAIN SCENE: ${action}
SUBJECT EXPRESSION: ${emotionText}
FOCAL POINT: ${focus}

VISUAL STYLE:
- Professional cinematic lighting, high contrast "rembrandt" shadows.
- Shallow depth of field (blurred background) to make the ${focus} pop.
- Vibrant, saturated colors with a "hero" composition.
- Extremely detailed textures on the ${focus}.

COMPOSITION: Centered wide shot, 16:9 aspect ratio, high resolution 1280x720.
  `;
}