"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMaterialdesign,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiWebpack,
  SiVite,
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
  { name: "Sass", icon: <FaSass color="#cc6699" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
  { name: "Material UI", icon: <SiMaterialdesign color="#007fff" /> },
  { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
  { name: "Express.js", icon: <SiExpress color="#fff" /> },
  { name: "Spring Boot", icon: <BiLogoSpringBoot color="#6db33f" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
  { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
  { name: "GitHub", icon: <FaGithub color="#fff" /> },
  { name: "Webpack", icon: <SiWebpack color="#1c78c0" /> },
  { name: "Vite", icon: <SiVite color="#646cff" /> },
];

export default function AboutMe() {
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    });
  }, []);
  const { t } = useTranslation("common");

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Bloque texto + imagen */}
        <div className="about-text-with-image">
          <div className="about-image-wrapper">
            <img
              src="/images/fotoportolio.png"
              alt="Imanol Augusto Peralta"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2 className="about-title">{t("about.aboutTitle")}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: t("about.aboutDescription") }}
            />
            <Link href="#contact" className="btn-contact">
              {t("about.contactMe")}
            </Link>
          </div>
        </div>

        {/* Skills debajo */}
        <div className="about-skills">
          <h2 className="about-title">{t("about.skillsTitle")}</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <Tilt
                key={i}
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="16px"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="tilt-wrapper"
              >
                <div className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
