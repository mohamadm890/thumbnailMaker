"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `New message from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    window.location.href = `mailto:support.vizthumb@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors flex items-center justify-center px-4">

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Contact VizThumb
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400">
            Got a question, feedback, or idea? We’d love to hear from you.
            We usually reply within 24–48 hours.
          </p>

          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Email</p>
            <p className="text-zinc-900 dark:text-white font-medium">
              support.vizthumb@gmail.com
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Response time</p>
            <p className="text-zinc-900 dark:text-white font-medium">
              24–48 hours
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900"
        >
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Send us a message
          </h2>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            type="email"
            className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
            className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </main>
  );
}