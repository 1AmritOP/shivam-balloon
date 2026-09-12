"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    time: "",
    location: "",
    requirements: "",
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

    const {
      name,
      phone,
      email,
      eventType,
      date,
      time,
      location,
      requirements,
    } = formData;

    if (
      !name ||
      !phone ||
      !email ||
      !eventType ||
      !date ||
      !time ||
      !location ||
      !requirements
    ) {
      setError("Please fill all the fields.");
      return;
    }

    // Replace with actual Shivam Balloon Decoration WhatsApp number
    const whatsappNumber = "919599694756";

    const whatsappMessage = `
Hello Shivam Balloon Decoration,

I would like to make an inquiry for my upcoming event.

Name: ${name}
Phone: ${phone}
Email: ${email}

Event Type: ${eventType}
Event Date: ${date}
Event Time: ${time}
Event Location: ${location}

Decoration Requirements:
${requirements}

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
          Inquiry
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Book Your
          <span className="block text-orange-500">
            Special Event
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Tell us about your event and decoration requirements.
          We&apos;ll help you create a beautiful setup for your special
          occasion.
        </p>
      </section>

      {/* Inquiry Section */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            {/* Left Content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Get Started
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Tell Us About
                <span className="block text-orange-500">
                  Your Event
                </span>
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Share a few details about your upcoming event. This
                helps us understand your requirements and prepare the
                right decoration for you.
              </p>

              {/* Info */}
              <div className="mt-8 space-y-5">

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Event Date
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Let us know when your event is scheduled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Clock size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Event Time
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Tell us your preferred decoration setup time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Event Location
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Share the location where decoration is required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Phone size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Quick Contact
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      +91 00000 00000
                    </p>
                  </div>
                </div>

              </div>

              {/* Note */}
              <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">
                <p className="text-sm leading-6 text-gray-600">
                  For urgent bookings, please call us directly so we
                  can check availability quickly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Event Inquiry Form
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill in your details and event requirements below.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

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
                      className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

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
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

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

                {/* Event Type */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Event Type
                  </label>

                  <select
                    id="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
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

                    <option value="Engagement Decoration">
                      Engagement Decoration
                    </option>

                    <option value="Theme Decoration">
                      Theme Decoration
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Date + Time */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Event Date
                    </label>

                    <input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Event Time
                    </label>

                    <input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Event Location
                  </label>

                  <input
                    id="location"
                    type="text"
                    placeholder="Enter event location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full rounded-lg border text-black border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Requirements */}
                <div>
                  <label
                    htmlFor="requirements"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Decoration Requirements
                  </label>

                  <textarea
                    id="requirements"
                    rows={5}
                    placeholder="Tell us about your decoration requirements..."
                    value={formData.requirements}
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

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  SEND INQUIRY
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}