'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Section, SectionHeading, Frame } from '@/components/layout'

type PackageType = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Vanguard'

const packages: Record<PackageType, { title: string; amount: string; benefits: string[] }> = {
  Bronze: {
    title: 'Bronze Sponsor',
    amount: '$500 – $1,999',
    benefits: ['Access to UH NSBE resume bank', 'Invitation to Winter & Spring banquet'],
  },
  Silver: {
    title: 'Silver Sponsor',
    amount: '$2,000 – $3,999',
    benefits: [
      'Host ONE info session or professional workshop',
      'Feature job openings in 2 newsletters',
      'Benefits of Bronze level',
    ],
  },
  Gold: {
    title: 'Gold Sponsor',
    amount: '$4,000 – $5,999',
    benefits: [
      'Company logo on chapter website',
      'Present at ONE General Body Meeting',
      'Benefits of Silver & Bronze levels',
    ],
  },
  Platinum: {
    title: 'Platinum Sponsor',
    amount: '$6,000 – $7,499',
    benefits: [
      'Company logo on chapter T-shirt',
      'Feature job openings on NSBE social media',
      'Benefits of Gold, Silver & Bronze levels',
    ],
  },
  Vanguard: {
    title: 'Vanguard Sponsor',
    amount: '$7,500 and above',
    benefits: [
      'Eligible for Sponsor of the Year Award',
      'Scholarship in company’s name',
      'Recognition at chapter events',
      'Benefits of Platinum, Gold, Silver & Bronze levels',
    ],
  },
}

const partners = [
  { src: '/partners/albemarle.webp', name: 'Albemarle' },
  { src: '/partners/black_and_veatch.png', name: 'Black & Veatch' },
  { src: '/partners/BP.jpeg', name: 'BP' },
  { src: '/partners/kiewit.jpg', name: 'Kiewit' },
  { src: '/partners/linde.jpeg', name: 'Linde' },
  { src: '/partners/technipfmc.jpg', name: 'TechnipFMC' },
  { src: '/partners/visa.jpg', name: 'Visa' },
]

export default function Page() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('Bronze')
  const active = packages[selectedPackage]

  return (
    <>
      <header className="mx-auto w-11/12 max-w-6xl pb-6 pt-14 text-center sm:pb-8 sm:pt-20">
        <h1 className="text-6xl md:text-7xl">Partner with UH NSBE</h1>
        <p className="mx-auto mt-6 max-w-2xl text-neutral-700">
          A partnership is far greater than a financial commitment. It helps build a solid
          foundation for engineers at the University of Houston.
        </p>
      </header>

      {/* Intro */}
      <Section space="sm">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-neutral-700">
            If you are interested in partnering with our chapter, please complete the{' '}
            <a
              href="/files/PartnershipPacket_2024-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-800"
            >
              Sponsorship Packet
            </a>
            . Your contributions support programming for our members and help send talented young
            engineers to Regional and National Conferences, where they meet industry professionals
            and secure internships. Any amount is appreciated.
          </p>

          <div className="mx-auto mt-8 max-w-2xl border-t border-neutral-300 pt-6 text-sm italic text-neutral-600">
            <p>
              Questions about the Sponsorship Packet? Email our treasurer at treasurer@uhnsbe.org.
            </p>
            <p className="mt-2">
              UH NSBE is a 501(c)(3) nonprofit organization; donors receive an acknowledgement
              receipt for tax purposes.
            </p>
          </div>
        </div>
      </Section>

      {/* Packages + payment */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Packages */}
          <div className="lg:col-span-3">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-left">Sponsorship Packages</h2>
            <span aria-hidden className="mx-auto mt-5 block h-px w-12 bg-amber-500 lg:mx-0" />

            <div
              role="tablist"
              aria-label="Sponsorship levels"
              className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {(Object.keys(packages) as PackageType[]).map((pkg) => {
                const selected = selectedPackage === pkg
                return (
                  <button
                    key={pkg}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`rounded-full px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e6e6e6] ${
                      selected
                        ? 'bg-amber-600 font-semibold text-white'
                        : 'bg-white text-neutral-700 ring-1 ring-black/5 hover:text-black'
                    }`}
                  >
                    {pkg}
                  </button>
                )
              })}
            </div>

            {/* Every level renders into one grid cell so the card never changes height */}
            <div className="mt-6 grid rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              {(Object.keys(packages) as PackageType[]).map((pkg) => {
                const shown = pkg === selectedPackage
                const data = packages[pkg]
                return (
                  <div
                    key={pkg}
                    aria-hidden={!shown}
                    className={`col-start-1 row-start-1 ${shown ? '' : 'invisible'}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                      {data.amount}
                    </p>
                    <h3 className="mt-3 text-2xl">{data.title}</h3>
                    <ul className="mt-5 flex flex-col gap-3">
                      {data.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3 text-neutral-700">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Payment */}
          <div className="lg:col-span-2">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-left">Payment Methods</h2>
            <span aria-hidden className="mx-auto mt-5 block h-px w-12 bg-amber-500 lg:mx-0" />

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                className="btn"
                href="/files/PartnershipPacket_2024-25.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor
              </a>
              <a className="btn" href={process.env.NEXT_PUBLIC_STRIPE_DONATE_LINK}>
                Donate
              </a>
            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                Digital payments
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-neutral-700">
                <li>PayPal: finance@uhnsbe.org</li>
                <li>CashApp: $UHNSBE</li>
                <li>Credit / debit cards</li>
              </ul>

              <p className="mt-6 border-t border-neutral-200 pt-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                By check
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-neutral-700">
                <li>
                  Make checks payable to{' '}
                  <i>National Society of Black Engineers at University of Houston</i>
                </li>
                <li>
                  University of Houston NSBE
                  <br />
                  4464 University Drive
                  <br />
                  Commons Desk Mailbox #360
                  <br />
                  Houston, TX 77204
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section>
        <SectionHeading eyebrow="Thank you" title="Our Current Partners" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-28 items-center justify-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:h-32 sm:p-6"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={200}
                height={100}
                quality={90}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
