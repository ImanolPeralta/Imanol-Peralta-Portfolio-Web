"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import HoverBorderGradient from "./ui/HoverBorderGradient";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const wavy = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const title = "Front End";
  const { t } = useTranslation("common");

  return (
    <section id="inicio" className="hero">
      {/* Fondo Aceternity */}
      <div className="hero-background">
        <svg
          className="spotlight-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="spotlightGradient" cx="0%" cy="0%" r="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.25" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <filter id="blurFilter">
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#spotlightGradient)"
            filter="url(#blurFilter)"
          />
        </svg>

        {/* Cuadrícula */}
        <div className="grid-overlay" />
      </div>

      <div className="hero-content">
        <p className="intro-text">{t("hero.intro")}</p>
        <motion.h1
          className="hero-title text-gradient"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={wavy}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <h2 className="hero-subtitle">{t("hero.subtitle")}</h2>
        <p className="hero-desc">
          {t("hero.description")}
        </p>

        <div className="hero-buttons">
          <Link href="#projects" className="btn-projects">
            {t("hero.btnProjects")}
          </Link>
          <a href="/CV.pdf" download className="btn-cv">
            {t("hero.btnCV")}
          </a>
        </div>
      </div>

      <div className="scroll-icon-wrapper">
        <div className="hero-scroll">
          <FontAwesomeIcon icon={faComputerMouse} className="scroll-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
