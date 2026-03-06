import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        <p style={{ color: '#71717a', fontSize: '22px', marginBottom: '12px', fontFamily: 'monospace' }}>
          owenhochwald.com
        </p>
        <h1 style={{ color: '#ffffff', fontSize: '72px', fontWeight: '500', lineHeight: '1.1', margin: '0 0 16px 0' }}>
          Owen Hochwald
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '28px', margin: '0' }}>
          Software Engineer · UBC Computer Science
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
