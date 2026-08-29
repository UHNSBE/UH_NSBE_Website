import React from 'react'

/**
 * Shared layout primitives.
 *
 * Every section on the site uses these so the content edge lands in the same
 * place on every page. Before this, each section picked its own width
 * (w-11/12, max-w-6xl, max-w-screen-2xl, xl:w-10/12) and the left edge
 * wandered by 50-100px as you scrolled.
 */

const SPACE = {
  none: '',
  sm: 'py-10 sm:py-14',
  md: 'py-14 sm:py-20',
  lg: 'py-20 sm:py-28',
} as const

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-11/12 max-w-6xl ${className}`}>{children}</div>
}

export function Section({
  children,
  space = 'md',
  className = '',
  bleed = false,
}: {
  children: React.ReactNode
  space?: keyof typeof SPACE
  className?: string
  /** Skip the container — for full-bleed sections that manage their own width. */
  bleed?: boolean
}) {
  return (
    <section className={`${SPACE[space]} ${className}`}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  className = '',
}: {
  eyebrow?: string
  title: string
  className?: string
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-center text-4xl sm:text-5xl">{title}</h2>
      <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-amber-500" />
    </div>
  )
}

/** Photos and embeds sit in the same white mat everywhere. */
export function Frame({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-6 ${className}`}>
      {children}
    </div>
  )
}
