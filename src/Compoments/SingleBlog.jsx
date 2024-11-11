import { useParams } from 'react-router-dom';


const blogs = [
  {
    id: 1,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/6954118/pexels-photo-6954118.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
  {
    id: 2,
    title: 'Consectetur adipisicing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
  {
    id: 3,
    title: 'Fugiat odio officiis odit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/4231767/pexels-photo-4231767.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
  {
    id: 4,
    title: 'Consectetur adipisicing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
  {
    id: 5,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/9788478/pexels-photo-9788478.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],  },
  {
    id: 6,
    title: 'Fugiat odio officiis odit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/1850617/pexels-photo-1850617.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
  {
    id: 7,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/12679998/pexels-photo-12679998.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
  {
    id: 8,
    title: 'Possimus aut mollitia eum ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/8076182/pexels-photo-8076182.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
  {
    id: 9,
    title: 'Fugiat odio officiis odit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit..',
    author: 'Rahul yadev',
    date: 'July 19, 2021',
    imgSrc: 'https://images.pexels.com/photos/4533596/pexels-photo-4533596.jpeg?auto=compress&cs=tinysrgb&w=600',
    authorImg: 'https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64',
    comments: [
      { author: 'John Doe', text: 'Great article! Very informative.' },
      { author: 'Jane Smith', text: 'Thanks for sharing your insights!' },
    ],
  },
];

export default function BlogSingle() {
  const { id } = useParams();  // Get the dynamic blog id from the URL
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-10 text-white">
        <h2 className="text-xl font-semibold">Blog not found!</h2>
      </div>
    );
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const commentText = form.comment.value;
    if (commentText) {
      blog.comments.push({ author: 'Anonymous', text: commentText });
      form.reset();
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="h-[20rem] bg-blue-600 flex items-center justify-center">
        <h1 className="text-3xl text-center font-bold">{blog.title}</h1>
      </div>

      <div className="max-w-screen-lg mx-auto  px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img src={blog.imgSrc} alt={blog.title} className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="md:w-1/2">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-indigo-400">{blog.title}</h2>
              <div className="flex items-center gap-2 mt-2">
                <img src={blog.authorImg} alt={blog.author} className="h-10 w-10 rounded-full" />
                <div>
                  <span className="block text-indigo-400">{blog.author}</span>
                  <span className="block text-sm text-gray-500">{blog.date}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-4">{blog.description}</p>

            <div className="text-gray-300">
              <p>Full blog content goes here. You can provide a detailed description, further insights, or a larger section of text.</p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-indigo-400">Comments</h3>
          <div className="mt-4">
            {blog.comments.map((comment, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm font-semibold">{comment.author}:</p>
                <p className="text-gray-300">{comment.text}</p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mt-6">
            <textarea name="comment" className="w-full p-2 bg-gray-800 text-white rounded-lg" placeholder="Add a comment..." required></textarea>
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg">Post Comment</button>
          </form>
        </div>
      </div>

      {/* Left Side Social Media Icons */}
      <div className="fixed top-1/3 left-0 flex flex-col gap-4 items-center z-50">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
          <i className="fab fa-facebook-f text-3xl"></i>
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
          <i className="fab fa-twitter text-3xl"></i>
        </a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors duration-300">
          <i className="fab fa-linkedin-in text-3xl"></i>
        </a>
      </div>
    </div>
  );
}
