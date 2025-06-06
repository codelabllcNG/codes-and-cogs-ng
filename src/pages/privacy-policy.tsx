import HeaderAndFooter from '@/component/layout/HeaderAndFooter'
import { Box,Heading,Text,ListItem,UnorderedList } from '@chakra-ui/react'


const PrivacyPolicy = function(){
    return(
        <HeaderAndFooter>
                    <Box
                      maxWidth="2000px"
                      mx="auto"
                      bg="#0D0F3A"
                      color={'white'}
                      padding={{ lg: "3rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
                    >
                      <Box>
                        <Heading textAlign={'center'} m={'1rem'} fontWeight={'500'}>
                          Privacy Policy
                        </Heading>
                      </Box>
                    </Box>
                    <Box
                      maxWidth="2000px"
                      mx="auto"
                      padding={{ lg: "3rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
                    >
                             <Heading mb={4}>Privacy Policy for Codes and Cogs Limited</Heading>

                                <Text mb={4}>
                                    Codes and Cogs Limited (Hereinafter referred to as “Codes and Cogs”, “the Company” or “We”)
                                    values your personal data and is committed to protecting your privacy in all interactions
                                    with us. Please read this Privacy Notice (‘Notice’) to understand our policies, processes,
                                    and procedures regarding the processing of your personal data.
                                </Text>

                                <Text mb={4}>
                                    By this Notice, we explain to you how your Personal Data is collected, used, managed and
                                    transferred by Codes and Cogs and also explain how you can update your Personal Data with us
                                    and exercise your rights in respect of the Personal Data provided to us.
                                </Text>

                                <Text mb={4}>
                                    This Privacy Policy applies only to our website activities and is valid for visitors to our
                                    website with regards to the information that they shared and/or collect on the Codes and
                                    Cogs Website. This policy is not applicable to any information collected offline or via
                                    channels other than this website.
                                </Text>

                                <Text mb={4}>
                                    If you have additional questions or require more information about our Privacy Policy, do
                                    not hesitate to contact us.
                                </Text>

                                <Heading size="md" mt={8} mb={4}>
                                    The Lawful Basis We Collect and Process Personal Data
                                </Heading>

                                <UnorderedList mb={4}>
                                    <ListItem><Text>Consent of the Data Subject</Text></ListItem>
                                    <ListItem><Text>Contract with the Data Subject</Text></ListItem>
                                    <ListItem><Text>Compliance with Legal Obligation</Text></ListItem>
                                    <ListItem><Text>
                                    Necessary to protect the Vital Interests of the Data Subject or of another natural person
                                    </Text></ListItem>
                                    <ListItem><Text>Necessary for the performance of a task carried out in the public interest</Text></ListItem>
                                    <ListItem><Text>
                                    Within the Legitimate interests pursued by the Company except where such interests are
                                    overridden by the interests or fundamental rights and freedoms of the data subject which
                                    require protection of personal data, in particular where the data subject is a child.
                                    </Text></ListItem>
                                </UnorderedList>

                                <Heading size="md" mt={8} mb={2}>
                                    Consent
                                </Heading>
                                <Text mb={4}>
                                    Where processing of Personal Data is based on consent, we shall obtain the requisite consent
                                    at the time of collection of the Personal Data...
                                </Text>

                                <Heading size="md" mt={8} mb={2}>
                                    Information we collect
                                </Heading>
                                <Text mb={4}>
                                    We collect Personal Data that you give to us, for example, where you fill a form or apply
                                    for a job through our website...
                                </Text>

                                <Heading size="md" mt={8} mb={2}>
                                    Cookies
                                </Heading>
                                <Text mb={4}>
                                    Our website uses ‘cookies’. These cookies are used to store information including visitors’
                                    preferences...
                                </Text>

                                <Heading size="md" mt={8} mb={2}>
                                    How we use your information
                                </Heading>
                                <UnorderedList mb={4}>
                                    <ListItem><Text>Improve, personalize, and expand our website</Text></ListItem>
                                    <ListItem><Text>Understand and analyze how you use our website</Text></ListItem>
                                    <ListItem><Text>Develop new products, services, features, and functionality</Text></ListItem>
                                    <ListItem><Text>
                                    Communicate with you, directly or through partners, including for marketing
                                    </Text></ListItem>
                                    <ListItem><Text>Send you emails</Text></ListItem>
                                    <ListItem><Text>Find and prevent fraud</Text></ListItem>
                                    <ListItem><Text>Process your application for employment</Text></ListItem>
                                    <ListItem><Text>Fulfill our contractual obligations</Text></ListItem>
                                    <ListItem><Text>Comply with applicable laws</Text></ListItem>
                                </UnorderedList>

                                <Heading size="md" mt={8} mb={2}>
                                    Log Files
                                </Heading>
                                <Text mb={4}>
                                    Codes and Cogs website follows a standard procedure of using log files...
                                </Text>

                                <Heading size="md" mt={8} mb={2}>
                                    Who do we share your Personal Data with?
                                </Heading>
                                <Text mb={4}>
                                    We respect your privacy, and we limit disclosure of your Personal Data to third parties...
                                </Text>

                                <Heading size="md" mt={8} mb={2}>
                                    Security of your Personal Data
                                </Heading>
                                <Text mb={4}>
                                    We take security of your Personal Data seriously, and we make every effort to keep it
                                    secure...
                                </Text>

                                <Heading size="md" mt={8} mb={2}>
                                    Retention of your Personal Data
                                </Heading>
                                <Text mb={4}>
                                    We ensure that your Personal Data is only processed for the minimum period necessary...
                                </Text>

                                <Heading size="md" mt={8} mb={2}>
                                    Your Rights
                                </Heading>
                                <UnorderedList mb={4}>
                                    <ListItem><Text>Request and access your Personal Data</Text></ListItem>
                                    <ListItem><Text>Withdraw consent at any time</Text></ListItem>
                                    <ListItem><Text>Object to automated decision making</Text></ListItem>
                                    <ListItem><Text>Request rectification and modification</Text></ListItem>
                                    <ListItem><Text>Request deletion</Text></ListItem>
                                    <ListItem><Text>Be informed and give consent for new purposes</Text></ListItem>
                                    <ListItem><Text>Request processing restriction</Text></ListItem>
                                    <ListItem><Text>Request information about specific processing</Text></ListItem>
                                </UnorderedList>

                                <Heading size="md" mt={8} mb={2}>
                                    Changes to our Privacy Notice
                                </Heading>
                                <Text mb={4}>
                                    Due to constant changes in technology and regulation, we may update this Notice from time to
                                    time. You will always find the latest version on this site.
                                </Text>

                    </Box>
        </HeaderAndFooter>
    )
}


export default PrivacyPolicy