import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { pretendard } from "@/public/fonts/fonts";
import MainLayout from "@/components/main-layout";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "RyuHyeon | Frontend Engineer",
  description: "RyuHyeon의 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.className} bg-blogBackground transition dark:bg-blogBackgroundBlack`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="blog-theme"
        >
          <MainLayout>{children}</MainLayout>
          <div id="modal-root" />
        </ThemeProvider>
      </body>
    </html>
  );
}
