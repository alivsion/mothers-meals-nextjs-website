"use client";
import React, { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Head from "next/head";

export default function Contact() {
  const hcaptchaRef = useRef<HCaptcha>(null);
  const [token, setToken] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "a4eebf4f-3a8e-49a5-a951-f19d88dfdf6f");
    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully");
        event.currentTarget.reset();
        hcaptchaRef.current?.resetCaptcha();
        setToken(null);
      } else {
        setResult(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult(`❌ Something went wrong`);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Mother Meals</title>
        <meta
          name="description"
          content="Get in touch with Mother Meals for inquiries, feedback, or support."
        />
        <meta
          name="keywords"
          content="contact, Mother Meals, customer support, food delivery"
        />
        <meta property="og:title" content="Contact Us - Mother Meals" />
        <meta
          property="og:description"
          content="Get in touch with Mother Meals for inquiries, feedback, or support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mothermeals.com/contact" />
        <meta property="og:image" content="/og-image-contact.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Mother Meals" />
        <meta
          name="twitter:description"
          content="Get in touch with Mother Meals for inquiries, feedback, or support."
        />
        <meta name="twitter:image" content="/og-image-contact.jpg" />
      </Head>
      <div className="min-h-screen flex items-center justify-center   px-4 py-10">
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 sm:p-8">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 uppercase text-[#95063C] drop-shadow-md">
            📩 Contact Us
          </h2>
          <p className="text-[#E7154F] text-center mb-6 sm:mb-8 text-sm sm:text-base">
            💬 Have a question or feedback? Fill out the form below and we'll get back to you.
          </p>

          {/* Form */}
          <form className="space-y-5 sm:space-y-6" onSubmit={onSubmit}>
            {/* Name */}
            <div>
              <label className="block text-[#95063C] font-medium mb-1">👤 Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2B161] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E7154F] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#95063C] font-medium mb-1">📧 Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2B161] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E7154F] transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[#95063C] font-medium mb-1">📞 Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2B161] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E7154F] transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#95063C] font-medium mb-1">📝 Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#D2B161] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E7154F] transition"
              ></textarea>
            </div>

            {/* ✅ hCaptcha */}
            <div className="w-full   flex justify-center ">
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                ref={hcaptchaRef}
                onVerify={(token: string) => setToken(token)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-[#95063C] to-[#E7154F] hover:from-[#E7154F] hover:to-[#95063C] transition-transform duration-300 hover:scale-[1.02] cursor-pointer text-sm sm:text-base"
            >
              {result ? result : "🚀 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}