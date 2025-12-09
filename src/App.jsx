import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NavigationProvider } from './context/NavigationContext';

// Website Components
import WebsiteLayout from './components/website/WebsiteLayout';
import Home from './pages/website/Home';
import About from './pages/website/About';
import OurTeam from './pages/website/OurTeam.jsx';
import Industries from './pages/website/Industries';
import Services from './pages/website/Services';
import Clients from './pages/website/Clients';
import Projects from './pages/website/Projects';
import Blog from './pages/website/Blog';
import Career from './pages/website/Career';
import Contact from './pages/website/Contact';
import { ToastContainer } from 'react-toastify';

// Admin Components
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/auth/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import BlogManage from './pages/admin/BlogManage';
import CareerManage from './pages/admin/CareerManage';
import ContactManage from './pages/admin/ContactManage';
import Certification from './pages/website/Certification.jsx';
import BlogPages from './components/website/BlogPages.jsx';
import Gallery from './pages/website/Gallery.jsx';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationProvider>
          <Routes>
          {/* Website Routes */}
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<OurTeam />} />
            <Route path="industries" element={<Industries />} />
            <Route path="services" element={<Services />} />
            <Route path="clients" element={<Clients />} />
            <Route path="certification" element={<Certification />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog/:id" element={<BlogPages />} />
            <Route path="career" element={<Career />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Auth Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="manegeblog" element={<BlogManage />} />
            <Route path="managecareer" element={<CareerManage />} />
            <Route path="contactus" element={<ContactManage />} />
          </Route>
          </Routes>
        </NavigationProvider>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;