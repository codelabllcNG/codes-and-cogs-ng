import { createContext, useEffect, useState } from "react";

const AllContext = createContext();

export function AllContextProvider(props) {
  const [isSectionOne, setTheIsSectionOne] = useState(true);
  const [isSectionTwo, setTheIsSectionTwo] = useState(false);
  const [isSectionThree, setTheIsSectionThree] = useState(false);
  const [isSectionFour, setTheIsSectionFour] = useState(false);
  const [isSectionFive, setTheIsSectionFive] = useState(false);
  const [isSectionSix, setTheIsSectionSix] = useState(false);
  const [megaMenu, setTheMegaMenu] = useState(false)

  const [sectionOneHeight, setTheSectionOneHeight] = useState();
  const [sectionTwoHeight, setTheSectionTwoHeight] = useState();
  const [sectionThreeHeight, setTheSectionThreeHeight] = useState();
  const [sectionFourHeight, setTheSectionFourHeight] = useState();
  const [sectionFiveHeight, setTheSectionFiveHeight] = useState();
  const [sectionSixHeight, setTheSectionSixHeight] = useState();

  const [servicesClicked, setTheServicesClicked] = useState(true);
  const [solutionsClicked, setTheSolutionsClicked] = useState(false);

  const [searchKeyword, setTheSearchKeyword] = useState('')
  const [searchResponse, setTheSearchResponse] = useState('')
  const [searchingSkills, setTheSearchingSkills] = useState(false)
  const [talentsFound, setTheTalentsFound] = useState([])

  const [menuIsClicked, setTheMenuIsClicked] = useState(false);

  const devUrl = 'http://dev.codesandcogs.com'
  const prodUrl = 'https://dev.codesandcogs.com'

  const context = { menuIsClicked, 
    devUrl, prodUrl,
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
    setTalentsFound
  }; 

  return (
    <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
  );

  // functions below

  function setMenuIsClicked(value) {
    setTheMenuIsClicked(value)
  }

  function setTalentsFound(value) {
    setTheTalentsFound(value)
  }

  function setSearchKeyword(value) {
    setTheSearchKeyword(value)
  }

  function setSearchResponse(value) {
    setTheSearchResponse(value)
  }

  function setSearchingSkills(value) {
    setTheSearchingSkills(value)
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
    setTheServicesClicked(services)
    setTheSolutionsClicked(solutions)
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
