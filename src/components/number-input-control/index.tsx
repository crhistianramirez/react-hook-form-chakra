import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps as ChakraNumberInputProps,
  NumberInputStepper,
  InputGroup,
} from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import { get, useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface NumberInputControlProps extends BaseProps {
  /**
   * Chakra's NumberInputProps
   */
  numberInputProps?: ChakraNumberInputProps

  /**
   * Whether or not the stopper should be shownF
   */
  showStepper?: boolean

  /**
   * Optional children
   */
  children?: ReactNode
}

export const NumberInputControl: FC<NumberInputControlProps> = (props: NumberInputControlProps) => {
  const {
    name,
    control,
    label,
    showStepper = true,
    children,
    numberInputProps,
    ...rest
  } = props
  const {
    field,
    fieldState: { isTouched },
    formState: { isSubmitting, errors }
  } = useController({
    name,
    control,
    defaultValue: numberInputProps?.defaultValue || ''
  })
  const error = get(errors, name, "")
  const { ref, ...restField } = field;

  return (
    <FormControl name={name} control={control} label={label} {...rest}>
      <InputGroup>=
        <NumberInput
          {...restField}
          id={name}
          isInvalid={!!error && isTouched}
          isDisabled={isSubmitting}
          {...numberInputProps}
          value={field.value ?? ""}
        >
          <NumberInputField name={name} ref={ref} />
          {showStepper && (
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
          {children}
        </NumberInput>=
      </InputGroup>
    </FormControl>
  )
}

NumberInputControl.displayName = "NumberInputControl"

export default NumberInputControl
