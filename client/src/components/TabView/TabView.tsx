import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useHistory, useLocation } from "react-router-dom";

export interface TabObject {
    tabName: string;
    tabPanel: React.ReactElement;
    tabLink: string;
}

const TabView = (props: any) => {
    const tabList: Array<TabObject> = props.tabList;
    const location = useLocation();
    const history = useHistory();

    const getCurrentLocation = (): number => {
        for (let i = 0; i < tabList.length; i++) {
            if (tabList[i].tabLink === location.pathname) return i;
        }
        return 0;
    };

    const handleTabChange = (index: number) => {
        history.push(tabList[index].tabLink);
    };

    return (
        <Tabs
            defaultIndex={getCurrentLocation()}
            onChange={(index) => handleTabChange(index)}
            colorScheme="red"
            variant="solid-rounded"
            isLazy
        >
            <TabList>
                <SimpleGrid
                    w="100%"
                    gap={6}
                    columns={{ base: 2, lg: 3, xl: 5 }}
                >
                    {tabList.map((tabs) => (
                        <Tab
                            color="white"
                            bgColor="gray.600"
                            fontWeight="normal"
                            fontSize={{ base: "lg" }}
                        >
                            {tabs.tabName}
                        </Tab>
                    ))}
                </SimpleGrid>
            </TabList>

            <TabPanels>
                {tabList.map((tabs) => (
                    <TabPanel p={0} pt={6}>
                        {tabs.tabPanel}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};

export default TabView;
