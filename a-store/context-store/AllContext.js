import { createContext, useEffect, useState } from "react";

const AllContext = createContext();

export function AllContextProvider(props) {
  const [isSectionOne, setTheIsSectionOne] = useState(true);
  const [isSectionTwo, setTheIsSectionTwo] = useState(false);
  const [isSectionThree, setTheIsSectionThree] = useState(false);
  const [isSectionFour, setTheIsSectionFour] = useState(false);
  const [isSectionFive, setTheIsSectionFive] = useState(false);
  const [isSectionSix, setTheIsSectionSix] = useState(false);
  const [megaMenu, setTheMegaMenu] = useState(false);

  const [sectionOneHeight, setTheSectionOneHeight] = useState();
  const [sectionTwoHeight, setTheSectionTwoHeight] = useState();
  const [sectionThreeHeight, setTheSectionThreeHeight] = useState();
  const [sectionFourHeight, setTheSectionFourHeight] = useState();
  const [sectionFiveHeight, setTheSectionFiveHeight] = useState();
  const [sectionSixHeight, setTheSectionSixHeight] = useState();

  const [servicesClicked, setTheServicesClicked] = useState(true);
  const [solutionsClicked, setTheSolutionsClicked] = useState(false);

  const [searchKeyword, setTheSearchKeyword] = useState("");
  const [searchResponse, setTheSearchResponse] = useState("");
  const [searchingSkills, setTheSearchingSkills] = useState(false);
  const [talentsFound, setTheTalentsFound] = useState([]);

  const [menuIsClicked, setTheMenuIsClicked] = useState(false);

  const [testData, setTheTestData] = useState();
  const [countDownTimer, setTheCountDownTimer] = useState("__ : __ : __");
  const [expiryTime, setTheExpiryTime] = useState("");

  const [demoTestData, setTheDemoTestData] = useState();
  const [demoCountDownTimer, setTheDemoCountDownTimer] =
    useState("__ : __ : __");
  const [demoExpiryTime, setTheDemoExpiryTime] = useState("");

  const [talentToHire, setTheTalentToHire] = useState("");
  const [idOfTalentToHire, setTheIdOfTalentToHire] = useState("");

  const [talentsNearYouResponse, setTheTalentsNearYouResponse] = useState("");
  const [geolocationSupported, setTheGeolocationSupported] = useState(true);
  const [locationGranted, setTheLocationGranted] = useState(false);
  const [coordinates, setTheCoordinates] = useState();

  const devUrl = "http://dev.codesandcogs.com";
  const prodUrl = "https://dev.codesandcogs.com";

  const context = {
    menuIsClicked,
    talentsNearYouResponse,
    geolocationSupported,
    locationGranted,
    coordinates,
    idOfTalentToHire,
    demoTestData,
    demoCountDownTimer,
    demoExpiryTime,
    talentToHire,
    countDownTimer,
    expiryTime,
    devUrl,
    prodUrl,
    testData,
    megaMenu,
    servicesClicked,
    solutionsClicked,
    isSectionOne,
    isSectionTwo,
    isSectionThree,
    isSectionFour,
    isSectionFive,
    isSectionSix,
    sectionOneHeight,
    sectionTwoHeight,
    sectionThreeHeight,
    sectionFourHeight,
    sectionFiveHeight,
    sectionSixHeight,
    searchKeyword,
    searchResponse,
    searchingSkills,
    talentsFound,

    setTestData,
    setDemoTestData,
    setDemoExpiryTime,
    setLocationGranted,
    setTalentsNearYouResponse,
    setDemoCountDownTimer,
    setIdOfTalentToHire,
    setExpiryTime,
    setCountDownTimer,
    setMenuIsClicked,
    setSection,
    setSectionOneHeight,
    setSectionTwoHeight,
    setSectionThreeHeight,
    setSectionFourHeight,
    setSectionFiveHeight,
    setSectionSixHeight,
    setMegaMenuTab,
    setMegaMenu,
    setSearchKeyword,
    setSearchResponse,
    setSearchingSkills,
    setTalentsFound,
    setTalentToHire,
    setGeolocationSupported,
    setCoordinates,
  };

  return (
    <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
  );

  // functions below

  function setCoordinates(value) {
    setTheCoordinates(value);
  }

  function setLocationGranted(value) {
    setTheLocationGranted(value);
  }

  function setGeolocationSupported(value) {
    setTheGeolocationSupported(value);
  }

  function setTalentsNearYouResponse(value) {
    setTheTalentsNearYouResponse(value);
  }

  function setDemoTestData(value) {
    setTheDemoTestData(value);
  }

  function setDemoExpiryTime(value) {
    setTheDemoExpiryTime(value);
  }

  function setDemoCountDownTimer(value) {
    setTheDemoCountDownTimer(value);
  }

  function setTalentToHire(value) {
    setTheTalentToHire(value);
  }

  function setIdOfTalentToHire(value) {
    setTheIdOfTalentToHire(value);
  }

  function setExpiryTime(value) {
    setTheExpiryTime(value);
  }

  function setCountDownTimer(value) {
    setTheCountDownTimer(value);
  }

  function setTestData(value) {
    setTheTestData(value);
  }

  function setMenuIsClicked(value) {
    setTheMenuIsClicked(value);
  }

  function setTalentsFound(value) {
    setTheTalentsFound(value);
  }

  function setSearchKeyword(value) {
    setTheSearchKeyword(value);
  }

  function setSearchResponse(value) {
    setTheSearchResponse(value);
  }

  function setSearchingSkills(value) {
    setTheSearchingSkills(value);
  }

  function setSection(one, two, three, four, five, six) {
    setTheIsSectionOne(one);
    setTheIsSectionTwo(two);
    setTheIsSectionThree(three);
    setTheIsSectionFour(four);
    setTheIsSectionFive(five);
    setTheIsSectionSix(six);
  }

  function setMegaMenuTab(services, solutions) {
    setTheServicesClicked(services);
    setTheSolutionsClicked(solutions);
  }

  function setMegaMenu(value) {
    setTheMegaMenu(value);
  }

  function setSectionOneHeight(value) {
    setTheSectionOneHeight(value);
  }
  function setSectionTwoHeight(value) {
    setTheSectionTwoHeight(value);
  }
  function setSectionThreeHeight(value) {
    setTheSectionThreeHeight(value);
  }
  function setSectionFourHeight(value) {
    setTheSectionFourHeight(value);
  }
  function setSectionFiveHeight(value) {
    setTheSectionFiveHeight(value);
  }
  function setSectionSixHeight(value) {
    setTheSectionSixHeight(value);
  }
}

export default AllContext;
