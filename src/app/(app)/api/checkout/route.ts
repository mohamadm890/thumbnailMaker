import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
	accessToken: process.env.POLAR_ACCESS_TOKEN_LIVE,
	successUrl: "https://3000-firebase-ai-thumbnail-1776365387174.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev/generate",
    returnUrl: "https://3000-firebase-ai-thumbnail-1776365387174.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev", // Optional Return URL, which renders a Back-button in the Checkout
	// Use sandbox if you're testing Polar - omit the parameter or pass 'production' otherwise
	theme: "dark" // Enforces the theme - System-preferred theme will be set if left omitted
});