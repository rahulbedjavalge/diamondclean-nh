import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/sections/Hero";
import { About } from "@/components/site/sections/About";
import { Services } from "@/components/site/sections/Services";
import { WhyChooseUs } from "@/components/site/sections/WhyChooseUs";
import { Process } from "@/components/site/sections/Process";

import { FAQ } from "@/components/site/sections/FAQ";
import { CTA } from "@/components/site/sections/CTA";
import { Contact } from "@/components/site/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}

