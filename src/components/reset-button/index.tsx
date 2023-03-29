import { Button, ButtonProps } from "@chakra-ui/react"
import { FC } from "react"
import { Control, useFormContext, UseFormReset, useFormState } from "react-hook-form"

export interface ResetButtonProps extends ButtonProps {
  /**
   * The control passed down from react-hook-form.
   * Only required if not using FormProvider
   */
  control?: Control<any, any>

  /**
   * The reset method (passed down from react-hook-forms useForm)
   * Only required if not using FormProvider
   */
  reset?: UseFormReset<any>
}

export const ResetButton: FC<ResetButtonProps> = (props: ResetButtonProps) => {
  const { children, control, reset: resetForm, ...rest } = props
  const { isSubmitting, isDirty } = useFormState({ control })
  if (props.control && !props.reset) {
    throw new Error('Missing prop "reset" required if not using FormProvider');
  }
  const resetFn = props.control && props.reset ? props.reset : (useFormContext()).reset

  return (
    <Button type="reset" onClick={() => resetFn()} isDisabled={isSubmitting || !isDirty} {...rest}>
      {children}
    </Button>
  )
}

export default ResetButton
