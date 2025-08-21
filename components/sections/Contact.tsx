import React from "react";
import { Section } from "../layout/Section";
import { CTA } from "../ui/CTA";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("xjkodqje"); // <-- your Formspree form ID

  if (state.succeeded) {
    return (
      <Section id="contact" eyebrow="Contact" title="Start a project">
        <p className="text-green-500 text-lg">✅ Thanks! We’ll reply soon.</p>
      </Section>
    );
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Start a project">
      <form
        className="grid gap-4 max-w-2xl"
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-neutral-200">Name</label>
          <input
            id="name"
            name="name"
            required
            className="rounded-xl bg-neutral-900 text-white placeholder-neutral-500 border border-neutral-800 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B]"
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-neutral-200">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl bg-neutral-900 text-white placeholder-neutral-500 border border-neutral-800 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B]"
            placeholder="you@brand.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="service" className="text-neutral-200">Service</label>
          <select
            id="service"
            name="service"
            className="rounded-xl bg-neutral-900 text-white border border-neutral-800 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B]"
            defaultValue="Video Editing"
          >
            <option>Video Editing</option>
            <option>Motion Graphics</option>
            <option>Color Grading</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-neutral-200">Project details</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="rounded-xl bg-neutral-900 text-white placeholder-neutral-500 border border-neutral-800 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B]"
            placeholder="Scope, references, deadlines"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="flex items-center gap-4">
          <CTA
            as="button"
            ariaLabel="Submit contact form"
            // @ts-ignore
            type="submit"
            // @ts-ignore
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Request a quote"}
          </CTA>
          <p className="text-sm text-neutral-500">We reply within 1 business day.</p>
        </div>
      </form>
    </Section>
  );
}
