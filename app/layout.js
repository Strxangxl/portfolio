import Navbar from "./components/Navbar";
import "./globals.css";
import { ThemeProvider } from "./providers";

export const metadata = {
  title: "Ratan | Portfolio",
  description: "Frontend Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-20 min-h-screen">
            <Navbar />
            <div className="pt-12 md:pt-16">
              {children}
            </div>

            <footer className="pt-16 mt-24 border-t border-zinc-200 dark:border-zinc-900/60 text-xs text-zinc-500 w-full">
              <p>
                &copy; 2023 - 2026{" "}
                <a
                  href="https://github.com/Strxangxl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium hover:text-zinc-700 dark:hover:text-zinc-300 transition"
                >
                  Ratandeep Singh
                </a>
              </p>
            </footer>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}