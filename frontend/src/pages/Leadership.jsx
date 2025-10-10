import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const FacultyLeadership = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
    <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 text-center">
      {facultyLeadership.map((person, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=300&background=2E7D32&color=ffffff`;
              }}
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
          <p className="text-green-700 font-semibold mb-1">{person.position}</p>
          <div className="flex justify-center items-center space-x-1 text-gray-600 text-sm mb-4">
            <Calendar className="w-4 h-4" />
            <span>{person.tenure}</span>
          </div>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">{person.bio}</p>

          <h4 className="font-semibold text-gray-900 mb-2 flex justify-center items-center">
            <Award className="w-4 h-4 mr-2 text-green-600" />
            Achievements
          </h4>

          <ul className="text-left space-y-1">
            {person.achievements.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

export default FacultyLeadership;
