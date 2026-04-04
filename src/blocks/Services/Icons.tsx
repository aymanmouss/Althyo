import {
  Monitor,
  Smartphone,
  TrendingUp,
  Fingerprint,
  Search,
  Camera,
  House,
  ShoppingCart,
  CloudUpload,
  TabletSmartphone,
  MapPinHouse,
} from 'lucide-react'
import { IconKey } from './icon-keys'

export const ServiceIcons: Record<IconKey, React.ElementType> = {
  brand: Fingerprint,
  web: Smartphone,
  uiux: Monitor,
  marketing: TrendingUp,
  seo: Search,
  photo: Camera,
  house: MapPinHouse,
  shoppingCart: ShoppingCart,
  cloudUpload: CloudUpload,
  tabletSmartphone: TabletSmartphone,
  mapPinHouse: MapPinHouse,
}
