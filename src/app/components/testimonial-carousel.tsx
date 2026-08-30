'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

type Testimonial = {
  name: string
  position: string
  quote: string
  image: string
}

const ROTATE_MS = 7000

// Short quotes set larger so every slide carries similar visual weight.
function quoteSize(quote: string) {
  if (quote.length > 240) return 'text-xl sm:text-2xl lg:text-[1.6rem]'
  if (quote.length > 120) return 'text-2xl sm:text-3xl lg:text-[2.2rem]'
  return 'text-3xl sm:text-4xl lg:text-5xl'
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length
  const active = testimonials[index]

  const goTo = useCallback(
    (nextIndex: number) => setIndex(((nextIndex % count) + count) % count),
    [count]
  )

  useEffect(() => {
    if (paused || count < 2) return
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), ROTATE_MS)
    return () => clearInterval(timer)
  }, [paused, count])

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    }
  }

  return (
    <div
      className="mx-auto w-full max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-14">
        {/* Portrait with offset amber block */}
        <div className="relative aspect-[4/5] w-52 shrink-0 sm:w-56 lg:w-72">
          <span
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-amber-500 lg:translate-x-4 lg:translate-y-4"
          />
          <span className="absolute inset-0 overflow-hidden rounded-2xl bg-neutral-200">
            <Image
              key={active.image}
              src={active.image}
              alt={active.name}
              fill
              quality={90}
              className="testimonial-in object-cover object-[center_18%]"
              sizes="(min-width: 1024px) 288px, 224px"
            />
          </span>
        </div>

        {/*
          All quotes are stacked in one grid cell, so the block is exactly as tall as the
          longest quote and nothing below it moves when the slide changes.
        */}
        <div className="grid flex-1" aria-live="polite">
          {testimonials.map((testimonial, slideIndex) => {
            const shown = slideIndex === index
            return (
              <figure
                key={testimonial.name}
                aria-hidden={!shown}
                className={`col-start-1 row-start-1 self-start text-center sm:text-left ${
                  shown ? 'testimonial-in' : 'invisible'
                }`}
              >
                <span
                  aria-hidden
                  className="font-display -mb-3 block text-5xl leading-none text-amber-500/70 lg:-mb-4 lg:text-6xl"
                >
                  &ldquo;
                </span>

                <blockquote className={`font-display leading-[1.2] ${quoteSize(testimonial.quote)}`}>
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-6">
                  <span aria-hidden className="mx-auto mb-3 block h-px w-12 bg-amber-500 sm:mx-0" />
                  <span className="block text-sm font-semibold uppercase tracking-[0.12em]">
                    {testimonial.name}
                  </span>
                  <span className="mt-1 block text-sm text-neutral-500">{testimonial.position}</span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>

      {/* Name tabs carry the attribution and double as the progress indicator */}
      <div
        role="tablist"
        aria-label="Officer reflections"
        onKeyDown={onKeyDown}
        className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-6"
      >
        {testimonials.map((testimonial, tabIndex) => {
          const selected = tabIndex === index
          return (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => goTo(tabIndex)}
              className="group w-[calc(50%-0.75rem)] text-center focus:outline-none sm:w-36 sm:text-left lg:w-44 focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-4 focus-visible:ring-offset-[#e6e6e6]"
            >
              <span className="block h-0.5 w-full overflow-hidden rounded-full bg-neutral-400/70">
                {selected && (
                  <span
                    key={index}
                    className="testimonial-progress block h-full bg-amber-600"
                    style={{ animationPlayState: paused ? 'paused' : 'running' }}
                  />
                )}
              </span>
              <span
                className={`mt-3 block text-sm transition-colors ${
                  selected ? 'font-semibold text-black' : 'text-neutral-500 group-hover:text-black'
                }`}
              >
                {testimonial.name}
              </span>
              <span
                className={`mt-0.5 block text-xs transition-colors ${
                  selected ? 'text-neutral-600' : 'text-neutral-500'
                }`}
              >
                {testimonial.position}
              </span>
            </button>
          )
        })}
      </div>

    </div>
  )
}
