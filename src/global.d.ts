// src/global.d.ts
declare module "lottie-react";
declare module "@lottiefiles/react-lottie-player";

declare module '*.css';
declare module '*.scss';
declare module '*.sass';
// src/global.d.ts
import "framer-motion";

declare module "framer-motion" {
  interface MotionProps {
    className?: string;
  }
}
