// src/components/DynamicSplashScreen.tsx (CORRIGÉ)
'use client' // <-- AJOUTÉ : Marque le fichier comme un Client Component
import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("./SplashScreen"), {
  ssr: false, // Maintenant autorisé
});

export default SplashScreen;