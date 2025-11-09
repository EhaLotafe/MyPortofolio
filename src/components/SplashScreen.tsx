"use client";

import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500); // 2.5 s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

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
