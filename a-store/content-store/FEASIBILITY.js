export const FEASIBILITY =[
    {
        id: "feasibility1",
        icon: '/images/logos-and-icons/one.png',
        title: 'Local Environments Setup:',
        body: 'To mitigate delays, our engineers and developers utilizes computers with pre-install tools that would fit any technology stack.. '
    },
    {
        id: "feasibility2",
        icon: '/images/logos-and-icons/two.png',
        title: 'Product Updates and Bugs:',
        body: 'Our Remote locations run 24/7 365 and we usually have two talent for each skill needed for a project. When urgent needs arises, our developers would be there to attend to it.'
    },
    {
        id: "feasibility3",
        icon: '/images/logos-and-icons/three.png',
        title: 'Time Zone and Language Barrier:',
        body: 'As with any remote job these are two hotspot for a myraid of issues. With Codes and Cogs, our dedicated project managers understands technology and is able to communicate effectively with you. '
    },
    {
        id: "feasibility4",
        icon: '/images/logos-and-icons/four.png',
        title: 'Interviewing Candidates:',
        body: 'Interviewing international or even local talents can be a hassle. We take care of this process by using our in house and most trusted hands - Each Developers and Engineers has gone  through our in-house Software Engineering School - Aimed at bringing them up to speed with latest trends, tools and technology. '
    },
    {
        id: "feasibility5",
        icon: '/images/logos-and-icons/five.png',
        title: 'Privacy and Trust Issues: ',
        body: 'Giving an international remote developer access to your repo can be a hassle. No matter the laws of the host country of the developer, the reality remains that a malicious person can get away with allot due to jurisdiction and other legal enforcement limitations.  '
    }
    
];

export function selectedFeasibility(feasibilityID) {
    return FEASIBILITY.find((feasibility) => feasibility.id === feasibilityID);
  }