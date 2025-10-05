'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Grid Integration Study',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'Grid Integration Study',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {submitStatus === 'success' && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
          <div className="flex items-center gap-2 text-green-800 dark:text-green-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Message sent successfully!</span>
          </div>
          <p className="text-green-700 dark:text-green-300 text-sm mt-1">
            We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
          <div className="flex items-center gap-2 text-red-800 dark:text-red-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Failed to send message</span>
          </div>
          <p className="text-red-700 dark:text-red-300 text-sm mt-1">
            Please try again or contact us directly at cliff@cliffandtonyenergy.com
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-cte-ink dark:text-white mb-2">
              Full Name *
            </label>
            <input
              className="w-full px-4 py-3 bg-cte-mist/30 dark:bg-white/5 border border-cte-mist dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cte-primary focus:border-transparent transition-all placeholder-cte-ash/50 dark:placeholder-white/30"
              placeholder="John Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-cte-ink dark:text-white mb-2">
              Email Address *
            </label>
            <input
              className="w-full px-4 py-3 bg-cte-mist/30 dark:bg-white/5 border border-cte-mist dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cte-primary focus:border-transparent transition-all placeholder-cte-ash/50 dark:placeholder-white/30"
              placeholder="john@company.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-cte-ink dark:text-white mb-2">
              Company
            </label>
            <input
              className="w-full px-4 py-3 bg-cte-mist/30 dark:bg-white/5 border border-cte-mist dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cte-primary focus:border-transparent transition-all placeholder-cte-ash/50 dark:placeholder-white/30"
              placeholder="Your Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-cte-ink dark:text-white mb-2">
              Project Type
            </label>
            <select
              className="w-full px-4 py-3 bg-cte-mist/30 dark:bg-white/5 border border-cte-mist dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cte-primary focus:border-transparent transition-all"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option>Grid Integration Study</option>
              <option>Hybrid energy solutions</option>
              <option>Power System Protection</option>
              <option>Technical Advisory</option>
              <option>Capacity Assessment</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-cte-ink dark:text-white mb-2">
            Project Details *
          </label>
          <textarea
            className="w-full px-4 py-3 bg-cte-mist/30 dark:bg-white/5 border border-cte-mist dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cte-primary focus:border-transparent transition-all resize-none placeholder-cte-ash/50 dark:placeholder-white/30"
            placeholder="Tell us about your project requirements, timeline, and any specific challenges..."
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-gradient-to-r from-cte-primary to-cte-secondary hover:from-cte-primary/90 hover:to-cte-secondary/90 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-xl hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
