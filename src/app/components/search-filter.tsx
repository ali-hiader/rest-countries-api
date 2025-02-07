import Search from '@/components/icons/search'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { cn } from '@/lib/utils'
import { FormEvent } from 'react'

interface Props {
  searchByName: (e: FormEvent<HTMLFormElement>) => void
  searchByRegion: (region: string) => void
}

function SearchFilter({ searchByName, searchByRegion }: Props) {
  return (
    <section className='flex flex-col min-[850px]:flex-row gap-10 min-[850px]:items-center min-[850px]:justify-between'>
      <form
        className={cn(
          'flex items-center gap-3 h-12 sm:w-1/2 min-[850px]:w-1/3 rounded-md border border-input bg-white dark:bg-headerDarkBG px-4 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        )}
        onSubmit={searchByName}
      >
        <label htmlFor='search'>
          <Search className='size-5 text-lightInput dark:text-lightBG' />
        </label>
        <Input
          className='w-full py-1 dark:bg-headerDarkBG dark:text-lightBG dark:placeholder:text-lightBG h-full placeholder:text-sm text-sm focus:outline-none'
          placeholder='Search for a country...'
          id='search'
          name='country'
        />
      </form>
      <Select onValueChange={searchByRegion}>
        <SelectTrigger className='flex items-center justify-between text-sm gap-3 h-12 w-52 rounded-md border border-input bg-white dark:dark:bg-headerDarkBG px-5 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'>
          <SelectValue placeholder='Filter by Region' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='asia'>Asia</SelectItem>
            <SelectItem value='americas'>Americas</SelectItem>
            <SelectItem value='europe'>Europe</SelectItem>
            <SelectItem value='africa'>Africa</SelectItem>
            <SelectItem value='oceania'>Oceania</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  )
}

export default SearchFilter
