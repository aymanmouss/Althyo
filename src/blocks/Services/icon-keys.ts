export const iconKeys = [
  'brand',
  'web',
  'uiux',
  'marketing',
  'seo',
  'photo',
  'house',
  'shoppingCart',
  'cloudUpload',
  'tabletSmartphone',
  'mapPinHouse',
] as const

export type IconKey = (typeof iconKeys)[number]
