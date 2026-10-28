import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

import SectionLabel from "../components/SectionLabel.jsx";

const socials = [
  ["in", "LinkedIn", "Sumit Kashyap", "https://www.linkedin.com/in/sumit-kashyap-821985225/"],
  ["Be", "Behance", "@sumitkashyap17", "https://www.behance.net/sumitkashyap17"],
  ["◉", "Unsplash", "@sumitkashyap27", "https://unsplash.com/@sumitkashyap27"],
  ["M", "Medium", "@sumit20020927", "https://medium.com/@sumit20020927"],
];

const serviceOptions = [
  "Website",
  "Application",
  "UX audit",
  "Design system",
  "Talk session",
  "Brand identity",
  "Something else",
];

export default function Contact() {
  const [services, setServices] = useState([]);
  const [submissionState, setSubmissionState] = useState("idle");

  const toggleService = (service) => {
    setServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const submit = async (event) => {
    event.preventDefault();
    if (submissionState === "sending") return;

    const data = new FormData(event.currentTarget);
    const form = event.currentTarget;
    setSubmissionState("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sumitkashyap0927@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            _replyto: data.get("email"),
            _subject: `Portfolio enquiry — ${data.get("name")}`,
            budget: data.get("budget"),
            timeline: data.get("when") || "Flexible",
            services: services.length ? services.join(", ") : "Not specified",
            brief: data.get("brief") || "No brief provided",
            _honey: data.get("website"),
          }),
        },
      );
      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error("The enquiry could not be sent.");
      }

      setSubmissionState("sent");
      form.reset();
      setServices([]);
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <main className="page-content contact-page section-width">
      <SectionLabel>CONTACT</SectionLabel>

      <h1 className="page-title contact-title">
        <span>let’s make</span> wonders.
      </h1>

      <img
        className="contact-map-image"
        src="/images/contact-map.png"
        alt="A world map connecting a global creative community"
      />

      <section className="contact-form-section">
        <span className="section-kicker">TELL ME A LITTLE</span>
        <h2>Start an enquiry.</h2>

        <form onSubmit={submit}>
          <input
            className="contact-honeypot"
            name="website"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="form-row">
            <label>
              Your name *
              <input name="name" placeholder="Your name" required />
            </label>

            <label>
              Email *
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </label>

            <label>
              Budget *
              <select name="budget" required defaultValue="">
                <option value="" disabled>
                  Select budget
                </option>
                <option>Under ₹25,000</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
                <option>Let's discuss</option>
              </select>
            </label>

            <label>
              When?
              <select name="when" defaultValue="">
                <option value="">Flexible</option>
                <option>ASAP</option>
                <option>Within 2–4 weeks</option>
                <option>Within 1–3 months</option>
              </select>
            </label>
          </div>

          <label className="brief-label">
            A little brief
            <textarea
              name="brief"
              rows="4"
              placeholder="What are you building? Who is it for? What’s keeping you up at night about it?"
            />
          </label>

          <fieldset>
            <legend>What are you here for?</legend>

            <div className="service-options">
              {serviceOptions.map((service) => (
                <button
                  type="button"
                  key={service}
                  className={services.includes(service) ? "chosen" : ""}
                  onClick={() => toggleService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="form-submit">
            <button
              type="submit"
              className="send-button"
              disabled={submissionState === "sending"}
            >
              {submissionState === "sending"
                ? "Sending…"
                : submissionState === "sent"
                  ? "Sent"
                  : "Send it"}
              {submissionState !== "sending" && <Send size={14} />}
            </button>
            <span aria-live="polite" role="status">
              {submissionState === "sent"
                ? "Enquiry sent — I’ll reply within 24 hours on weekdays."
                : submissionState === "error"
                  ? "Couldn’t send right now. Please try again."
                  : "Reply in <24h on weekdays · I read everything"}
            </span>
          </div>
        </form>
      </section>

      <section className="social-section">
        <span className="section-kicker">STALK ME? NAH</span>
        <h2>Find me on the internet.</h2>

        <div className="social-grid">
          {socials.map(([icon, title, handle, url]) => (
            <a
              className="social-card"
              href={url}
              key={title}
              target="_blank"
              rel="noreferrer"
            >
              <span className={`social-icon social-${title.toLowerCase()}`}>
                {icon}
              </span>
              <span>
                <strong>{title}</strong>
                <small>{handle}</small>
              </span>
              <ArrowUpRight className="social-arrow" size={16} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
