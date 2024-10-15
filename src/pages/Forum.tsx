import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, MessageSquare } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
}

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "AI在创新中的应用",
      content: "人工智能正在改变我们的创新方式...",
      author: "张三",
      date: "2024-03-15",
      likes: 15,
      comments: 5
    },
    {
      id: 2,
      title: "可持续发展创新案例分享",
      content: "最近看到一个很有意思的可持续发展项目...",
      author: "李四",
      date: "2024-03-14",
      likes: 20,
      comments: 8
    },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleNewPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    const post: Post = {
      id: posts.length + 1,
      ...newPost,
      author: "当前用户",
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: 0
    };
    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">创新论坛</h1>
      
      <form onSubmit={handleSubmitPost} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">发布新帖子</h2>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleNewPostChange}
            placeholder="标题"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleNewPostChange}
            placeholder="内容"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          发布
        </button>
      </form>
      
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{post.author} · {post.date}</span>
              <div className="flex space-x-4">
                <button className="flex items-center"><ThumbsUp size={18} className="mr-1" /> {post.likes}</button>
                <button className="flex items-center"><MessageSquare size={18} className="mr-1" /> {post.comments}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;