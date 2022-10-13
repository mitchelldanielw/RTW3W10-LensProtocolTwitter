import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import { Header, Nav, Footer } from '../components/page-elements'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp