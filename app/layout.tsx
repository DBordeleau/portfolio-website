import Header from "@/components/header";
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context";

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
      <body className={`${inter.className} 
        bg-gray-50 
        text-gray-950
        relative
        h-[5000px]
        pt-28
        sm:pt-36`}>
        <div className="bg-blue-100 absolute -z-10 top-[-6rem] right-[11rem] h-[33rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-emerald-100 absolute -z-10 top-[-1rem] left-[-35rem] h-[33rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>

      </body>
    </html>
  )
}