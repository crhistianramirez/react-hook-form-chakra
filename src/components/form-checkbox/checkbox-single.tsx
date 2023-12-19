import { Checkbox, CheckboxProps as ChakraCheckboxProps } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import { useController, get } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface CheckboxSingleProps extends BaseProps {
  /**
   * Chakra CheckboxProps
   */
  checkBoxProps?: ChakraCheckboxProps
  children?: ReactNode
}

export const CheckboxSingleControl: FC<CheckboxSingleProps> = (props: CheckboxSingleProps) => {
  const { name, control, label, children, checkBoxProps, ...rest } = props
  const {
    field,
    fieldState: { isTouched },
    formState: { errors, isSubmitting }
  } = useController({ name, control, defaultValue: props.checkBoxProps?.defaultChecked || false })
  const error = get(errors, name, "")

  const isChecked = field.value

  return (
    <FormControl name={name} control={control} {...rest}>
      <Checkbox
        {...field}
        id={name}
        isInvalid={!!error && isTouched}
        isChecked={isChecked}
        isDisabled={isSubmitting}
        {...checkBoxProps}
      >
        {label}
        {children}
      </Checkbox>
    </FormControl>
  )
}

CheckboxSingleControl.displayName = "CheckboxSingleControl"
