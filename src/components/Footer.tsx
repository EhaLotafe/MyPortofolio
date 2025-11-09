"use client";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import React from "react";

// Typage d’un item de contact
interface ContactItemProps {
  Icon: IconType;
  iconClass: string;
  href: string;
  text: string;
  target?: string;
}

// Animation Framer Motion de base
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Élément individuel de contact
const ContactItem: React.FC<ContactItemProps & { index: number }> = ({
  Icon,
  iconClass,
  href,
  text,
  target = "_blank",
  index,
}) => (
  <motion.li
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="flex items-center w-full p-3 rounded-xl bg-[var(--light)] hover:bg-[var(--teal)] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200"
    >
      <Icon className={`text-2xl mr-3 ${iconClass}`} />
      <span className="font-medium text-[var(--dark)]">{text}</span>
    </a>
  </motion.li>
);

// Composant principal
export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-4 sm:p-10 max-w-2xl mx-auto"
    >
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-extrabold text-[var(--navy)]">
          Connectez-vous avec moi !
        </h2>
        <p className="text-[var(--dark)] opacity-70 mt-2 text-lg">
          Accédez rapidement à mes réseaux et contacts.
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-3 h-1 bg-[var(--gold)] mx-auto rounded-full"
        ></motion.div>
      </motion.div>

      {/* Contenu des cartes */}
      <div className="space-y-8">
        {/* Bloc Identité */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 border-t-4 border-[var(--blue)]"
        >
          <h3 className="text-2xl font-bold mb-5 text-[var(--blue)] flex items-center gap-2">
            🌐 Identité & Plateformes
          </h3>
          <ul className="space-y-3">
            <ContactItem
              Icon={FaGlobe}
              iconClass="text-[var(--blue)]"
              href="https://portfolio-catalog.vercel.app/"
              text="Portfolio (Mon travail)"
              index={1}
            />
            <ContactItem
              Icon={FaLinkedin}
              iconClass="text-[var(--blue)]"
              href="https://www.linkedin.com/in/eha-lotafe"
              text="LinkedIn (Professionnel)"
              index={2}
            />
            <ContactItem
              Icon={FaGithub}
              iconClass="text-[var(--dark)]"
              href="https://github.com/EhaLotafe"
              text="GitHub (Projets Code)"
              index={3}
            />
          </ul>
        </motion.div>

        {/* Bloc Boutiques */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 border-t-4 border-[var(--green)]"
        >
          <h3 className="text-2xl font-bold mb-5 text-[var(--green)] flex items-center gap-2">
            🛍️ Produits / Boutiques
          </h3>
          <ul className="space-y-3">
            <ContactItem
              Icon={FaGlobe}
              iconClass="text-[var(--green)]"
              href="https://iapductk.mychariow.shop"
              text="Chariow Boutique #1"
              index={1}
            />
            <ContactItem
              Icon={FaGlobe}
              iconClass="text-[var(--green)]"
              href="https://osazgjlt.mychariow.shop"
              text="Chariow Boutique #2"
              index={2}
            />
          </ul>
        </motion.div>

        {/* Bloc Contacts */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 border-t-4 border-[var(--gold)]"
        >
          <h3 className="text-2xl font-bold mb-5 text-[var(--gold)] flex items-center gap-2">
            📩 Contacts Personnels
          </h3>
          <ul className="space-y-3">
            <ContactItem
              Icon={FaEnvelope}
              iconClass="text-[var(--gold)]"
              href="mailto:overcomeeha@gmail.com"
              text="overcomeeha@gmail.com"
              target="_self"
              index={1}
            />
            <ContactItem
              Icon={FaPhone}
              iconClass="text-[var(--green)]"
              href="tel:+243817517378"
              text="+243 817517378 (Téléphone)"
              target="_self"
              index={2}
            />
            <ContactItem
              Icon={FaWhatsapp}
              iconClass="text-[var(--green)]"
              href="https://wa.me/243990918934"
              text="+243 990918934 (WhatsApp)"
              index={3}
            />
            <ContactItem
              Icon={FaGlobe}
              iconClass="text-[var(--blue)]"
              href="https://www.facebook.com/manasse.eha.lotafe"
              text="Facebook"
              index={4}
            />
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
