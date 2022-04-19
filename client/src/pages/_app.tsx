// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {QueryClientProvider} from 'react-query'
import { QueryClient } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import {queryClient} from "../react-query/queryClient"
import {Loading} from "../components/app/Loading"
import {theme} from "../theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client = {queryClient}>
      <Component {...pageProps} />
      <Loading />
      <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
