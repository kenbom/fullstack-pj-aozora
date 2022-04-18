// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {QueryClientProvider} from 'react-query'
import { QueryClient } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <ChakraProvider>
      <QueryClientProvider client = {queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
