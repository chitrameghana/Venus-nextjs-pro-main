import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthDialogProvider>
          <SessionProviderComp session={session}>
            <ThemeProvider
              attribute="class"
              enableSystem
              defaultTheme="system"
            >
              <Aoscompo>
                {children}
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}