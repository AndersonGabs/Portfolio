import { useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [ref, isInView] = useInView(0.1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log
    console.log('Form submitted:', formData);
    alert('Message sent! (demo)');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 ref={ref} className={`section-heading ${isInView ? 'animate-fade-in-up' : ''}`} style={{ opacity: isInView ? 1 : 0 }}>
          Contact <span className="accent">Me</span>
        </h2>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__fields">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="contact__input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="contact__input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="contact__input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact__input"
              required
            />
          </div>
          <div className="contact__message-area">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              className="contact__textarea"
              required
            />
            <button type="submit" className="glow-btn contact__submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
