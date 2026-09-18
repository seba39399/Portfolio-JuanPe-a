"use client";

import { useState } from "react";

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setMessage("");
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda: Mensaje focalizado en servicios/consultoría */}
        <div className="space-y-5 text-left">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-900/50 inline-block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
            Have an AI or Data Engineering project in mind?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-1">
            Whether you need assistance building production-ready machine
            learning models, optimizing distributed ETL pipelines, or
            architecting cloud infrastructure—feel free to drop a message.
          </p>
        </div>

        {/* Columna Derecha: Tarjeta con estética slate/blue */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <span className="text-3xl">✨</span>
              <h3 className="text-lg font-bold text-white">
                Message received!
              </h3>
              <p className="text-xs text-slate-400">
                Thank you for reaching out. I'll evaluate your request and get
                back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 transition underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Campo Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-300 mb-2"
                >
                  Project Details or Inquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project scope, goals, or technical requirements..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                />
                <div className="text-right text-[10px] text-slate-500 mt-1">
                  {message.length} / 500 characters
                </div>
              </div>

              {/* Botón Send Proposal */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition duration-200 cursor-pointer shadow-lg shadow-blue-600/20 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Submit Inquiry 🚀"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
