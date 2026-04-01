// mockups/RealEstateMockup.tsx
export default function RealEstateMockup() {
  return (
    <div className="w-full h-full bg-white text-xs flex flex-col">
      {/* navbar */}
      <div className="bg-stone-800 text-white px-2 py-1 flex justify-between items-center">
        <span className="font-bold text-[10px]">ImmoLux</span>
        <div className="flex gap-1">
          <span className="text-[8px]">Acheter</span>
          <span className="text-[8px]">Louer</span>
        </div>
      </div>
      {/* hero image placeholder */}
      <div className="bg-stone-200 h-20 flex items-center justify-center">
        <span className="text-stone-400 text-[9px]">🏡 Trouvez votre maison</span>
      </div>
      {/* search bar */}
      <div className="px-2 py-1">
        <div className="bg-stone-100 rounded px-2 py-1 text-[8px] text-stone-400">
          Ville, quartier...
        </div>
      </div>
      {/* cards */}
      <div className="flex gap-1 px-2">
        {['€ 320 000', '€ 185 000'].map((price) => (
          <div key={price} className="flex-1 bg-stone-100 rounded p-1">
            <div className="bg-stone-300 h-8 rounded mb-1" />
            <div className="text-[7px] font-bold text-stone-700">{price}</div>
            <div className="text-[6px] text-stone-400">Paris 15e</div>
          </div>
        ))}
      </div>
    </div>
  )
}
