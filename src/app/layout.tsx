import "../styles/globals.css";
import SplashScreen from "../components/SplashScreen";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Overcome Solution 2026",
  description: "Portfolio de Manasse Lotafe – Solutions numériques et IA appliquée"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-light text-dark">
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
