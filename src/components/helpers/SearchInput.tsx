import { FC, Dispatch, SetStateAction, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Input, InputProps } from '@ui'
import { Search } from '@icons'

export type SearchInputProps = {
  searchTerm: string
  setSearchTerm: (value: string) => void
  isTyping: boolean
  setIsTyping: Dispatch<SetStateAction<boolean>>
} & InputProps

const SearchInput: FC<SearchInputProps> = ({
  isTyping,
  setIsTyping,
  setSearchTerm,
  searchTerm,
  disabled,
  ...props
}: SearchInputProps) => {
  const { register, getValues, reset } = useForm({
    defaultValues: {
      searchTerm,
    },
  })
  const searchTimeoutRef = useRef(null as unknown)

  const _setIsTyping = () => {
    if (!isTyping) setIsTyping(true)
    if (searchTimeoutRef.current)
      clearTimeout(searchTimeoutRef.current as number)
    searchTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      setSearchTerm(getValues('searchTerm'))
    }, 2000)
  }

  useEffect(() => {
    if (searchTerm === '') reset({ searchTerm: '' })
  }, [searchTerm])

  return (
    <Input
      before={<Search />}
      size='s'
      placeholder='Search...'
      disabled={disabled}
      onKeyDown={_setIsTyping}
      {...register('searchTerm')}
      {...props}
    />
  )
}

export default SearchInput
