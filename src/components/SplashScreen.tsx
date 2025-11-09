// src/components/SplashScreen.tsx
"use client";

import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // On marque le composant comme monté côté client
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(false), 2500); // 2.5 s
    return () => clearTimeout(timer);
  }, []);

  // Ne rien rendre tant que le composant n'est pas monté ou que le splash est terminé
  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-navy z-[9999]">
      <Player
        autoplay
        loop
        src="/lottie/loader.json"
        style={{ height: 200, width: 200 }}
      />
      <h1 className="absolute bottom-16 text-white text-xl font-semibold tracking-wide">
        Overcome Solution
      </h1>
    </div>
  );
}
