import { Inter } from "next/font/google";
import "./globals.css";
import WebVitalsReporter from '../components/WebVitalsReporter';

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "FG Science Degree College - Excellence in Science Education",
  description: "FG Science Degree College offers quality education in science and technology with modern facilities, experienced faculty, and comprehensive programs in Physics, Chemistry, Mathematics, and Computer Science.",
  keywords: "science college, degree college, physics, chemistry, mathematics, computer science, education, FG Science",
  authors: [{ name: "FG Science Degree College" }],
  robots: "index, follow",
  openGraph: {
    title: "FG Science Degree College - Excellence in Science Education",
    description: "Premier institution for science education with modern facilities and experienced faculty.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <WebVitalsReporter />
      </body>
    </html>
  );
}
