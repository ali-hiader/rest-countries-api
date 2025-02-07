import React from 'react'
import type { SVGProps } from 'react'

export default function BackArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={72}
      height={72}
      viewBox='0 0 72 72'
      {...props}
    >
      <path
        // fill='#1f2937'
        d='M22.788 51.534L5 35.036l17.788-16.498l3.789 4.076l-10.396 9.641H67v5.562H16.181l10.396 9.642z'
      ></path>
      <path
        fill='none'
        stroke='#1f2937'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={2}
        d='M22.788 51.534L5 35.036l17.788-16.498l3.789 4.076l-10.396 9.641H67v5.562H16.181l10.396 9.642z'
      ></path>
    </svg>
  )
}
