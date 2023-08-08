import '@/styles/globals.css'
import '@/styles/utils.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './components/font-page/font-page.css';
import './map/map.css'

import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}