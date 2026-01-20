
export interface CountryExam {
  id: string;
  country: string;
  flag: string;
  exams: string[];
  description: string;
  details: string;
}

// Course interface for the signature 1-to-1 and 3-to-1 batches
export interface Course {
  id: string;
  icon: string;
  gradeLevel: string;
  description: string;
  subjects: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}