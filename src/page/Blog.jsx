import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Zap, Leaf, Recycle, Wrench,
  Calendar, User, Tag, ChevronRight
} from 'lucide-react';
const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=250&fit=crop',
      category: 'Solar Tech',
      title: 'Advancements in Solar Panel Efficiency',
      description: 'Explore the latest technologies that are making solar panels more efficient and affordable.',
      author: 'John Doe',
      date: '2023-10-01',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
      category: 'Installation',
      title: 'Rooftop Solar Installation Guide',
      description: 'A comprehensive guide to installing solar panels on residential and commercial rooftops.',
      author: 'Jane Smith',
      date: '2023-09-25',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop',
      category: 'Benefits',
      title: 'Environmental Impact of Solar Energy',
      description: 'How solar energy contributes to reducing carbon footprint and promoting sustainability.',
      author: 'Mike Johnson',
      date: '2023-09-20',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      category: 'Solar Tech',
      title: 'Solar Battery Storage Solutions',
      description: 'Understanding the importance of battery storage in maximizing solar energy utilization.',
      author: 'Sarah Wilson',
      date: '2023-09-15',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1559302508-6b5b5b5b5b5?w=400&h=250&fit=crop',
      category: 'Installation',
      title: 'Off-Grid Solar Systems',
      description: 'How off-grid solar systems provide energy independence in remote areas.',
      author: 'David Brown',
      date: '2023-09-10',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop',
      category: 'Benefits',
      title: 'Financial Benefits of Going Solar',
      description: 'Calculate your savings and ROI when switching to solar energy.',
      author: 'Emma Davis',
      date: '2023-09-05',
    },
  ];

  const categories = ['Solar Tech', 'Installation', 'Benefits', 'Maintenance'];
  const recentPosts = blogPosts.slice(0, 3);
  const tags = ['solar', 'renewable', 'energy', 'green', 'panel', 'rooftop'];

  const features = [
    { icon: <Zap size={40} />, title: 'Cost Saving', description: 'Reduce electricity bills significantly with solar power.' },
    { icon: <Leaf size={40} />, title: 'Eco Friendly', description: 'Clean energy that helps the environment.' },
    { icon: <Recycle size={40} />, title: 'Renewable Energy', description: 'Sustainable power from the sun.' },
    { icon: <Wrench size={40} />, title: 'Low Maintenance', description: 'Minimal upkeep required for solar systems.' },
  ];

  const BlogCard = ({ post }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
          {post.category}
        </span>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {post.date}
          </div>
        </div>
        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center">
          Read More <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );

  const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-6">
        <div className="w-20 h-6 bg-gray-300 rounded-full mb-3"></div>
        <div className="w-3/4 h-6 bg-gray-300 mb-3"></div>
        <div className="w-full h-4 bg-gray-300 mb-2"></div>
        <div className="w-2/3 h-4 bg-gray-300 mb-4"></div>
        <div className="flex justify-between mb-4">
          <div className="w-16 h-4 bg-gray-300"></div>
          <div className="w-16 h-4 bg-gray-300"></div>
        </div>
        <div className="w-24 h-8 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );



  const Hero = () => (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/80 to-green-500/80 z-10"></div>
      <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&h=1080&fit=crop" alt="Solar Panels" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-20 text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Powering the Future with Solar Energy
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the latest insights, innovations, and benefits of solar power technology.
        </motion.p>
        <motion.button
          className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore Our Blog
        </motion.button>
      </div>
    </section>
  );

  const Sidebar = () => (
    <aside className="w-full lg:w-1/4 lg:pl-8 mt-8 lg:mt-0">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Search</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat, index) => (
            <li key={index}>
              <a href="#" className="flex items-center hover:text-green-600 transition-colors text-gray-700">
                <ChevronRight size={16} className="mr-2" />
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id} className="flex">
              <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg mr-3" />
              <div>
                <a href="#" className="text-sm font-semibold hover:text-green-600 transition-colors text-gray-800">
                  {post.title}
                </a>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );

  const Features = () => (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Solar Energy?</h2>
          <p className="text-xl text-gray-600">Discover the incredible benefits of going solar</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-green-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );





  return (
    <div>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-3/4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Latest Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  Array(6).fill().map((_, index) => <SkeletonCard key={index} />)
                ) : (
                  blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))
                )}
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default Blog;