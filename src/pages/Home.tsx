import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, MessageSquare } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">欢迎来到即能创新社区</h1>
      <p className="text-xl mb-8">连接创新者，分享灵感，共同成长</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Lightbulb className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">创新思维</h2>
          <p>探索前沿理念，激发创新灵感</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">社区互动</h2>
          <p>与志同道合的创新者交流，建立联系</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MessageSquare className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">专家咨询</h2>
          <p>获得行业专家的指导和建议</p>
        </div>
      </div>
      
      <Link to="/register" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        立即加入
      </Link>
    </div>
  );
};

export default Home;