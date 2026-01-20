
import { CountryExam, Course, Testimonial } from './types';

export const COUNTRY_EXAMS: CountryExam[] = [
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    exams: ['GCSE', 'IGCSE', 'A-Levels', 'Key Stage 2 & 3'],
    description: 'Specialized coaching for the British curriculum, focusing on Edexcel, AQA, and OCR boards.',
    details: 'Comprehensive support for Year 4 to Year 13, ensuring excellence in 11+, GCSE/IGCSE and advanced A-Level subjects.'
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    exams: ['NAPLAN', 'ATAR', 'HSC', 'VCE', 'QCE'],
    description: 'Tailored tutoring for Australian states, covering the National Curriculum and state-specific certificates.',
    details: 'Preparation for NAPLAN assessments (Years 5, 7, 9) and focused ATAR coaching for Year 11 & 12 students across all major subjects.'
  },
  {
    id: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    exams: ['SAT', 'ACT', 'AP Exams', 'K-12 Common Core'],
    description: 'College prep and core curriculum support designed for the American educational system.',
    details: 'High-impact coaching for standardized testing (SAT/ACT), Advanced Placement (AP) courses, and building strong foundations in Common Core Maths and English.'
  }
];

// Added COURSES constant to fix the import error in CoursesPage.tsx
export const COURSES: Course[] = [
  {
    id: 'primary',
    icon: '🎒',
    gradeLevel: 'Primary (Year 4-6)',
    description: 'Foundational support in core subjects, building strong academic habits and confidence.',
    subjects: ['Mathematics', 'English Literacy', 'Science', 'Creative Writing']
  },
  {
    id: 'middle',
    icon: '📖',
    gradeLevel: 'Middle School (Year 7-9)',
    description: 'Bridging the gap to advanced concepts with specialized subject focus and exam readiness.',
    subjects: ['Algebra & Geometry', 'Physics', 'Chemistry', 'Biology', 'English Lit']
  },
  {
    id: 'igcse',
    icon: '✍️',
    gradeLevel: 'GCSE / IGCSE / NAPLAN',
    description: 'Intensive preparation for board exams with focus on past papers and marking schemes.',
    subjects: ['Additional Maths', 'Combined Science', 'Computer Science', 'History']
  },
  {
    id: 'advanced',
    icon: '🎓',
    gradeLevel: 'A-Levels / SAT / AP',
    description: 'Advanced university prep and competitive exam coaching for top-tier performance.',
    subjects: ['Calculus', 'Organic Chemistry', 'Statistics', 'Microeconomics']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    location: 'London, UK',
    content: "The 1-to-1 sessions at The Asian Kid improved my son's Maths confidence tremendously. The individual attention is unmatched.",
    rating: 5
  },
  {
    id: '2',
    name: 'David Miller',
    location: 'Sydney, Australia',
    content: 'Excellent platform for NAPLAN preparation. The 3-to-1 batch was perfect – enough peer interaction while keeping focus.',
    rating: 5
  },
  {
    id: '3',
    name: 'Jennifer Wu',
    location: 'California, USA',
    content: 'Finding high-quality 1-to-1 tutors for high school Biology was hard until we found The Asian Kid. Highly professional service.',
    rating: 5
  }
];