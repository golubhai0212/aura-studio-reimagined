import { FadeIn } from "./FadeIn";

const team = [
  { name: "Priya Mehta", role: "Hair Colorist" },
  { name: "Arjun Kapoor", role: "Skin Expert" },
  { name: "Simran Kaur", role: "Bridal Specialist" },
];

export const Team = () => (
  <section className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-4xl">
      <FadeIn>
        <p className="label-upper mb-4 text-center text-muted-foreground">Our Team</p>
        <h2 className="heading-display text-center text-3xl sm:text-4xl md:text-5xl">
          Meet the Artists
        </h2>
      </FadeIn>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {team.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div className="border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center bg-foreground text-primary-foreground heading-display text-xl">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="heading-display mt-6 text-xl">{t.name}</h3>
              <p className="label-upper mt-2 text-muted-foreground">{t.role}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
