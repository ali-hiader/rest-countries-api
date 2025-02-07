import Image from 'next/image'
import Link from 'next/link'
import CountryItem from './country-item'

interface Props {
  flag: string
  name: string
  population: number
  region: string
  capital: string
}
export default function Country({
  flag,
  name,
  capital,
  population,
  region,
}: Props) {
  return (
    <Link
      href={`/${name}`}
      className='rounded place-self-center border bg-card dark:bg-headerDarkBG text-card-foreground shadow w-60 h-80 overflow-hidden'
    >
      <Image
        className='w-full h-1/2 shadow-sm'
        src={flag}
        alt='Flag Image'
        width={100}
        height={50}
      />
      <div className='p-6'>
        <h2 className='font-bold mb-4'>{name}</h2>
        <CountryItem item='Population' value={population} />
        <CountryItem item='Region' value={region} />
        <CountryItem item='Capital' value={capital} />
      </div>
    </Link>
  )
}
