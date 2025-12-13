import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import logo from '../../assets/logo2.jpg'
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Mail,
  LogOut,
  Menu,
  X,
  User,
  Building2,
  ChevronRight,
  Home,
  Shield
} from 'lucide-react';

const AdminLayout = () => {
  const { logout, adminUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //handle logout
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the admin panel',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate('/admin/login');
      }
    });
  };
  //handle navigation
  const navigationItems = [
    {
      path: '/admin',
      name: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      description: 'Overview and analytics'
    },
    {
      path: '/admin/manegeblog',
      name: 'Blog Management',
      icon: <FileText className="w-5 h-5" />,
      description: 'Manage blog posts and content'
    },
    {
      path: '/admin/managecareer',
      name: 'Career Forms',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'View job applications'
    },
    {
      path: '/admin/contactus',
      name: 'Contact Forms',
      icon: <Mail className="w-5 h-5" />,
      description: 'Manage customer inquiries'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-80 bg-white shadow-2xl border-r border-gray-200
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="" className='w-40 h-15 text-center ml-8' />

          </div>

          {/* User Info */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#880481] to-[#ad6bac] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {adminUser?.name || 'Admin User'}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {adminUser?.email || 'admin@tcs.com'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`
                flex items-center space-x-3 p-4 rounded-2xl transition-all duration-200 group
                ${isActive(item.path)
                  ? 'bg-gradient-to-r from-[#880481] via-[#30085b] to-[#ad6bac] text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
                }
              `}
            >
              <div className={`
                ${isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-yellow-500'}
              `}>
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className={`
                  text-xs mt-1
                  ${isActive(item.path) ? 'text-purple-100' : 'text-gray-500'}
                `}>
                  {item.description}
                </p>
              </div>
              <ChevronRight className={`
                w-4 h-4 transition-transform duration-200
                ${isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-yellow-500'}
                ${isActive(item.path) ? 'rotate-90' : ''}
              `} />
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-gray-200 space-y-4">
          {/* Back to Website */}
          <Link
            to="/"
            className="flex items-center space-x-3 p-3 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-2xl transition-all duration-200 group"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium text-sm">Back to Website</span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:border-none">
          <div className="flex items-center justify-between p-4 lg:p-6">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Building2 className="w-4 h-4" />
              <span>Admin Panel</span>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold text-gray-900">
                {navigationItems.find(item => isActive(item.path))?.name || 'Dashboard'}
              </span>
            </div>

            {/* User Info for Mobile */}
            <div className="lg:hidden flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#880481] to-[#ad6bac] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-sm text-gray-600">
            <p>© 2025 TRIVENI INFRAMECH PVT LTD. All rights reserved.</p>
            <p className="mt-2 lg:mt-0">
              Admin Panel v1.0 • Secure Access
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;