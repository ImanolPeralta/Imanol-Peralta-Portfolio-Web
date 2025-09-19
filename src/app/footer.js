"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Propiedad para aplicar degradado a los íconos de redes sociales
const GradientIcon = ({ Icon }) => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#bf7af0" />
      </linearGradient>
    </defs>
    <Icon style={{ fill: "url(#grad)", width: "100%", height: "100%" }} />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="footer-ultra">
      {/* Overlay de luz */}
      <div className="footer-light-overlay"></div>

      <div className="footer-container">
        {/* Columna izquierda */}
        <div className="footer-left">
          <div className="footer-logo-name">
            <Link href="/#inicio">
              <img
                src="images/fotologo.png"
                alt="Logo"
                className="footer-logo"
              />
            </Link>
            <Link href="/#inicio" className="footer-name">
              <h3>Imanol Peralta</h3>
            </Link>
          </div>
          <p className="footer-role">{t("footer.role")}</p>
          <p className="footer-desc">
            {t("footer.desc")}
          </p>
        </div>

        {/* Columna derecha */}
        <div className="footer-right">
          <h4>{t("footer.connect")}</h4>
          <div className="footer-icons">
            <Link
              href="https://www.linkedin.com/in/imanol-augusto-peralta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientIcon Icon={FaLinkedin} />
            </Link>
            <Link
              href="https://github.com/ImanolPeralta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientIcon Icon={FaGithub} />
            </Link>
          </div>
        </div>
      </div>

      {/* Línea divisoria y derechos */}
      <div className="footer-bottom">
        <hr />
        <p className="footer-copy">
          © {new Date().getFullYear()} Imanol Augusto Peralta. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
