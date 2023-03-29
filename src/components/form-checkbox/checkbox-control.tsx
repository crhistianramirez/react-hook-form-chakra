import { Checkbox, CheckboxProps as ChakraCheckboxProps } from "@chakra-ui/react"
import { ChangeEvent, FC } from "react"
import { Control, get, useController } from "react-hook-form"

export interface CheckboxControlProps extends ChakraCheckboxProps {
  /**
   * The name of the input (required)
   */
  name: string

  /**
   * The label to be associated with the input
   */
  label?: string

  /**
   * @internal this property is implicitly passed down from CheckboxContainer, not part of public API
   */
  control?: Control<any, any>


  /** @internal this property is implicitly passed down from CheckboxContainer, not part of public API */
  checkboxValue?: any[]

  /** @internal this property is implicitly passed down from CheckboxContainer, not part of public API */
  setCheckboxValue?: (values: any[]) => void
}


export const CheckboxControl: FC<CheckboxControlProps> = (props: CheckboxControlProps) => {
  const { name, control, label, children, checkboxValue, setCheckboxValue, onChange, value, ...rest } = props
  if (!setCheckboxValue) {
    throw new Error('CheckboxControl must be wrapped by CheckboxContainer. If you need an individual checkbox please use CheckboxSingle')
  }
  const {
    field,
    fieldState: { isTouched },
    formState: { errors, isSubmitting }
  } = useController({ name, control })
  const error = get(errors, name, "")
  const isChecked = field.value instanceof Array ? field.value.includes(props.value) : false
  const { value: fieldValue, onChange: onFieldChange, ...fieldRest } = field;

  // this custom on change function lets us create an array of items
  // otherwise react hook forms default implementation is to set value to boolean
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let valuesArray = checkboxValue ?? []

    // update checkbox value]
    if (event.target.checked) {
      valuesArray = [...valuesArray, event.target.value]
    } else {
      valuesArray = valuesArray.filter(v => v !== event.target.value);
    }

    // send data to react hook form
    onFieldChange(valuesArray);

    // update local state
    if (setCheckboxValue) {
      setCheckboxValue(valuesArray);
    }
  }

  return (
    <Checkbox
      isInvalid={!!error && isTouched}
      isChecked={isChecked}
      isDisabled={isSubmitting}
      onChange={handleOnChange}
      value={value}
      {...fieldRest}
      {...rest}
    >
      {label}
      {children}
    </Checkbox>
  )
}

CheckboxControl.displayName = "CheckboxControl"