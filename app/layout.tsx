import Header from "@/components/header";
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeToggle from "@/components/themeToggle";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dillon | Student Portfolio',
  description: 'Dillon Bordeleau is an aspiring full-stack developer seeking internship and co-op opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-all`}>
        <div className="bg-blue-100 absolute -z-10 top-[-6rem] right-[0px] h-[50rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-sky-900 dark:w-[30rem] dark:h-[30rem] dark:top-[5rem] dark:right-[30rem]"></div>
        <div className="bg-emerald-100 absolute -z-10 top-[-1rem] left-[-35rem] h-[50rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-emerald-900 dark:w-[30rem] dark:h-[30rem] dark:top-[5rem] dark:left-[30rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-center"/>
            <Footer />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}