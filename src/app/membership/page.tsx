'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Section, SectionHeading, Frame } from '@/components/layout'

const tiers = [
  {
    name: 'Local Membership',
    price: '$20',
    cadence: 'Fall & Spring semester',
    href: '/membership/uh',
    external: false,
    image:
      'https://images.unsplash.com/photo-1612214495858-4f32b96155a7?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'UH NSBE members at a chapter event',
    benefits: [
      'Chapter membership shirt',
      'Access to UH NSBE scholarships, resume templates, partner job postings and career roadmaps',
      'Discounted travel and housing rates for Regional and National Conferences (national membership required to attend)',
      'Resume included in the bank sent to corporate partners',
    ],
  },
  {
    name: 'National Membership',
    price: '$20',
    cadence: '12 months',
    href: 'https://nsbe.org/collegiate/',
    external: true,
    image:
      'https://images.unsplash.com/photo-1581094368940-5a08c24fd0a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Engineering students working together',
    benefits: [
      'Required to attend Regional and National Conferences',
      'Access to 300+ companies offering internships, co-ops and full-time roles at national career fairs',
      'Access to National Scholarships',
      'An unparalleled network of diverse engineers and scientists',
    ],
  },
]

const benefits = [
  {
    title: 'Professional and Academic Development',
    body: "UH NSBE hosts countless events every year to make sure you are always pushing towards your dream career. We understand the challenges that come with pursuing a STEM major, so we support you every step of the way. It's 4.0 season.",
    image: '/event-gallery/gbmshot1.png',
    alt: 'UH NSBE study night',
  },
  {
    title: 'Networking and Scholarships',
    body: 'Active NSBE members have no problem connecting with industry professionals and securing their bags. We also have company sponsors that hand out scholarships exclusively to NSBE members every year.',
    image: '/event-gallery/networkevent.png',
    alt: 'UH NSBE networking event',
  },
  {
    title: 'Family and Community',
    body: 'NSBE is committed to being a positive impact on its members and their communities. Join us and support our mission to give back through PCI events, volunteering, and more.',
    image: null,
    alt: '',
  },
]

export default function Page() {
  // Ensure scroll always enabled (legacy modal removed)
  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  return (
    <>
      <header className="mx-auto w-11/12 max-w-6xl pb-6 pt-14 text-center sm:pb-8 sm:pt-20">
        <h1 className="text-6xl md:text-7xl">Become a Member</h1>
        <p className="mx-auto mt-6 max-w-2xl font-semibold text-neutral-700">
          Membership is open to all University of Houston students.
        </p>
      </header>

      {/* Tiers */}
      <Section>
        <SectionHeading eyebrow="Two steps" title="Steps to Membership" />

        <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-700 sm:mb-12">
          Register with our chapter below. We ask that you also purchase the national membership to
          reap the perks and benefits of a national network of Black engineers and partners.
        </p>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-neutral-900 text-white shadow-sm"
            >
              <div className="relative h-44 w-full sm:h-52">
                <Image
                  src={tier.image}
                  alt={tier.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl">{tier.name}</h3>
                <span aria-hidden className="mt-4 block h-px w-12 bg-amber-500" />

                <ul className="mt-5 flex flex-col gap-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm text-neutral-300 sm:text-base">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  {...(tier.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="mt-8 flex items-center justify-between rounded-xl bg-amber-600 px-5 py-4 transition-colors hover:bg-amber-700"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                      Register now
                    </span>
                    <span className="mt-1 block text-sm">{tier.cadence}</span>
                  </span>
                  <span className="text-3xl font-semibold">{tier.price}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeading eyebrow="Why join" title="Benefits of Membership" />

        <div className="flex flex-col gap-14 sm:gap-20">
          {benefits.map((benefit, index) =>
            benefit.image ? (
              <div
                key={benefit.title}
                className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={`text-center lg:text-left ${index % 2 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl">{benefit.title}</h3>
                  <span
                    aria-hidden
                    className="mx-auto mt-5 block h-px w-12 bg-amber-500 lg:mx-0"
                  />
                  <p className="mx-auto mt-5 max-w-prose text-neutral-700 lg:mx-0">{benefit.body}</p>
                </div>

                <Frame className={index % 2 ? 'lg:order-1' : ''}>
                  <Image
                    className="h-auto w-full rounded-lg"
                    src={benefit.image}
                    alt={benefit.alt}
                    width={600}
                    height={700}
                  />
                </Frame>
              </div>
            ) : (
              <div key={benefit.title} className="mx-auto max-w-3xl text-center">
                <h3 className="text-2xl sm:text-3xl">{benefit.title}</h3>
                <span aria-hidden className="mx-auto mt-5 block h-px w-12 bg-amber-500" />
                <p className="mx-auto mt-5 max-w-prose text-neutral-700">{benefit.body}</p>
              </div>
            )
          )}
        </div>
      </Section>
    </>
  )
}
