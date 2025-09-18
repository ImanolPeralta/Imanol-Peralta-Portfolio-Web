"use client";
import { Contact } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const { t } = useTranslation("common");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mzzaleya", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus(`{t("contact.successMessage")}`);
      form.reset();
    } else {
      setStatus(`{t("contact.errorMessage")}`);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">{t("contact.contactTitle")}</h2>
      <p className="contact-subtitle">
        {t("contact.contactSubtitle")}
      </p>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder={t("contact.placeholderName")} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder={t("contact.placeholderEmail")} required />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={t("contact.placeholderMessage")}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-contact-form">
            {t("contact.sendButton")}
          </button>
        </form>
        {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
