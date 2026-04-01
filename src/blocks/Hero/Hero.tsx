import MessageIcon from '@/components/icons/message'
import { Button } from '@/components/ui/button'
import Decorations from '@/components/icons/Decorations'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#efefef4a] flex flex-col items-center justify-start sm:justify-center py-13">
      <div className="flex flex-col items-center justify-center gap-3 px-4  relative container-site">
        <h1 className="text-center text-4xl md:text-5xl lg:text-7xl">
          Votre Activité
          <br />
          Mérite Une Vraie
        </h1>
        <div className="-rotate-[1.13deg] inline-block relative">
          {/* Black offset layer */}
          <div className="absolute inset-0 bg-black rounded-full translate-x-[2px] translate-y-[13px] md:translate-y-[15px] lg:translate-y-[17px] rotate-[1.13deg]" />
          {/* Main pill */}
          <h2 className="relative text-4xl md:text-5xl lg:text-7xl inline-block bg-secondary rounded-full px-5 md:px-6 lg:px-8  py-5 md:py-7 border-2 border-black">
            Présence Digitale
          </h2>
          <div className="hidden sm:block absolute lg:-top-60 md:-top-45 -top-40 lg:-right-50 -right-40 z-10">
            <Decorations />
          </div>
          <div className="absolute lg:top-70 md:top-50 top-60 lg:-left-80 md:-left-80 -left-50 z-10">
            <Decorations />
          </div>
        </div>
        <p className="text-center text-lg md:text-xl lg:text-2xl max-w-4xl sm:mt-18 mt-10 mb-7 text-pretty">
          Althyo fusionne créativité et technologie pour les TPE & PME.
          <br className="hidden sm:block" /> De la stratégie locale à l'expertise immobilière
          connectée,
          <br className="hidden sm:block" /> nous transformons votre vision en une trajectoire de
          réussite numérique.
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <Button size={'lg'}>
            Découvrir nos solutions <MoveRight />
          </Button>
          <Button size={'lg'} variant={'outline'}>
            Demander un devis <MessageIcon />
          </Button>
        </div>
        <Image
          src="/api/media/file/6293.png"
          alt="Hero"
          width={150}
          height={100}
          className="mt-10 w-50"
        />
      </div>
    </section>
  )
}
