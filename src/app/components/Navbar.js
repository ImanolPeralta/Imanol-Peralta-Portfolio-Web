"use client";
import { useState, useEffect, useRef } from "react";
import "../../../styles/globals.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { HiMiniLanguage } from "react-icons/hi2";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation("common");

  const dropdownRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-wrapper">
            <Link href={"/#inicio"}>
              <img
                src="/images/fotologo.png"
                alt="Imagen Logo"
                className="logo-img"
              />
            </Link>
          </div>
          <a href="#inicio">{t("navbar.name")}</a>
        </div>

        {/* Contenedor de links + selector */}
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Link href="/#inicio">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link href="/#about">{t("navbar.about")}</Link>
            </li>
            <li>
              <Link href="/#projects">{t("navbar.projects")}</Link>
            </li>
            <li>
              <Link href="/#contact">{t("navbar.contact")}</Link>
            </li>
          </ul>

          {/* Selector de idioma */}
          <div className="language-selector" ref={dropdownRef}>
            <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
              <HiMiniLanguage size={20} />
              {i18n.language === "es" ? "Español" : "English"}
            </button>
            {langOpen && (
              <ul className="lang-dropdown desktop">
                <li onClick={() => changeLanguage("es")}>
                  <img
                    src="/images/espana.png"
                    alt="ES"
                    className="flag-icon"
                  />{" "}
                  Español
                </li>
                <li onClick={() => changeLanguage("en")}>
                  <img
                    src="/images/estados-unidos.png"
                    alt="US"
                    className="flag-icon"
                  />{" "}
                  English
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Botón hamburguesa mobile */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Overlay */}
        <div className={`overlay ${open ? "show" : ""}`}>
          <ul className="overlay-menu">
            <li>
              <Link href="/#inicio" onClick={() => setOpen(false)}>
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setOpen(false)}>
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link href="/#projects" onClick={() => setOpen(false)}>
                {t("navbar.projects")}
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Glow animado, solo se muestra si scrolled = true */}
      {scrolled && <div className="navbar-glow"></div>}
    </div>
  );
}
