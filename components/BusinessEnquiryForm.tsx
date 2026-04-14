"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Loader2, Send } from 'lucide-react';

type FormType = 'Dealership' | 'Fleet' | 'Insurance' | 'Property';

interface BusinessEnquiryFormProps {
  type: FormType;
  title?: string;
  subtitle?: string;
}

// Unique form identifiers — one per landing page / form surface
const FORM_IDS: Record<FormType, string> = {
  Dealership: 'form-dealership',
  Fleet: 'form-fleet',
  Insurance: 'form-insurance',
  Property: 'form-property',
};

export function BusinessEnquiryForm({ type, title, subtitle }: BusinessEnquiryFormProps) {
  const formId = FORM_IDS[type];
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    scale: '',
    message: '',
    website: '' // honeypot — must stay empty; bots will fill it
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const formLoadedAt = useRef<number>(0);

  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const elapsed = Date.now() - formLoadedAt.current;

      const response = await fetch('/api/business-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId, type, elapsed, ...formState }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit');
      }

      setIsSuccess(true);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="bg-zinc-50 rounded-3xl p-12 text-center border border-zinc-200 shadow-sm">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-light mb-4">Enquiry Received</h3>
        <p className="text-zinc-600 max-w-lg mx-auto mb-8">
          Thanks for your interest in our {type} solutions. A member of our partnerships team will be in touch within 24 hours to discuss your specific requirements.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-[var(--brand-primary)] font-medium hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100" id="enquire" data-form-id={formId}>
      <div className="mb-10">
        <h3 className="text-3xl font-light mb-3">{title || `Partner with EV360 for ${type}s`}</h3>
        <p className="text-zinc-500">{subtitle || "Fill out the form below and our dedicated business team will contact you shortly."}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="formId" value={formId} />

        {/* Honeypot — hidden from humans, bots fill it in and get rejected */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label htmlFor="website">Website (leave blank)</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formState.website}
            onChange={handleChange}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-all"
              placeholder="John Smith"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Business Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-all"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-zinc-700">Company / Organization</label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formState.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-all"
              placeholder="Company Name Pty Ltd"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-all"
              placeholder="0400 000 000"
            />
          </div>
        </div>

        {/* Dynamic Fields based on Type */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Job Title</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formState.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-all"
              placeholder="Manager"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="scale" className="text-sm font-medium text-zinc-700">
              {type === 'Dealership' && 'Monthly EV Sales Volume'}
              {type === 'Fleet' && 'Fleet Size'}
              {type === 'Insurance' && 'Approx. Policies / Claims p.a.'}
              {type === 'Property' && 'Number of Parking Spaces'}
            </label>
            <select
              id="scale"
              name="scale"
              value={formState.scale}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-all"
            >
              <option value="">Select range...</option>
              <option value="small">1 - 10</option>
              <option value="medium">11 - 50</option>
              <option value="large">51 - 100</option>
              <option value="enterprise">100+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-700">How can we help?</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-all resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-full bg-[var(--brand-primary)] text-white font-medium text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-[#4B60FF]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Submit Enquiry <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>

        <p className="text-xs text-zinc-400 text-center">
          By submitting this form, you agree to our privacy policy. We protect your data.
        </p>
      </form>
    </div>
  );
}
