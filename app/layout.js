import Navbar from './components/Navbar';
import './globals.css';
import { StoreProvider } from './store/StoreProvider';
import { Poppins } from 'next/font/google';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';
import { options } from './api/auth/[...nextauth]/options';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'CooksCabinet',
  description: 'A Recipe and Shopping List Application',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(options);
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${poppins.variable} font-sans bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]`}>
          <SessionProvider session={session}>
            <ToastContainer />
            <Navbar />
            {children}
          </SessionProvider>
        </body>
      </html>
    </StoreProvider>
  )
}
