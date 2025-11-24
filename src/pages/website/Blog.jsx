import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar,
  User,
  Clock,
  Tag,
  Eye,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Search,
  Filter,
  ChevronDown,
  ThumbsUp
} from 'lucide-react';
import axios from '../../../axiosInstance';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      const res = await axios.get('/blogs');
      if (res.data.success) {
        setBlogs(res.data.data);
        setFilteredBlogs(res.data.data);
        
        // Extract unique categories
        const uniqueCategories = ['all', ...new Set(res.data.data.map(blog => blog.category))];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.log('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs based on category and search term
  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredBlogs(filtered);
    setVisibleBlogs(6);
  }, [selectedCategory, searchTerm, blogs]);

  const loadMoreBlogs = () => {
    setVisibleBlogs(prev => prev + 6);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Structural Engineering': 'from-blue-500 to-blue-600',
      'Piping Systems': 'from-green-500 to-green-600',
      'Mechanical Works': 'from-orange-500 to-orange-600',
      'Electrical Systems': 'from-purple-500 to-purple-600',
      'Safety Standards': 'from-red-500 to-red-600',
      'Industry Insights': 'from-yellow-500 to-yellow-600',
      'Construction': 'from-indigo-500 to-indigo-600',
      'Technology': 'from-teal-500 to-teal-600',
      'Sustainability': 'from-emerald-500 to-emerald-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading blogs...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">Triveni Inframech Insights</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Construction <span className="text-yellow-400">Knowledge Hub</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              Expert insights, industry trends, and technical knowledge from TRIVENI INFRAMECH PVT LTD - 
              Your trusted partner in industrial construction and engineering excellence.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Filters and Results Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8"
              >
                <div className="flex items-center space-x-4">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">
                    Showing {Math.min(visibleBlogs, filteredBlogs.length)} of {filteredBlogs.length} articles
                  </span>
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                        selectedCategory === category
                          ? 'bg-yellow-400 text-gray-900 shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Featured Blogs */}
              {filteredBlogs?.filter(blog => blog.featured).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-3 text-yellow-500" />
                    Featured Articles
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredBlogs
                      .filter(blog => blog.featured)
                      .slice(0, 2)
                      .map((blog, index) => (
                      <motion.article
                        key={blog._id}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-zinc-200 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
                      >
                        <Link to={`/blog/${blog.slug}`}>
                          <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(blog.category)} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                                <BookOpen className="w-10 h-10" />
                              </div>
                            </div>
                            <div className="absolute top-4 left-4">
                              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                Featured
                              </span>
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          <div className="p-8">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>{blog.author?.name || 'TCS Team'}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(blog.publishedAt)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{blog.readingTime} min read</span>
                              </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#30085b] mb-4 group-hover:text-[#870481] transition-colors line-clamp-2">
                              {blog.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                              {blog.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Eye className="w-4 h-4" />
                                  <span>{blog.views} views</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <ThumbsUp className="w-4 h-4" />
                                  <span>{blog.likes} likes</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2 text-yellow-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                                <span>Read More</span>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* All Blogs */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold text-[#870481] mb-8">
                  {selectedCategory === 'all' ? 'All Articles' : selectedCategory}
                </h2>
                
                {filteredBlogs.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Try adjusting your search terms or browse different categories.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
                        <motion.article
                          key={blog._id}
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="bg-zinc-200 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group cursor-pointer"
                        >
                          <Link to={`/blog/${blog.slug}`}>
                            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(blog.category)} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                                  <BookOpen className="w-8 h-8" />
                                </div>
                              </div>
                              <div className="absolute top-4 left-4">
                                <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                  {blog.category}
                                </span>
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-yellow-600 font-semibold text-sm">{blog.category}</span>
                                <span className="text-gray-500 text-sm flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {formatDate(blog.publishedAt)}
                                </span>
                              </div>

                              <h3 className="text-xl font-bold text-[#30085b] mb-3 group-hover:text-[#870481] transition-colors line-clamp-2">
                                {blog.title}
                              </h3>

                              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                {blog.excerpt}
                              </p>

                              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                  <div className="flex items-center space-x-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{blog.readingTime} min</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Eye className="w-3 h-3" />
                                    <span>{blog.views}</span>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-1 text-yellow-600 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                                  <span>Read</span>
                                  <ArrowRight className="w-3 h-3" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.article>
                      ))}
                    </div>

                    {/* Load More Button */}
                    {visibleBlogs < filteredBlogs.length && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mt-12"
                      >
                        <button
                          onClick={loadMoreBlogs}
                          className="bg-gradient-to-r from-[#631caf] to-[#8b0389] text-white font-bold px-8 py-4 rounded-xl hover:from-[#7a1fc7] hover:to-[#a004a1] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                        >
                          Load More Articles
                        </button>
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="space-y-8 sticky top-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-zinc-200 rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-[#30085b] mb-6 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-yellow-400" />
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.button
                        key={category}
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center justify-between w-full p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                          selectedCategory === category
                            ? 'bg-[#870481]/10 text-[#870481] border border-[#870481]/20'
                            : 'hover:bg-white/50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                            selectedCategory === category 
                              ? 'from-[#631caf] to-[#8b0389]' 
                              : getCategoryColor(category)
                          }`}></div>
                          <span className="font-medium capitalize">
                            {category === 'all' ? 'All Categories' : category}
                          </span>
                        </div>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold">
                          {category === 'all' 
                            ? blogs.length 
                            : blogs.filter(b => b.category === category).length
                          }
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-zinc-200 rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-[#30085b] mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-yellow-400" />
                    Popular Posts
                  </h3>
                  <div className="space-y-4">
                    {blogs
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 5)
                      .map((blog, index) => (
                      <motion.div
                        key={blog._id}
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-200 cursor-pointer group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(blog.category)} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link to={`/blog/${blog.slug}`}>
                            <h4 className="text-sm font-semibold text-[#30085b] line-clamp-2 group-hover:text-[#870481] transition-colors mb-1">
                              {blog.title}
                            </h4>
                          </Link>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Eye className="w-3 h-3" />
                            <span>{blog.views} views</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-[#631caf] to-[#8b0389] rounded-2xl shadow-lg p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    Get the latest construction insights and industry trends delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-100 text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-3 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 text-sm cursor-pointer"
                    >
                      Subscribe Now
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;