import { Select, SelectProps } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface SelectControlProps extends BaseProps {
  /**
   * Chakra SelectProps
   */
  selectProps?: SelectProps

  /**
   * The ReactNode to be rendered inside Chakra Select component
   */
  children: ReactNode
}

export const SelectControl: FC<SelectControlProps> = (props: SelectControlProps) => {
  const { name, control, selectProps, children, ...rest } = props
  const {
    field,
    formState: { isSubmitting }
  } = useController({
    name,
    control
  })

  return (
    <FormControl name={name} control={control} {...rest}>
      <Select {...field} id={name} isDisabled={isSubmitting} {...selectProps}>
        {children}
      </Select>
    </FormControl>
  )
}

SelectControl.displayName = "SelectControl"

export default SelectControl
