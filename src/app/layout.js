// src/app/layout.js
import "./globals.css"; // <-- THE MISSING IMPORT

export const metadata = {
  title: "ABC Plumbing | 24/7 Blocked Drain Specialists",
  description:
    "The #1 Rated Blocked Drain Specialists in Randburg & Sandton. Use our free diagnostic tool to get an instant price estimate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
