"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function ContactCard() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-navy">Mes Contacts</h2>

      {/* Identité & Accès Direct */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">✅ Identité & Accès Direct</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <FaGlobe className="text-blue-500" /> 
            <a href="https://portfolio-catalog.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">
              Portfolio
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin className="text-blue-700" /> 
            <a href="https://www.linkedin.com/in/eha-lotafe" target="_blank" rel="noopener noreferrer" className="underline">
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub className="text-gray-800" /> 
            <a href="https://github.com/EhaLotafe" target="_blank" rel="noopener noreferrer" className="underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Produits / Boutiques */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🛍️ Produits / Boutiques</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <FaGlobe className="text-green-500" /> 
            <a href="https://iapductk.mychariow.shop" target="_blank" rel="noopener noreferrer" className="underline">
              Chariow #1
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGlobe className="text-green-500" /> 
            <a href="https://osazgjlt.mychariow.shop" target="_blank" rel="noopener noreferrer" className="underline">
              Chariow #2
            </a>
          </li>
        </ul>
      </div>

      {/* Contacts Privés */}
      <div>
        <h3 className="text-xl font-semibold mb-2">📩 Contacts Privés</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" /> 
            <a href="mailto:overcomeeha@gmail.com" className="underline">overcomeeha@gmail.com</a>
          </li>
          <li className="flex items-center gap-2">
            <FaPhone className="text-green-600" /> 
            <a href="tel:+243817517378" className="underline">+243 817517378</a>
          </li>
          <li className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" /> 
            <a href="https://wa.me/243990918934" target="_blank" rel="noopener noreferrer" className="underline">
              +243 990918934
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGlobe className="text-blue-600" /> 
            <a href="https://www.facebook.com/manasse.eha.lotafe" target="_blank" rel="noopener noreferrer" className="underline">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
