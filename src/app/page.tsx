import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "./components/slideshow";
import ContactForm from "./components/contactform";
import { Container, Section, SectionHeading, Frame } from "@/components/layout";

const pillars = [
  {
    label: "Academics",
    accent: "text-pillar-academic",
    rule: "bg-pillar-academic",
    title: "Excel Academically",
    body: "NSBE's main goal is to strive for black excellence. That includes hosting academic excellence focused events like study nights, mentorship program initiatives, and tutoring opportunities.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Students studying together",
  },
  {
    label: "Careers",
    accent: "text-pillar-professional",
    rule: "bg-pillar-professional",
    title: "Succeed Professionally",
    body: "NSBE fosters a culturally responsible STEM community through events with company partners, the Engineering Career Center, and professional development opportunities.",
    image:
      "https://images.unsplash.com/photo-1630649945248-dc7d7c9ba79e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Professionals walking to work",
  },
  {
    wide: true,
    label: "Community",
    accent: "text-pillar-community",
    rule: "bg-pillar-community",
    title: "Positively Impact the Community",
    body: "NSBE goes beyond academic and professional success, making a positive impact through collaborations with members and companies across the Greater Houston area.",
    image:
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Volunteers packing donations",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero relative flex h-[71.5vh] w-full items-center py-6">
        <Container className="z-[3] flex items-center justify-between">
          <div className="flex flex-col gap-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              University of Houston
            </p>
            <h1 className="w-full text-5xl md:w-8/12 md:text-6xl">
              National Society of Black Engineers
            </h1>
            <Link href="/membership" className="btn mt-3">
              Become a member
            </Link>
          </div>
          <div className="hidden sm:block">
            <Image
              className="-mt-5"
              src="/NSBE-General-BlackShield 1.png"
              alt="NSBE logo"
              width={250}
              height={250}
            />
          </div>
        </Container>
        <Slideshow />
      </section>

      <div className="marquee my-6 text-4xl italic opacity-40">
        <ul className="marquee__content">
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={i}>
              <li>ENGINEERED TO WITHSTAND</li>
              <li>&bull;</li>
            </React.Fragment>
          ))}
        </ul>
        <ul aria-hidden="true" className="marquee__content">
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={i}>
              <li>ENGINEERED TO WITHSTAND</li>
              <li>&bull;</li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Mission quote */}
      <Section space="lg">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
          The mission of the National Society of Black Engineers is
        </p>
        <figure className="mx-auto mt-8 max-w-4xl text-center">
          <span aria-hidden className="font-display block text-6xl leading-none text-amber-500/70">
            &ldquo;
          </span>
          <blockquote className="font-display -mt-2 text-3xl leading-[1.2] sm:text-4xl md:text-5xl">
            To increase the number of culturally responsible Black engineers who excel academically,
            succeed professionally, and positively impact the community.
          </blockquote>
        </figure>
        <div className="mt-10 text-center">
          <Link href="/about" className="btn">
            Learn more about NSBE
          </Link>
        </div>
      </Section>

      {/* Three pillars */}
      <Section space="md">
        <SectionHeading eyebrow="What we do" title="Three ways we show up" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 ${
                pillar.wide ? "sm:col-span-2 sm:flex-row lg:col-span-1 lg:flex-col" : ""
              }`}
            >
              <div
                className={`relative h-52 w-full lg:h-56 ${
                  pillar.wide ? "sm:h-auto sm:w-5/12 lg:w-full" : ""
                }`}
              >
                <Image src={pillar.image} alt={pillar.alt} fill className="object-cover" sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${pillar.accent}`}>
                  {pillar.label}
                </p>
                <span aria-hidden className={`mt-3 block h-px w-10 ${pillar.rule}`} />
                <h3 className="mt-4 text-2xl leading-tight">{pillar.title}</h3>
                <p className="mt-3 text-neutral-700">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://discord.com/invite/UK7evmj9d5" className="btn">
            View our resources
          </Link>
        </div>
      </Section>

      {/* Events */}
      <Section space="md">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              Upcoming
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {`Don't miss out on our upcoming events`}
            </h2>
            <p className="mx-auto mt-6 max-w-prose text-neutral-700 lg:mx-0">
              {`Come out and enjoy yourself at any of our events. Each one is eligible for points, which determine a member's participation and factor into conferences, sponsorships, and scholarships.`}
            </p>
          </div>

          <Frame>
            <iframe
              title="UH NSBE events calendar"
              className="h-[26rem] w-full rounded-lg lg:h-[30rem]"
              src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTabs=0&showPrint=0&showTz=0&showTitle=0&src=dWhuc2JlLm9yZ19kc3JyOG1kYWQ2c2UxNHVrdTAwam1icjV2b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB"
            />
          </Frame>
        </div>
      </Section>

      {/* Join */}
      <Section space="md">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              className="h-auto w-full rounded-2xl object-cover"
              src="/event-gallery/gbmshot.png"
              alt="UH NSBE general body meeting"
              width={700}
              height={700}
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl">Join our community</h2>
            <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-amber-500 lg:mx-0" />
            <p className="mx-auto mt-6 max-w-prose text-neutral-700 lg:mx-0">
              UH NSBE is more than just an organization, it&rsquo;s a family. Come learn what it
              means to be part of the NSBEfam at the University of Houston.
            </p>
            <Link href="/membership" className="btn mt-8">
              Become a member
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section space="md">
        <SectionHeading eyebrow="Get in touch" title="Contact us" />
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
