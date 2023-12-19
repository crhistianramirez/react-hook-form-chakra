import { RadioGroup, RadioGroupProps, Stack, StackProps } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface RadioGroupControlProps extends BaseProps {
  /**
   * Chakra RadioGroupProps
   */
  radioGroupProps?: RadioGroupProps

  /**
   * Chakra StackProps
   */
  stackProps?: StackProps

  /**
   * The Radio components to be rendered in this group (required)
   */
  children: ReactNode
}

export const RadioGroupControl: FC<RadioGroupControlProps> = (props: RadioGroupControlProps) => {
  const { name, control, label, radioGroupProps, stackProps, children, ...rest } = props
  const {
    field,
    formState: { isSubmitting }
  } = useController({
    name,
    control,
    defaultValue: props.radioGroupProps?.defaultValue || '' 
  })

  return (
    <FormControl name={name} control={control} label={label} {...rest}>
      <RadioGroup {...field} isDisabled={isSubmitting} {...radioGroupProps}>
        <Stack direction="row" {...stackProps}>
          {children}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioGroupControl
