import React from 'react'
interface InputProps {
  defaultValue?: string | number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onSubmit?: React.FormEventHandler<HTMLInputElement>
  required?: boolean
  id?:string
  placeholder?:string
  name: string
  value: string
  error: boolean
}
const Input = ({
  defaultValue = '',
  onChange = () => {},
  onSubmit = () => {},
  required = false,
  id,
  placeholder,
  name,
  value,
  error
}: InputProps) => {
  return (
    <>
      <input
        type="text"
        value={value}
        name={name}
        className={
          `w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border focus:border-white focus:border-opacity-30
          ${error ? 'border-red-600 focus:border-red-600 focus:border-opacity-90' : ''}`}
        onChange={onChange}
        onSubmit={onSubmit}
        required={required}
        id={id}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
export type {InputProps}
