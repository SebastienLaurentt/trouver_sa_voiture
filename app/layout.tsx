import QueryProvider from "@/components/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { general } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trouver sa voiture",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <QueryProvider>
        <body className={`${general} min-h-screen`}>
          {children} <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}
