'use client'

import { useRowLabel } from '@payloadcms/ui'

type Props = {
  field: string
  label: string // fallback label e.g. "Service", "Nav Item"
}

export const RowLabel: React.FC<Props> = ({ field, label }) => {
  const { data, rowNumber } = useRowLabel<Record<string, string>>()
  return <span>{data?.[field] ? data[field] : `${label} ${(rowNumber ?? 0) + 1}`}</span>
}
