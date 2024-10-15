import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, HelpCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Users className="mr-2" />
          即能创新社区
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/forum" className="hover:text-blue-200 flex items-center"><MessageCircle className="mr-1" />论坛</Link></li>
            <li><Link to="/consultation" className="hover:text-blue-200 flex items-center"><HelpCircle className="mr-1" />在线咨询</Link></li>
            <li><Link to="/login" className="hover:text-blue-200">登录</Link></li>
            <li><Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100">注册</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;