import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  return (
    <>
      <Header lang={lang}/>
      <ScrollUp />
      <Hero lang={lang} />
      <AboutSectionOne lang={lang} />
      <Features lang={lang} />
      <AboutSectionTwo lang={lang} />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <Testimonials /> */}
      <Pricing lang={lang} />
      {/* <Blog /> */}
      {/* <Contact /> */}
      <Footer lang={lang}/>
    </>
  );
}
