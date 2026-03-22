import { FadeIn } from "./FadeIn";

const stats = [
  { value: "1,200+", label: "Happy Clients" },
  { value: "8", label: "Expert Stylists" },
  { value: "10–8", label: "Daily Hours" },
];

export const About = () => (
  <section className="bg-warm-gray px-6 py-24 md:py-32">
    <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
      <FadeIn direction="left">
        <p className="label-upper mb-4 text-muted-foreground">About Us</p>
        <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl leading-tight">
          At AURA, we believe beauty is effortless.
        </h2>
        <p className="body-light mt-6 max-w-md text-muted-foreground leading-relaxed">
          We strip away the noise and focus on what matters — you.
        </p>
      </FadeIn>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1} direction="right">
            <div className="border border-border bg-card p-6 text-center">
              <p className="heading-display text-2xl sm:text-3xl">{s.value}</p>
              <p className="label-upper mt-2 text-muted-foreground">{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
