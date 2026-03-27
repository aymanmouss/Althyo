'use client'

import { useRowLabel } from '@payloadcms/ui'

/**
 * Custom row label for the navItems array field.
 * Displays the nav item's label in the collapsed row for better UX.
 */
export const NavRowLabel: React.FC = () => {
  const { data, rowNumber } = useRowLabel<{ label?: string }>()
  return <span>{data?.label ? data.label : `Nav Item ${(rowNumber ?? 0) + 1}`}</span>
}
