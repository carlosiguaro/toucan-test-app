// import '@/styles/utils.css'
// import './components/map/map.css';
// import './components/font-page/font-page.css';
// import 'leaflet/dist/leaflet.css';
import '@/styles/main.scss'

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