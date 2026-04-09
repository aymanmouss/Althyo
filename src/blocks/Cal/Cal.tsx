'use client'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

type Props = {
  title?: string
  description?: string
}

export default function CalComponent({ title, description }: Props) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: 'althyo' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <section className="py-15 bg-[#efefef4a]" id="contact">
      <div className="container-site flex flex-col items-center gap-5">
        <div className="w-full  rounded-xl py-10 flex flex-col gap-5 items-center justify-center">
          {title && (
            <h2 className="text-center text-4xl md:text-5xl uppercase text-balance font-medium">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-center text-lg md:text-xl text-balance max-w-3xl">{description}</p>
          )}
          <div className="bg-white pt-15 rounded-xl max-w-6xl w-full mt-10 shadow-lg">
            <Cal
              namespace="althyo"
              calLink="althyo/25min"
              calOrigin="https://cal.eu"
              style={{ width: '100%', height: '600px', overflow: 'auto' }}
              config={{ layout: 'week_view' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
