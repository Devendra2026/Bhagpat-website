
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Send,
  ShieldAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateContact } from "@/hooks/use-contacts";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactUs() {
  const createContactMutation = useCreateContact();

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitError("");

    try {
      await createContactMutation.mutateAsync(formData);

      setFormData(initialFormData);
      setSubmitted(true);

      window.setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Contact form submit nahi hua";

      setSubmitError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Page Title */}
        <div className="space-y-3 text-center">
          <span className="rounded-full border border-gov-blue-medium/20 bg-gov-blue-medium/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gov-blue-medium">
            Reach Out to Us
          </span>

          <h1 className="font-serif text-3xl font-black tracking-tight text-gov-blue-dark md:text-5xl">
            Get in Touch
          </h1>

          <p className="mx-auto max-w-2xl text-sm font-medium text-slate-500 md:text-base">
            Your feedback and queries help us serve you better.
            Contact Town Panchayat, Aminagar Sarai, Baghpat
            anytime.
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gov-saffron" />
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <div className="flex flex-1 flex-col justify-between space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl">
              <div>
                <h2 className="mb-2 font-serif text-xl font-extrabold tracking-tight text-gov-blue-dark">
                  Contact Information
                </h2>

                <p className="mb-6 text-xs font-semibold text-slate-400">
                  Feel free to reach out to us for any support,
                  queries, complaints or general assistance.
                </p>

                {/* Contact Detail Cards */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100/60 bg-slate-50 p-3 transition-all hover:bg-slate-100/80">
                    <div className="shrink-0 rounded-xl bg-blue-500 p-3 text-white shadow-md">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Office Address
                      </p>

                      <p className="mt-0.5 text-xs font-bold leading-relaxed text-slate-700">
                        Main Bazar, Town Panchayat, Aminagar Sarai,
                        Baghpat, Uttar Pradesh, 250606
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100/60 bg-slate-50 p-3 transition-all hover:bg-slate-100/80">
                    <div className="shrink-0 rounded-xl bg-emerald-600 p-3 text-white shadow-md">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Phone Number
                      </p>

                      <Link
                        href="tel:+918189077892"
                        className="mt-0.5 block text-xs font-black text-slate-700 hover:underline"
                      >
                        +91 8189077892
                      </Link>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100/60 bg-slate-50 p-3 transition-all hover:bg-slate-100/80">
                    <div className="shrink-0 rounded-xl bg-amber-500 p-3 text-white shadow-md">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Email Address
                      </p>

                      <Link
                        href="mailto:npasarai@gmail.com"
                        className="mt-0.5 block text-xs font-black text-slate-700 hover:underline"
                      >
                        npasarai@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gov-blue-medium" />

                  <div>
                    <h4 className="text-xs font-black text-gov-blue-dark">
                      Office Hours
                    </h4>

                    <p className="mt-0.5 text-[11px] font-semibold text-slate-500">
                      Monday – Saturday (10:00 AM to 05:00 PM)
                    </p>
                  </div>
                </div>

                {/* Emergency Helpline */}
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                  <div>
                    <h4 className="text-xs font-black text-red-600">
                      Emergency Helpline
                    </h4>

                    <p className="mt-0.5 text-[11px] font-semibold text-slate-500">
                      Available 24x7 for essential municipal
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col lg:col-span-7">
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-10">
              <div>
                <h2 className="mb-2 font-serif text-xl font-extrabold tracking-tight text-gov-blue-dark">
                  Send Us a Message
                </h2>

                <p className="mb-8 text-xs font-semibold text-slate-400">
                  Our team will get back to you shortly.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success-message"
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      className="mx-auto flex max-w-sm flex-col items-center justify-center space-y-4 py-16 text-center"
                    >
                      <CheckCircle2 className="h-16 w-16 animate-bounce text-emerald-500" />

                      <h3 className="text-lg font-extrabold text-slate-800">
                        Message Transmitted!
                      </h3>

                      <p className="text-xs font-semibold leading-relaxed text-slate-500">
                        Thank you for reaching out to Town
                        Panchayat, Aminagar Sarai, Baghpat. We have
                        logged your enquiry, and our desk officer
                        will contact you within 24-48 working hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      noValidate
                    >
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <Label
                            htmlFor="contact-name"
                            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                          >
                            Your Name
                          </Label>

                          <Input
                            id="contact-name"
                            required
                            type="text"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            disabled={
                              createContactMutation.isPending
                            }
                            placeholder="Enter full name"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="contact-email"
                            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                          >
                            Your Email
                          </Label>

                          <Input
                            id="contact-email"
                            required
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={
                              createContactMutation.isPending
                            }
                            placeholder="Enter email"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                          />
                        </div>
                      </div>

                      {/* Phone and Subject */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <Label
                            htmlFor="contact-phone"
                            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                          >
                            Phone Number
                          </Label>

                          <Input
                            id="contact-phone"
                            required
                            type="tel"
                            name="phone"
                            inputMode="numeric"
                            autoComplete="tel"
                            maxLength={10}
                            pattern="[6-9][0-9]{9}"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={
                              createContactMutation.isPending
                            }
                            placeholder="Enter 10-digit phone number"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="contact-subject"
                            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                          >
                            Subject
                          </Label>

                          <Input
                            id="contact-subject"
                            required
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            disabled={
                              createContactMutation.isPending
                            }
                            placeholder="Message subject"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <Label
                          htmlFor="contact-message"
                          className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                        >
                          Your Message
                        </Label>

                        <Textarea
                          id="contact-message"
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={
                            createContactMutation.isPending
                          }
                          rows={6}
                          placeholder="Write your message..."
                          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                        />
                      </div>

                      {/* API Error */}
                      {submitError && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -5,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          role="alert"
                          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3"
                        >
                          <p className="text-xs font-semibold text-red-700">
                            {submitError}
                          </p>
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={
                          createContactMutation.isPending
                        }
                        className="flex cursor-pointer items-center gap-1.5 self-start rounded-xl bg-gov-blue-medium px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-gov-blue-dark disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                      >
                        <span>
                          {createContactMutation.isPending
                            ? "Sending..."
                            : "Send Message"}
                        </span>

                        <Send
                          className={`h-4 w-4 text-gov-saffron ${
                            createContactMutation.isPending
                              ? "animate-pulse"
                              : ""
                          }`}
                        />
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="space-y-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-xl font-extrabold tracking-tight text-gov-blue-dark">
                Find Us on Google Maps
              </h2>

              <p className="text-xs font-semibold text-slate-400">
                Navigate directly to Town Panchayat Office,
                Aminagar Sarai.
              </p>
            </div>

            <Link
              href="https://maps.app.goo.gl/8gvd4g4qdTn9u81X9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-200"
            >
              <Navigation className="h-3.5 w-3.5 animate-pulse text-blue-600" />

              <span>Open in Google Maps App</span>
            </Link>
          </div>

          <div className="group relative h-[380px] w-full overflow-hidden rounded-2xl border border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.5640306169524!2d77.28424227632616!3d28.94090597549929!2m3!1f0!2f0!3f0!3m2!1i1025!2i768!4f13.1!3m3!1m2!1s0x390da256c5aa5a05%3A0xc3286f78f6bf7e55!2sNagar%20Panchayat%20Office%2C%20Aminagar%20Sarai!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="h-full w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nagar Panchayat Aminagar Sarai Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
