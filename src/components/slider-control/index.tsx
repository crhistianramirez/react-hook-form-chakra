import {
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
  SliderTrackProps
} from "@chakra-ui/react"
import { FC } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface SliderControlProps extends BaseProps {
  /**
   * Chakra SliderProps
   */
  sliderProps?: SliderProps

  /**
   * Chakra SliderTrackProps
   */
  sliderTrackProps?: SliderTrackProps

  /**
   * Chakra SliderThumbProps
   */
  sliderThumbProps?: SliderThumbProps
}

export const SliderControl: FC<SliderControlProps> = (props: SliderControlProps) => {
  const { name, control, sliderProps, sliderTrackProps, sliderThumbProps, ...rest } = props
  const {
    field,
    formState: { isSubmitting }
  } = useController({
    name,
    control,
    defaultValue: props.sliderProps?.defaultValue || ''
  })

  return (
    <FormControl name={name} control={control} {...rest}>
      <Slider {...field} id={name} isDisabled={isSubmitting} {...sliderProps}>
        <SliderTrack {...sliderTrackProps}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb {...sliderThumbProps} />
      </Slider>
    </FormControl>
  )
}

export default SliderControl
