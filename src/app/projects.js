"use client";
import React, { useRef } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Componente ProjectCard
const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  techs,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Tilt 3D
    const rotateX = (y / height - 0.5) * 20;
    const rotateY = (x / width - 0.5) * -20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // ✨ Brillo: definir posición del gradiente
    card.style.setProperty("--x", `${(x / width) * 100}%`);
    card.style.setProperty("--y", `${(y / height) * 100}%`);
  };

  const resetTransform = () => {
    const card = cardRef.current;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="project-card animate-bg"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <div className="card-content">
        {/* Imagen */}
        <div className="card-img-wrapper">
          <img src={image} alt={title} className="card-img" />
        </div>

        {/* Título */}
        <h3 className="card-title">{title}</h3>

        {/* Descripción */}
        <p className="card-text">{description}</p>

        {/* Lista de tecnologías */}
        {techs && (
          <div className="tech-list">
            {techs.map((tech, idx) => (
              <span key={idx} className="tech-item">
                {tech}
              </span> 
            ))}
          </div>
        )}

        {/* Botones */}
        <div className="card-buttons">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente Projects
const Projects = () => {
  const { t } = useTranslation("common");
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">{t("projects.title")}</h2>
      <div className="projects-grid">
        <ProjectCard
          title={t("projects.musicianPro.title")}
          description={t("projects.musicianPro.description")}
          image="/images/musicianpro-screenshot.jpeg"
          githubLink="https://github.com/ImanolPeralta/musicianpro-nextjs.git"
          liveLink="https://musicianpro.vercel.app/"
          techs={["Next.js", "Firebase", "Tailwind CSS", "Vercel"]}
        />
        <ProjectCard
          title={t("projects.theDevStore.title")}
          description={t("projects.theDevStore.description")}
          image="/images/thedevstore-screenshot.jpeg"
          githubLink="https://github.com/ImanolPeralta/The-Dev-Store-PF-ReactJS.git"
          liveLink="https://imanolperalta.github.io/The-Dev-Store-PF-ReactJS/"
          techs={["React JS", "Firebase", "JavaScript"]}
        />
        <ProjectCard
          title={t("projects.steelBlock.title")}
          description={t("projects.steelBlock.description")}
          image="/images/steelblock-screenshot.jpeg"
          githubLink="https://github.com/ImanolPeralta/Proyecto-Final-Peralta.git"
          liveLink="https://steelblock.vercel.app/"
          techs={["HTML", "CSS", "JavaScript (Vanilla)"]}
        />
        <ProjectCard
          title={t("projects.carsWorldWide.title")}
          description={t("projects.carsWorldWide.description")}
          image="/images/carsworldwide-screenshot.jpeg"
          githubLink="https://github.com/ImanolPeralta/PFPeralta.git"
          liveLink="https://carsworldwide.netlify.app/"
          techs={["HTML", "CSS", "JavaScript", "Bootstrap", "Sass"]}
        />
      </div>
    </section>
  );
};

export default Projects;
