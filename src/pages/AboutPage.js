import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Calendar, 
  Mail, 
  Phone,
  MapPin,
  Star,
  Trophy,
  GraduationCap,
  Building
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('faculty');

  const facultyLeadership = [
    {
      name: 'Prof. Michael Akpan',
      position: 'Dean, Faculty of Engineering',
      tenure: '2022 - Present',
      image: '/api/placeholder/300/300',
      bio: 'Prof. Michael Akpan is a distinguished engineer with over 20 years of experience in mechanical engineering and academic leadership.',
      achievements: [
        'PhD in Mechanical Engineering, University of Cambridge',
        'Fellow, Nigerian Society of Engineers',
        'Author of 50+ research publications',
        'Recipient of Excellence in Teaching Award'
      ],
      contact: {
        email: 'dean.engineering@uniuyo.edu.ng',
        phone: '+234 85 200 2340'
      }
    },
    {
      name: 'Prof. Sarah Okon',
      position: 'Former Dean (2018-2022)',
      tenure: '2018 - 2022',
      image: '/api/placeholder/300/300',
      bio: 'Prof. Sarah Okon led the faculty through significant modernization and expansion during her tenure.',
      achievements: [
        'PhD in Chemical Engineering, MIT',
        'Established 3 new research centers',
        'Increased faculty enrollment by 40%',
        'International collaboration programs'
      ],
      contact: {
        email: 's.okon@uniuyo.edu.ng',
        phone: '+234 85 200 2341'
      }
    }
  ];

  const nuesaExecutives = [
    {
      name: 'Engr. David Udoh',
      position: 'President',
      tenure: '2023 - 2024',
      department: 'Petroleum Engineering',
      level: '500 Level',
      image: '/api/placeholder/300/300',
      bio: 'Dynamic leader focused on student welfare and academic excellence.',
      initiatives: [
        'E-Library Development Project',
        'Industry Partnership Program',
        'Student Mentorship Initiative',
        'Academic Excellence Awards'
      ]
    },
    {
      name: 'Miss Grace Etim',
      position: 'Vice President',
      tenure: '2023 - 2024',
      department: 'Computer Engineering',
      level: '400 Level',
      image: '/api/placeholder/300/300',
      bio: 'Passionate about technology integration in education and student development.',
      initiatives: [
        'Digital Skills Training',
        'Women in Engineering Program',
        'Tech Innovation Hub',
        'Career Development Workshops'
      ]
    },
    {
      name: 'Mr. James Obot',
      position: 'Secretary General',
      tenure: '2023 - 2024',
      department: 'Electrical Engineering',
      level: '400 Level',
      image: '/api/placeholder/300/300',
      bio: 'Efficient administrator with strong organizational and communication skills.',
      initiatives: [
        'Record Management System',
        'Communication Enhancement',
        'Meeting Coordination',
        'Documentation Standards'
      ]
    },
    {
      name: 'Miss Mary Bassey',
      position: 'Financial Secretary',
      tenure: '2023 - 2024',
      department: 'Chemical Engineering',
      level: '300 Level',
      image: '/api/placeholder/300/300',
      bio: 'Detail-oriented financial manager ensuring transparent and efficient fund management.',
      initiatives: [
        'Financial Transparency Program',
        'Budget Optimization',
        'Scholarship Fund Management',
        'Audit Systems Implementation'
      ]
    }
  ];

  const departmentHODs = [
    {
      name: 'Prof. John Akpan',
      department: 'Mechanical Engineering',
      tenure: '2020 - Present',
      image: '/api/placeholder/300/300',
      specialization: 'Manufacturing Systems & Automation',
      achievements: [
        'PhD in Manufacturing Engineering',
        '15+ years teaching experience',
        '30+ research publications',
        'Industry consultant'
      ]
    },
    {
      name: 'Dr. Mary Okon',
      department: 'Chemical Engineering',
      tenure: '2021 - Present',
      image: '/api/placeholder/300/300',
      specialization: 'Process Control & Optimization',
      achievements: [
        'PhD in Chemical Engineering',
        'Process industry expert',
        '25+ research papers',
        'Patent holder'
      ]
    },
    {
      name: 'Prof. David Etim',
      department: 'Petroleum Engineering',
      tenure: '2019 - Present',
      image: '/api/placeholder/300/300',
      specialization: 'Reservoir Engineering',
      achievements: [
        'PhD in Petroleum Engineering',
        'Oil industry veteran',
        'International consultant',
        'Research excellence award'
      ]
    },
    {
      name: 'Prof. Peter Obot',
      department: 'Electrical Engineering',
      tenure: '2022 - Present',
      image: '/api/placeholder/300/300',
      specialization: 'Power Systems & Renewable Energy',
      achievements: [
        'PhD in Electrical Engineering',
        'Power systems expert',
        'Renewable energy advocate',
        'Grid modernization consultant'
      ]
    }
  ];

  const tabs = [
    { id: 'faculty', label: 'Faculty Leadership', icon: Building },
    { id: 'nuesa', label: 'NUESA Executives', icon: Users },
    { id: 'hods', label: 'Department HODs', icon: GraduationCap }
  ];

  const renderProfileCard = (person, type) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card p-6 group"
    >
      <div className="text-center mb-6">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=300&background=2E7D32&color=ffffff`;
            }}
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
        <p className="text-nuesa-green font-semibold mb-1">{person.position}</p>
        {person.department && (
          <p className="text-gray-600 text-sm">{person.department}</p>
        )}
        {person.level && (
          <p className="text-gray-600 text-sm">{person.level}</p>
        )}
        <div className="flex items-center justify-center space-x-1 mt-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{person.tenure}</span>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{person.bio}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
          {type === 'faculty' ? (
            <>
              <Award className="w-4 h-4 mr-2 text-nuesa-orange" />
              Achievements
            </>
          ) : type === 'nuesa' ? (
            <>
              <Star className="w-4 h-4 mr-2 text-nuesa-orange" />
              Key Initiatives
            </>
          ) : (
            <>
              <Trophy className="w-4 h-4 mr-2 text-nuesa-orange" />
              Achievements
            </>
          )}
        </h4>
        <ul className="space-y-1">
          {(person.achievements || person.initiatives)?.map((item, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <div className="w-1.5 h-1.5 bg-nuesa-green rounded-full mt-2 mr-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {person.contact && (
        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-nuesa-green" />
            <span>{person.contact.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-nuesa-green" />
            <span>{person.contact.phone}</span>
          </div>
        </div>
      )}

      {person.specialization && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600">
            <strong>Specialization:</strong> {person.specialization}
          </p>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-nuesa-green to-nuesa-green-light text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership & About Us
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Meet the distinguished leaders who guide our faculty and student body 
              towards excellence in engineering education and innovation.
            </p>
            <div className="flex justify-center items-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <Building className="w-6 h-6" />
                <span>Faculty Leadership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span>Student Executives</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="flex space-x-1 p-1 bg-gray-100 rounded-lg">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-nuesa-green text-white shadow-lg'
                        : 'text-gray-600 hover:text-nuesa-green'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {activeTab === 'faculty' && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Leadership</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our distinguished deans who have shaped the faculty's vision and direction.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facultyLeadership.map((person, index) => (
                  <div key={index}>
                    {renderProfileCard(person, 'faculty')}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'nuesa' && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">NUESA Executive Council</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet the student leaders driving innovation and excellence in our engineering community.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {nuesaExecutives.map((person, index) => (
                  <div key={index}>
                    {renderProfileCard(person, 'nuesa')}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'hods' && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Heads of Departments</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Academic leaders guiding each department towards excellence in education and research.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departmentHODs.map((person, index) => (
                  <div key={index}>
                    {renderProfileCard(person, 'hods')}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty at a Glance</h2>
            <p className="text-xl text-gray-600">Key statistics about our faculty</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-nuesa-green mb-2">7</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nuesa-green mb-2">50+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nuesa-green mb-2">2,000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nuesa-green mb-2">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
