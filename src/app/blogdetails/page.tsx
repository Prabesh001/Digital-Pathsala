"use client"
import { useState } from 'react';
import Link from 'next/link';

const BlogPost = () => {
  const [comment, setComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log({ comment });
    setComment('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-950 mb-6">
              Reconnaissance for Bug Bounty Hunting
            </h1>
            
            <span className="block text-center text-gray-400 text-xl mb-6">September 18, 2024</span>
            
            <div className="relative w-full h-96 md:h-[600px] mb-8">
              <img
                src="https://digitalpathshalanepal.com/wp-content/uploads/2024/09/0_P9HBYbKbqHAI0ZB9.webp"
                alt="Bug bounty hunting"
                className="object-cover rounded-lg"
              />
            </div>

            <div className="prose max-w-none mb-12">
              {/* Your blog content here */}
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum...
              </p>
            </div>

            <div className="w-full space-y-6">
              <h4 className="text-2xl font-extrabold text-blue-950">Leave a Reply</h4>
              <p className="text-gray-500">
                You must be{' '}
                <Link href="/slogin" className="text-green-600 underline hover:text-green-800">
                  logged in
                </Link>{' '}
                to post a comment.
              </p>

              <form onSubmit={handleSubmitComment} className="space-y-4">
                <label htmlFor="comment" className="block text-blue-950 font-semibold">
                  Comments *
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-4 border border-blue-800 rounded-md text-sm resize-none outline-none"
                  rows={5}
                  placeholder="Write your comment here..."
                  required
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;