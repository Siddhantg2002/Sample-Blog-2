// app/layout.tsx or app/layout.jsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ApolloWrapper } from "./apollo/wrapper";
import { AuthProvider } from "@/Auth/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sample Blog App",
  description: "Home page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <ApolloWrapper>{children}</ApolloWrapper>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
