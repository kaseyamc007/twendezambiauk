import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const key = (import.meta as any).env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.warn("VITE_STRIPE_PUBLISHABLE_KEY is missing. Stripe features will be limited.");
      return Promise.resolve(null);
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export async function createCheckoutSession(priceId: string, customerEmail?: string) {
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId, customerEmail }),
    });

    const session = await response.json();
    
    if (session.error) {
      throw new Error(session.error);
    }

    return session;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}
