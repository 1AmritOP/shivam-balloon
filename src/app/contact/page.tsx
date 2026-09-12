"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, email, event, message } = formData;

    if (!name || !phone || !email || !event || !message) {
      setError("Please fill all the fields.");
      return;
    }

    const whatsappNumber = "919599694756";

    const whatsappMessage = `
Hello Shivam Balloon Decoration,

I would like to make an inquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}
Event Type: ${event}

Message:
${message}

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-white">

      {/* Page Header */}
      <section className="bg-gray-950 px-5 py-16 text-center text-white sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
          Contact Us
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Let&apos;s Plan Your
          <span className="block text-orange-500">
            Special Celebration
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Get in touch with Shivam Balloon Decoration for beautiful
          balloon decorations for your special events.
        </p>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Contact Information */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                We&apos;d Love To
                <span className="block text-orange-500">
                  Hear From You
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Whether you are planning a birthday, anniversary,
                wedding, baby shower or any other special event,
                feel free to contact us and discuss your decoration
                requirements.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">

                {/* Phone */}
                <a
                  href="tel:+919599694756"
                  className="flex items-center gap-4 rounded-xl border border-gray-100 p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      +91 00000 00000
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@shivamballoondecoration.com"
                  className="flex items-center gap-4 rounded-xl border border-gray-100 p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Mail size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Email Us
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      info@shivamballoondecoration.com
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Your Shop Address,
                      <br />
                      Your City, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Clock size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Working Hours
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Monday - Sunday
                      <br />
                      9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                <MessageCircle size={19} />
                CHAT WITH US
              </a>
            </div>

            {/* Inquiry Form */}
            <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Send An Inquiry
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in the details below and tell us about your
                upcoming event.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white text-black px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Event */}
                <div>
                  <label
                    htmlFor="event"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Event Type
                  </label>

                  <select
                    id="event"
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">
                      Select event type
                    </option>

                    <option value="Birthday Decoration">
                      Birthday Decoration
                    </option>

                    <option value="Anniversary Decoration">
                      Anniversary Decoration
                    </option>

                    <option value="Baby Shower Decoration">
                      Baby Shower Decoration
                    </option>

                    <option value="Wedding Decoration">
                      Wedding Decoration
                    </option>

                    <option value="Theme Decoration">
                      Theme Decoration
                    </option>

                    <option value="Party Decoration">
                      Party Decoration
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your event..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm font-medium text-red-500">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Find Us
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                Our Location
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.963861365437!2d77.38333877423808!3d28.570847886881435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefd3d8618695%3A0x1bc6ed49a8483374!2sUttam%20Balloon%20Decoration!5e0!3m2!1sen!2sin!4v1789117703362!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}