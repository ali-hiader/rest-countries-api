import { CountryType } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import BackBtn from '../components/back-btn'
import CountryItem from '../components/country-item'

interface Props {
  params: {
    name: string
  }
}

async function DetailsPage({ params }: Props) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.name.toLowerCase()}`,
  )
  const data = (await res.json()) as CountryType[]
  console.log(data)
  const country = data[0]

  return (
    <main className='w-[90%] max-w-[1300px] mx-auto py-12'>
      <div className='w-full'>
        <BackBtn />
      </div>
      <div className='mt-12 md:h-96 h-fit grid grid-cols-1 grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 gap-10 place-content-start'>
        {country ? (
          <div className='overflow-hidden'>
            <Image
              className='w-full h-full shadow-md object-left object-contain'
              src={country.flags.png}
              alt={country.name.common}
              width={400}
              height={350}
            />
          </div>
        ) : (
          <p className='col-span-2 text-center'>loading...</p>
        )}
        <section className='flex justify-center flex-col gap-6 py-8'>
          <h2 className='text-xl font-bold'>{country.name.common}</h2>
          <div className='grid lg:grid-rows-7 lg:grid-flow-col flex-wrap gap-1'>
            <CountryItem item={'Official Name'} value={country.name.official} />
            <CountryItem item={'Code Name'} value={country.cioc} />
            <CountryItem item={'Population'} value={country.population} />
            <CountryItem item={'Region'} value={country.region} />
            <CountryItem item={'Sub Region'} value={country.subregion} />
            <CountryItem item={'Capital'} value={country.capital} />
            <CountryItem item={'Top Level Domain'} value={country.tld} />
            <CountryItem item={'Area'} value={country.area} />
            <CountryItem item={'Time Zone'} value={country.timezones[0]} />
          </div>
          <hgroup className='flex md:items-center flex-col md:flex-row gap-3'>
            <h2 className='text-sm font-bold text-gray-800 dark:text-lightBG'>
              Border Countries:
            </h2>
            <div className='flex items-center flex-wrap gap-2'>
              {country.borders ? (
                country.borders.map(border => (
                  <span
                    className='py-1 dark:text-gray-400 dark:bg-headerDarkBG px-5 border border-input bg-background shadow dark:shadow-lg text-xs font-medium'
                    key={border}
                  >
                    {border}
                  </span>
                ))
              ) : (
                <p className='text-sm'>
                  {country.name.common.split(' ')[0]}{' '}
                  {country.name.common.split(' ')[1]} has no borders countries.
                </p>
              )}
            </div>
          </hgroup>{' '}
        </section>
      </div>
    </main>
  )
}

export default DetailsPage
