import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// export const metadata = {
//   metadataBase: new URL("https://developersmaps.com"),
//   title: {
//     default: "Developers Map",
//     template: "%s | Developers Map",
//   },
//   description:
//     "Developers Map helps real estate teams generate multilingual brochures, manage listings, and collaborate through role-based tools.",
//   openGraph: {
//     title: "Developers Map",
//     description:
//       "Real estate brochure generation and property management platform for agencies, developers, and agents.",
//     type: "website",
//   },
// };

export const metadata = {
  metadataBase: new URL('https://developersmap.ai'),
  title: {
    default: 'Developers Maps',
    template: '%s | Developers Maps',
  },
  description: 'Developers Maps landing page',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Developers Maps',
    description: 'Developers Maps landing page',
    url: 'https://developersmap.ai',
    siteName: 'Developers Maps',
    type: 'website',
  },
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
