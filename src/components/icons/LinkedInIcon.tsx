import type { SVGProps } from 'react'

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight={700} fill="currentColor">
        in
      </text>
    </svg>
  )
}
