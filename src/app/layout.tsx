import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RepoLaunch — the search engine of trusted open-source repos",
    template: "%s · RepoLaunch",
  },
  description:
    "Search any idea and get curated, verified GitHub repos — with setup guides and real monetization playbooks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
