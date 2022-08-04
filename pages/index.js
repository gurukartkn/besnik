import Head from "next/head";

import {
  Navbar,
  Hero,
  Deals,
  Social,
  Customer,
  Smart,
  Newsletter,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Besnik | Smart Banking</title>
        <meta
          name="description"
          content="Meet the only spend management platform and corporate card."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Deals />
        <Social />
        <Customer />
        <Smart />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
