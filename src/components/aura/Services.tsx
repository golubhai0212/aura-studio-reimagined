import { FadeIn } from "./FadeIn";

const services = [
  { name: "Haircut & Styling", desc: "Precision cuts tailored to your face and lifestyle." },
  { name: "Hair Colour", desc: "From subtle balayage to bold transformations." },
  { name: "Keratin Treatment", desc: "Smooth, frizz-free hair that lasts for weeks." },
  { name: "Facial & Cleanup", desc: "Deep cleansing rituals for radiant, healthy skin." },
  { name: "Head Massage", desc: "Restorative scalp therapy for deep relaxation." },
  { name: "Bridal Package", desc: "Complete bridal beauty, from trials to the big day." },
];

export const Services = () => (
  <section className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <p className="label-upper mb-4 text-center text-muted-foreground">Our Services</p>
        <h2 className="heading-display text-center text-3xl sm:text-4xl md:text-5xl">
          What We Offer
        </h2>
      </FadeIn>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.08}>
            <div className="group border border-border bg-card p-8 transition-colors hover:bg-warm-gray">
              <h3 className="heading-display text-xl sm:text-2xl">{s.name}</h3>
              <p className="body-light mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a href="#booking" className="label-upper mt-6 inline-block text-foreground underline-offset-4 hover:underline">
                Learn More
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
