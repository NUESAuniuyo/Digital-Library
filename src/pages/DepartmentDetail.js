import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Users, 
  BookOpen, 
  Download,
  Calendar,
  Clock,
  FileText
} from 'lucide-react';

const DepartmentDetail = () => {
  const { departmentId } = useParams();

  // Sample data - in real app, this would come from an API
  const departmentData = {
    mechanical: {
      name: 'Mechanical Engineering',
      hod: 'Prof. John Akpan',
      description: 'The Mechanical Engineering Department is dedicated to advancing the field through innovative research, comprehensive education, and practical applications in design, manufacturing, and analysis of mechanical systems.',
      vision: 'To be a leading department in mechanical engineering education and research in West Africa.',
      mission: 'To provide quality education and conduct cutting-edge research in mechanical engineering while serving the community.',
      stats: {
        students: '450+',
        faculty: '12',
        courses: '25+',
        labs: '8'
      }
    },
    // Add other departments as needed
  };

  const levels = [
    {
      level: '100',
      name: 'First Year',
      semesters: [
        {
          semester: '1st Semester',
          courses: [
            { code: 'MEE 101', title: 'Introduction to Engineering', credits: 3, description: 'Basic engineering principles and problem-solving techniques.' },
            { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
            { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
            { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
            { code: 'ENG 101', title: 'English I', credits: 2, description: 'Communication skills and technical writing.' }
          ]
        },
        {
          semester: '2nd Semester',
          courses: [
            { code: 'MEE 102', title: 'Engineering Drawing', credits: 3, description: 'Technical drawing and CAD fundamentals.' },
            { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
            { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
            { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
            { code: 'ENG 102', title: 'English II', credits: 2, description: 'Advanced communication and presentation skills.' }
          ]
        }
      ]
    },
    {
      level: '200',
      name: 'Second Year',
      semesters: [
        {
          semester: '1st Semester',
          courses: [
            { code: 'MEE 201', title: 'Statics', credits: 3, description: 'Forces and equilibrium in engineering structures.' },
            { code: 'MEE 203', title: 'Materials Science', credits: 3, description: 'Properties and behavior of engineering materials.' },
            { code: 'MTH 201', title: 'Mathematics III', credits: 3, description: 'Vector calculus and complex analysis.' },
            { code: 'PHY 201', title: 'Modern Physics', credits: 3, description: 'Quantum mechanics and atomic physics.' },
            { code: 'CSC 201', title: 'Computer Programming', credits: 3, description: 'Programming fundamentals for engineers.' }
          ]
        },
        {
          semester: '2nd Semester',
          courses: [
            { code: 'MEE 202', title: 'Dynamics', credits: 3, description: 'Motion and forces in mechanical systems.' },
            { code: 'MEE 204', title: 'Thermodynamics I', credits: 3, description: 'Energy, heat, and work in engineering systems.' },
            { code: 'MEE 206', title: 'Fluid Mechanics I', credits: 3, description: 'Properties and behavior of fluids.' },
            { code: 'EEE 202', title: 'Circuit Analysis', credits: 3, description: 'Basic electrical circuits for mechanical engineers.' },
            { code: 'STA 202', title: 'Statistics', credits: 2, description: 'Statistical methods in engineering.' }
          ]
        }
      ]
    }
    // Add more levels as needed
  ];

  const department = departmentData[departmentId] || departmentData.mechanical;

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-nuesa-green to-nuesa-green-light text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/departments" 
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Departments</span>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {department.name}
                </h1>
                <p className="text-xl mb-6 leading-relaxed">
                  {department.description}
                </p>
                <div className="flex items-center space-x-2 text-lg">
                  <User className="w-5 h-5" />
                  <span>Head of Department: <strong>{department.hod}</strong></span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span className="font-bold">{department.stats.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Faculty:</span>
                    <span className="font-bold">{department.stats.faculty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courses:</span>
                    <span className="font-bold">{department.stats.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labs:</span>
                    <span className="font-bold">{department.stats.labs}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-nuesa-green mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">{department.vision}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-nuesa-green mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">{department.mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses by Level */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Materials by Level
            </h2>
            <p className="text-xl text-gray-600">
              Access course materials organized by academic level and semester
            </p>
          </motion.div>

          <div className="space-y-12">
            {levels.map((level, levelIndex) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: levelIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-nuesa-green text-white p-6">
                  <h3 className="text-2xl font-bold">
                    {level.level} Level - {level.name}
                  </h3>
                </div>

                <div className="p-6">
                  {level.semesters.map((semester, semesterIndex) => (
                    <div key={semesterIndex} className="mb-8 last:mb-0">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-nuesa-orange" />
                        {semester.semester}
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {semester.courses.map((course, courseIndex) => (
                          <motion.div
                            key={courseIndex}
                            whileHover={{ scale: 1.02 }}
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-bold text-nuesa-green">{course.code}</h5>
                              <span className="text-sm text-gray-500 flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {course.credits} credits
                              </span>
                            </div>
                            
                            <h6 className="font-semibold text-gray-900 mb-2">{course.title}</h6>
                            <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                            
                            <Link
                              to={`/departments/${departmentId}/course/${course.code.toLowerCase().replace(' ', '-')}`}
                              className="inline-flex items-center space-x-2 text-nuesa-green hover:text-nuesa-green-dark transition-colors"
                            >
                              <FileText className="w-4 h-4" />
                              <span className="text-sm font-medium">View Materials</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Ad Space */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <BookOpen className="w-8 h-8 text-nuesa-green mb-4" />
                  <h4 className="font-semibold mb-2">Course Handbooks</h4>
                  <p className="text-gray-600 text-sm">Access comprehensive course handbooks and syllabi.</p>
                </div>
                <div className="card p-6">
                  <Users className="w-8 h-8 text-nuesa-green mb-4" />
                  <h4 className="font-semibold mb-2">Study Groups</h4>
                  <p className="text-gray-600 text-sm">Join or create study groups with your classmates.</p>
                </div>
              </div>
            </div>
            
            {/* Ad Space */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-100 rounded-lg p-6 h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-sm">AD</span>
                    </div>
                    <p className="text-sm">Google AdSense</p>
                    <p className="text-xs">300x250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentDetail;
