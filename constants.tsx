
import { Experience, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'Java',level: 80, category: 'Software' },
  { name: 'Data Structures & Algorithms', level: 72, category: 'Theory' },
  { name: 'Full Stack (MERN/Spring)', level: 73, category: 'Software' },
  { name: 'JavaScript', level: 70, category: 'Software' },
  { name: 'React.js', level: 70, category: 'Software' },
  { name: 'HTML & CSS', level: 85, category: 'Software' },
  { name: 'Node.js', level: 65, category: 'Software' },
  { name: 'MongoDB', level: 60, category: 'Database' },
  { name: 'Git & GitHub', level: 75, category: 'Tools' },
  { name: 'OOPs Concepts', level: 80, category: 'Theory' }
];

export const EXPERIENCES: Experience[] = [

  {
    role: 'Information Technology Student',
    company: 'Sir Chhotu Ram Institute of Engineering & Technology',
    period: '2023 - Present',
    description: [
      'Working on academic and personal software development projects.',
      'Practicing Data Structures and Algorithms regularly.',
      'Participated in hackathons, coding competitions and technical events.'
    ]
  },



   {
  role: 'Artificial Intelligence & Machine Learning Intern',
  company: 'Edunet Foundation (AICTE & IBM SkillsBuild)',
  period: 'Jun 2025 - Jul 2025',
  description: [
    'Completed a 6-week industry-oriented internship focused on Artificial Intelligence and Machine Learning.',
    'Worked with Python, NumPy, Pandas, and Matplotlib for data preprocessing, analysis, and visualization.',
    'Implemented machine learning workflows including data cleaning, feature engineering, model training, and evaluation.',
    'Developed predictive models using Scikit-Learn and analyzed performance using standard evaluation metrics.',
    'Gained practical exposure to AI/ML concepts through hands-on projects and guided learning modules.',
    'Strengthened understanding of data-driven problem solving and machine learning application development.'
  ]
}
  // {
  //   role: 'DSA Workshop Lead',
  //   company: 'Coding Club, IT University',
  //   period: 'Sept 2023 - April 2024',
  //   description: [
  //     'Mentored 100+ students in Java and Data Structures fundamentals.',
  //     'Designed mock interviews focusing on LeetCode-style algorithm problems.',
  //     'Created open-source Java reference guides for the student community.'
  //   ]
  // }
];
