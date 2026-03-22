import { FadeIn } from "./FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "AURA transformed my hair completely. The attention to detail is unmatched in Delhi.", name: "Ananya Sharma" },
  { quote: "Finally, a salon that understands minimalism. No upselling, just exceptional service.", name: "Rhea Malhotra" },
  { quote: "My bridal package experience was flawless. Every session felt personal and luxurious.", name: "Kavya Joshi" },
  { quote: "The keratin treatment lasted three months. Worth every minute spent at AURA.", name: "Neha Gupta" },
];

export const Testimonials = () => (
  <section className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <p className="label-upper mb-4 text-center text-muted-foreground">Testimonials</p>
        <h2 className="heading-display text-center text-3xl sm:text-4xl md:text-5xl">
          What Clients Say
        </h2>
      </FadeIn>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div className="border border-border bg-card p-8">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="body-light mt-5 text-sm leading-relaxed text-foreground italic">
                "{t.quote}"
              </p>
              <p className="label-upper mt-5 text-muted-foreground">{t.name}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
