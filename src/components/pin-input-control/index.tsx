import { HStack, PinInput, PinInputField, PinInputProps, StackProps } from "@chakra-ui/react"
import { FC } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface PinInputControlProps extends BaseProps {
  /**
   * The number of PinInputField's to render
   */
  pinAmount: number

  /**
   * Chakra's StackProps
   */
  stackProps?: StackProps

  /**
   * Chakra's PinInputProps (omits children as that is handled for you based on pinAmount)
   */
  pinInputProps?: Omit<PinInputProps, "children">
}

export const PinInputControl: FC<PinInputControlProps> = (props: PinInputControlProps) => {
  const { name, control, label, pinAmount, stackProps, pinInputProps, ...rest } = props
  const {
    field,
    formState: { isSubmitting, }
  } = useController({
    name,
    control,
    defaultValue: props.pinInputProps?.defaultValue || ''
  })

  const renderedPinInputFields = Array(pinAmount)
    .fill(null)
    .map((_noop, i) => <PinInputField key={i} />)

  return (
    <FormControl name={name} control={control} label={label} {...rest}>
      <HStack {...stackProps}>
        <PinInput {...field} isDisabled={isSubmitting} {...pinInputProps}>
          {renderedPinInputFields}
        </PinInput>
      </HStack>
    </FormControl>
  )
}

export default PinInputControl
