import { FadeIn } from "./FadeIn";
import { useState } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "Haircut & Styling",
  "Hair Colour",
  "Keratin Treatment",
  "Facial & Cleanup",
  "Head Massage",
  "Bridal Package",
];

export const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment request sent! We'll confirm shortly.");
    setForm({ name: "", phone: "", service: "", date: "", time: "" });
  };

  const inputClass =
    "w-full border border-border bg-card px-4 py-3 text-sm body-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";

  return (
    <section id="booking" className="bg-warm-gray px-6 py-24 md:py-32">
      <div className="mx-auto max-w-xl">
        <FadeIn>
          <p className="label-upper mb-4 text-center text-muted-foreground">Booking</p>
          <h2 className="heading-display text-center text-3xl sm:text-4xl md:text-5xl">
            Reserve Your Slot
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={inputClass}
            >
              <option value="" disabled>Select Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass}
              />
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary py-3.5 text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-80 active:scale-[0.97] label-upper"
            >
              Book Appointment
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};
