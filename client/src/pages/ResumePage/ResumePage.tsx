import React from "react";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

import Credit from "../../components/Credit";
import SectionDivider from "../../components/SectionDivider";

import ResumeTemplate1 from "./templates/ResumeTemplate1";
import ResumeTemplate2 from "./templates/ResumeTemplate2";
import PageContainer from "../../components/PageContainer";
import { useReactToPrint } from "react-to-print";

const ResumePage = () => {
    // const { currentState, updating, loading, adding } = useTypedSelector(
    //     (state) => console.log({ ...state })
    // );

    const refResume: any = React.createRef();

    const handlePrint = useReactToPrint({ content: () => refResume.current });

    return (
        <PageContainer>
            <Button onClick={handlePrint}>Print PDF</Button>

            <Box
                borderWidth={2}
                width="8.3in"
                height="11.7in"
                borderColor="gray.900"
            >
                <Box ref={refResume}>
                    <ResumeTemplate2 />
                </Box>
            </Box>

            <Box textAlign="center" pt={36}>
                <SectionDivider />
                <Credit />
            </Box>
        </PageContainer>
    );
};

export default ResumePage;
