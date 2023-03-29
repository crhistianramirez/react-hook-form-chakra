import { Box, ButtonGroup, Radio, Heading, VStack, Stack, InputLeftElement, Text } from "@chakra-ui/react";
import {
    CheckboxContainer,
    CheckboxControl,
    CheckboxSingleControl,
    InputControl,
    NumberInputControl,
    PinInputControl,
    RadioGroupControl,
    ResetButton,
    SelectControl,
    SliderControl,
    SubmitButton,
    SwitchControl,
    TextareaControl
} from "./components";
import { PhoneIcon } from '@chakra-ui/icons'
import * as Yup from "yup";
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"

const defaultValues = {
    firstName: "",
    lastName: "",
    age: 0,
    phoneNumber: "",
    confirmationPin: "",
    website: "",
    willingToRelocate: true,
    favoriteColor: "",
    preferredShift: ["afternoons"],
    additionalNotes: "",
    previousExperience: false,
    callbackTime: "",
    excitementScale: 5,
    password: ""
};

// We're using yup validation for this demo but you can choose any other react hook form supported validation provider
const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    age: Yup.number().required("Age is required").min(18, "Applicant must be at least 18 years old").typeError("Please enter a number"),
    phoneNumber: Yup.string(),
    confirmationPin: Yup.string(),
    website: Yup.string(),
    willingToRelocate: Yup.boolean().equals([true], "Applicant must be able to relocate"),
    favoriteColor: Yup.string(),
    preferredShift: Yup.array().min(2, "Please select at least 2 shifts"),
    additionalNotes: Yup.string().required(),
    previousExperience: Yup.boolean(),
    callbackTime: Yup.string().required("Please select a callback time"),
    excitementScale: Yup.number(),
    password: Yup.string()
});

const Form = () => {
    const methods = useForm({ resolver: yupResolver(validationSchema), defaultValues, mode: "onBlur" });
    const values = useWatch({ control: methods.control })
    const onSubmit = (data: any) => console.log(data);
    return (
        <FormProvider {...methods}
        >
            <VStack
                as="form"
                onSubmit={methods.handleSubmit(onSubmit)}
                align="start"
                spacing={5}
            >
                <Heading marginY={5}>
                    With FormProvider
                </Heading>
                <Stack padding={0} width="100%" spacing={5} direction={{ base: 'column', lg: 'row' }}>
                    <InputControl name="firstName" label="First Name" />
                    <InputControl name="lastName" label="Last Name" />
                </Stack>
                <Stack width="100%" spacing={5} direction={{ base: 'column', lg: 'row' }}>
                    <InputControl name="phoneNumber" label="Phone Number"
                        leftElement={
                            <InputLeftElement
                                pointerEvents='none'
                                children={<PhoneIcon color='gray.300' />}
                            />
                        }
                    />
                    <InputControl name="website" label="Website" leftAddon="https://" rightAddon=".com" />
                </Stack>
                <NumberInputControl name="age" label="Age" />
                <Stack width="100%" spacing={5} direction={{ base: 'column', lg: 'row' }} alignItems="center">
                    <CheckboxSingleControl name="willingToRelocate">
                        Willing to relocate?
                    </CheckboxSingleControl>
                    <SwitchControl name="previousExperience" label="Previous Experience?" />
                </Stack>
                <CheckboxContainer name="preferredShift" label="Preferred shift" helperText="Please select at least 2 shift you would be interested in applying for">
                    <CheckboxControl name="preferredShift" value="mornings">
                        Mornings (8am to 12pm)
                    </CheckboxControl>
                    <CheckboxControl name="preferredShift" value="afternoons">
                        Afternoons (12pm to 4pm)
                    </CheckboxControl>
                    <CheckboxControl name="preferredShift" value="evenings">
                        Evenings (4pm to 8pm)
                    </CheckboxControl>
                    <CheckboxControl name="preferredShift" value="weekends">
                        Weekends (Saturday/Sunday 8am to 12pm)
                    </CheckboxControl>
                </CheckboxContainer>
                <RadioGroupControl name="favoriteColor" label="Favorite Color">
                    <Radio value="#ff0000">Red</Radio>
                    <Radio value="#00ff00">Green</Radio>
                    <Radio value="#0000ff">Blue</Radio>
                </RadioGroupControl>
                <SliderControl name="excitementScale" label="Excitement scale" helperText="On a scale of 1 to 10, how excited are you to apply for this job" sliderProps={{ max: 10 }} />
                <InputControl
                    name="password"
                    inputProps={{ type: "password" }}
                    label="Password"
                />
                <PinInputControl name="confirmationPin" label="Confirmation Pin" pinAmount={4} />
                <SelectControl
                    name="callbackTime"
                    label="Preferred callback time"
                    selectProps={{ placeholder: "Select option" }}
                >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </SelectControl>
                <TextareaControl name="additionalNotes" label="Additional Notes" helperText="Anything else you want us to know?" />
                <ButtonGroup>
                    <SubmitButton>Submit</SubmitButton>
                    <ResetButton>Reset</ResetButton>
                </ButtonGroup>

                <Stack marginY={10} direction="column" spacing={5}>
                    <Box>
                        <Text fontWeight="bold">Values:</Text>
                        <Box as="pre" >
                            {JSON.stringify(values, null, 2)}
                        </Box>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">Errors:</Text>
                        <Box as="pre" >
                            {JSON.stringify(methods.formState.errors, null, 2)}
                        </Box>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">Touched:</Text>
                        <Box as="pre" >
                            {JSON.stringify(methods.formState.touchedFields, null, 2)}
                        </Box>
                    </Box>
                </Stack>
            </VStack>
        </FormProvider>
    );
};

export default Form;
