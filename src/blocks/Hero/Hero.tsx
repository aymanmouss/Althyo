import MessageIcon from '@/components/icons/message'
import { Button } from '@/components/ui/button'
import Decorations from '@/components/icons/Decorations'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'hero' }>

export default function Hero({
  heading,
  highlightWord,
  subtitle,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section className="bg-[#efefef4a] flex flex-col items-center justify-start sm:justify-center py-16">
      <div className="flex flex-col items-center justify-center gap-3 relative container-site">
        {/* Single h1 that wraps both heading lines and the highlight pill */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-7xl">
          {heading?.text1}
          {heading?.text2 && (
            <>
              <br />
              {heading.text2}
            </>
          )}
        </h1>

        <div className="-rotate-[1.13deg] inline-block relative">
          {/* Black offset layer — decorative */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black rounded-full translate-x-[2px] translate-y-[13px] md:translate-y-[15px] lg:translate-y-[17px] rotate-[1.13deg]"
          />
          {/* Highlight word rendered as a styled span, not a heading */}
          <span className="relative text-4xl md:text-5xl lg:text-7xl inline-block bg-secondary rounded-full px-5 md:px-6 lg:px-8 py-5 md:py-7 border-2 border-black">
            {highlightWord}
          </span>

          <div
            aria-hidden="true"
            className="hidden sm:block absolute lg:-top-60 md:-top-45 -top-40 lg:-right-50 -right-40 z-10"
          >
            <Decorations />
          </div>
          <div
            aria-hidden="true"
            className="absolute lg:top-70 md:top-50 top-60 lg:-left-80 md:-left-80 -left-50 z-10"
          >
            <Decorations />
          </div>
        </div>

        {/* Subtitle — use text-balance instead of manual <br> tags */}
        {(subtitle?.text1 || subtitle?.text2 || subtitle?.text3) && (
          <p className="text-center text-lg md:text-xl lg:text-2xl max-w-4xl sm:mt-18 mt-10 mb-7 text-balance">
            {[subtitle.text1, subtitle.text2, subtitle.text3].filter(Boolean).join(' ')}
          </p>
        )}

        <div className="flex gap-5 flex-col md:flex-row">
          {primaryCta?.url ? (
            <Button size="lg" asChild>
              <Link href={primaryCta.url}>
                {primaryCta.label} <MoveRight aria-hidden="true" />
              </Link>
            </Button>
          ) : (
            <Button size="lg">
              {primaryCta?.label} <MoveRight aria-hidden="true" />
            </Button>
          )}

          {secondaryCta?.url ? (
            <Button size="lg" variant="outline" asChild>
              <Link href={secondaryCta.url}>
                {secondaryCta.label} <MessageIcon aria-hidden="true" />
              </Link>
            </Button>
          ) : (
            <Button size="lg" variant="outline">
              {secondaryCta?.label} <MessageIcon aria-hidden="true" />
            </Button>
          )}
        </div>

        <Image
          src="/api/media/file/6293.png"
          alt="Hero illustration"
          width={150}
          height={100}
          className="mt-20 w-50"
          priority
        />
      </div>
    </section>
  )
}
