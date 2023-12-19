import { Flex, Switch, SwitchProps } from "@chakra-ui/react"
import { FC } from "react"
import { get, useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface SwitchControlProps extends BaseProps {
  /**
   * Chakra SwitchProps
   */
  switchProps?: SwitchProps
}

export const SwitchControl: FC<SwitchControlProps> = (props: SwitchControlProps) => {
  const { name, control, label, switchProps, ...rest } = props
  const {
    field,
    fieldState: { isTouched },
    formState: { isSubmitting, errors }
  } = useController({
    name,
    control,
    defaultValue: props.switchProps?.defaultChecked || false
  })
  const error = get(errors, name, "")

  return (
    <FormControl
      name={name}
      control={control}
      label={label}
      as={Flex}
      alignItems="center"
      {...rest}
    >
      <Switch
        {...field}
        id={name}
        isInvalid={!!error && isTouched}
        isChecked={field.value}
        isDisabled={isSubmitting}
        {...switchProps}
      />
    </FormControl>
  )
}

SwitchControl.displayName = "SwitchControl"

export default SwitchControl
