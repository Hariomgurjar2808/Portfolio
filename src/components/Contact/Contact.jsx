import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef(null);
  const [fullName, setFullName] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  // Google Apps Script Web App URL
  const GAS_URL = "https://script.google.com/macros/s/AKfycbys-CFW1CGtUOU5jXL_3P2x46YiHrBg2PS4BE4RE25WuKS-5x7SO3yRYT9qmCeSgMuo/exec";

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailValue = form.current.user_email.value;
    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.", { autoClose: 3000, theme: "dark" });
      return;
    } else {
      setEmailError("");
    }

    // Build FormData to avoid CORS preflight
    const fd = new FormData();
    fd.append("user_email", form.current.user_email.value);
    fd.append("user_name", form.current.user_name.value);
    fd.append("subject", form.current.subject.value);
    fd.append("message", form.current.message.value);

    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        body: fd,           // <-- no headers; lets it be multipart/form-data
      });

      const json = await res.json().catch(() => ({}));
      if (!json.ok) throw new Error(json.error || "Failed to send");

      form.current.reset();
      toast.success("Message sent successfully! ✅", { autoClose: 3000, theme: "dark" });
      setFullName("");
    } catch (err) {
      console.error("GAS send error:", err);
      toast.error("Failed to send message. Please try again.", { autoClose: 3000, theme: "dark" });
    }
  };


  return (
    <section id="contact" className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <ToastContainer />

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
            onChange={e => {
              const value = e.target.value;
              if (!emailRegex.test(value)) {
                setEmailError("Please enter a valid email address.");
              } else {
                setEmailError("");
              }
            }}
          />
          {emailError && (
            <span className="text-red-500 text-sm">{emailError}</span>
          )}

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}