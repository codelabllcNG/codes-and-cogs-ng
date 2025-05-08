import { Box, } from "@chakra-ui/react";
import ProfileCard from "@/component/profileCard";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";




const ProfilePage =()=>{

      
    return (
<HeaderAndFooter>
            {/* section 1 */}
            <Box
                maxWidth="2000px"
                mx="auto"
                bg="#0D0F3A" // Change the text color if needed.
                color={'white'}
                padding={{
                lg: "5rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
                >
                       
            </Box> 
            {/* section 1 */}

            {/* section 2 */}
            <Box
                maxWidth="2000px"
                mx="auto"
                padding={{
                lg: "1.5rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
                mt={'-7rem'}
            >
               <ProfileCard />
            </Box>
            {/* section 2 */}

     </HeaderAndFooter>
    )
}


export default ProfilePage