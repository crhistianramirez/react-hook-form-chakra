import { Textarea, TextareaProps } from "@chakra-ui/react"
import { FC } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface TextareaControlProps extends BaseProps {
  /**
   * Chakra TextareaProps
   */
  textareaProps?: TextareaProps
}

export const TextareaControl: FC<TextareaControlProps> = (props: TextareaControlProps) => {
  const { name, control, textareaProps, ...rest } = props
  const {
    field,
    formState: { isSubmitting }
  } = useController({
    name,
    control,
    defaultValue: props.textareaProps?.defaultValue || ''
  })

  return (
    <FormControl name={name} control={control} {...rest}>
      <Textarea {...field} id={name} isDisabled={isSubmitting} {...textareaProps} value={field.value ?? ""} />
    </FormControl>
  )
}

TextareaControl.displayName = "TextareaControl"

export default TextareaControl
