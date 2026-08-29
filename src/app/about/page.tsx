import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TestimonialCarousel from '@/app/components/testimonial-carousel'

const founders = [
  'Edward Coleman',
  'Anthony Harris',
  'Brian Harris',
  'Stanley L. Kirtley',
  'John W. Logan Jr.',
  'George Smith',
]

const testimonials = [
  {
    name: 'Temilolu Ojofeitimi',
    position: 'President ‘26 - ’27',
    quote: `NSBE is more than an organization to me, it is a community where Black engineers are empowered to recognize their potential, create opportunities for one another, and succeed together. As president, my goal is to lead with service and leave every member better than I found them.`,
    image: '/testimonials/temi.png',
  },
  {
    name: 'Aisha Fatusi',
    position: 'Vice Chair ‘26 - ’27',
    quote: `Time and time again you have to remind the world who you are. That only becomes difficult if you forget.`,
    image: '/testimonials/aisha.jpg',
  },
  {
    name: 'A.J. Ncho',
    position: 'Parliamentarian ‘26 - ’27',
    quote: `Would you believe in what you believe in if you were the only one who believed it?`,
    image: '/testimonials/aj.jpg',
  },
  {
    name: `Trey De'De'`,
    position: 'Programs Chair ‘26 - ’27',
    quote: `Leadership is planting a tree that you'll never sit under the shade of.`,
    image: '/testimonials/trey.jpg',
  },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
        {eyebrow}
      </p>
      <h2 className="text-center text-4xl sm:text-5xl">{title}</h2>
      <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-amber-500" />
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <header className="mx-auto w-11/12 max-w-6xl pb-6 pt-14 text-center sm:pb-8 sm:pt-20">
        <h1 className="text-6xl md:text-7xl">All About NSBE</h1>
        <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
          Where we come from, what we are working toward, and why our members keep showing up.
        </p>
      </header>

      {/* Chicago Six */}
      <section className="mx-auto w-11/12 max-w-6xl py-14 sm:py-20">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              Founded 1974
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Six engineering students at Purdue started all of this.
            </h2>
            <p className="mx-auto mt-6 max-w-prose text-neutral-700 lg:mx-0">
              The National Society of Black Engineers was founded in 1974 by six students who
              refused to be the only ones in the room. They are known as the “Chicago Six,” and
              every chapter since — ours included — traces back to them.
            </p>

            <ul className="mx-auto mt-6 grid w-max grid-cols-1 gap-x-8 gap-y-2.5 border-t border-neutral-300 pt-6 sm:mt-8 sm:gap-y-3 sm:pt-8 lg:mx-0 lg:w-auto lg:grid-cols-2">
              {founders.map((founder) => (
                <li key={founder} className="flex items-baseline gap-3 text-left text-sm sm:text-base">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span className="font-medium">{founder}</span>
                </li>
              ))}
            </ul>

            <Link href="https://nsbe.org/home/about/" className="btn mt-8 sm:mt-10">
              Learn more about NSBE
            </Link>
          </div>

          <figure>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-6">
              <Image
                className="h-auto w-full rounded-lg"
                alt="NSBE founders Dr. Arthur J. Bond and the Chicago Six"
                src="/event-gallery/chicagosix.jpg"
                height={500}
                width={700}
              />
            </div>
            <figcaption className="mt-4 text-center text-xs text-neutral-500">
              Dr. Arthur J. Bond and the Chicago Six, Purdue University, 1975.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto w-11/12 max-w-6xl py-14 sm:py-20">
        <SectionHeading eyebrow="Our purpose" title="Our Mission" />

        <p className="font-display mx-auto max-w-4xl text-center text-2xl leading-snug sm:text-3xl lg:text-4xl">
          To increase the number of culturally responsible Black engineers who excel academically,
          succeed professionally, and positively impact the community.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 border-t border-neutral-300 pt-10 sm:grid-cols-2 sm:gap-14">
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              What we envision
            </h3>
            <p className="mx-auto mt-4 max-w-prose text-neutral-700 sm:mx-0">
              A world where Black engineers are leaders in innovation and creators of positive
              change within their communities.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              What we do about it
            </h3>
            <p className="mx-auto mt-4 max-w-prose text-neutral-700 sm:mx-0">
              We give students the tools, resources, and networks to thrive academically and
              professionally, and we build a community that makes excellence a shared habit. The
              motivation behind that work is what we call our <i className="font-bold">NSBE Why</i>.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 w-max max-w-full border-l-2 border-amber-500 pl-4 text-base font-semibold sm:text-lg">
          Membership is open to all University of Houston students.
        </p>
      </section>

      {/* Why NSBE */}
      <section className="mx-auto w-11/12 max-w-6xl py-14 sm:py-20">
        <SectionHeading eyebrow="In their words" title="Why NSBE?" />

        <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-700 sm:mb-12">
          {`We stay motivated by having a deep understanding of our "Why NSBE." Here is what this year's officers have to say about theirs.`}
        </p>

        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Join */}
      <section className="mx-auto w-11/12 max-w-6xl py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Image
              className="h-auto w-full rounded-2xl object-cover"
              src="/event-gallery/gbmshot.png"
              alt="UH NSBE general body meeting"
              width={700}
              height={700}
            />
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <h2 className="text-4xl sm:text-5xl">Join our community</h2>
            <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-amber-500 lg:mx-0" />
            <p className="mx-auto mt-6 max-w-prose text-neutral-700 lg:mx-0">
              UH NSBE is more than just an organization, it’s a family. Come learn what it means to
              be part of the NSBEfam at the University of Houston.
            </p>
            <Link href="/membership" className="btn mt-8">
              Become a member
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
