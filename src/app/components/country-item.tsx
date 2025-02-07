import React from 'react'

interface Props {
  item: string
  value: string | number | string[]
}

function CountryItem({ item, value }: Props) {
  return (
    <hgroup className='flex gap-1 text-sm mb-1 dark:text-lightBG'>
      <h3 className='font-bold text-gray-800 dark:text-gray-300'>{item}:</h3>
      <p className='text-gray-700 font-medium dark:text-gray-400'>
        {(typeof value === 'string' || typeof value === 'number') && value}
        {typeof value === 'object' && value.map(v => v)}
      </p>
    </hgroup>
  )
}

export default CountryItem
