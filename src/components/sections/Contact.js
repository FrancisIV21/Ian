'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center px-6 md:px-24 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
          Send me a message!
        </h2>
        <p className="text-lg text-gray-700">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col gap-8"
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="border-b border-gray-400 px-2 py-2 text-lg focus:outline-none focus:border-brand-primary bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="border-b border-gray-400 px-2 py-2 text-lg focus:outline-none focus:border-brand-primary bg-transparent"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            className="border-b border-gray-400 px-2 py-2 text-lg h-32 resize-y overflow-y-auto focus:outline-none focus:border-brand-primary bg-transparent"
            required
          />
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="primary"
            className="w-56 py-4 flex justify-center shadow-lg"
          >
            <span className="w-full text-center">Shoot →</span>
          </Button>
        </div>
      </form>

      {/* Status */}
      {status && (
        <p className="mt-6 text-gray-600 text-center font-medium">{status}</p>
      )}
    </div>
  );
}
