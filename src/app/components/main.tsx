'use client'

import { CountryType } from '@/lib/types'
import Country from './country'
import SearchFilter from './search-filter'
import { Button } from '@/components/ui/button'
import { FormEvent, useEffect, useState } from 'react'

function Main() {
  const [allCountries, setAllCountries] = useState<CountryType[]>([])
  const [visibleCount, setVisibleCount] = useState<number>(12)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchCountries() {
      setIsLoading(true)
      try {
        const res = await fetch(
          'https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,name,population,flags,region',
        )
        const data = (await res.json()) as CountryType[]

        if (data[0].name) {
          data.sort((a, b) => a.name.common.localeCompare(b.name.common))
          setAllCountries(data)
        }
      } catch (err) {
        console.log(err)
        setIsError(true)
        throw new Error('Fetching failed!')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCountries()
  }, [])

  function loadMore() {
    setVisibleCount(prev => prev + 16)
  }

  async function searchByName(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    const inputVal = e.currentTarget.country.value
    console.log(inputVal)
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${inputVal}`)
      const data = (await res.json()) as CountryType[]
      console.log(data)
      if (data[0].name) {
        setAllCountries(data)
      }
    } catch (error) {
      console.log(error)
      setIsError(true)
      throw new Error('Filtering failed!')
    } finally {
      setIsLoading(false)
    }
  }

  async function searchByRegion(region: string) {
    setIsLoading(true)

    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const data = (await res.json()) as CountryType[]
      if (data[0].name) {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setAllCountries(data)
      }
    } catch (error) {
      console.log(error)
      setIsError(true)
      throw new Error('Filtering failed!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='flex-1 w-[90%] max-w-[1300px] mx-auto py-12 '>
      {!isLoading && isError ? (
        <hgroup className='flex justify-center flex-col items-center gap-2'>
          <h2 className='text-center col-span-4 animate-pulse'>
            no country found!
          </h2>
          <Button onClick={() => setIsError(false)} variant={'outline'}>
            Try Again
          </Button>
        </hgroup>
      ) : (
        <>
          <SearchFilter
            searchByName={searchByName}
            searchByRegion={searchByRegion}
          />
          <section className='mt-12 grid grid-cols-1 sm:grid-cols-2 min-[850px]:grid-cols-3 min-[1100px]:grid-cols-4 gap-12'>
            {isLoading && (
              <p className='text-center col-span-4 animate-pulse'>loading...</p>
            )}
            {!isLoading && !isError
              ? allCountries
                  .slice(0, visibleCount)
                  .map(country => (
                    <Country
                      key={country.population}
                      flag={country.flags.png}
                      name={country.name.common}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                    />
                  ))
              : null}
          </section>
          <div className='w-full flex justify-center mt-12'>
            {!isLoading && !isError && allCountries.length > 20 && (
              <Button
                onClick={loadMore}
                className='px-6 bg-white text-gray-800 hover:text-gray-700 hover:bg-lightBG'
              >
                Load More
              </Button>
            )}
          </div>
        </>
      )}
    </main>
  )
}

export default Main
