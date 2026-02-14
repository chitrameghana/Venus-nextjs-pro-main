"use client";

import React, { useState } from "react";
import { pricingPlans } from "../../api/data";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-20 bg-section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center font-bold mt-4 mb-2 text-midnight_text">
          Choose Your Pricing Plan
        </h2>
        <p className="text-center text-grey mb-8">
          All Plans FREE for the first 30 Days
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span
            className={
              billing === "monthly"
                ? "font-semibold text-midnight_text"
                : "text-grey"
            }
          >
            Monthly
          </span>

          <button
            className={`relative w-14 h-8 flex items-center bg-border rounded-full px-1 transition-colors duration-300 focus:outline-none ${
              billing === "yearly" ? "bg-primary/60" : ""
            }`}
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${
                billing === "yearly" ? "translate-x-6" : ""
              }`}
            />
          </button>

          <span
            className={
              billing === "yearly"
                ? "font-semibold text-midnight_text"
                : "text-grey"
            }
          >
            Yearly
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-white shadow-2xl scale-105 z-10"
                  : "border-border bg-white"
              } flex flex-col items-center`}
              style={{ minHeight: 420 }}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2 text-center text-midnight_text">
                {plan.title}
              </h3>

              <div className="text-4xl font-extrabold mb-1 text-center text-midnight_text">
                ₹{plan.price}
                <span className="text-lg font-medium text-grey">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 mb-8 space-y-3 text-grey text-base w-full max-w-xs mx-auto">
                {plan.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-primary text-lg">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-SkyBlueMist text-primary hover:bg-primary/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
