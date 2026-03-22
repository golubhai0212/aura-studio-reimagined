import { FadeIn } from "./FadeIn";
import { Award, Droplets, Lock, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Award, title: "Certified Stylists", desc: "Trained professionals with international certifications." },
  { icon: Droplets, title: "Premium Imported Products", desc: "Only the finest global brands touch your hair and skin." },
  { icon: Lock, title: "Private Treatment Rooms", desc: "Your personal space for a truly relaxed experience." },
  { icon: ShieldCheck, title: "Hygiene Guaranteed", desc: "Hospital-grade sterilisation on every tool, every time." },
];

export const WhyAura = () => (
  <section className="bg-warm-gray px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <p className="label-upper mb-4 text-center text-muted-foreground">Why Choose Us</p>
        <h2 className="heading-display text-center text-3xl sm:text-4xl md:text-5xl">
          The AURA Difference
        </h2>
      </FadeIn>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <FadeIn key={r.title} delay={i * 0.1}>
            <div className="text-center">
              <r.icon className="mx-auto h-6 w-6 text-foreground" strokeWidth={1} />
              <h3 className="heading-display mt-5 text-lg">{r.title}</h3>
              <p className="body-light mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
