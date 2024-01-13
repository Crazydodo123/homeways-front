import { useState } from 'react'

export const useField = (id, type='text') => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clear = () => {
    setValue('')
  }

  return {
    id,
    type,
    value,
    onChange,
    clear
  }
}