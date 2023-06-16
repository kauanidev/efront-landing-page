import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background flex flex-col"> 
      <Head>
        <title>eFront - Garanta seu E-Book</title>
      </Head>

      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
