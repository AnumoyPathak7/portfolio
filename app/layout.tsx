import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Anumoy Pathak | Portfolio",
  description: "Personal portfolio website of Anumoy Pathak",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="bg-white shadow p-4 flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/hobbies">Hobbies</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
