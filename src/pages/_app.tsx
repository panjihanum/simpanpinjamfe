import '../assets/styles/globals.scss'
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.css';

export async function getServerSideProps(context: any) {

  // set HTTP header
  context.res.setHeader('Content-Type', 'application/json')

  return {
    props: {}, // will be passed to the page component as props
  }
}

function MyApp({ Component, pageProps }: AppProps) {


  return <Component {...pageProps} />
}

export default MyApp
