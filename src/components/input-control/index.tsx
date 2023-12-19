import { Input, InputProps, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface InputControlProps extends BaseProps {
  /**
   * Chakra InputProps
   */
  inputProps?: InputProps

  /**
   * The Chakra InputLeftAddon
   * https://chakra-ui.com/docs/components/input#left-and-right-addons
   */
  leftAddon?: ReactNode

  /**
   * The Chakra InputRightAddon
   * https://chakra-ui.com/docs/components/input#left-and-right-addons
   */
  rightAddon?: ReactNode

  /**
   * The Chakra InputLeftElement
   * https://chakra-ui.com/docs/components/input#add-elements-inside-input
   */
  leftElement?: ReactNode

  /**
   * The Chakra InputRightElement
   * https://chakra-ui.com/docs/components/input#add-elements-inside-input
   */
  rightElement?: ReactNode
}

export const InputControl: FC<InputControlProps> = (props: InputControlProps) => {
  const { name, control, label, inputProps, leftAddon, rightAddon, leftElement, rightElement, ...rest } = props
  const {
    field,
    formState: { isSubmitting }
  } = useController({
    name,
    control
  })
  return (
    <FormControl name={name} control={control} label={label} {...rest}>
      <InputGroup>
        {typeof leftAddon === 'string' ? <InputLeftAddon>{leftAddon}</InputLeftAddon> : leftAddon}
        {typeof leftElement === 'string' ? <InputLeftElement>{leftElement}</InputLeftElement> : leftElement}
        <Input {...field} id={name} isDisabled={isSubmitting} {...inputProps} value={field.value ?? ""} />
        {typeof rightElement === 'string' ? <InputRightElement>{rightElement}</InputRightElement> : rightElement}
        {typeof rightAddon === 'string' ? <InputRightAddon>{rightAddon}</InputRightAddon> : rightAddon}
      </InputGroup>
    </FormControl>
  )
}

InputControl.displayName = "InputControl"

export default InputControl
