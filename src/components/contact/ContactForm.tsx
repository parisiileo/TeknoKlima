"use client";

import { useState } from "react";
import type { Content } from "@/content";

/**
 * Form contatti: front-end con validazione nativa; l'invio compone una
 * email precompilata via mailto (nessun backend per ora — sostituibile
 * con una route API + provider email in seguito).
 */
export function ContactForm({ t }: { t: Content }) {
  const [sent, setSent] = useState(false);
  const f = t.contact.form;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`${f.subjectPrefix} — ${data.get("name")}`);
    const body = encodeURIComponent(
      `${f.name}: ${data.get("name")}\n${f.email}: ${data.get("email")}\n${f.phone}: ${data.get("phone")}\n\n${data.get("message")}`
    );
    window.location.href = `${t.site.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-frost-deep bg-white/60 px-5 py-3.5 text-deep placeholder:text-steel/60 transition-colors duration-300 focus:border-cyan-deep focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" aria-label={f.aria}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="tech-label mb-2 block text-steel">
            {f.name} *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className="tech-label mb-2 block text-steel">
            {f.email} *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="tech-label mb-2 block text-steel">
          {f.phone}
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
      </div>
      <div>
        <label htmlFor="message" className="tech-label mb-2 block text-steel">
          {f.message} *
        </label>
        <textarea id="message" name="message" required rows={5} className={inputCls} />
      </div>

      <p className="text-xs text-steel/80">{f.privacy}</p>

      <button
        type="submit"
        className="group mt-1 inline-flex w-fit items-center gap-3 rounded-full bg-ember px-7 py-3.5 font-medium text-white transition-colors duration-300 hover:bg-ember-deep"
      >
        {f.submit}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

      <p role="status" aria-live="polite" className="text-sm font-medium text-cyan-deep">
        {sent ? f.success : ""}
      </p>
    </form>
  );
}
