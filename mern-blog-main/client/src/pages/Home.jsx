import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import {useTypewriter,Cursor} from "react-simple-typewriter";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const greeting=`Hi ${currentUser.username} 👋`
  const welcome="Welcome to Intellexa-AI!!! 😁"
  const [text]=useTypewriter(
    {
      words: [greeting,welcome],
      loop:{},
      typeSpeed:300,
      deleteSpeed:80,
      delaySpeed:1000
    }
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>{text} <span><Cursor cursorColor="red" cursorStyle="_"/></span> </h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Embark on a transformative journey with Intellexa-AI, where innovation meets education, and dreams take flight. We are a club dedicated to shaping the future of the members by empowering individuals to thrive in the world of artificial intelligence and technology driven by the passion for learning and gaining knowledge.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
