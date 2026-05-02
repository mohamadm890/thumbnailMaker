
type PlanUI = {
  benefits: string[];
  badge: string | null;
};


const PLAN_UI: Record<string, PlanUI> = {
  "b0fa46b4-bd2a-490c-a929-96c4a16be644": {
    benefits: [
      "40 thumbnails",
      "Standard speed",
    ],
    badge: null,
  },

  "e6f5e91d-7df8-4129-92de-77aab3d19b27": {
    benefits: [
      "100 thumbnails",
      "Faster generation",
      
    ],
    badge: "Most Popular",
  },

  "fb8d610f-0e72-4582-893d-4b3055d90dc6": {
    benefits: [
      "200 thumbnails",
      "Fastest generation",
      "Priority support",
    ],
    badge: "Pro",
  },
};


export async function GET() {
 

  try {
    const res = await fetch(`${process.env.POLAR_LIVE_URL}/products`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.POLAR_ACCESS_TOKEN_LIVE}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.text();
      return Response.json(
        { error: "Failed to fetch products", details: error },
        { status: res.status }
      );
    }

    const data = await res.json();
    console.log("data__", data);


    

    const enriched = {
      ...data,
      items: data.items.map((plan: any) => ({
        ...plan,
        benefits: PLAN_UI[plan.id]?.benefits || [],
        badge: PLAN_UI[plan.id]?.badge || null,
      })),
    };

    return Response.json(enriched);
  } catch (err: any) {
    return Response.json(
      { error: "Server error", message: err.message },
      { status: 500 }
    );
  }
}