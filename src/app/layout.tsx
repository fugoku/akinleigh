import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "./globals.css";
import Header from "@/components/header";
import Script from "next/script";
import { ThemeProvider } from "@/components/atoms/theme-provider";

const roboto = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fugoku",
  description: "Fugoku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="important-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
         try {
          (function(d,t) {
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'BhYSCNZgjFEB5xyhbSeVM7FR',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");
      } catch (_) {}
        `,
        }}
      ></Script>

      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
