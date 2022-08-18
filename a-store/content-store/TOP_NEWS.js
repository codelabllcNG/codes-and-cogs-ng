export const TOP_NEWS = [
  {
    id: "news1",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    imageUrl: "/images/news1.png",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut ipsa sit, nulla laboriosam nesciunt ea, officiis, aliquam molestiae quibusdam sequi atque! Natus architecto qui, dolor provident quas eos nostrum?",
    date: "2022-08-22",
  },
  {
    id: "news2",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    imageUrl: "/images/news2.png",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut ipsa sit, nulla laboriosam nesciunt ea, officiis, aliquam molestiae quibusdam sequi atque! Natus architecto qui, dolor provident quas eos nostrum?",
    date: "2022-08-22",
  },
  {
    id: "news3",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    imageUrl: "/images/news3.png",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut ipsa sit, nulla laboriosam nesciunt ea, officiis, aliquam molestiae quibusdam sequi atque! Natus architecto qui, dolor provident quas eos nostrum?",
    date: "2022-08-22",
  },
  {
    id: "news4",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    imageUrl: "/images/news4.png",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut ipsa sit, nulla laboriosam nesciunt ea, officiis, aliquam molestiae quibusdam sequi atque! Natus architecto qui, dolor provident quas eos nostrum?",
    date: "2022-08-22",
  },
  {
    id: "news5",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    imageUrl: "/images/news5.png",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut ipsa sit, nulla laboriosam nesciunt ea, officiis, aliquam molestiae quibusdam sequi atque! Natus architecto qui, dolor provident quas eos nostrum?",
    date: "2022-08-22",
  },
  {
    id: "news6",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    imageUrl: "/images/news6.png",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut ipsa sit, nulla laboriosam nesciunt ea, officiis, aliquam molestiae quibusdam sequi atque! Natus architecto qui, dolor provident quas eos nostrum?",
    date: "2022-08-22",
  },
  {
    id: "news7",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    imageUrl: "/images/news7.png",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ut ipsa sit, nulla laboriosam nesciunt ea, officiis, aliquam molestiae quibusdam sequi atque! Natus architecto qui, dolor provident quas eos nostrum?",
    date: "2022-08-22",
  },
];

export function selectedNews(newsID) {
  return TOP_NEWS.find((news) => news.id === newsID);
}
