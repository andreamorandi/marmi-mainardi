import Input, { InputProps } from 'components/atoms/Form/Input'
import Label from 'components/atoms/Label'
import { useEffect, useState } from 'react'
import randomString from 'utils/randomString'

interface InputGroupProps extends InputProps {
  label: string
  name: string
  value: string
  error: boolean
}
const InputGroup = ({
  label,
  defaultValue,
  onChange,
  onSubmit,
  required,
  placeholder,
  name,
  value,
  error
}: InputGroupProps) => {
  const [randomId, setRandomId] = useState<string>('')
  useEffect(() => {
    setRandomId(randomString(64))
  }, [])
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <Input
        name={name}
        value={value}
        defaultValue={defaultValue}
        id={randomId}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder}
        required={required}
        error={error}
      />
    </div>
  )
}

export default InputGroup
