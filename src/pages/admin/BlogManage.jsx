import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User,
  Tag,
  Save,
  X,
  Upload,
  Image,
  FileText,
  Search,
  Filter,
  MoreVertical,
  ExternalLink,
  BarChart3,
  MessageCircle,
  BookOpen,
  Globe,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  ChevronDown,
  ChevronUp,
  RefreshCw
} from 'lucide-react';
import axios from '../../../axiosInstance';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const BlogManage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [saving, setSaving] = useState(false);

  const [blogData, setBlogData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    author: {
      name: 'Admin',
      email: 'admin@triveniconstruction.com',
      bio: 'Administrator'
    },
    status: 'draft',
    featuredImage: {
      url: '',
      alt: '',
      caption: ''
    },
    readingTime: '',
    featured: false,
    allowComments: true,
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: ''
    }
  });

  // Categories
  const categories = [
    'Structural Engineering',
    'Piping Systems',
    'Mechanical Works',
    'Electrical Systems',
    'Safety Standards',
    'Industry Insights',
    'Construction',
    'Technology',
    'Sustainability'
  ];

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/blogs?limit=100&admin=true');
      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (error) {
      toast.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('seo.')) {
      const seoField = name.split('.')[1];
      setBlogData(prev => ({
        ...prev,
        seo: {
          ...prev.seo,
          [seoField]: value
        }
      }));
    } else if (name.startsWith('featuredImage.')) {
      const imageField = name.split('.')[1];
      setBlogData(prev => ({
        ...prev,
        featuredImage: {
          ...prev.featuredImage,
          [imageField]: value
        }
      }));
    } else if (name.startsWith('author.')) {
      const authorField = name.split('.')[1];
      setBlogData(prev => ({
        ...prev,
        author: {
          ...prev.author,
          [authorField]: value
        }
      }));
    } else {
      setBlogData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleCreateNew = () => {
    Swal.fire({
      title: 'Create New Blog Post',
      text: 'Ready to create a new blog post?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#F59E0B',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, create it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setBlogData({
          title: '',
          slug: '',
          excerpt: '',
          content: `<h2>Start writing your amazing content here...</h2><p>You can use HTML tags for formatting.</p>`,
          category: '',
          tags: '',
          author: {
            name: 'Admin',
            email: 'admin@triveni.com',
            bio: 'Administrator'
          },
          status: 'published',
          featuredImage: {
            url: '',
            alt: '',
            caption: ''
          },
          readingTime: '5',
          featured: false,
          allowComments: true,
          seo: {
            metaTitle: '',
            metaDescription: '',
            keywords: ''
          }
        });
        setEditingBlog(null);
        setShowEditor(true);
      }
    });
  };

  const handleEdit = (blog) => {
    Swal.fire({
      title: 'Edit Blog Post',
      text: `Do you want to edit "${blog.title}"?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#F59E0B',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, edit it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setBlogData({
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt,
          content: blog.content || '<h2>Start writing your amazing content here...</h2>',
          category: blog.category,
          tags: blog.tags?.join(', ') || '',
          author: blog.author || {
            name: 'Admin',
            email: 'admin@triveniconstruction.com',
            bio: 'Administrator'
          },
          status: blog.status,
          featuredImage: blog.featuredImage || {
            url: '',
            alt: '',
            caption: ''
          },
          readingTime: blog.readingTime?.toString() || '5',
          featured: blog.featured || false,
          allowComments: blog.allowComments !== false,
          seo: blog.seo || {
            metaTitle: '',
            metaDescription: '',
            keywords: ''
          }
        });
        setEditingBlog(blog._id);
        setShowEditor(true);
      }
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      // Prepare data for API
      const submitData = {
        ...blogData,
        tags: blogData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readingTime: parseInt(blogData.readingTime) || 5,
        slug: blogData.slug || generateSlug(blogData.title)
      };

      let response;
      if (editingBlog) {
        // Update existing blog
        response = await axios.put(`/blogs/${editingBlog}`, submitData);
        Swal.fire({
          title: 'Updated!',
          text: 'Blog updated successfully!',
          icon: 'success',
          confirmButtonColor: '#F59E0B'
        });
      } else {
        // Create new blog
        response = await axios.post('/blogs', submitData);
        Swal.fire({
          title: 'Created!',
          text: 'Blog created successfully!',
          icon: 'success',
          confirmButtonColor: '#F59E0B'
        });
      }

      if (response.data.success) {
        setShowEditor(false);
        setEditingBlog(null);
        fetchBlogs(); // Refresh the list
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to save blog',
        icon: 'error',
        confirmButtonColor: '#EF4444'
      });
    } finally {
      setSaving(false);
    }
  };
  ////delete blog
  //  const handleDelete = async (id) => {
  //    if (window.confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
  //      try {
  //        await axios.delete(`/blogs/${id}`);
  //        toast.success('Blog deleted successfully!');
  //        fetchBlogs(); // Refresh the list
  //      } catch (error) {
  //        toast.error('Failed to delete blog');
  //      }
  //    }
  //  };


  //delete blog

  //delete blog
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4444',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");

          await axios.delete(`/blogs/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          Swal.fire({
            title: 'Deleted!',
            text: 'Blog has been deleted successfully.',
            icon: 'success',
            confirmButtonColor: '#F59E0B'
          });
          fetchBlogs();
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete blog',
            icon: 'error',
            confirmButtonColor: '#EF4444'
          });
        }
      }
    });
  };



  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`/blogs/${id}`, { status: newStatus });
      toast.success(`Blog ${newStatus} successfully!`);
      fetchBlogs(); // Refresh the list
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleFeaturedToggle = async (id, currentFeatured) => {
    try {
      await axios.put(`/blogs/${id}`, { featured: !currentFeatured });
      toast.success(`Blog ${!currentFeatured ? 'added to' : 'removed from'} featured!`);
      fetchBlogs(); // Refresh the list
    } catch (error) {
      toast.error('Failed to update featured status');
    }
  };

  // Filter blogs
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || blog.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Statistics
  const stats = {
    total: blogs.length,
    published: blogs.filter(blog => blog.status === 'published').length,
    drafts: blogs.filter(blog => blog.status === 'draft').length,
    featured: blogs.filter(blog => blog.featured).length,
    totalViews: blogs.reduce((sum, blog) => sum + (blog.views || 0), 0),
    totalComments: blogs.reduce((sum, blog) => sum + (blog.comments || 0), 0)
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-yellow-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-2">Create, edit, and manage your blog content</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          {/* Refresh Button */}
          <button
            onClick={fetchBlogs}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200"
            title="Refresh"
          >
            <RefreshCw className="w-5 h-5" />
          </button>

          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'grid'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'list'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              <div className="w-4 h-4 flex flex-col space-y-0.5">
                <div className="bg-current h-1 rounded-sm"></div>
                <div className="bg-current h-1 rounded-sm"></div>
                <div className="bg-current h-1 rounded-sm"></div>
              </div>
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCreateNew}
            className="bg-gradient-to-r from-[#880481] via-[#30085b] to-[#ad6bac] hover:from-[#9a0591] hover:via-[#3a096b] hover:to-[#bd7bbc] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </motion.button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard
          title="Total Posts"
          value={stats.total}
          icon={FileText}
          color="blue"
        />
        <StatCard
          title="Published"
          value={stats.published}
          icon={Globe}
          color="green"
        />
        <StatCard
          title="Drafts"
          value={stats.drafts}
          icon={BookOpen}
          color="yellow"
        />
        <StatCard
          title="Featured"
          value={stats.featured}
          icon={Star}
          color="purple"
        />
        <StatCard
          title="Total Views"
          value={stats.totalViews}
          icon={BarChart3}
          color="orange"
        />
        <StatCard
          title="Comments"
          value={stats.totalComments}
          icon={MessageCircle}
          color="indigo"
        />
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts, tags, content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="views">Most Views</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid/List View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
              onFeaturedToggle={handleFeaturedToggle}
            />
          ))}
        </div>
      ) : (
        <BlogTableView
          blogs={filteredBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
          onFeaturedToggle={handleFeaturedToggle}
        />
      )}

      {filteredBlogs.length === 0 && !loading && (
        <EmptyState onCreateNew={handleCreateNew} />
      )}

      {/* Blog Editor Modal */}
      <AnimatePresence>
        {showEditor && (
          <BlogEditor
            blogData={blogData}
            editingBlog={editingBlog}
            saving={saving}
            onInputChange={handleInputChange}
            onSave={handleSave}
            onClose={() => setShowEditor(false)}
            categories={categories}
            generateSlug={generateSlug}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    yellow: 'text-yellow-500',
    purple: 'text-purple-500',
    orange: 'text-orange-500',
    indigo: 'text-indigo-500'
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <Icon className={`w-8 h-8 ${colorClasses[color]}`} />
      </div>
    </div>
  );
};

// Blog Card Component for Grid View
const BlogCard = ({ blog, onEdit, onDelete, onStatusChange, onFeaturedToggle }) => {
  const [showMenu, setShowMenu] = useState(false);

  const statusColors = {
    published: 'bg-green-100 text-green-800 border-green-200',
    draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    archived: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Featured Badge */}
      {blog.featured && (
        <div className="bg-yellow-500 text-gray-900 px-3 py-1 text-xs font-semibold absolute top-4 left-4 rounded-full z-10">
          Featured
        </div>
      )}

      {/* Blog Image/Placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {blog.featuredImage?.url ? (
          <img
            src={blog.featuredImage.url}
            alt={blog.featuredImage.alt || blog.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg- bg-opacity-20"></div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[blog.status]}`}>
            {blog.status === 'published' ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
            {blog.status}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-yellow-600 font-semibold text-sm">{blog.category}</span>
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Clock className="w-3 h-3" />
            <span>{blog.readingTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 leading-tight">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {blog.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
          {blog.tags?.length > 3 && (
            <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
              +{blog.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{blog.views || 0}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{blog.comments || 0}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-10 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-20 min-w-48">
                <button
                  onClick={() => { onEdit(blog); setShowMenu(false); }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Post</span>
                </button>
                <button
                  onClick={() => { onStatusChange(blog._id, blog.status === 'published' ? 'draft' : 'published'); setShowMenu(false); }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span>{blog.status === 'published' ? 'Unpublish' : 'Publish'}</span>
                </button>
                <button
                  onClick={() => { onFeaturedToggle(blog._id, blog.featured); setShowMenu(false); }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Star className="w-4 h-4" />
                  <span>{blog.featured ? 'Remove Featured' : 'Mark Featured'}</span>
                </button>
                <a
                  href={`/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live</span>
                </a>
                <div className="border-t border-gray-200 my-1"></div>
                <button
                  onClick={() => { onDelete(blog._id); setShowMenu(false); }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close menu when clicking outside */}
      {showMenu && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowMenu(false)}
        />
      )}
    </motion.div>
  );
};

// Blog Table View Component
const BlogTableView = ({ blogs, onEdit, onDelete, onStatusChange, onFeaturedToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Post</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Metrics</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogs.map((blog) => (
              <BlogTableRow
                key={blog._id}
                blog={blog}
                onEdit={onEdit}
                onDelete={onDelete}
                onStatusChange={onStatusChange}
                onFeaturedToggle={onFeaturedToggle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Blog Table Row Component
const BlogTableRow = ({ blog, onEdit, onDelete, onStatusChange, onFeaturedToggle }) => {
  const statusColors = {
    published: 'bg-green-100 text-green-800',
    draft: 'bg-yellow-100 text-yellow-800',
    archived: 'bg-gray-100 text-gray-800'
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex-shrink-0 overflow-hidden">
            {blog.featuredImage?.url && (
              <img
                src={blog.featuredImage.url}
                alt={blog.featuredImage.alt || blog.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                {blog.title}
              </h3>
              {blog.featured && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
            </div>
            <p className="text-gray-600 text-xs line-clamp-1">{blog.excerpt}</p>
            <div className="flex items-center space-x-2 mt-2">
              <User className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-500">{blog.author?.name}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {blog.category}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[blog.status]}`}>
          {blog.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-4 text-xs text-gray-600">
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{blog.views || 0}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-3 h-3" />
            <span>{blog.comments || 0}</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onEdit(blog)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            title="Edit"
          >
            <Edit className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onFeaturedToggle(blog._id, blog.featured)}
            className={`p-2 rounded-lg transition-colors duration-200 ${blog.featured
              ? 'text-yellow-600 hover:bg-yellow-50'
              : 'text-gray-400 hover:bg-gray-50'
              }`}
            title={blog.featured ? 'Remove Featured' : 'Mark Featured'}
          >
            <Star className={`w-4 h-4 ${blog.featured ? 'fill-current' : ''}`} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(blog._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </td>
    </tr>
  );
};

// Empty State Component
const EmptyState = ({ onCreateNew }) => (
  <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">No blog posts found</h3>
    <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
    <button
      onClick={onCreateNew}
      className="bg-gradient-to-r from-[#880481] via-[#30085b] to-[#ad6bac] hover:from-[#9a0591] hover:via-[#3a096b] hover:to-[#bd7bbc] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
    >
      <Plus className="w-5 h-5" />
      <span>Create Your First Post</span>
    </button>
  </div>
);

// Blog Editor Component
const BlogEditor = ({ blogData, editingBlog, saving, onInputChange, onSave, onClose, categories, generateSlug }) => {
  const [activeTab, setActiveTab] = useState('content');

  const handleTitleChange = (e) => {
    onInputChange(e);
    // Auto-generate slug if empty
    if (!blogData.slug) {
      onInputChange({
        target: {
          name: 'slug',
          value: generateSlug(e.target.value)
        }
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h2>
            <p className="text-gray-600 mt-1">
              {editingBlog ? 'Update your blog content' : 'Write and publish a new blog post'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-1 px-6">
            {['content', 'seo', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors duration-200 ${activeTab === tab
                  ? 'text-yellow-600 border-b-2 border-yellow-500'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'content' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={blogData.title}
                    onChange={handleTitleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    placeholder="Enter blog title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={blogData.slug}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    placeholder="blog-post-url-slug"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    name="excerpt"
                    value={blogData.excerpt}
                    onChange={onInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none"
                    placeholder="Brief description of your blog post"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    name="content"
                    value={blogData.content}
                    onChange={onInputChange}
                    rows="12"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none font-mono text-sm"
                    placeholder="Write your blog content here... (HTML supported)"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    You can use HTML tags for formatting your content
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Featured Image
                  </label>
                  <div className="space-y-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const formData = new FormData();
                          formData.append('image', file);
                          try {
                            const res = await axios.post('/blogs/upload-image', formData, {
                              headers: { 'Content-Type': 'multipart/form-data' }
                            });
                            if (res.data.success) {
                              onInputChange({
                                target: {
                                  name: 'featuredImage.url',
                                  value: res.data.imageUrl
                                }
                              });
                              toast.success('Image uploaded successfully!');
                            }
                          } catch (error) {
                            toast.error('Image upload failed');
                          }
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    />
                    {blogData.featuredImage.url && (
                      <img
                        src={blogData.featuredImage.url}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded-xl"
                      />
                    )}
                    <input
                      type="text"
                      name="featuredImage.alt"
                      value={blogData.featuredImage.alt}
                      onChange={onInputChange}
                      placeholder="Image alt text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={blogData.category}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={blogData.tags}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    placeholder="tag1, tag2, tag3"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Separate tags with commas
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reading Time (minutes)
                  </label>
                  <input
                    type="number"
                    name="readingTime"
                    value={blogData.readingTime}
                    onChange={onInputChange}
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  name="seo.metaTitle"
                  value={blogData.seo.metaTitle}
                  onChange={onInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  placeholder="SEO meta title"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  name="seo.metaDescription"
                  value={blogData.seo.metaDescription}
                  onChange={onInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none"
                  placeholder="SEO meta description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  name="seo.keywords"
                  value={blogData.seo.keywords}
                  onChange={onInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={blogData.status}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={blogData.featured}
                    onChange={onInputChange}
                    className="w-4 h-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Featured Post
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="allowComments"
                    checked={blogData.allowComments}
                    onChange={onInputChange}
                    className="w-4 h-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Allow Comments
                  </label>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Author Name
                  </label>
                  <input
                    type="text"
                    name="author.name"
                    value={blogData.author.name}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Author Email
                  </label>
                  <input
                    type="email"
                    name="author.email"
                    value={blogData.author.email}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Author Bio
                  </label>
                  <textarea
                    name="author.bio"
                    value={blogData.author.bio}
                    onChange={onInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-500">
            {editingBlog ? 'Editing existing post' : 'Creating new post'}
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
            >
              Cancel
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSave}
              disabled={saving || !blogData.title || !blogData.excerpt || !blogData.content || !blogData.category}
              className="bg-gradient-to-r from-[#880481] via-[#30085b] to-[#ad6bac] hover:from-[#9a0591] hover:via-[#3a096b] hover:to-[#bd7bbc] disabled:bg-gray-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 disabled:cursor-not-allowed shadow-lg"
            >
              {saving ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              <span>{saving ? 'Saving...' : (editingBlog ? 'Update Post' : 'Publish Post')}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogManage;