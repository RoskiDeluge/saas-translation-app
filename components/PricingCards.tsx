import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away",
    features: [
      "20 Message Chat Limit in Chats",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "pro",
    href: "#",
    priceMonthly: "$4.99",
    description: "Unlock the full potential with Pro!",
    features: [
      "Unlimited messages in chat",
      "Unlimited participants in chat",
      "Multimodal support in chats",
      "Early access to new features",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
        >
          <p>{tier.name}</p>
          <p>{tier.description}</p>
          {redirect ? (
            <Link href="/register">Get Started Today</Link>
          ) : (
            tier.id && <CheckoutButton />
          )}
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default PricingCards;
