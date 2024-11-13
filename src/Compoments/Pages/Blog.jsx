import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/6954118/pexels-photo-6954118.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 2,
    title: 'Consectetur adipisicing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 3,
    title: 'Fugiat odio officiis odit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/4231767/pexels-photo-4231767.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 4,
    title: 'Consectetur adipisicing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 5,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/9788478/pexels-photo-9788478.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 6,
    title: 'Fugiat odio officiis odit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/1850617/pexels-photo-1850617.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 7,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/12679998/pexels-photo-12679998.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 8,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/8076182/pexels-photo-8076182.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
  {
    id: 9,
    title: 'Fugiat odio officiis odit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/4533596/pexels-photo-4533596.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white ">
          <div className="h-[14rem] bg-blue-600 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Our Blog</h1>
      </div>
      <div className="mx-auto w-[78rem] px-4 mt-16  md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={blog.imgSrc} alt={blog.title} className="w-full h-48 object-cover sm:h-60 md:h-40 lg:h-48" />
            <div className="p-4">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{blog.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{blog.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={blog.authorImg} alt={blog.author} className="w-8 h-8 rounded-full mr-2" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-300">{blog.author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{blog.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleReadMore(blog.id)} 
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
