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
    <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-24">
      <h2 className="text-5xl font-bold mb-8">Send me a message</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-3 text-lg h-40 resize-y overflow-y-auto focus:outline-none focus:ring-2 focus:ring-brand-primary"
          required
        />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>

      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </div>
  );
}
