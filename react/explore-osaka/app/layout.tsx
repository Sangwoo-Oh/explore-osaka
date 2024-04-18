// 'use client'

import type { Metadata } from "next";
import Link from 'next/link'
import './reset.css'
import './styles.css'

export const metadata: Metadata = {
  title: "Explore Osaka!",
  description: "This is website about Osaka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {/* TODO: make class name dynamic */}
      <body>
        <header>
          <div className="header__wrapper">
            <div className="header__logo"><span>E</span>xplore <span>O</span>saka!</div>
            <nav className="header__nav">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/tourism">Tourism</Link></li>
                <li><Link href="/food">Food</Link></li>
                <li><Link href="/history">History</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <p>Author: Sangwoo Oh (epscag@inf.elte.hu)</p>
        </footer>
      </body>
    </html>
  );
}
