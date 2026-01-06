import React, { useState } from 'react';
import { 
  Baby, 
  BookOpen, 
  Calculator, 
  Globe, 
  Palette, 
  Trophy,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';
// using anchor for navigation to avoid JSX parser ambiguity in this component

const GradeSelection = () => {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [hoveredGrade, setHoveredGrade] = useState(null);

  const grades = [
    {
      id: 'kg',
      title: 'Kindergarten',
      subtitle: 'Age 3-5 Years',
      description: 'Fun learning through play, basic shapes, colors, and alphabet recognition',
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30 hover:border-pink-500',
      subjects: ['ABC Learning', 'Numbers 1-10', 'Colors & Shapes', 'Story Time'],
      features: ['Interactive Games', 'Visual Learning', 'Creative Activities']
    },
    {
      id: 'class1',
      title: 'Class 1',
      subtitle: 'Age 5-6 Years',
      description: 'Introduction to reading, writing, and basic math concepts',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30 hover:border-blue-500',
      subjects: ['Basic Reading', 'Simple Math', 'Drawing', 'Nature Study'],
      features: ['Phonics Method', 'Number Recognition', 'Fine Motor Skills']
    },
    {
      id: 'class2',
      title: 'Class 2',
      subtitle: 'Age 6-7 Years',
      description: 'Building foundation in language arts and elementary mathematics',
      icon: Calculator,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30 hover:border-green-500',
      subjects: ['Sentence Formation', 'Addition & Subtraction', 'Science Basics', 'Art & Craft'],
      features: ['Problem Solving', 'Creative Writing', 'Logical Thinking']
    },
    {
      id: 'class3',
      title: 'Class 3',
      subtitle: 'Age 7-8 Years',
      description: 'Expanding knowledge with comprehensive subjects and skill development',
      icon: Globe,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30 hover:border-purple-500',
      subjects: ['English Grammar', 'Multiplication Tables', 'Social Studies', 'General Science'],
      features: ['Critical Thinking', 'Research Skills', 'Group Projects']
    },
    {
      id: 'class4',
      title: 'Class 4',
      subtitle: 'Age 8-9 Years',
      description: 'Advanced learning with focus on analytical and creative thinking',
      icon: Palette,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30 hover:border-orange-500',
      subjects: ['Advanced English', 'Geometry Basics', 'History', 'Environmental Science'],
      features: ['Project-Based Learning', 'Presentation Skills', 'Team Collaboration']
    },
    {
      id: 'class5',
      title: 'Class 5',
      subtitle: 'Age 9-10 Years',
      description: 'Comprehensive curriculum preparing for middle school challenges',
      icon: Trophy,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30 hover:border-red-500',
      subjects: ['Literature', 'Advanced Math', 'Geography', 'Computer Basics'],
      features: ['Leadership Skills', 'Advanced Projects', 'Competitive Prep']
    }
  ];

  const handleGradeClick = (gradeId) => {
    setSelectedGrade(selectedGrade === gradeId ? null : gradeId);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-lg">Choose Your Grade</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Made Simple
            {/* <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Simple</span> */}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select your grade level and discover a world of interactive learning designed specifically for your age group
          </p>
        </div>

        {/* Grade Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grades.map((grade) => {
            const IconComponent = grade.icon;
            const isSelected = selectedGrade === grade.id;
            const isHovered = hoveredGrade === grade.id;

            return (
              <div
                key={grade.id}
                className={`group relative cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${isSelected ? 'scale-105' : ''}`}
                onClick={() => handleGradeClick(grade.id)}
                onMouseEnter={() => setHoveredGrade(grade.id)}
                onMouseLeave={() => setHoveredGrade(null)}
              >
                <a
                  href="/topics"
                  className={`relative block bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${grade.borderColor} ${isSelected ? 'border-opacity-100 shadow-2xl' : 'border-opacity-50'} ${grade.bgColor}`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${grade.color} flex items-center justify-center transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{grade.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{grade.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{grade.description}</p>
                  </div>

                  <div className="flex justify-center space-x-6 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="text-xs text-gray-400">Interactive</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-xs text-gray-400">Self-Paced</span>
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 border-t border-gray-600">
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Key Subjects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {grade.subjects.map((subject, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600">{subject}</span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          Special Features
                        </h4>
                        <ul className="space-y-1">
                          {grade.features.map((feature, index) => (
                            <li key={index} className="text-gray-300 text-xs flex items-center">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button onClick={(e) => e.preventDefault()} className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${grade.color} text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-200 transform hover:scale-105`}>Start Learning Now</button>
                    </div>
                  </div>

                  <div className={`absolute bottom-2 right-2 transition-all duration-300 ${isSelected ? 'opacity-100 scale-100' : 'opacity-60 scale-75'}`}>
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${grade.color} flex items-center justify-center`}>
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GradeSelection;