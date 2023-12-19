import { Stack, StackProps as ChakraStackProps } from "@chakra-ui/react"
import { Children, cloneElement, FC, isValidElement, ReactNode, useState } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

/**
 * This component wraps CheckboxControl to build groups of checkboxes.
 * If you need a standalone checkbox please use CheckboxSingleControl
 * @property stackProps Chakra StackProps
 */
export interface CheckboxContainerProps extends BaseProps {
  /**
   * Chakra StackProps
   */
  stackProps?: ChakraStackProps

  /**
   * The CheckboxControl components to be rendered in this stack (required)
   */
  children: ReactNode
}

export const CheckboxContainer: FC<CheckboxContainerProps> = (props: CheckboxContainerProps) => {
  const { name, label, control, children, stackProps, ...rest } = props
  const { field } = useController({
    control,
    name,
    defaultValue: props.defaultValue || []
  });
  const [value, setValue] = useState(field.value || []);

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { checkboxValue: value, setCheckboxValue: setValue, control } as any);
    }
    return child;
  });

  return (
    <FormControl name={name} label={label} control={control} {...rest}>
      <Stack pl={6} mt={1} spacing={1} {...stackProps}>
        {childrenWithProps}
      </Stack>
    </FormControl>
  )
}

CheckboxContainer.displayName = "CheckboxContainer"
