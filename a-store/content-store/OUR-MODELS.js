export const OUR_MODELS =[
    {
        id: "model1",
        imageUrl: '/images/model1.png',
        title: 'Dedicated Project Managers',
        body: 'Our local project managers are highly technical in each subject matter and would do the heavy lifting in ensuring goals are met in a very timely fashion. '
    },
    {
        id: "model2",
        imageUrl: '/images/model2.png',
        title: 'Your data and project are in safe hands',
        body: 'Our Developers work from our physical remote locations in Accra, Dubai, Capetown, Ughelli or Lviv and use solely our tools and infrastructure (RemoteDev-Connect TM)which our client has access to 24/7'
    },
    {
        id: "model3",
        imageUrl: '/images/model3.png',
        title: 'No down payment',
        body: 'We have confidence in our engineers, developers, processes and that Is why we would not charge at the beginning of the job. '
    },
    {
        id: "model4",
        imageUrl: '/images/model4.png',
        title: 'Price match ',
        body: 'We would price match your quote and beat it with no down payment we would meet you at your need without the hassle. '
    },
    {
        id: "model5",
        imageUrl: '/images/model5.png',
        title: 'Affordable, skillful developers for your project',
        body: 'Remote Software Engineering School boast of one of the world best in-house bootcamp for Software Engineers, Developers and Designers .'
    },
    {
        id: "model6",
        imageUrl: '/images/model6.png',
        title: 'Background Checks and Escrow Payment',
        body: 'Leave all paper works and background checks etc. to us to take care of '
    },
    
];

export function selectedModel(modelID) {
    return OUR_MODELS.find((model) => model.id === modelID);
  }