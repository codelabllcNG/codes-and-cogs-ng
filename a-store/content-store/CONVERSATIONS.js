const date = new Date()
const weekDay = date.toLocaleDateString("en-US", { weekday: "short" })
const day = date.toLocaleDateString("en-US", { day: "numeric" })
const month = date.toLocaleDateString("en-US", { month: "numeric" })
const year = date.toLocaleDateString("en-US", { year: "numeric" })
const time = date.toLocaleTimeString()

export const CONVERSATIONS = [
    {
        id: 'conversation1',
        sender: 'Sandra L.',
        isAdmin: false,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae molestiae quo cupiditate ipsa sed velit, distinctio ex laudantium voluptatibus doloribus porro ea eaque debitis. Perspiciatis commodi neque ea. Quasi, excepturi?",
        timeStamp: `${day}/${month}/${year} 07:45:55 PM`, //${time}
    },
    {
        id: 'conversation2',
        sender: 'Eze J.',
        isAdmin: true,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae molestiae quo cupiditate ipsa sed velit, distinctio ex laudantium voluptatibus doloribus porro ea eaque debitis. Perspiciatis commodi neque ea. Quasi, excepturi?",
        timeStamp: `${day}/${month}/${year} 07:45:55 PM`, //${time}
    },
    {
        id: 'conversation3',
        sender: 'Sandra L.',
        isAdmin: false,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae molestiae quo cupiditate ipsa sed velit, distinctio ex laudantium voluptatibus doloribus porro ea eaque debitis. Perspiciatis commodi neque ea. Quasi, excepturi?",
        timeStamp: `${day}/${month}/${year} 07:45:55 PM`, //${time}
    },
    {
        id: 'conversation4',
        sender: 'Eze J.',
        isAdmin: true,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae molestiae quo cupiditate ipsa sed velit, distinctio ex laudantium voluptatibus doloribus porro ea eaque debitis. Perspiciatis commodi neque ea. Quasi, excepturi?",
        timeStamp: `${day}/${month}/${year} 07:45:55 PM`, //${time}
    },

]

