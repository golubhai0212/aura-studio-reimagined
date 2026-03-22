import { FadeIn } from "./FadeIn";

export const Hero = () => (
  <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <FadeIn delay={0.1}>
      <p className="label-upper mb-6 text-muted-foreground">AURA Studio · New Delhi</p>
    </FadeIn>
    <FadeIn delay={0.3}>
      <h1 className="heading-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
        Beauty. Simplified.
      </h1>
    </FadeIn>
    <FadeIn delay={0.5}>
      <p className="body-light mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
        New Delhi's most refined salon experience
      </p>
    </FadeIn>
    <FadeIn delay={0.7}>
      <a
        href="#booking"
        className="mt-10 inline-block bg-primary px-8 py-3.5 text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-80 active:scale-[0.97] label-upper"
      >
        Book an Appointment
      </a>
    </FadeIn>
  </section>
);
