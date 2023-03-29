import { ChakraProvider, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import FormWithoutProvider from "./FormWithoutProvider";
import FormWithProvider from "./FormWithProvider";

export const App = () => {
    return <ChakraProvider>
        <Tabs maxWidth="800px" padding={5} variant="soft-rounded">
            <TabList>
                <Tab>Demo with FormProvider</Tab>
                <Tab>Demo without FormProvider</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <FormWithProvider />
                </TabPanel>
                <TabPanel>
                    <FormWithoutProvider />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </ChakraProvider>
}