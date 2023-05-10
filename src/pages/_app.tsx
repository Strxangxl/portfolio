import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import Layout from "@/layout";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </motion.div>
  );
}
