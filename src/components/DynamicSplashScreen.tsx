// src/components/DynamicSplashScreen.tsx
import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("./SplashScreen"), {
  ssr: false, // ⚠️ important pour éviter document is not defined
});

export default SplashScreen;
