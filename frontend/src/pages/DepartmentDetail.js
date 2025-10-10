import React, { useState } from 'react';
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
const departments = [
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
  },
  {
    id: 'electrical',
    name: 'Electrical and Electronics Engineering',
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
  },
  {
    id: 'chemical',
    name: 'Chemical Engineering',
  },
  {
    id: 'agricultural',
    name: 'Agricultural Engineering',
  },
  {
    id: 'computer',
    name: 'Computer Engineering',
  },
  {
    id: 'petroleum',
    name: 'Petroleum Engineering',
  },
  {
    id: 'food',
    name: 'Food Engineering',
  },
];



const departmentData = {
    mechanical: {
      name: 'Mechanical Engineering',
      hod: 'Dr. Idorenyin E. Markson',
      description:
        'The Mechanical Engineering Department is dedicated to advancing the field through innovative research, comprehensive education, and practical applications in design, manufacturing, and analysis of mechanical systems.',
      vision:
        'To be a leading department in mechanical engineering education and research in West Africa.',
      mission:
        'To provide quality education and conduct cutting-edge research in mechanical engineering while serving the community.',
      stats: {
        students: '450+',
        faculty: '12',
        courses: '25+',
        labs: '8',
      },
    },
  
    electrical: {
      name: 'Electrical Engineering',
      hod: 'Dr. Nseobong I. Okpura',
      description:
        'The Electrical Engineering Department focuses on power systems, control systems, electronics, and telecommunications — preparing graduates for careers in power generation, automation, and electronics design.',
      vision:
        'To be a centre of excellence in power, control and communication engineering in the region.',
      mission:
        'To educate and mentor engineers with deep technical competence in electrical engineering, strong ethics, and industry-ready skills.',
      stats: {
        students: '420+',
        faculty: '10',
        courses: '30+',
        labs: '7',
      },
    },
  
    computer: {
      name: 'Computer Engineering',
      hod: 'Dr. Philip M. Asuquo',
      description:
        'Computer Engineering blends hardware and software to develop computing systems, embedded devices, networks and intelligent applications for industry and research.',
      vision:
        'To lead in computing innovation and produce professionals who drive digital transformation.',
      mission:
        'To deliver rigorous instruction and research opportunities in computer architecture, systems, networking and AI, producing highly employable graduates.',
      stats: {
        students: '380+',
        faculty: '9',
        courses: '28+',
        labs: '6',
      },
    },
  
    petroleum: {
      name: 'Petroleum Engineering',
      hod: 'Dr. Anietie N. Okon',
      description:
        'The Petroleum Engineering Department trains students in upstream and downstream petroleum operations including exploration, drilling, reservoir engineering and production systems.',
      vision:
        'To be a regional leader in petroleum technology, research and sustainable hydrocarbon development.',
      mission:
        'To equip students with theoretical knowledge and practical skills for safe, efficient and environmentally responsible petroleum operations.',
      stats: {
        students: '350+',
        faculty: '11',
        courses: '30+',
        labs: '5',
      },
    },
  
    agricultural: {
      name: 'Agricultural Engineering',
      hod: 'Dr. Okon J. Esua',
      description:
        'Agricultural Engineering applies engineering principles to agricultural production, mechanization, irrigation, post-harvest handling and sustainable farm infrastructure.',
      vision:
        'To transform agricultural production through engineering innovation and sustainable technologies.',
      mission:
        'To produce competent agricultural engineers capable of improving food production systems and rural livelihoods.',
      stats: {
        students: '300+',
        faculty: '8',
        courses: '26+',
        labs: '5',
      },
    },
  
    food: {
      name: 'Food Engineering',
      hod: 'Dr. Okon J. Esua',
      description:
        'Food Engineering focuses on the design and optimization of food processing systems, quality assurance, safety, and value-chain engineering for food products.',
      vision:
        'To be a reference point for food process innovation, safety and industrial collaboration.',
      mission:
        'To train food engineers skilled in process design, preservation, quality control and sustainable food systems.',
      stats: {
        students: '250+',
        faculty: '7',
        courses: '22+',
        labs: '4',
      },
    },
  
    chemical: {
      name: 'Chemical Engineering',
      hod: 'Dr. Kingsley C. Egemba',
      description:
        'Chemical Engineering covers process design, reaction engineering, thermodynamics, separations and materials — preparing students for work in process industries and research.',
      vision:
        'To lead in process innovation, materials technology and sustainable chemical production.',
      mission:
        'To educate chemical engineers with strong analytical, design and operational skills for industry and academia.',
      stats: {
        students: '320+',
        faculty: '9',
        courses: '30+',
        labs: '6',
      },
    },
  
    civil: {
      name: 'Civil Engineering',
      hod: 'Dr. Ofonime A. Harry',
      description:
        'Civil Engineering focuses on the planning, design, construction and maintenance of infrastructure — including structures, transportation, water resources and geotechnical systems.',
      vision:
        'To be a leader in sustainable infrastructure development and civil engineering education.',
      mission:
        'To train civil engineers capable of delivering safe, resilient and sustainable infrastructure solutions.',
      stats: {
        students: '400+',
        faculty: '10',
        courses: '33+',
        labs: '7',
      },
    },
  };
  
 export const levels = [
      // ================= Mechanical Engineering =================
      // 100 Level
      {
        department: 'mechanical',
        level: '100',
        name: 'First Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'MEE 101', title: 'Introduction to Engineering', credits: 3, description: 'Overview of engineering disciplines.' },
              { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
              { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
              { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
              { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'MEE 102', title: 'Engineering Drawing', credits: 3, description: 'Technical drawing and CAD basics.' },
              { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
              { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
              { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
              { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
            ]
          }
        ]
      },
      // 200 Level
      {
        department: 'mechanical',
        level: '200',
        name: 'Second Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'MEE 201', title: 'Engineering Materials', credits: 3, description: 'Properties of metals, polymers, ceramics.' },
              { code: 'MEE 203', title: 'Engineering Mechanics I', credits: 3, description: 'Statics: force systems, equilibrium.' },
              { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Linear algebra, multivariable calculus.' },
              { code: 'GST 201', title: 'Fundamentals of Management', credits: 2, description: 'Management principles and organizational behaviour.' },
              { code: 'PHY 201', title: 'Modern Physics', credits: 3, description: 'Relativity, quantum theory basics.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'MEE 202', title: 'Engineering Thermodynamics I', credits: 3, description: 'First and second laws, heat engines.' },
              { code: 'MEE 204', title: 'Engineering Mechanics II', credits: 3, description: 'Dynamics: kinematics, kinetics, energy methods.' },
              { code: 'MTH 202', title: 'Probability & Statistics for Engineers', credits: 3, description: 'Statistical methods, probability, sampling.' },
              { code: 'GST 202', title: 'Entrepreneurship Skills', credits: 2, description: 'Idea generation and business plan basics.' },
              { code: 'MEE 206', title: 'Fluid Mechanics I', credits: 3, description: 'Fluid properties, fluid statics, control volume analysis.' }
            ]
          }
        ]
      },
      // 300 Level
      {
        department: 'mechanical',
        level: '300',
        name: 'Third Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'MEE 301', title: 'Machine Design I', credits: 3, description: 'Strength of materials, stress, strain.' },
              { code: 'MEE 303', title: 'Heat Transfer', credits: 3, description: 'Conduction, convection, and radiation.' },
              { code: 'MEE 305', title: 'Manufacturing Processes', credits: 3, description: 'Casting, forming, machining.' },
              { code: 'MTH 301', title: 'Numerical Methods', credits: 3, description: 'Computational techniques for engineering.' },
              { code: 'ELE 301', title: 'Electrical Machines & Drives', credits: 3, description: 'Motors, generators, and control.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'MEE 302', title: 'Theory of Machines I', credits: 3, description: 'Kinematics of machines, mechanisms.' },
              { code: 'MEE 304', title: 'Engineering Measurement & Instrumentation', credits: 3, description: 'Sensors, transducers, measurement techniques.' },
              { code: 'MEE 306', title: 'Fluid Mechanics II', credits: 3, description: 'Flow in pipes, pumps, turbines.' },
              { code: 'MEE 308', title: 'Thermodynamics II', credits: 3, description: 'Power cycles, refrigeration, compressors.' },
              { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment.' }
            ]
          }
        ]
      },
      // 400 Level
      {
        department: 'mechanical',
        level: '400',
        name: 'Fourth Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'MEE 401', title: 'Machine Design II', credits: 3, description: 'Advanced design of machine elements.' },
              { code: 'MEE 403', title: 'Control Engineering', credits: 3, description: 'Feedback systems and control analysis.' },
              { code: 'MEE 405', title: 'Energy Systems', credits: 3, description: 'Renewable energy, thermodynamic cycles.' },
              { code: 'MEE 407', title: 'Refrigeration & Air Conditioning', credits: 3, description: 'Cooling systems design.' },
              { code: 'MEE 409', title: 'Engineering Ethics', credits: 2, description: 'Professional ethics in engineering practice.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'MEE 402', title: 'Manufacturing Automation', credits: 3, description: 'CNC, robotics, smart factories.' },
              { code: 'MEE 404', title: 'Automobile Engineering', credits: 3, description: 'Vehicle design and powertrains.' },
              { code: 'MEE 406', title: 'HVAC Systems', credits: 3, description: 'Heating, ventilation, air-conditioning systems.' },
              { code: 'MEE 408', title: 'Project Management', credits: 3, description: 'Planning, scheduling, and execution of engineering projects.' },
              { code: 'MEE 410', title: 'Internship/Industrial Attachment', credits: 2, description: 'Practical industry exposure.' }
            ]
          }
        ]
      },
      // 500 Level
      {
        department: 'mechanical',
        level: '500',
        name: 'Fifth Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'MEE 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of engineering project.' },
              { code: 'MEE 503', title: 'Advanced Fluid Mechanics', credits: 3, description: 'Turbulence, compressible flow, CFD basics.' },
              { code: 'MEE 505', title: 'Advanced Thermodynamics', credits: 3, description: 'Exergy, multi-phase systems.' },
              { code: 'MEE 507', title: 'Research Methodology', credits: 2, description: 'Techniques for engineering research.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'MEE 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of final year project.' },
              { code: 'MEE 504', title: 'Advanced Manufacturing', credits: 3, description: 'Lean manufacturing, automation, smart factories.' },
              { code: 'MEE 506', title: 'Energy Management', credits: 3, description: 'Efficiency, sustainability, energy auditing.' },
              { code: 'MEE 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Engineering law, ethics, and management.' }
            ]
          }
        ]
      },
// ================= Electrical Engineering =================
      {
        department: 'electrical',
        level: '100',
        name: 'First Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'ELE 101', title: 'Introduction to Electrical Engineering', credits: 3, description: 'Basic electrical engineering concepts.' },
              { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
              { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
              { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
              { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'ELE 102', title: 'Circuit Theory', credits: 3, description: 'Fundamentals of electrical circuits.' },
              { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
              { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
              { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
              { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
            ]
          }
        ]
      },
      {
        department: 'electrical',
        level: '200',
        name: 'Second Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'ELE 201', title: 'Electromagnetics', credits: 3, description: 'Electric and magnetic fields.' },
              { code: 'ELE 203', title: 'Digital Logic Design', credits: 3, description: 'Logic gates, combinational and sequential circuits.' },
              { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Linear algebra, multivariable calculus.' },
              { code: 'GST 201', title: 'Fundamentals of Management', credits: 2, description: 'Management principles and organizational behaviour.' },
              { code: 'PHY 201', title: 'Modern Physics', credits: 3, description: 'Relativity, quantum theory basics.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'ELE 202', title: 'Electrical Machines I', credits: 3, description: 'Transformers, DC machines.' },
              { code: 'ELE 204', title: 'Analog Electronics', credits: 3, description: 'Diodes, transistors, amplifiers.' },
              { code: 'MTH 202', title: 'Probability & Statistics', credits: 3, description: 'Statistical methods, probability, sampling.' },
              { code: 'GST 202', title: 'Entrepreneurship Skills', credits: 2, description: 'Idea generation and business plan basics.' },
              { code: 'ELE 206', title: 'Signals & Systems', credits: 3, description: 'Continuous and discrete signals, system analysis.' }
            ]
          }
        ]
      },
      // 300
      {
        department: 'electrical',
        level: '300',
        name: 'Third Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'ELE 301', title: 'Power Systems I', credits: 3, description: 'Generation, transmission, distribution of electrical energy.' },
              { code: 'ELE 303', title: 'Control Systems I', credits: 3, description: 'Feedback systems and stability analysis.' },
              { code: 'ELE 305', title: 'Microprocessors & Microcontrollers', credits: 3, description: 'Architecture, programming, interfacing.' },
              { code: 'MTH 301', title: 'Numerical Methods', credits: 3, description: 'Computational techniques for engineering.' },
              { code: 'ELE 307', title: 'Electrical Machines II', credits: 3, description: 'AC machines, synchronous and induction machines.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'ELE 302', title: 'Power Electronics', credits: 3, description: 'Converters, inverters, rectifiers.' },
              { code: 'ELE 304', title: 'Control Systems II', credits: 3, description: 'Advanced feedback systems, PID design.' },
              { code: 'ELE 306', title: 'Communication Systems', credits: 3, description: 'Analog and digital communication.' },
              { code: 'ELE 308', title: 'Instrumentation & Measurement', credits: 3, description: 'Sensors, transducers, signal conditioning.' },
              { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment.' }
            ]
          }
        ]
      },
      {
        department: 'electrical',
        level: '400',
        name: 'Fourth Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'ELE 401', title: 'Power Systems II', credits: 3, description: 'Power system analysis, fault studies.' },
              { code: 'ELE 403', title: 'Renewable Energy Systems', credits: 3, description: 'Solar, wind, hydro power integration.' },
              { code: 'ELE 405', title: 'Electric Drives', credits: 3, description: 'AC and DC drive systems.' },
              { code: 'ELE 407', title: 'High Voltage Engineering', credits: 3, description: 'Insulation, breakdown, testing.' },
              { code: 'ELE 409', title: 'Engineering Ethics', credits: 2, description: 'Professional ethics in engineering practice.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'ELE 402', title: 'Industrial Electronics', credits: 3, description: 'Automation, PLCs, sensors.' },
              { code: 'ELE 404', title: 'Embedded Systems', credits: 3, description: 'Microcontrollers, RTOS, interfacing.' },
              { code: 'ELE 406', title: 'Electrical Energy Management', credits: 3, description: 'Energy efficiency, auditing, optimization.' },
              { code: 'ELE 408', title: 'Project Management', credits: 3, description: 'Planning, scheduling, execution of engineering projects.' },
              { code: 'ELE 410', title: 'Internship/Industrial Attachment', credits: 2, description: 'Practical industry exposure.' }
            ]
          }
        ]
      },
      {
        department: 'electrical',
        level: '500',
        name: 'Fifth Year',
        semesters: [
          {
            semester: '1st Semester',
            courses: [
              { code: 'ELE 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of electrical engineering project.' },
              { code: 'ELE 503', title: 'Power System Protection', credits: 3, description: 'Relays, circuit breakers, protection schemes.' },
              { code: 'ELE 505', title: 'Advanced Power Electronics', credits: 3, description: 'Converters, inverters, advanced control.' },
              { code: 'ELE 507', title: 'Research Methodology', credits: 2, description: 'Techniques for engineering research.' }
            ]
          },
          {
            semester: '2nd Semester',
            courses: [
              { code: 'ELE 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of final year project.' },
              { code: 'ELE 504', title: 'Smart Grids & IoT', credits: 3, description: 'Modern electrical networks, IoT integration.' },
              { code: 'ELE 506', title: 'Energy Management & Sustainability', credits: 3, description: 'Efficiency, renewable integration, auditing.' },
              { code: 'ELE 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Engineering law, ethics, and management.' }
            ]
          }
        ]
      },
    
// ================= Computer Engineering =================

// 100-500 Levels Computer
{
  department: 'computer',
  level: '100',
  name: 'First Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CPE 101', title: 'Introduction to Computer Engineering', credits: 3, description: 'Overview of computer engineering disciplines.' },
        { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
        { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
        { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
        { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CPE 102', title: 'Programming Fundamentals', credits: 3, description: 'Introduction to programming using Python/C.' },
        { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
        { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
        { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
        { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
      ]
    }
  ]
},
{
  department: 'computer',
  level: '200',
  name: 'Second Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CPE 201', title: 'Data Structures & Algorithms', credits: 3, description: 'Fundamental data structures and algorithms.' },
        { code: 'CPE 203', title: 'Digital Logic Design', credits: 3, description: 'Logic gates, combinational & sequential circuits.' },
        { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Linear algebra, multivariable calculus.' },
        { code: 'GST 201', title: 'Fundamentals of Management', credits: 2, description: 'Management principles and organizational behaviour.' },
        { code: 'PHY 201', title: 'Modern Physics', credits: 3, description: 'Relativity, quantum theory basics.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CPE 202', title: 'Computer Organization & Architecture', credits: 3, description: 'CPU, memory, I/O organization.' },
        { code: 'CPE 204', title: 'Database Systems', credits: 3, description: 'Relational databases, SQL, design.' },
        { code: 'MTH 202', title: 'Probability & Statistics', credits: 3, description: 'Statistical methods, probability, sampling.' },
        { code: 'GST 202', title: 'Entrepreneurship Skills', credits: 2, description: 'Idea generation and business plan basics.' },
        { code: 'CPE 206', title: 'Computer Networks I', credits: 3, description: 'Network protocols, OSI model, basics of networking.' }
      ]
    }
  ]
},
{
  department: 'computer',
  level: '300',
  name: 'Third Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CPE 301', title: 'Operating Systems', credits: 3, description: 'Processes, threads, scheduling, memory management.' },
        { code: 'CPE 303', title: 'Software Engineering', credits: 3, description: 'Software development lifecycle and methodologies.' },
        { code: 'CPE 305', title: 'Computer Networks II', credits: 3, description: 'TCP/IP, routing, switching, network security.' },
        { code: 'MTH 301', title: 'Numerical Methods', credits: 3, description: 'Computational techniques for engineering.' },
        { code: 'CPE 307', title: 'Microprocessors & Microcontrollers', credits: 3, description: 'Architecture, programming, interfacing.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CPE 302', title: 'Artificial Intelligence', credits: 3, description: 'Introduction to AI techniques and applications.' },
        { code: 'CPE 304', title: 'Embedded Systems', credits: 3, description: 'Real-time systems and microcontroller applications.' },
        { code: 'CPE 306', title: 'Human-Computer Interaction', credits: 3, description: 'UI/UX principles, design, usability.' },
        { code: 'CPE 308', title: 'Web & Mobile Development', credits: 3, description: 'Frontend, backend, responsive applications.' },
        { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment.' }
      ]
    }
  ]
},
{
  department: 'computer',
  level: '400',
  name: 'Fourth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CPE 401', title: 'Machine Learning', credits: 3, description: 'Supervised and unsupervised learning, models.' },
        { code: 'CPE 403', title: 'Computer Security', credits: 3, description: 'Cybersecurity principles, cryptography.' },
        { code: 'CPE 405', title: 'Cloud Computing', credits: 3, description: 'Cloud services, virtualization, deployment.' },
        { code: 'CPE 407', title: 'Internet of Things', credits: 3, description: 'IoT architecture, sensors, communication.' },
        { code: 'CPE 409', title: 'Engineering Ethics', credits: 2, description: 'Professional ethics in engineering practice.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CPE 402', title: 'Data Analytics & Big Data', credits: 3, description: 'Data processing, analysis, visualization.' },
        { code: 'CPE 404', title: 'Advanced Embedded Systems', credits: 3, description: 'Complex microcontroller-based projects.' },
        { code: 'CPE 406', title: 'Software Project Management', credits: 3, description: 'Agile, Scrum, team management.' },
        { code: 'CPE 408', title: 'Project Management', credits: 3, description: 'Planning, scheduling, execution of engineering projects.' },
        { code: 'CPE 410', title: 'Internship/Industrial Attachment', credits: 2, description: 'Practical industry exposure.' }
      ]
    }
  ]
},
{
  department: 'computer',
  level: '500',
  name: 'Fifth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CPE 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of computing project.' },
        { code: 'CPE 503', title: 'Advanced Machine Learning', credits: 3, description: 'Deep learning, neural networks, NLP.' },
        { code: 'CPE 505', title: 'High Performance Computing', credits: 3, description: 'Parallel computing and optimization.' },
        { code: 'CPE 507', title: 'Research Methodology', credits: 2, description: 'Techniques for engineering research.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CPE 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of final year project.' },
        { code: 'CPE 504', title: 'Cyber-Physical Systems', credits: 3, description: 'Integration of computation, networking, and physical processes.' },
        { code: 'CPE 506', title: 'Artificial Intelligence Applications', credits: 3, description: 'AI in real-world systems, robotics, automation.' },
        { code: 'CPE 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Engineering law, ethics, and management.' }
      ]
    }
  ]
},

  // ================= Petroleum Engineering =================
{
  department: 'petroleum',
  level: '100',
  name: 'First Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'PET 101', title: 'Introduction to Petroleum Engineering', credits: 3, description: 'Overview of petroleum industry and careers.' },
        { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
        { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
        { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
        { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'PET 102', title: 'Petroleum Geology', credits: 3, description: 'Introduction to geological aspects of petroleum.' },
        { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
        { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
        { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
        { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
      ]
    }
  ]
},
{
  department: 'petroleum',
  level: '200',
  name: 'Second Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'PET 201', title: 'Drilling Fundamentals', credits: 3, description: 'Basic principles of drilling operations.' },
        { code: 'PET 203', title: 'Reservoir Engineering I', credits: 3, description: 'Properties and behavior of petroleum reservoirs.' },
        { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Linear algebra, multivariable calculus.' },
        { code: 'GST 201', title: 'Fundamentals of Management', credits: 2, description: 'Management principles and organizational behaviour.' },
        { code: 'PHY 201', title: 'Modern Physics', credits: 3, description: 'Relativity, quantum theory basics.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'PET 202', title: 'Petroleum Production I', credits: 3, description: 'Basic production techniques and operations.' },
        { code: 'PET 204', title: 'Petroleum Safety & Environment', credits: 3, description: 'Health, safety, and environmental standards.' },
        { code: 'MTH 202', title: 'Probability & Statistics', credits: 3, description: 'Statistical methods, probability, sampling.' },
        { code: 'GST 202', title: 'Entrepreneurship Skills', credits: 2, description: 'Idea generation and business plan basics.' },
        { code: 'PET 206', title: 'Petroleum Geophysics', credits: 3, description: 'Seismic, well logging, and subsurface imaging.' }
      ]
    }
  ]
},
{
  department: 'petroleum',
  level: '300',
  name: 'Third Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'PET 301', title: 'Reservoir Engineering II', credits: 3, description: 'Advanced reservoir simulation and modeling.' },
        { code: 'PET 303', title: 'Well Logging & Formation Evaluation', credits: 3, description: 'Techniques for analyzing well data.' },
        { code: 'PET 305', title: 'Petroleum Economics', credits: 3, description: 'Economic principles in petroleum projects.' },
        { code: 'MTH 301', title: 'Numerical Methods', credits: 3, description: 'Computational techniques for engineering.' },
        { code: 'PET 307', title: 'Drilling Fluids & Cementing', credits: 3, description: 'Fluids design and cementing operations.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'PET 302', title: 'Enhanced Oil Recovery', credits: 3, description: 'Techniques for maximizing reservoir production.' },
        { code: 'PET 304', title: 'Production Engineering', credits: 3, description: 'Advanced production systems and surface facilities.' },
        { code: 'PET 306', title: 'Petroleum Project Management', credits: 3, description: 'Planning and managing oilfield projects.' },
        { code: 'PET 308', title: 'Pipeline Engineering', credits: 3, description: 'Design, operation, and maintenance of pipelines.' },
        { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment.' }
      ]
    }
  ]
},
{
  department: 'petroleum',
  level: '400',
  name: 'Fourth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'PET 401', title: 'Petroleum Reservoir Simulation', credits: 3, description: 'Modeling reservoir behavior under production.' },
        { code: 'PET 403', title: 'Offshore Engineering', credits: 3, description: 'Design and operations of offshore platforms.' },
        { code: 'PET 405', title: 'Advanced Drilling Technology', credits: 3, description: 'Directional and horizontal drilling techniques.' },
        { code: 'PET 407', title: 'Petroleum Law & Ethics', credits: 3, description: 'Regulations, contracts, and ethical practices.' },
        { code: 'PET 409', title: 'Energy Economics', credits: 2, description: 'Economic principles applied to energy projects.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'PET 402', title: 'Reservoir Management', credits: 3, description: 'Optimizing production and recovery methods.' },
        { code: 'PET 404', title: 'Petroleum Instrumentation & Control', credits: 3, description: 'Automation in oil & gas operations.' },
        { code: 'PET 406', title: 'Advanced Petroleum Production', credits: 3, description: 'Techniques for unconventional resources.' },
        { code: 'PET 408', title: 'Project Management', credits: 3, description: 'Planning, scheduling, execution of engineering projects.' },
        { code: 'PET 410', title: 'Internship/Industrial Attachment', credits: 2, description: 'Practical industry exposure.' }
      ]
    }
  ]
},
{
  department: 'petroleum',
  level: '500',
  name: 'Fifth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'PET 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of petroleum engineering project.' },
        { code: 'PET 503', title: 'Advanced Reservoir Engineering', credits: 3, description: 'Simulation, EOR, reservoir optimization.' },
        { code: 'PET 505', title: 'Petroleum Risk Analysis', credits: 3, description: 'Risk assessment in oilfield operations.' },
        { code: 'PET 507', title: 'Research Methodology', credits: 2, description: 'Techniques for engineering research.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'PET 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of final year project.' },
        { code: 'PET 504', title: 'Petroleum Project Management', credits: 3, description: 'Planning, execution, and monitoring of projects.' },
        { code: 'PET 506', title: 'Advanced Production Techniques', credits: 3, description: 'Maximizing oil and gas recovery.' },
        { code: 'PET 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Engineering law, ethics, and management.' }
      ]
    }
  ]
},

// ================= Agricultural Engineering =================
{
  department: 'agricultural',
  level: '100',
  name: 'First Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'AGR 101', title: 'Introduction to Agricultural Engineering', credits: 3, description: 'Overview of agricultural engineering disciplines.' },
        { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
        { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
        { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
        { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'AGR 102', title: 'Soil Science I', credits: 3, description: 'Introduction to soil properties and classification.' },
        { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
        { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
        { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
        { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
      ]
    }
  ]
},

{
  department: 'agricultural',
  level: '200',
  name: 'Second Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'AGR 201', title: 'Irrigation Engineering I', credits: 3, description: 'Basics of irrigation systems and design.' },
        { code: 'AGR 203', title: 'Farm Machinery I', credits: 3, description: 'Introduction to agricultural machinery and tools.' },
        { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Linear algebra, multivariable calculus.' },
        { code: 'GST 201', title: 'Fundamentals of Management', credits: 2, description: 'Management principles and organizational behaviour.' },
        { code: 'BIO 201', title: 'Plant Science I', credits: 3, description: 'Basic plant biology and crop physiology.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'AGR 202', title: 'Soil & Water Conservation', credits: 3, description: 'Techniques for soil protection and water management.' },
        { code: 'AGR 204', title: 'Farm Machinery II', credits: 3, description: 'Mechanical operations and maintenance.' },
        { code: 'MTH 202', title: 'Probability & Statistics', credits: 3, description: 'Statistical methods, probability, sampling.' },
        { code: 'GST 202', title: 'Entrepreneurship Skills', credits: 2, description: 'Idea generation and business plan basics.' },
        { code: 'AGR 206', title: 'Crop Production Systems', credits: 3, description: 'Introduction to major crop systems and management.' }
      ]
    }
  ]
},

// 300 Level
{
  department: 'agricultural',
  level: '300',
  name: 'Third Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'AGR 301', title: 'Irrigation Engineering II', credits: 3, description: 'Design and management of irrigation systems.' },
        { code: 'AGR 303', title: 'Soil Science II', credits: 3, description: 'Advanced soil fertility and soil management.' },
        { code: 'AGR 305', title: 'Agricultural Structures', credits: 3, description: 'Farm buildings, silos, and storage design.' },
        { code: 'AGR 307', title: 'Agricultural Electronics', credits: 3, description: 'Sensors and automation in agriculture.' },
        { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment in agricultural operations.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'AGR 302', title: 'Machinery Maintenance & Design', credits: 3, description: 'Design and upkeep of farm machinery.' },
        { code: 'AGR 304', title: 'Pest & Disease Management', credits: 3, description: 'Identification and control of crop pests and diseases.' },
        { code: 'AGR 306', title: 'Hydrology & Drainage', credits: 3, description: 'Water flow, drainage systems for farms.' },
        { code: 'AGR 308', title: 'Farm Power', credits: 3, description: 'Engines, tractors, and energy in agriculture.' },
        { code: 'GST 302', title: 'Communication Skills', credits: 2, description: 'Professional and technical communication.' }
      ]
    }
  ]
},

// 400 Level
{
  department: 'agricultural',
  level: '400',
  name: 'Fourth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'AGR 401', title: 'Advanced Irrigation Systems', credits: 3, description: 'Modern irrigation techniques and automation.' },
        { code: 'AGR 403', title: 'Agricultural Waste Management', credits: 3, description: 'Treatment and utilization of agricultural waste.' },
        { code: 'AGR 405', title: 'Greenhouse & Protected Agriculture', credits: 3, description: 'Design and management of controlled environments.' },
        { code: 'AGR 407', title: 'Precision Agriculture', credits: 3, description: 'GIS, GPS, and smart farming technologies.' },
        { code: 'AGR 409', title: 'Agricultural Policy & Ethics', credits: 2, description: 'Ethical, social, and policy aspects of agriculture.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'AGR 402', title: 'Farm Machinery Automation', credits: 3, description: 'Robotics and automation in farming.' },
        { code: 'AGR 404', title: 'Soil & Crop Engineering', credits: 3, description: 'Soil management, crop optimization.' },
        { code: 'AGR 406', title: 'Water Resources Management', credits: 3, description: 'Sustainable management of water resources.' },
        { code: 'AGR 408', title: 'Agricultural Project Management', credits: 3, description: 'Planning and executing farm projects.' },
        { code: 'AGR 410', title: 'Internship/Industrial Attachment', credits: 2, description: 'Practical exposure in agriculture industries.' }
      ]
    }
  ]
},
// 500 Level
{
  department: 'agricultural',
  level: '500',
  name: 'Fifth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'AGR 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of agricultural engineering project.' },
        { code: 'AGR 503', title: 'Advanced Irrigation & Water Management', credits: 3, description: 'Turbulence, advanced hydraulics for irrigation.' },
        { code: 'AGR 505', title: 'Agricultural Systems Analysis', credits: 3, description: 'Modeling and optimization of farming systems.' },
        { code: 'AGR 507', title: 'Research Methodology', credits: 2, description: 'Techniques for agricultural research.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'AGR 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of final year project.' },
        { code: 'AGR 504', title: 'Precision & Smart Farming', credits: 3, description: 'Advanced smart farming tools and techniques.' },
        { code: 'AGR 506', title: 'Sustainable Agriculture & Energy', credits: 3, description: 'Sustainability and energy efficiency in farming.' },
        { code: 'AGR 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Engineering law, ethics, and management.' }
      ]
    }
  ]
},
// ================= Food Engineering =================
// 100 Level
{
  department: 'food',
  level: '100',
  name: 'First Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'FDE 101', title: 'Introduction to Food Engineering', credits: 3, description: 'Overview of food processing and technology.' },
        { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
        { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
        { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
        { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'FDE 102', title: 'Food Chemistry I', credits: 3, description: 'Composition and properties of foods.' },
        { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
        { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
        { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
        { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
      ]
    }
  ]
},

// 200 Level 
{
  department: 'food',
  level: '200',
  name: 'Second Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'FDE 201', title: 'Food Process Engineering I', credits: 3, description: 'Introduction to food process principles and unit operations in food engineering.' },
        { code: 'FDE 203', title: 'Engineering Thermodynamics I', credits: 3, description: 'Thermodynamic properties and processes related to food systems.' },
        { code: 'FDE 205', title: 'Fluid Mechanics in Food Systems', credits: 3, description: 'Flow behavior of Newtonian and non-Newtonian fluids in food processing.' },
        { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Vector analysis and partial differential equations for engineering applications.' },
        { code: 'GST 201', title: 'Philosophy and Logic', credits: 2, description: 'Introduction to logical reasoning and philosophy in societal context.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'FDE 202', title: 'Food Chemistry', credits: 3, description: 'Chemical composition of foods, reactions during processing, and quality control.' },
        { code: 'FDE 204', title: 'Heat and Mass Transfer in Food Processing', credits: 3, description: 'Mechanisms of heat and mass transfer in drying, evaporation, and freezing.' },
        { code: 'FDE 206', title: 'Food Microbiology', credits: 3, description: 'Study of microorganisms in foods and their effects on food spoilage and preservation.' },
        { code: 'ENG 202', title: 'Engineering Thermodynamics II', credits: 3, description: 'Applications of thermodynamic cycles and systems in engineering.' },
        { code: 'GST 202', title: 'Peace and Conflict Resolution', credits: 2, description: 'Understanding the causes and prevention of conflicts in society.' }
      ]
    }
  ]
},

// 300 Level
{
  department: 'food',
  level: '300',
  name: 'Third Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'FDE 301', title: 'Food Chemistry II', credits: 3, description: 'Advanced chemical processes in foods.' },
        { code: 'FDE 303', title: 'Food Microbiology II', credits: 3, description: 'Pathogens, spoilage, and fermentation.' },
        { code: 'FDE 305', title: 'Food Processing II', credits: 3, description: 'Thermal and non-thermal food processing techniques.' },
        { code: 'FDE 307', title: 'Food Packaging', credits: 3, description: 'Materials and methods for food packaging.' },
        { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment in food industries.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'FDE 302', title: 'Food Engineering Operations', credits: 3, description: 'Transport phenomena in food processing.' },
        { code: 'FDE 304', title: 'Dairy & Meat Technology', credits: 3, description: 'Processing and preservation of animal products.' },
        { code: 'FDE 306', title: 'Food Quality Control', credits: 3, description: 'Standards and methods for quality assurance.' },
        { code: 'FDE 308', title: 'Food Biotechnology', credits: 3, description: 'Application of biotech in food production.' },
        { code: 'GST 302', title: 'Communication Skills', credits: 2, description: 'Professional and technical communication.' }
      ]
    }
  ]
},

// 400 Level
{
  department: 'food',
  level: '400',
  name: 'Fourth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'FDE 401', title: 'Advanced Food Processing', credits: 3, description: 'Modern methods and technologies for food processing.' },
        { code: 'FDE 403', title: 'Food Preservation & Storage', credits: 3, description: 'Techniques to extend shelf-life and maintain quality.' },
        { code: 'FDE 405', title: 'Food Product Development', credits: 3, description: 'Design and formulation of new food products.' },
        { code: 'FDE 407', title: 'Food Engineering Design', credits: 3, description: 'Design of food processing equipment and plants.' },
        { code: 'FDE 409', title: 'Food Industry Ethics & Policy', credits: 2, description: 'Ethical, legal, and regulatory aspects of food industries.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'FDE 402', title: 'Automation in Food Processing', credits: 3, description: 'Control systems and robotics in food plants.' },
        { code: 'FDE 404', title: 'Food Rheology & Texture Analysis', credits: 3, description: 'Physical properties and texture measurement of foods.' },
        { code: 'FDE 406', title: 'Food Safety Management Systems', credits: 3, description: 'HACCP, ISO standards, and risk assessment.' },
        { code: 'FDE 408', title: 'Food Plant Project Management', credits: 3, description: 'Planning, execution, and supervision of food projects.' },
        { code: 'FDE 410', title: 'Internship/Industrial Attachment', credits: 2, description: 'Practical exposure in food industries.' }
      ]
    }
  ]
},

// 500 Level
{
  department: 'food',
  level: '500',
  name: 'Fifth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'FDE 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of food engineering project.' },
        { code: 'FDE 503', title: 'Advanced Food Processing Technologies', credits: 3, description: 'Emerging technologies in food processing.' },
        { code: 'FDE 505', title: 'Food Product Optimization', credits: 3, description: 'Mathematical and experimental approaches to optimize food products.' },
        { code: 'FDE 507', title: 'Research Methodology', credits: 2, description: 'Techniques for research in food engineering.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'FDE 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of final year food engineering project.' },
        { code: 'FDE 504', title: 'Food Safety & Quality Auditing', credits: 3, description: 'Advanced quality management systems and auditing.' },
        { code: 'FDE 506', title: 'Sustainable Food Processing', credits: 3, description: 'Energy-efficient and eco-friendly food technologies.' },
        { code: 'FDE 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Ethics, law, and management in food engineering.' }
      ]
    }
  ]
},

// ================= Chemical Engineering =================
// 100 Level
{
  department: 'chemical',
  level: '100',
  name: 'First Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CHE 101', title: 'Introduction to Chemical Engineering', credits: 3, description: 'Overview of chemical engineering principles.' },
        { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
        { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
        { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
        { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CHE 102', title: 'Chemical Thermodynamics I', credits: 3, description: 'Basic laws of thermodynamics applied to chemical systems.' },
        { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
        { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
        { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
        { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
      ]
    }
  ]
},
// 200 Level 
{
  department: 'chemical',
  level: '200',
  name: 'Second Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CHE 201', title: 'Chemical Process Calculations', credits: 3, description: 'Fundamental principles of material and energy balances in chemical processes.' },
        { code: 'CHE 203', title: 'Fluid Mechanics I', credits: 3, description: 'Fluid properties, fluid statics, and flow through pipes and fittings.' },
        { code: 'CHE 205', title: 'Chemical Engineering Thermodynamics I', credits: 3, description: 'Introduction to thermodynamic systems, laws of thermodynamics, and their applications.' },
        { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Vector analysis, partial differential equations, and applications to engineering problems.' },
        { code: 'GST 201', title: 'Philosophy and Logic', credits: 2, description: 'Study of critical reasoning and logical analysis.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CHE 202', title: 'Heat Transfer Operations', credits: 3, description: 'Mechanisms of heat transfer and design of heat exchangers.' },
        { code: 'CHE 204', title: 'Fluid Mechanics II', credits: 3, description: 'Flow in open channels, compressible flow, and boundary layer theory.' },
        { code: 'CHE 206', title: 'Mechanical Unit Operations', credits: 3, description: 'Introduction to size reduction, filtration, sedimentation, and mixing.' },
        { code: 'ENG 202', title: 'Engineering Thermodynamics', credits: 3, description: 'Thermodynamic cycles and applications in engineering systems.' },
        { code: 'GST 202', title: 'Peace and Conflict Resolution', credits: 2, description: 'Conflict prevention and management strategies for societal harmony.' }
      ]
    }
  ]
},

// 300 Level
{
  department: 'chemical',
  level: '300',
  name: 'Third Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CHE 301', title: 'Chemical Reaction Engineering I', credits: 3, description: 'Kinetics, reactors, and design principles.' },
        { code: 'CHE 303', title: 'Mass Transfer I', credits: 3, description: 'Diffusion, absorption, and mass transfer operations.' },
        { code: 'CHE 305', title: 'Process Instrumentation', credits: 3, description: 'Sensors, measurement, and control in processes.' },
        { code: 'CHE 307', title: 'Fluid Mechanics II', credits: 3, description: 'Advanced fluid flow in chemical systems.' },
        { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment in chemical industries.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CHE 302', title: 'Heat Transfer II', credits: 3, description: 'Advanced heat exchangers and thermal systems.' },
        { code: 'CHE 304', title: 'Separation Processes', credits: 3, description: 'Distillation, extraction, and filtration techniques.' },
        { code: 'CHE 306', title: 'Chemical Engineering Lab II', credits: 3, description: 'Experiments on reaction engineering and separations.' },
        { code: 'CHE 308', title: 'Process Control I', credits: 3, description: 'Feedback control, PID controllers, and applications.' },
        { code: 'GST 302', title: 'Communication Skills', credits: 2, description: 'Professional and technical communication.' }
      ]
    }
  ]
},

// 400 Level
{
  department: 'chemical',
  level: '400',
  name: 'Fourth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CHE 401', title: 'Chemical Process Design I', credits: 3, description: 'Design of chemical process equipment and plants.' },
        { code: 'CHE 403', title: 'Reaction Engineering II', credits: 3, description: 'Complex reactions, kinetics, and reactor design.' },
        { code: 'CHE 405', title: 'Process Simulation & Modelling', credits: 3, description: 'Use of software tools for chemical process analysis.' },
        { code: 'CHE 407', title: 'Environmental Engineering', credits: 3, description: 'Waste management, pollution control in chemical industries.' },
        { code: 'CHE 409', title: 'Chemical Engineering Ethics & Policy', credits: 2, description: 'Professional ethics, legal and regulatory issues.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CHE 402', title: 'Process Control II', credits: 3, description: 'Advanced control strategies and optimization.' },
        { code: 'CHE 404', title: 'Unit Operations', credits: 3, description: 'Integrated approach to chemical unit operations.' },
        { code: 'CHE 406', title: 'Plant Safety & Risk Management', credits: 3, description: 'HACCP, safety audits, hazard analysis.' },
        { code: 'CHE 408', title: 'Project Management', credits: 3, description: 'Planning, scheduling, and execution of chemical projects.' },
        { code: 'CHE 410', title: 'Internship/Industrial Attachment', credits: 2, description: 'Hands-on industry experience.' }
      ]
    }
  ]
},

// 500 Level
{
  department: 'chemical',
  level: '500',
  name: 'Fifth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CHE 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of chemical engineering project.' },
        { code: 'CHE 503', title: 'Advanced Process Engineering', credits: 3, description: 'Process intensification and advanced design methods.' },
        { code: 'CHE 505', title: 'Process Optimization', credits: 3, description: 'Techniques for improving efficiency and performance.' },
        { code: 'CHE 507', title: 'Research Methodology', credits: 2, description: 'Methods and techniques for research in chemical engineering.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CHE 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of final year chemical engineering project.' },
        { code: 'CHE 504', title: 'Sustainable Chemical Processes', credits: 3, description: 'Green engineering and energy-efficient methods.' },
        { code: 'CHE 506', title: 'Advanced Safety & Risk Management', credits: 3, description: 'Comprehensive risk assessment and safety strategies.' },
        { code: 'CHE 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Ethics, law, and professional conduct in chemical engineering.' }
      ]
    }
  ]
},

// ================= Civil Engineering =================
// 100 Level
{
  department: 'civil',
  level: '100',
  name: 'First Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CIV 101', title: 'Introduction to Civil Engineering', credits: 3, description: 'Overview of civil engineering fields.' },
        { code: 'MTH 101', title: 'Mathematics I', credits: 4, description: 'Calculus and analytical geometry.' },
        { code: 'PHY 101', title: 'Physics I', credits: 3, description: 'Mechanics and properties of matter.' },
        { code: 'CHM 101', title: 'Chemistry I', credits: 3, description: 'General chemistry principles.' },
        { code: 'GST 101', title: 'Use of English I', credits: 2, description: 'English composition and communication skills.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CIV 102', title: 'Engineering Mechanics I', credits: 3, description: 'Statics, forces, and equilibrium.' },
        { code: 'MTH 102', title: 'Mathematics II', credits: 4, description: 'Advanced calculus and differential equations.' },
        { code: 'PHY 102', title: 'Physics II', credits: 3, description: 'Electricity, magnetism, and waves.' },
        { code: 'CHM 102', title: 'Chemistry II', credits: 3, description: 'Organic and inorganic chemistry.' },
        { code: 'GST 102', title: 'Use of English II', credits: 2, description: 'Advanced communication skills.' }
      ]
    }
  ]
},



// 200 Level 
{
  department: 'civil',
  level: '200',
  name: 'Second Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CIV 201', title: 'Strength of Materials I', credits: 3, description: 'Study of stress, strain, and elastic properties of materials.' },
        { code: 'CIV 203', title: 'Engineering Surveying I', credits: 2, description: 'Principles and techniques of plane surveying and levelling.' },
        { code: 'CIV 205', title: 'Engineering Geology', credits: 2, description: 'Introduction to rocks, soils, and geological factors affecting construction.' },
        { code: 'MTH 201', title: 'Mathematics III', credits: 4, description: 'Advanced calculus, vector analysis, and partial differential equations.' },
        { code: 'GST 201', title: 'Philosophy and Logic', credits: 2, description: 'Basic philosophical and logical reasoning concepts.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CIV 202', title: 'Fluid Mechanics I', credits: 3, description: 'Basic fluid properties, hydrostatics, and Bernoulli’s equation.' },
        { code: 'CIV 204', title: 'Civil Engineering Drawing', credits: 2, description: 'Technical drawing and interpretation of civil plans and structures.' },
        { code: 'CIV 206', title: 'Introduction to Structural Analysis', credits: 3, description: 'Analysis of statically determinate structures and trusses.' },
        { code: 'ENG 202', title: 'Engineering Thermodynamics', credits: 3, description: 'Principles of thermodynamics applied to engineering systems.' },
        { code: 'GST 202', title: 'Peace and Conflict Resolution', credits: 2, description: 'Understanding and managing conflict in society.' }
      ]
    }
  ]
},

// 300 Level
{
  department: 'civil',
  level: '300',
  name: 'Third Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CIV 301', title: 'Structural Analysis II', credits: 3, description: 'Analysis of indeterminate structures and methods.' },
        { code: 'CIV 303', title: 'Surveying II', credits: 3, description: 'Advanced surveying techniques and applications.' },
        { code: 'CIV 305', title: 'Transportation Engineering I', credits: 3, description: 'Highway and traffic engineering principles.' },
        { code: 'CIV 307', title: 'Hydraulics I', credits: 3, description: 'Open channel and pipe flow analysis.' },
        { code: 'GST 301', title: 'Industrial Safety & Hazard Management', credits: 2, description: 'Safety, risk assessment in civil works.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CIV 302', title: 'Construction Materials II', credits: 3, description: 'Concrete technology and testing methods.' },
        { code: 'CIV 304', title: 'Structural Design I', credits: 3, description: 'Design of reinforced concrete and steel members.' },
        { code: 'CIV 306', title: 'Geotechnical Engineering II', credits: 3, description: 'Foundation design and soil mechanics.' },
        { code: 'CIV 308', title: 'Civil Engineering Lab II', credits: 3, description: 'Experimental investigations on materials and structures.' },
        { code: 'GST 302', title: 'Communication Skills', credits: 2, description: 'Professional and technical communication.' }
      ]
    }
  ]
},

// 400 Level
{
  department: 'civil',
  level: '400',
  name: 'Fourth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CIV 401', title: 'Structural Design II', credits: 3, description: 'Advanced design of concrete and steel structures.' },
        { code: 'CIV 403', title: 'Transportation Engineering II', credits: 3, description: 'Pavement design and traffic management.' },
        { code: 'CIV 405', title: 'Hydraulics II', credits: 3, description: 'Hydraulic machines, water resources systems.' },
        { code: 'CIV 407', title: 'Construction Project Management', credits: 3, description: 'Planning, scheduling, and project execution.' },
        { code: 'CIV 409', title: 'Civil Engineering Ethics', credits: 2, description: 'Professional conduct and ethical practices.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CIV 402', title: 'Environmental Engineering', credits: 3, description: 'Water supply, wastewater, and pollution control.' },
        { code: 'CIV 404', title: 'Advanced Structural Analysis', credits: 3, description: 'Computer-aided structural analysis techniques.' },
        { code: 'CIV 406', title: 'Geotechnical Engineering III', credits: 3, description: 'Advanced foundation engineering and soil-structure interaction.' },
        { code: 'CIV 408', title: 'Internship/Industrial Attachment', credits: 3, description: 'Practical experience in civil engineering projects.' },
        { code: 'CIV 410', title: 'Research & Seminar', credits: 2, description: 'Presentation and discussion of research topics.' }
      ]
    }
  ]
},

// 500 Level
{
  department: 'civil',
  level: '500',
  name: 'Fifth Year',
  semesters: [
    {
      semester: '1st Semester',
      courses: [
        { code: 'CIV 501', title: 'Capstone Project I', credits: 6, description: 'Design and development of civil engineering final year project.' },
        { code: 'CIV 503', title: 'Advanced Structural Design', credits: 3, description: 'High-rise, bridge, and complex structure design.' },
        { code: 'CIV 505', title: 'Construction Technology & Management', credits: 3, description: 'Modern construction techniques and project management.' },
        { code: 'CIV 507', title: 'Research Methodology', credits: 2, description: 'Research methods for civil engineering.' }
      ]
    },
    {
      semester: '2nd Semester',
      courses: [
        { code: 'CIV 502', title: 'Capstone Project II', credits: 6, description: 'Completion and presentation of civil engineering final year project.' },
        { code: 'CIV 504', title: 'Sustainable Infrastructure', credits: 3, description: 'Green building, sustainable urban development.' },
        { code: 'CIV 506', title: 'Advanced Geotechnical Engineering', credits: 3, description: 'Deep foundations, slope stability, and soil dynamics.' },
        { code: 'CIV 508', title: 'Professional Practice & Ethics', credits: 2, description: 'Civil engineering law, ethics, and professional standards.' }
      ]
    }
  ]
},

 ];

 const handleViewMaterials = (course) => {
  alert(`Viewing materials for ${course.title} (${course.code})`);
  // Later you can redirect, e.g.:
  // navigate(`/materials/${department.department}/${course.code}`);
};

 function DepartmentDetail() {
  const { departmentId: deptId } = useParams();
  console.log('Department ID from URL:', deptId);
  console.log('Available departments:', Object.keys(departmentData));
  
  const [selectedLevel, setSelectedLevel] = useState('100');
  const department = departmentData[deptId];

  // Add these lines after the department declaration
  const departmentLevels = [...new Set(
    levels
      .filter(level => level.department === deptId)
      .map(level => level.level)
  )].sort();

  const currentLevel = levels.find(
    level => level.department === deptId && level.level === selectedLevel
  );

  if (!department) {
    console.error(`Department not found for ID: ${deptId}`);
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Department not found</h1>
          <p className="text-gray-600 mt-2">The department with ID: {deptId} could not be found.</p>
          <Link to="/departments" className="mt-4 inline-flex items-center text-nuesa-green">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Departments
          </Link>
        </div>
      </div>
    );
  }
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
                  <span>
                    Head of Department:{" "}
                    <strong>{department.hod}</strong>
                  </span>
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

      {/* Level Selector */}
      <section className="container mx-auto my-8">
        <h2 className="text-xl font-semibold mb-4">Select Level</h2>
        <div className="flex gap-4 flex-wrap">
          {departmentLevels.map(level => (
            <button
              key={level}
              className={`px-4 py-2 rounded transition-colors ${
                selectedLevel === level
                  ? 'bg-nuesa-green text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedLevel(level)}
            >
              Level {level}
            </button>
          ))}
        </div>
      </section>

      {/* Courses for Selected Level */}
      {currentLevel && (
        <section className="container mx-auto my-8">
          <h2 className="text-2xl font-bold mb-6">{currentLevel.name} Courses</h2>
          {currentLevel.semesters.map((semester, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{semester.semester}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {semester.courses.map((course, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-nuesa-green">{course.code}</h4>
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                      </div>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {course.credits} Credits
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
   {/* Vision & Mission */}
   {department && (
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
                <h3 className="text-2xl font-bold mb-4 text-nuesa-green">Vision</h3>
                <p className="text-gray-700">{department.vision}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-nuesa-green">Mission</h3>
                <p className="text-gray-700">{department.mission}</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DepartmentDetail;