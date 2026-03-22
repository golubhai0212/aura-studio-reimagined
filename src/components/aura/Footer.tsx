import { FadeIn } from "./FadeIn";

export const Footer = () => (
  <footer className="border-t border-border px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="heading-display text-2xl">AURA Studio</h3>
            <p className="body-light mt-3 text-sm text-muted-foreground leading-relaxed">
              Beauty, simplified. New Delhi's most refined salon experience.
            </p>
          </div>

          <div>
            <p className="label-upper mb-4 text-foreground">Contact</p>
            <div className="body-light space-y-2 text-sm text-muted-foreground">
              <p>Greater Kailash II, South Delhi</p>
              <p>New Delhi — 110048</p>
              <p className="mt-3">+91 98765 43210</p>
              <p>hello@aurastudio.in</p>
            </div>
          </div>

          <div>
            <p className="label-upper mb-4 text-foreground">Connect</p>
            <div className="body-light space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="https://instagram.com/aurastudiodelhi" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline hover:text-foreground transition-colors">
                  @aurastudiodelhi
                </a>
              </p>
              <p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline hover:text-foreground transition-colors">
                  WhatsApp Us →
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-6 text-center">
          <p className="body-light text-xs text-muted-foreground">
            © {new Date().getFullYear()} AURA Studio. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </div>
  </footer>
);
