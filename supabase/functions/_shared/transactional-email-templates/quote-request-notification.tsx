import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const OWNER_EMAIL = 'sales@gmtherapytx.com'

interface QuoteItem {
  id?: string
  name?: string
  sku?: string
  quantity?: number
  price?: number | null
}

interface QuoteRequestNotificationProps {
  name?: string
  email?: string
  phone?: string
  company?: string | null
  address?: string | null
  notes?: string | null
  items?: QuoteItem[]
  submittedAt?: string
}

const QuoteRequestNotificationEmail = ({
  name = 'Customer',
  email = '',
  phone = '',
  company,
  address,
  notes,
  items = [],
  submittedAt,
}: QuoteRequestNotificationProps) => {
  const totalQty = items.reduce((sum, i) => sum + (i.quantity ?? 0), 0)
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New quote request from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Quote Request</Heading>
          <Text style={lead}>
            You have received a new quote request through your products site.
          </Text>

          <Section style={card}>
            <Heading as="h2" style={h2}>Customer</Heading>
            <Text style={row}><strong>Name:</strong> {name}</Text>
            <Text style={row}><strong>Email:</strong> {email}</Text>
            <Text style={row}><strong>Phone:</strong> {phone}</Text>
            {company && <Text style={row}><strong>Company:</strong> {company}</Text>}
            {address && <Text style={row}><strong>Shipping address:</strong> {address}</Text>}
            {notes && <Text style={row}><strong>Notes:</strong> {notes}</Text>}
            {submittedAt && (
              <Text style={meta}>Submitted: {submittedAt}</Text>
            )}
          </Section>

          <Section style={card}>
            <Heading as="h2" style={h2}>
              Requested Items ({totalQty})
            </Heading>
            {items.length === 0 ? (
              <Text style={row}>No items.</Text>
            ) : (
              items.map((item, idx) => (
                <Section key={item.id || idx} style={itemRow}>
                  <Text style={itemName}>{item.name ?? 'Unnamed item'}</Text>
                  <Text style={itemMeta}>
                    SKU: {item.sku ?? 'N/A'} &nbsp;·&nbsp; Qty: {item.quantity ?? 0}
                    {typeof item.price === 'number' ? ` · $${item.price.toFixed(2)}` : ''}
                  </Text>
                </Section>
              ))
            )}
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            Reply directly to {email} to follow up with the customer.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: QuoteRequestNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New quote request from ${data?.name ?? 'a customer'}`,
  to: OWNER_EMAIL,
  displayName: 'Quote request notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '555-123-4567',
    company: 'Acme Clinic',
    address: '123 Main St, Dallas, TX',
    notes: 'Please include pricing on bulk orders.',
    submittedAt: new Date().toISOString(),
    items: [
      { id: '1', name: 'Therapy Item A', sku: 'SKU-001', quantity: 2, price: 49.99 },
      { id: '2', name: 'Therapy Item B', sku: 'SKU-002', quantity: 1, price: null },
    ],
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px' }
const h2 = { fontSize: '16px', fontWeight: 'bold', color: '#111827', margin: '0 0 12px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }
const lead = { fontSize: '14px', color: '#4b5563', lineHeight: '1.5', margin: '0 0 24px' }
const card = { backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '16px 20px', margin: '0 0 16px' }
const row = { fontSize: '14px', color: '#111827', lineHeight: '1.6', margin: '0 0 6px' }
const meta = { fontSize: '12px', color: '#6b7280', margin: '12px 0 0' }
const itemRow = { borderBottom: '1px solid #e5e7eb', padding: '10px 0', margin: 0 }
const itemName = { fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 2px' }
const itemMeta = { fontSize: '12px', color: '#6b7280', margin: 0 }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#9ca3af', margin: 0 }
