import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  FileText, 
  Users, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  Plus,
  Search,
  BarChart3,
  Settings,
  Lock,
  User
} from 'lucide-react';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  // Sample data for admin dashboard
  const stats = [
    { label: 'Total Materials', value: '1,247', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Downloads', value: '15,432', icon: Download, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Active Users', value: '2,156', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Departments', value: '7', icon: Settings, color: 'text-orange-600', bg: 'bg-orange-100' }
  ];

  const recentUploads = [
    {
      id: 1,
      title: 'Advanced Thermodynamics Notes',
      department: 'Mechanical Engineering',
      course: 'MEE 301',
      uploadedBy: 'Dr. John Akpan',
      date: '2024-03-15',
      size: '5.2 MB',
      downloads: 45,
      type: 'pdf'
    },
    {
      id: 2,
      title: 'Circuit Analysis Lab Manual',
      department: 'Electrical Engineering',
      course: 'EEE 201',
      uploadedBy: 'Prof. Peter Obot',
      date: '2024-03-14',
      size: '8.7 MB',
      downloads: 67,
      type: 'pdf'
    },
    {
      id: 3,
      title: 'Process Control Lecture Video',
      department: 'Chemical Engineering',
      course: 'CHE 401',
      uploadedBy: 'Dr. Mary Okon',
      date: '2024-03-13',
      size: '125 MB',
      downloads: 23,
      type: 'video'
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo authentication - in real app, this would be proper authentication
    if (loginForm.username === 'admin' && loginForm.password === 'nuesa2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use username: admin, password: nuesa2024');
    }
  };

  const LoginForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <div className="mx-auto h-12 w-12 bg-nuesa-green rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access the NUESA E-Library admin dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-nuesa-green focus:border-nuesa-green focus:z-10 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-nuesa-green focus:border-nuesa-green focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-nuesa-green hover:bg-nuesa-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nuesa-green transition-colors duration-300"
            >
              <User className="w-5 h-5 mr-2" />
              Sign in to Dashboard
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Demo credentials: username: <strong>admin</strong>, password: <strong>nuesa2024</strong>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage NUESA E-Library content and users</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="btn-primary py-2 px-4 text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="container-custom">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'materials', label: 'Materials', icon: FileText },
              { id: 'upload', label: 'Upload', icon: Upload },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-nuesa-green text-nuesa-green'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <div className="flex items-center">
                        <div className={`${stat.bg} ${stat.color} p-3 rounded-lg`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Recent Uploads */}
              <div className="bg-white rounded-xl shadow-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Uploads</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Material
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Uploaded By
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Downloads
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentUploads.map((upload) => (
                        <tr key={upload.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{upload.title}</div>
                              <div className="text-sm text-gray-500">{upload.department}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {upload.course}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {upload.uploadedBy}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {upload.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {upload.downloads}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-nuesa-green hover:text-nuesa-green-dark">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Material</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuesa-green focus:border-transparent">
                      <option>Select Department</option>
                      <option>Mechanical Engineering</option>
                      <option>Chemical Engineering</option>
                      <option>Petroleum Engineering</option>
                      <option>Electrical Engineering</option>
                      <option>Computer Engineering</option>
                      <option>Agricultural Engineering</option>
                      <option>Food Engineering</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., MEE 201"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuesa-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter material title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuesa-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter material description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuesa-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload File
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-nuesa-green transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drag and drop your file here, or click to browse</p>
                    <p className="text-sm text-gray-500">Supports PDF, DOC, PPT, MP4 (Max: 100MB)</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary px-6 py-2"
                  >
                    Upload Material
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {activeTab === 'materials' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">All Materials</h3>
                  <div className="flex space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search materials..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nuesa-green focus:border-transparent"
                      />
                    </div>
                    <button className="btn-primary py-2 px-4 text-sm inline-flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Add New</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600">Material management interface would be implemented here with full CRUD operations.</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
