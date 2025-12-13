import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  Share2,
  User,
  MessageCircle,
  Star,
  ArrowRight,
  BookOpen,
  Tag,
  ChevronRight,
  ThumbsUp,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare
} from 'lucide-react';
import axios from '../../../axiosInstance';

const BlogPages = () => {
  const { id: slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    comment: '',
    rating: 5
  });
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(0);

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

  // Fetch blog data
  const fetchBlog = async () => {
    try {
      const res = await axios.get(`/blogs/${slug}`);
      if (res.data.success) {
        setBlog(res.data.data);
        setViews(res.data.data.views);
        
        // Fetch related blogs
        const relatedRes = await axios.get(`/blogs/related/${res.data.data._id}`);
        console.log(relatedRes);
        if (relatedRes.data.success) {
          setRelatedBlogs(relatedRes.data.data);
        }
        
        // Fetch comments
        const commentsRes = await axios.get(`/blogs/${res.data.data._id}/comments`);
        if (commentsRes.data.success) {
          setComments(commentsRes.data.data);
        }
      }
    } catch (error) {
      console.log('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/blogs/${blog._id}/comments`, commentForm);
      if (res.data.success) {
        setComments(prev => [res.data.data, ...prev]);
        setCommentForm({
          name: '',
          email: '',
          comment: '',
          rating: 5
        });
      }
    } catch (error) {
      console.log('Error submitting comment:', error);
    }
  };

  const handleCommentChange = (e) => {
    setCommentForm({
      ...commentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleLike = async () => {
    try {
      const res = await axios.post(`/blogs/${blog._id}/like`);
      if (res.data.success) {
        setLiked(!liked);
        setBlog(prev => ({
          ...prev,
          likes: liked ? prev.likes - 1 : prev.likes + 1
        }));
      }
    } catch (error) {
      console.log('Error liking blog:', error);
    }
  };

  const shareBlog = (platform) => {
    const url = window.location.href;
    const title = blog.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
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
          <p className="text-gray-600 text-lg">Loading blog post...</p>
        </motion.div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-40"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button 
              onClick={() => navigate('/')}
              className="hover:text-yellow-600 transition-colors duration-200 font-medium flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button 
              onClick={() => navigate('/blog')}
              className="hover:text-yellow-600 transition-colors duration-200 font-medium"
            >
              Blog
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold truncate max-w-xs lg:max-w-md">
              {blog.title}
            </span>
          </div>
        </div>
      </motion.nav>

      {/* Blog Header */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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
            className="max-w-4xl mx-auto text-white"
          >
            {/* Categories */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                {blog.category}
              </span>
              <div className="flex items-center space-x-2 text-yellow-200 bg-yellow-500/10 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{blog.readingTime} min read</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {blog.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              {blog.excerpt}
            </motion.p>

            {/* Author Info and Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 border-t border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {blog.author?.name?.charAt(0) || 'T'}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    {blog.author?.name || 'TCS Team'}
                  </h4>
                  <p className="text-yellow-200 text-sm">
                    {formatDate(blog.publishedAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-yellow-200">
                <div className="flex items-center space-x-2 bg-yellow-500/10 px-3 py-2 rounded-lg">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">{views} views</span>
                </div>
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    liked 
                      ? 'bg-yellow-500/20 text-yellow-400' 
                      : 'bg-yellow-500/10 hover:bg-yellow-500/20'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                  <span className="text-sm font-medium">
                    {blog.likes + (liked ? 1 : 0)} likes
                  </span>
                </button>
                <div className="flex items-center space-x-2 bg-yellow-500/10 px-3 py-2 rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{comments.length} comments</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content and Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Image */}
              {blog.featuredImage && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-full h-64 md:h-96 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Blog Content */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-yellow-600 hover:prose-a:text-yellow-700 prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
                  style={{
                    '--tw-prose-body': 'rgb(55 65 81)',
                    '--tw-prose-headings': 'rgb(17 24 39)',
                    '--tw-prose-links': 'rgb(234 179 8)',
                    '--tw-prose-bold': 'rgb(17 24 39)',
                    '--tw-prose-counters': 'rgb(107 114 128)',
                    '--tw-prose-bullets': 'rgb(209 213 219)',
                    '--tw-prose-hr': 'rgb(229 231 235)',
                    '--tw-prose-quotes': 'rgb(17 24 39)',
                    '--tw-prose-quote-borders': 'rgb(229 231 235)',
                    '--tw-prose-captions': 'rgb(107 114 128)',
                    '--tw-prose-code': 'rgb(17 24 39)',
                    '--tw-prose-pre-code': 'rgb(229 231 235)',
                    '--tw-prose-pre-bg': 'rgb(17 24 39)',
                    '--tw-prose-th-borders': 'rgb(209 213 219)',
                    '--tw-prose-td-borders': 'rgb(229 231 235)'
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-yellow-500" />
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:from-yellow-50 hover:to-yellow-100 hover:text-yellow-700 transition-all duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Share */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Share this article</h4>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => shareBlog('facebook')}
                      className="flex items-center space-x-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg hover:bg-[#166FE5] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Facebook className="w-4 h-4" />
                      <span className="font-semibold">Facebook</span>
                    </button>
                    <button
                      onClick={() => shareBlog('twitter')}
                      className="flex items-center space-x-2 bg-[#1DA1F2] text-white px-6 py-3 rounded-lg hover:bg-[#1A91DA] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Twitter className="w-4 h-4" />
                      <span className="font-semibold">Twitter</span>
                    </button>
                    <button
                      onClick={() => shareBlog('linkedin')}
                      className="flex items-center space-x-2 bg-[#0A66C2] text-white px-6 py-3 rounded-lg hover:bg-[#0959AA] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="font-semibold">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </motion.article>

              {/* Comments Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <MessageSquare className="w-8 h-8 mr-3 text-yellow-500" />
                  Comments ({comments.length})
                </h2>

                {/* Comments List */}
                <div className="space-y-6 mb-12">
                  {comments.length === 0 ? (
                    <div className="text-center py-8">
                      <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment._id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200/60">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                              {comment.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg">{comment.name}</h4>
                              <p className="text-gray-500 text-sm">
                                {formatDate(comment.createdAt)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {renderStars(comment.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Comment Form */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/60">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave a Comment</h3>
                  <form onSubmit={handleCommentSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={commentForm.name}
                          onChange={handleCommentChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={commentForm.email}
                          onChange={handleCommentChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="rating" className="block text-sm font-semibold text-gray-700 mb-2">
                        Rating
                      </label>
                      <select
                        id="rating"
                        name="rating"
                        value={commentForm.rating}
                        onChange={handleCommentChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="5">★★★★★ Excellent</option>
                        <option value="4">★★★★☆ Very Good</option>
                        <option value="3">★★★☆☆ Good</option>
                        <option value="2">★★☆☆☆ Fair</option>
                        <option value="1">★☆☆☆☆ Poor</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
                        Comment *
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        rows="6"
                        value={commentForm.comment}
                        onChange={handleCommentChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Share your thoughts and insights..."
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                    >
                      Post Comment
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8 sticky top-8">
                {/* Author Bio */}
                {blog.author && (
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-xl p-8"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <User className="w-6 h-6 mr-2 text-yellow-500" />
                      About the Author
                    </h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg flex-shrink-0">
                        {blog.author.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{blog.author.name}</h4>
                        <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                          {blog.author.bio}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-yellow-500" />
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedBlogs.length === 0 ? (
                      <p className="text-gray-600 text-sm text-center py-4">
                        No related articles found.
                      </p>
                    ) : (
                      relatedBlogs.map((relatedBlog) => (
                        <motion.div
                          key={relatedBlog._id}
                          whileHover={{ x: 5 }}
                          className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(relatedBlog.category)} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Link to={`/blog/${relatedBlog.slug}`}>
                              <h5 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200 mb-2 text-sm">
                                {relatedBlog.title}
                              </h5>
                            </Link>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(relatedBlog.publishedAt)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{relatedBlog.readingTime} min</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white"
                >
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    Get the latest construction insights, industry trends, and expert knowledge delivered to your inbox.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500 text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold py-3 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-sm"
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

export default BlogPages;