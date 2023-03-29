import { Button, ButtonProps } from "@chakra-ui/react"
import { FC } from "react"
import { Control } from "react-hook-form"
import { useFormState } from "react-hook-form"

export interface SubmitButtonProps extends ButtonProps {
  /**
   * The control passed down from react-hook-form.
   * Only required if not using FormProvider
   */
  control?: Control<any, any>
}

export const SubmitButton: FC<SubmitButtonProps> = (props: SubmitButtonProps) => {
  const { children, control, ...rest } = props
  const { isSubmitting } = useFormState({ control })

  return (
    <Button type="submit" isLoading={isSubmitting} {...rest}>
      {children}
    </Button>
  )
}

export default SubmitButton
