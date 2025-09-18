// src/app/layout.js
import "../../styles/globals.css";
import { Poppins, Roboto } from "next/font/google";
import AboutMe from "./about";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./projects";
import ContactForm from "./contact";
import Footer from "./footer";
import { FaWhatsapp } from "react-icons/fa";
import I18nProvider from "./I18nProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Imanol Peralta | Frontend Developer",
  description: "Portfolio personal de Imanol Augusto Peralta",
  icons: {
    icon: "/images/icono.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <I18nProvider>
          <Navbar />
          <Hero />
          <AboutMe />
          <Projects />
          <ContactForm />
          <Footer />
        </I18nProvider>

        {/* Botón de Whatsapp */}
        <a
          href="https://wa.me/5493735636568?text=Hola%20Imanol!%20Te%20contacto%20desde%20tu%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-sticky"
        >
          <FaWhatsapp size={32} color={"var(--color-bg)"} />
        </a>

        {children}
      </body>
    </html>
  );
}
