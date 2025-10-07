import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import department logos
import mechanicalLogo from '../logo/im.png';
import electricalLogo from '../logo/elect.png';
import civilLogo from '../logo/civil.png';
import chemicalLogo from '../logo/chem.png';
import computerLogo from '../logo/com.png';
import petroleumLogo from '../logo/pet.jpg';
import agriculturalLogo from '../logo/Agric.png';
import foodLogo from '../logo/food.png';
const DepartmentsPage = () => {
  // Sample departments data - in a real app this would come from an API
  const departments = [
    {
      id: 'mechanical',
      name: 'Mechanical Engineering',
      logo: mechanicalLogo,
      description: 'Design, analysis, and manufacturing of mechanical systems',
      students: '450+',
      courses: '25+',
      faculty: '12',
      color: 'bg-blue-500'
    },
    {
      id: 'electrical',
      name: 'Electrical Engineering',
      logo: electricalLogo,
      description: 'Power systems, electronics, and electrical machines',
      students: '380+',
      courses: '22+',
      faculty: '10',
      color: 'bg-yellow-500'
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      logo: civilLogo,
      description: 'Construction, structural analysis, and infrastructure',
      students: '420+',
      courses: '28+',
      faculty: '14',
      color: 'bg-green-500'
    },
    {
      id: 'chemical',
      name: 'Chemical Engineering',
      logo: chemicalLogo,
      description: 'Process design, unit operations, and chemical processes',
      students: '290+',
      courses: '20+',
      faculty: '9',
      color: 'bg-purple-500'
    },
    {
      id: 'computer',
      name: 'Computer Engineering',
      logo: computerLogo,
      description: 'Software, hardware, and computer systems',
      students: '350+',
      courses: '24+',
      faculty: '11',
      color: 'bg-red-500'
    },
    {
      id: 'petroleum',
      name: 'Petroleum Engineering',
      logo: petroleumLogo,
      description: 'Oil and gas exploration, production, and processing',
      students: '220+',
      courses: '18+',
      faculty: '8',
      color: 'bg-orange-500'
    },
    {
      id: 'agricultural',
      name: 'Agricultural Engineering',
      logo: agriculturalLogo,
      description: 'Farm machinery, irrigation, and food processing',
      students: '180+',
      courses: '16+',
      faculty: '7',
      color: 'bg-lime-500'
    },

    {
      id: 'food',
      name: 'Food Engineering',
      logo: foodLogo,
      description: 'Food processing, preservation, and quality control systems',
      students: '160+',
      courses: '14+',
      faculty: '6',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Engineering Departments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our eight specialized engineering departments offering world-class education and research opportunities.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((department, index) => (
            <motion.div
              key={department.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              <Link to={`/departments/${department.id}`} className="block">
                                {/* Department Logo & Header */}
                                <div className="p-8 pb-6">
                  <div className="flex items-start mb-6">
                    {/* Department Logo */}
                    {department.logo && (
                      <div className="w-20 h-20 mr-6 flex-shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center p-3 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <img
                          src={department.logo}
                          alt={`${department.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                        {department.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {department.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Department Stats */}
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className={`p-4 rounded-xl ${department.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      <Users className={`w-6 h-6 mx-auto mb-2 ${department.color.replace('bg-', 'text-')}`} />
                      <span className="block text-xs font-medium text-gray-600 mb-1">Students</span>
                      <p className="text-lg font-bold text-gray-900">{department.students}</p>
                    </div>
                    <div className={`p-4 rounded-xl ${department.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      <BookOpen className={`w-6 h-6 mx-auto mb-2 ${department.color.replace('bg-', 'text-')}`} />
                      <span className="block text-xs font-medium text-gray-600 mb-1">Courses</span>
                      <p className="text-lg font-bold text-gray-900">{department.courses}</p>
                    </div>
                    <div className={`p-4 rounded-xl ${department.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      <MapPin className={`w-6 h-6 mx-auto mb-2 ${department.color.replace('bg-', 'text-')}`} />
                      <span className="block text-xs font-medium text-gray-600 mb-1">Faculty</span>
                      <p className="text-lg font-bold text-gray-900">{department.faculty}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentsPage;