import { getPayload } from 'payload'
import config from '@payload-config'

type Props = {
  params: Promise<{ segments: string[] }>
}

export async function ContactView({ params }: Props) {
  const { segments } = await params
  const id = segments?.[segments.length - 1]

  const payload = await getPayload({ config })
  const doc = await payload.findByID({
    collection: 'contact-submissions',
    id,
  })

  if (!doc) return <p>Introuvable</p>

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '42rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '9999px',
            backgroundColor: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {doc.firstName?.[0]}
        </div>
        <div>
          <p style={{ fontWeight: 'bold', margin: 0 }}>
            {doc.firstName} {doc.lastName}
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
            {doc.email} · {doc.phone}
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#f3f4f6',
          borderRadius: '1rem',
          borderTopLeftRadius: '0',
          padding: '1rem 1.25rem',
          maxWidth: '65ch',
        }}
      >
        <p style={{ margin: 0 }}>{doc.message}</p>
      </div>

      <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
        {doc.createdAt ? new Date(doc.createdAt).toLocaleString() : ''}
      </p>
    </div>
  )
}
