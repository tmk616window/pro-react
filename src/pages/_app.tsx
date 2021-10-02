import '../styles/globals.css'
import '../pages/components/Task/task.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
export default MyApp
