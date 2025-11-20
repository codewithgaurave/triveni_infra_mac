import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Briefcase, 
  Mail, 
  Users,
  Eye,
  MessageCircle,
  TrendingUp,
  Calendar,
  ArrowRight,
  Plus,
  Download,
  Activity,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Tag,
  Heart,
  Star
} from 'lucide-react';
import axios from '../../../axiosInstance';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Fetch all dashboard data in single API call
  const fetchDashboardData = async () => {
    try {
      setRefreshing(true);
      const res = await axios.get('/dashboard/counts');
      
      if (res.data.success) {
        setDashboardData(res.data.data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Stats data from API response
  const stats = [
    {
      title: 'Total Blog Posts',
      value: dashboardData?.counts?.blogs?.total || 0,
      change: '+12%',
      trend: 'up',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/manegeblog'
    },
    {
      title: 'Career Applications',
      value: dashboardData?.counts?.applications?.total || 0,
      change: dashboardData?.counts?.applications?.new > 0 ? `+${dashboardData.counts.applications.new} new` : 'No new',
      trend: dashboardData?.counts?.applications?.new > 0 ? 'up' : 'neutral',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      link: '/admin/managecareer'
    },
    {
      title: 'Published Posts',
      value: dashboardData?.counts?.blogs?.published || 0,
      change: `${Math.round((dashboardData?.counts?.blogs?.published / (dashboardData?.counts?.blogs?.total || 1)) * 100)}%`,
      trend: 'up',
      icon: <Eye className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/manegeblog'
    },
    {
      title: 'Total Views',
      value: dashboardData?.engagement?.totalViews?.toLocaleString() || '0',
      change: '+25%',
      trend: 'up',
      icon: <Activity className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      link: '/admin/manegeblog'
    }
  ];

  // Quick actions
  const quickActions = [
    {
      title: 'Add New Blog Post',
      description: 'Create and publish new content',
      icon: <Plus className="w-5 h-5" />,
      link: '/admin/manegeblog',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'View Applications',
      description: `Check ${dashboardData?.counts?.applications?.new || 0} new applications`,
      icon: <Users className="w-5 h-5" />,
      link: '/admin/managecareer',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Manage Contacts',
      description: `View ${dashboardData?.counts?.contacts?.new || 0} new messages`,
      icon: <Mail className="w-5 h-5" />,
      link: '/admin/contactus',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'View Analytics',
      description: 'Detailed performance report',
      icon: <BarChart3 className="w-5 h-5" />,
      link: '#',
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => toast.info('Analytics dashboard coming soon!')
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-yellow-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening with your website today.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <button
            onClick={fetchDashboardData}
            disabled={refreshing}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard 
            key={index} 
            stat={stat} 
            index={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions & Additional Stats */}
        <div className="lg:col-span-2">
          <QuickActionsSection 
            quickActions={quickActions} 
            dashboardData={dashboardData}
          />
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-1">
          <RecentActivitiesSection 
            activities={dashboardData?.recentActivities || []}
          />
        </div>
      </div>

      {/* Engagement Metrics */}
      <EngagementSection dashboardData={dashboardData} />
    </div>
  );
};

// Stat Card Component
const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group"
    >
      <Link to={stat.link}>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
            {stat.icon}
          </div>
          <div className={`flex items-center space-x-1 text-sm font-semibold ${
            stat.trend === 'up' ? 'text-green-500' :
            stat.trend === 'down' ? 'text-red-500' : 'text-gray-500'
          }`}>
            {stat.trend === 'up' && <TrendingUp className="w-4 h-4" />}
            {stat.trend === 'down' && <TrendingUp className="w-4 h-4 transform rotate-180" />}
            {stat.trend === 'neutral' && <Clock className="w-4 h-4" />}
            <span>{stat.change}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
        <p className="text-gray-600 text-sm mb-4">{stat.title}</p>
        
        <div className="flex items-center text-yellow-600 text-sm font-semibold group-hover:text-yellow-700 transition-colors">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
};

// Quick Actions Section
const QuickActionsSection = ({ quickActions, dashboardData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
        <Activity className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {quickActions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {action.onClick ? (
              <button
                onClick={action.onClick}
                className={`${action.color} text-white rounded-xl p-4 w-full text-left transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{action.title}</h3>
                    <p className="text-white text-opacity-80 text-xs mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </button>
            ) : (
              <Link
                to={action.link}
                className={`${action.color} text-white rounded-xl p-4 block transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{action.title}</h3>
                    <p className="text-white text-opacity-80 text-xs mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{dashboardData?.counts?.blogs?.draft || 0}</div>
          <div className="text-sm text-gray-600">Draft Posts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{dashboardData?.counts?.blogs?.featured || 0}</div>
          <div className="text-sm text-gray-600">Featured</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{dashboardData?.engagement?.totalComments || 0}</div>
          <div className="text-sm text-gray-600">Total Comments</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{dashboardData?.engagement?.totalLikes || 0}</div>
          <div className="text-sm text-gray-600">Total Likes</div>
        </div>
      </div>
    </div>
  );
};

// Recent Activities Section
const RecentActivitiesSection = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />;
      case 'application': return <Briefcase className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'blog': return 'text-blue-500';
      case 'application': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>
      
      {activities.length === 0 ? (
        <div className="text-center py-8">
          <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No recent activities</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getActivityColor(activity.type)} bg-opacity-10 flex-shrink-0`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 hover:text-yellow-600 transition-colors line-clamp-1">
                  {activity.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Link
        to="/admin/manegeblog"
        className="block text-center mt-6 py-2 text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors border border-yellow-200 rounded-lg hover:bg-yellow-50"
      >
        View All Activities
      </Link>
    </div>
  );
};

// Engagement Section
const EngagementSection = ({ dashboardData }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Website Performance</h2>
          <p className="text-yellow-100 opacity-90 mb-4 lg:mb-0">
            Real-time analytics and engagement metrics for your construction blog.
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{dashboardData?.engagement?.engagementRate || 0}%</div>
            <div className="text-yellow-100 text-sm">Engagement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{dashboardData?.engagement?.averageViewsPerPost || 0}</div>
            <div className="text-yellow-100 text-sm">Avg Views/Post</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{dashboardData?.growth?.last30Days?.newBlogs || 0}</div>
            <div className="text-yellow-100 text-sm">New Posts (30d)</div>
          </div>
        </div>
      </div>
      
      {/* Performance Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-yellow-400 border-opacity-30">
        <div className="text-center">
          <Eye className="w-6 h-6 text-green-300 mx-auto mb-1" />
          <div className="text-sm text-yellow-100">{dashboardData?.engagement?.totalViews?.toLocaleString() || 0} Views</div>
        </div>
        <div className="text-center">
          <MessageCircle className="w-6 h-6 text-green-300 mx-auto mb-1" />
          <div className="text-sm text-yellow-100">{dashboardData?.engagement?.totalComments || 0} Comments</div>
        </div>
        <div className="text-center">
          <Heart className="w-6 h-6 text-green-300 mx-auto mb-1" />
          <div className="text-sm text-yellow-100">{dashboardData?.engagement?.totalLikes || 0} Likes</div>
        </div>
        <div className="text-center">
          <Star className="w-6 h-6 text-green-300 mx-auto mb-1" />
          <div className="text-sm text-yellow-100">{dashboardData?.counts?.blogs?.featured || 0} Featured</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;