import Navigator from "../navigator";
import Footer from "../footer";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";


export default function HeaderAndFooter({children}: {children: ReactNode;}){
    return(
        <Box maxWidth="2000px"  >
            <Navigator />
              {children}
            <Footer />
        </Box>
    )
}
