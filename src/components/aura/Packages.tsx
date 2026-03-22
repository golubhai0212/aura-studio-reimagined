import { FadeIn } from "./FadeIn";

const packages = [
  {
    name: "Essential",
    items: ["Haircut & Blow Dry", "Basic Facial", "Head Massage"],
    featured: false,
  },
  {
    name: "Signature",
    items: ["Haircut & Styling", "Advanced Facial", "Hair Spa Treatment", "Scalp Therapy"],
    featured: true,
  },
  {
    name: "Luxe",
    items: ["Full Hair Colour", "Keratin Treatment", "Premium Facial", "Bridal Trial", "Complimentary Beverages"],
    featured: false,
  },
];

export const Packages = () => (
  <section className="bg-warm-gray px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <FadeIn>
        <p className="label-upper mb-4 text-center text-muted-foreground">Packages</p>
        <h2 className="heading-display text-center text-3xl sm:text-4xl md:text-5xl">
          Curated for You
        </h2>
      </FadeIn>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {packages.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.1}>
            <div
              className={`flex flex-col border bg-card p-8 ${
                p.featured ? "border-foreground" : "border-border"
              }`}
            >
              {p.featured && (
                <p className="label-upper mb-4 text-foreground">Most Popular</p>
              )}
              <h3 className="heading-display text-2xl">{p.name}</h3>
              <ul className="body-light mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="mt-8 block bg-primary py-3 text-center text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-80 active:scale-[0.97] label-upper"
              >
                Get Quote
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
