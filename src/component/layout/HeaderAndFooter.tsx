import Navigator from "../navigator";
import Footer from "../footer";
import { Box,Flex } from "@chakra-ui/react";
import { ReactNode } from "react";


// export default function HeaderAndFooter({children}: {children: ReactNode;}){
//     return(
//         <Box maxWidth="2000px"  >
//             <Navigator />
//               {children}
//             <Footer />
//         </Box>
//     )
// }

const Layout = ({ children } : {children:ReactNode}) => {
    return (
      <Flex 
        justifyContent="center" 
        width="100%" 
        margin="0 auto"
      >
        <Box 
          maxWidth="2000px" 
          width="100%" 
          mx="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box width="100%">
            <Navigator />
          </Box>
          
          <Box width="100%">
            {children}
          </Box>
          
          <Box width="100%">
            <Footer />
          </Box>
        </Box>
      </Flex>
    );
  };
  
  export default Layout;