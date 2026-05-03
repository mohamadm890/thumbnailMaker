export const PLANS_FULL = {
  starter: {
    id: "starter",
    name: "Starter",
    price: "5.94",
    credits: 40,
    benefits: ["40 thumbnails", "Standard speed"],
    badge: null,
  },

  creator: {
    id: "creator",
    name: "Creator",
    price: "12.94",
    credits: 100,
    benefits: ["100 thumbnails", "Faster generation"],
    badge: "Most Popular",
  },

  pro: {
    id: "pro",
    name: "Pro",
    price: "24.94",
    credits: 200,
    benefits: [
      "200 thumbnails",
      "Fastest generation",
      "Priority support",
    ],
    badge: "Pro",
  },
} as const; 
