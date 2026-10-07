export interface CourseItem {
  code: string;
  name: string;
  creditHours: number;
  type?: 'Core' | 'General' | 'Major' | 'Elective' | 'Lab' | 'Project';
}

export interface SemesterData {
  semester: number;
  title: string;
  courses: CourseItem[];
  totalCredits: number;
}

export interface ProgramCurriculum {
  programId: string;
  programName: string;
  totalSemesters: number;
  totalCreditHours: number;
  degreeType: string;
  semesters: SemesterData[];
}

export const PROGRAMMES_CURRICULUM: Record<string, ProgramCurriculum> = {
  // ==========================================
  // 1. BS COMPUTER SCIENCE (8 Semesters, 130-134 Cr)
  // ==========================================
  'bs-computer-science': {
    programId: 'bs-computer-science',
    programName: 'BS Computer Science',
    totalSemesters: 8,
    totalCreditHours: 133,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 17,
        courses: [
          { code: 'CS110', name: 'Programming Fundamentals', creditHours: 3, type: 'Core' },
          { code: 'CS110L', name: 'Programming Fundamentals Lab', creditHours: 1, type: 'Lab' },
          { code: 'IT101', name: 'Introduction to ICT', creditHours: 2, type: 'General' },
          { code: 'IT101L', name: 'Introduction to ICT Lab', creditHours: 1, type: 'Lab' },
          { code: 'ENG101', name: 'Functional English', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Calculus & Analytical Geometry', creditHours: 3, type: 'General' },
          { code: 'PHY101', name: 'Applied Physics', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'CS120', name: 'Object Oriented Programming', creditHours: 3, type: 'Core' },
          { code: 'CS120L', name: 'Object Oriented Programming Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS125', name: 'Discrete Structures', creditHours: 3, type: 'Core' },
          { code: 'CS130', name: 'Digital Logic Design', creditHours: 3, type: 'Core' },
          { code: 'CS130L', name: 'Digital Logic Design Lab', creditHours: 1, type: 'Lab' },
          { code: 'MATH102', name: 'Multivariate Calculus', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' },
          { code: 'ENG102', name: 'Expository Writing', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'CS210', name: 'Data Structures & Algorithms', creditHours: 3, type: 'Core' },
          { code: 'CS210L', name: 'Data Structures Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS220', name: 'Computer Architecture & Org.', creditHours: 3, type: 'Core' },
          { code: 'CS220L', name: 'Computer Architecture Lab', creditHours: 1, type: 'Lab' },
          { code: 'MATH201', name: 'Linear Algebra', creditHours: 3, type: 'General' },
          { code: 'STAT201', name: 'Probability & Statistics', creditHours: 3, type: 'General' },
          { code: 'ENG201', name: 'Technical & Business Writing', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 18,
        courses: [
          { code: 'CS230', name: 'Operating Systems', creditHours: 3, type: 'Core' },
          { code: 'CS230L', name: 'Operating Systems Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS240', name: 'Database Systems', creditHours: 3, type: 'Core' },
          { code: 'CS240L', name: 'Database Systems Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS250', name: 'Software Engineering', creditHours: 3, type: 'Core' },
          { code: 'MATH202', name: 'Differential Equations', creditHours: 3, type: 'General' },
          { code: 'CS260', name: 'Web Engineering', creditHours: 3, type: 'Elective' },
          { code: 'CS260L', name: 'Web Engineering Lab', creditHours: 1, type: 'Lab' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 17,
        courses: [
          { code: 'CS310', name: 'Design & Analysis of Algorithms', creditHours: 3, type: 'Core' },
          { code: 'CS320', name: 'Computer Networks', creditHours: 3, type: 'Core' },
          { code: 'CS320L', name: 'Computer Networks Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS330', name: 'Theory of Automata', creditHours: 3, type: 'Core' },
          { code: 'CS340', name: 'Artificial Intelligence', creditHours: 3, type: 'Core' },
          { code: 'CS340L', name: 'Artificial Intelligence Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS-EL1', name: 'CS Elective I (Data Science/ML)', creditHours: 3, type: 'Elective' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 16,
        courses: [
          { code: 'CS350', name: 'Compiler Construction', creditHours: 3, type: 'Core' },
          { code: 'CS360', name: 'Information Security', creditHours: 3, type: 'Core' },
          { code: 'CS-EL2', name: 'CS Elective II (Cloud Computing)', creditHours: 3, type: 'Elective' },
          { code: 'CS-EL3', name: 'CS Elective III (Mobile App Dev)', creditHours: 3, type: 'Elective' },
          { code: 'MGT301', name: 'Entrepreneurship & Tech Ventures', creditHours: 3, type: 'General' },
          { code: 'ETH301', name: 'Professional Ethics in Computing', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 15,
        courses: [
          { code: 'CS490A', name: 'Final Year Project - Part I', creditHours: 3, type: 'Project' },
          { code: 'CS410', name: 'Parallel & Distributed Computing', creditHours: 3, type: 'Core' },
          { code: 'CS-EL4', name: 'CS Elective IV (Cyber Defense)', creditHours: 3, type: 'Elective' },
          { code: 'CS-EL5', name: 'CS Elective V (Deep Learning)', creditHours: 3, type: 'Elective' },
          { code: 'GEN401', name: 'Ideology & Constitution of Pakistan', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 16,
        courses: [
          { code: 'CS490B', name: 'Final Year Project - Part II', creditHours: 3, type: 'Project' },
          { code: 'CS-EL6', name: 'CS Elective VI (Natural Language Processing)', creditHours: 3, type: 'Elective' },
          { code: 'CS-EL7', name: 'CS Elective VII (Software Quality Assurance)', creditHours: 3, type: 'Elective' },
          { code: 'MGT401', name: 'Financial Management for IT', creditHours: 3, type: 'General' },
          { code: 'SOC401', name: 'Community Service Learning', creditHours: 4, type: 'General' }
        ]
      }
    ]
  },

  // ==========================================
  // 2. BBA - BACHELOR OF BUSINESS ADMINISTRATION (8 Semesters, 132-138 Cr)
  // ==========================================
  'bba': {
    programId: 'bba',
    programName: 'Bachelor of Business Administration (BBA)',
    totalSemesters: 8,
    totalCreditHours: 135,
    degreeType: 'BBA (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 18,
        courses: [
          { code: 'ENG101', name: 'English Composition & Comprehension', creditHours: 3, type: 'General' },
          { code: 'MGT101', name: 'Principles of Management', creditHours: 3, type: 'Core' },
          { code: 'IT105', name: 'Computer Applications in Business', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Business Mathematics', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 3, type: 'General' },
          { code: 'SOC101', name: 'Introduction to Sociology / Psychology', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 18,
        courses: [
          { code: 'ENG102', name: 'Business Communication & Presentation', creditHours: 3, type: 'General' },
          { code: 'MKT101', name: 'Principles of Marketing', creditHours: 3, type: 'Core' },
          { code: 'ACT101', name: 'Financial Accounting I', creditHours: 3, type: 'Core' },
          { code: 'ECO101', name: 'Microeconomics', creditHours: 3, type: 'Core' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 3, type: 'General' },
          { code: 'STAT101', name: 'Business Statistics', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 18,
        courses: [
          { code: 'ACT102', name: 'Financial Accounting II', creditHours: 3, type: 'Core' },
          { code: 'ECO102', name: 'Macroeconomics', creditHours: 3, type: 'Core' },
          { code: 'HRM201', name: 'Human Resource Management', creditHours: 3, type: 'Core' },
          { code: 'STAT201', name: 'Statistical Inference in Business', creditHours: 3, type: 'General' },
          { code: 'MKT201', name: 'Consumer Behavior', creditHours: 3, type: 'Major' },
          { code: 'LAW201', name: 'Commercial & Mercantile Law', creditHours: 3, type: 'Core' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 18,
        courses: [
          { code: 'ACT201', name: 'Cost & Management Accounting', creditHours: 3, type: 'Core' },
          { code: 'FIN201', name: 'Business Finance', creditHours: 3, type: 'Core' },
          { code: 'MGT201', name: 'Organizational Behavior', creditHours: 3, type: 'Core' },
          { code: 'MKT202', name: 'Marketing Management', creditHours: 3, type: 'Major' },
          { code: 'RES201', name: 'Business Research Methods', creditHours: 3, type: 'Core' },
          { code: 'ETH201', name: 'Corporate Governance & Business Ethics', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 15,
        courses: [
          { code: 'FIN301', name: 'Financial Management', creditHours: 3, type: 'Core' },
          { code: 'OPS301', name: 'Operations & Production Management', creditHours: 3, type: 'Core' },
          { code: 'MIS301', name: 'Management Information Systems (MIS)', creditHours: 3, type: 'Core' },
          { code: 'SPEC-1', name: 'Specialization Course I (Mkt/Fin/HRM)', creditHours: 3, type: 'Major' },
          { code: 'SPEC-2', name: 'Specialization Course II', creditHours: 3, type: 'Major' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 15,
        courses: [
          { code: 'MGT305', name: 'Supply Chain Management', creditHours: 3, type: 'Core' },
          { code: 'ENT301', name: 'Entrepreneurship & Small Business', creditHours: 3, type: 'Core' },
          { code: 'TAX301', name: 'Business Taxation & Corporate Law', creditHours: 3, type: 'General' },
          { code: 'SPEC-3', name: 'Specialization Course III', creditHours: 3, type: 'Major' },
          { code: 'SPEC-4', name: 'Specialization Course IV', creditHours: 3, type: 'Major' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 18,
        courses: [
          { code: 'STR401', name: 'Strategic Management', creditHours: 3, type: 'Core' },
          { code: 'INT401', name: 'International Business', creditHours: 3, type: 'Core' },
          { code: 'PRJ490A', name: 'BBA Capstone Project / Thesis I', creditHours: 3, type: 'Project' },
          { code: 'SPEC-5', name: 'Specialization Course V', creditHours: 3, type: 'Major' },
          { code: 'SPEC-6', name: 'Specialization Course VI', creditHours: 3, type: 'Major' },
          { code: 'ELC401', name: 'Business Analytics & Dashboarding', creditHours: 3, type: 'Elective' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 15,
        courses: [
          { code: 'PRJ490B', name: 'BBA Capstone Project / Thesis II', creditHours: 3, type: 'Project' },
          { code: 'INT499', name: 'Mandatory 6-8 Weeks Corporate Internship', creditHours: 3, type: 'Project' },
          { code: 'LEAD401', name: 'Strategic Leadership & Negotiation', creditHours: 3, type: 'General' },
          { code: 'SPEC-7', name: 'Specialization Course VII', creditHours: 3, type: 'Major' },
          { code: 'SPEC-8', name: 'Specialization Course VIII', creditHours: 3, type: 'Major' }
        ]
      }
    ]
  },

  // ==========================================
  // 3. BS ACCOUNTING & FINANCE (8 Semesters, 130-136 Cr)
  // ==========================================
  'bs-accounting-finance': {
    programId: 'bs-accounting-finance',
    programName: 'BS Accounting & Finance',
    totalSemesters: 8,
    totalCreditHours: 132,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 18,
        courses: [
          { code: 'ENG101', name: 'Functional English', creditHours: 3, type: 'General' },
          { code: 'ACT101', name: 'Fundamentals of Accounting', creditHours: 3, type: 'Core' },
          { code: 'MGT101', name: 'Principles of Management', creditHours: 3, type: 'Core' },
          { code: 'IT101', name: 'Information Technology in Business', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Business Mathematics', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 18,
        courses: [
          { code: 'ACT102', name: 'Financial Accounting', creditHours: 3, type: 'Core' },
          { code: 'ECO101', name: 'Microeconomics', creditHours: 3, type: 'Core' },
          { code: 'MKT101', name: 'Principles of Marketing', creditHours: 3, type: 'Core' },
          { code: 'STAT101', name: 'Business Statistics', creditHours: 3, type: 'General' },
          { code: 'ENG102', name: 'Business Communication', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 18,
        courses: [
          { code: 'ACT201', name: 'Advanced Financial Accounting', creditHours: 3, type: 'Major' },
          { code: 'ACT202', name: 'Cost Accounting', creditHours: 3, type: 'Major' },
          { code: 'ECO102', name: 'Macroeconomics', creditHours: 3, type: 'Core' },
          { code: 'FIN201', name: 'Introduction to Business Finance', creditHours: 3, type: 'Core' },
          { code: 'LAW201', name: 'Mercantile & Business Law', creditHours: 3, type: 'Core' },
          { code: 'ACT203', name: 'Accounting Software & ERP (QuickBooks/SAP)', creditHours: 3, type: 'Lab' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 18,
        courses: [
          { code: 'ACT204', name: 'Managerial Accounting', creditHours: 3, type: 'Major' },
          { code: 'FIN202', name: 'Financial Management', creditHours: 3, type: 'Major' },
          { code: 'AUD201', name: 'Principles of Auditing', creditHours: 3, type: 'Major' },
          { code: 'TAX201', name: 'Income Tax Law & Practice', creditHours: 3, type: 'Major' },
          { code: 'BNK201', name: 'Commercial Banking Operations', creditHours: 3, type: 'Core' },
          { code: 'RES201', name: 'Research Methodology', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 15,
        courses: [
          { code: 'FIN301', name: 'Corporate Finance', creditHours: 3, type: 'Major' },
          { code: 'ACT301', name: 'Financial Reporting (IFRS & GAAP)', creditHours: 3, type: 'Major' },
          { code: 'AUD301', name: 'Advanced Auditing & Assurance', creditHours: 3, type: 'Major' },
          { code: 'TAX301', name: 'Sales Tax & Corporate Taxation', creditHours: 3, type: 'Major' },
          { code: 'FIN302', name: 'Financial Markets & Institutions', creditHours: 3, type: 'Major' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 15,
        courses: [
          { code: 'FIN303', name: 'Investment Analysis & Portfolio Management', creditHours: 3, type: 'Major' },
          { code: 'ACT302', name: 'Advanced Management Accounting', creditHours: 3, type: 'Major' },
          { code: 'LAW301', name: 'Company Law & Corporate Secretarial Practice', creditHours: 3, type: 'Major' },
          { code: 'IFIN301', name: 'Islamic Banking & Finance', creditHours: 3, type: 'Major' },
          { code: 'FIN304', name: 'Financial Modeling in Excel', creditHours: 3, type: 'Lab' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 15,
        courses: [
          { code: 'FIN401', name: 'Risk Management & Derivatives', creditHours: 3, type: 'Major' },
          { code: 'FIN402', name: 'International Financial Management', creditHours: 3, type: 'Major' },
          { code: 'STR401', name: 'Strategic Financial Management', creditHours: 3, type: 'Major' },
          { code: 'PRJ490A', name: 'Accounting Capstone Project I', creditHours: 3, type: 'Project' },
          { code: 'ACT401', name: 'Forensic Accounting & Fraud Auditing', creditHours: 3, type: 'Elective' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 15,
        courses: [
          { code: 'PRJ490B', name: 'Accounting Capstone Project II', creditHours: 3, type: 'Project' },
          { code: 'INT499', name: 'Practical Corporate Internship', creditHours: 3, type: 'Project' },
          { code: 'FIN403', name: 'Behavioral Finance & Fintech', creditHours: 3, type: 'Elective' },
          { code: 'GOV401', name: 'Corporate Governance & Reporting', creditHours: 3, type: 'General' },
          { code: 'SEM401', name: 'Current Issues in Accounting & Finance', creditHours: 3, type: 'Elective' }
        ]
      }
    ]
  },

  // ==========================================
  // 4. BS BUSINESS ANALYTICS (8 Semesters, 131 Cr)
  // ==========================================
  'bs-business-analytics': {
    programId: 'bs-business-analytics',
    programName: 'BS Business Analytics',
    totalSemesters: 8,
    totalCreditHours: 131,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 16,
        courses: [
          { code: 'BA101', name: 'Introduction to Business Analytics', creditHours: 3, type: 'Core' },
          { code: 'CS101', name: 'Programming Fundamentals (Python)', creditHours: 3, type: 'Core' },
          { code: 'CS101L', name: 'Python for Analytics Lab', creditHours: 1, type: 'Lab' },
          { code: 'MATH101', name: 'Calculus for Business Decisions', creditHours: 3, type: 'General' },
          { code: 'ENG101', name: 'Functional English', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'BA102', name: 'Applied Statistics for Business', creditHours: 3, type: 'Core' },
          { code: 'MGT101', name: 'Principles of Management', creditHours: 3, type: 'General' },
          { code: 'DB101', name: 'Database Management & SQL', creditHours: 3, type: 'Core' },
          { code: 'DB101L', name: 'SQL & Relational Databases Lab', creditHours: 1, type: 'Lab' },
          { code: 'MATH102', name: 'Linear Algebra for Data Science', creditHours: 3, type: 'General' },
          { code: 'ENG102', name: 'Expository Writing & Communication', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 16,
        courses: [
          { code: 'BA201', name: 'Data Visualization & BI (Tableau/Power BI)', creditHours: 3, type: 'Major' },
          { code: 'BA201L', name: 'Business Intelligence Lab', creditHours: 1, type: 'Lab' },
          { code: 'ECO101', name: 'Managerial Economics', creditHours: 3, type: 'General' },
          { code: 'MKT101', name: 'Principles of Marketing', creditHours: 3, type: 'General' },
          { code: 'STAT201', name: 'Regression Analysis & Forecasting', creditHours: 3, type: 'Core' },
          { code: 'ACT101', name: 'Financial & Management Accounting', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 16,
        courses: [
          { code: 'BA202', name: 'Predictive Analytics & Data Mining', creditHours: 3, type: 'Major' },
          { code: 'BA202L', name: 'Predictive Analytics Lab', creditHours: 1, type: 'Lab' },
          { code: 'FIN201', name: 'Business Finance', creditHours: 3, type: 'General' },
          { code: 'OPS201', name: 'Operations Research & Optimization', creditHours: 3, type: 'Major' },
          { code: 'BA203', name: 'Marketing & Customer Analytics', creditHours: 3, type: 'Major' },
          { code: 'RES201', name: 'Business Analytics Research Methods', creditHours: 3, type: 'Core' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 16,
        courses: [
          { code: 'BA301', name: 'Machine Learning for Business', creditHours: 3, type: 'Major' },
          { code: 'BA301L', name: 'Machine Learning Lab', creditHours: 1, type: 'Lab' },
          { code: 'BA302', name: 'Financial Analytics & Risk Modeling', creditHours: 3, type: 'Major' },
          { code: 'BA303', name: 'Supply Chain & Logistics Analytics', creditHours: 3, type: 'Major' },
          { code: 'CS301', name: 'Big Data Architecture & Hadoop/Spark', creditHours: 3, type: 'Major' },
          { code: 'ETH301', name: 'Data Privacy, Ethics & Governance', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 16,
        courses: [
          { code: 'BA304', name: 'Text Mining & Natural Language Processing', creditHours: 3, type: 'Major' },
          { code: 'BA305', name: 'HR Analytics & People Science', creditHours: 3, type: 'Major' },
          { code: 'CS302', name: 'Cloud Computing for Analytics (AWS/Azure)', creditHours: 3, type: 'Major' },
          { code: 'BA306', name: 'Web & Social Media Analytics', creditHours: 3, type: 'Major' },
          { code: 'BA-EL1', name: 'Analytics Elective I (Healthcare/Retail)', creditHours: 3, type: 'Elective' },
          { code: 'BA304L', name: 'Text Mining Tools Lab', creditHours: 1, type: 'Lab' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 17,
        courses: [
          { code: 'BA490A', name: 'Capstone Analytics Project I', creditHours: 3, type: 'Project' },
          { code: 'BA401', name: 'Deep Learning for Decision Science', creditHours: 3, type: 'Major' },
          { code: 'STR401', name: 'Strategic Decision Modeling', creditHours: 3, type: 'Core' },
          { code: 'BA-EL2', name: 'Analytics Elective II (Fraud Detection)', creditHours: 3, type: 'Elective' },
          { code: 'ENT401', name: 'Data Entrepreneurship & Startups', creditHours: 3, type: 'General' },
          { code: 'INT401', name: 'Internship / Industrial Immersion', creditHours: 2, type: 'Project' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 17,
        courses: [
          { code: 'BA490B', name: 'Capstone Analytics Project II', creditHours: 3, type: 'Project' },
          { code: 'BA402', name: 'Simulation Modeling in Enterprise', creditHours: 3, type: 'Major' },
          { code: 'BA-EL3', name: 'Analytics Elective III (Pricing Analytics)', creditHours: 3, type: 'Elective' },
          { code: 'GEN401', name: 'Ideology of Pakistan & Global Citizenship', creditHours: 3, type: 'General' },
          { code: 'COM401', name: 'Community Engagement Analytics Project', creditHours: 5, type: 'General' }
        ]
      }
    ]
  },

  // ==========================================
  // 5. BS CYBER SECURITY (8 Semesters, 130 Cr)
  // ==========================================
  'bs-cyber-security': {
    programId: 'bs-cyber-security',
    programName: 'BS Cyber Security',
    totalSemesters: 8,
    totalCreditHours: 130,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 17,
        courses: [
          { code: 'CS101', name: 'Programming Fundamentals', creditHours: 3, type: 'Core' },
          { code: 'CS101L', name: 'Programming Fundamentals Lab', creditHours: 1, type: 'Lab' },
          { code: 'CY101', name: 'Introduction to Cyber Security', creditHours: 3, type: 'Core' },
          { code: 'ENG101', name: 'Functional English', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Calculus & Analytic Geometry', creditHours: 3, type: 'General' },
          { code: 'PHY101', name: 'Applied Physics', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'CS102', name: 'Object Oriented Programming', creditHours: 3, type: 'Core' },
          { code: 'CS102L', name: 'Object Oriented Programming Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS103', name: 'Digital Logic Design', creditHours: 3, type: 'Core' },
          { code: 'CS103L', name: 'Digital Logic Design Lab', creditHours: 1, type: 'Lab' },
          { code: 'MATH102', name: 'Discrete Mathematics', creditHours: 3, type: 'General' },
          { code: 'MATH103', name: 'Linear Algebra', creditHours: 3, type: 'General' },
          { code: 'ENG102', name: 'Technical & Business Writing', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'CS201', name: 'Data Structures & Algorithms', creditHours: 3, type: 'Core' },
          { code: 'CS201L', name: 'Data Structures Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS202', name: 'Computer Architecture', creditHours: 3, type: 'Core' },
          { code: 'CY201', name: 'Information Assurance & Security', creditHours: 3, type: 'Major' },
          { code: 'STAT201', name: 'Probability & Statistics', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' },
          { code: 'CS203', name: 'Database Systems', creditHours: 2, type: 'Core' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 16,
        courses: [
          { code: 'CS204', name: 'Operating Systems', creditHours: 3, type: 'Core' },
          { code: 'CS204L', name: 'Operating Systems Lab', creditHours: 1, type: 'Lab' },
          { code: 'CY202', name: 'Network Security & Protocols', creditHours: 3, type: 'Major' },
          { code: 'CY202L', name: 'Network Security Lab', creditHours: 1, type: 'Lab' },
          { code: 'CY203', name: 'Applied Cryptography', creditHours: 3, type: 'Major' },
          { code: 'CY203L', name: 'Cryptography Tools Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS205', name: 'Software Engineering', creditHours: 3, type: 'Core' },
          { code: 'ETH201', name: 'Cyber Laws & Professional Ethics', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 16,
        courses: [
          { code: 'CY301', name: 'Ethical Hacking & Penetration Testing', creditHours: 3, type: 'Major' },
          { code: 'CY301L', name: 'Penetration Testing Lab', creditHours: 1, type: 'Lab' },
          { code: 'CY302', name: 'Digital Forensics & Incident Response', creditHours: 3, type: 'Major' },
          { code: 'CY302L', name: 'Digital Forensics Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS301', name: 'Computer Networks', creditHours: 3, type: 'Core' },
          { code: 'CS301L', name: 'Computer Networks Lab', creditHours: 1, type: 'Lab' },
          { code: 'CY303', name: 'Secure Software Development', creditHours: 3, type: 'Major' },
          { code: 'MGT301', name: 'Entrepreneurship for Security Startups', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 15,
        courses: [
          { code: 'CY304', name: 'Malware Analysis & Reverse Engineering', creditHours: 3, type: 'Major' },
          { code: 'CY304L', name: 'Malware Analysis Lab', creditHours: 1, type: 'Lab' },
          { code: 'CY305', name: 'Cloud & Virtualization Security', creditHours: 3, type: 'Major' },
          { code: 'CY306', name: 'Wireless & Mobile Security', creditHours: 3, type: 'Major' },
          { code: 'CY-EL1', name: 'Cyber Elective I (IoT Security)', creditHours: 3, type: 'Elective' },
          { code: 'CY307', name: 'Security Operations Center (SOC) Tools', creditHours: 2, type: 'Lab' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 16,
        courses: [
          { code: 'CY490A', name: 'Cyber Security Capstone Project I', creditHours: 3, type: 'Project' },
          { code: 'CY401', name: 'Blockchain & Distributed Ledger Security', creditHours: 3, type: 'Major' },
          { code: 'CY402', name: 'Security Governance, Compliance & Auditing', creditHours: 3, type: 'Major' },
          { code: 'CY-EL2', name: 'Cyber Elective II (Threat Intelligence)', creditHours: 3, type: 'Elective' },
          { code: 'GEN401', name: 'Ideology of Pakistan & Human Rights', creditHours: 4, type: 'General' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 16,
        courses: [
          { code: 'CY490B', name: 'Cyber Security Capstone Project II', creditHours: 3, type: 'Project' },
          { code: 'CY-EL3', name: 'Cyber Elective III (AI in Cyber Defense)', creditHours: 3, type: 'Elective' },
          { code: 'CY-EL4', name: 'Cyber Elective IV (Critical Infrastructure Sec)', creditHours: 3, type: 'Elective' },
          { code: 'INT499', name: 'Industrial Security Internship', creditHours: 3, type: 'Project' },
          { code: 'COM401', name: 'Community Cyber Safety Outreach', creditHours: 4, type: 'General' }
        ]
      }
    ]
  },

  // ==========================================
  // 6. BS ENGLISH (8 Semesters, 130 Cr)
  // ==========================================
  'bs-english': {
    programId: 'bs-english',
    programName: 'BS English Language & Literature',
    totalSemesters: 8,
    totalCreditHours: 130,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 16,
        courses: [
          { code: 'ENG101', name: 'Introduction to Linguistics', creditHours: 3, type: 'Core' },
          { code: 'ENG102', name: 'History of English Literature I (Old to 17th C.)', creditHours: 3, type: 'Core' },
          { code: 'ENG103', name: 'English Grammar & Composition', creditHours: 3, type: 'Core' },
          { code: 'SOC101', name: 'Introduction to Sociology', creditHours: 3, type: 'General' },
          { code: 'IT101', name: 'Basic Computer Skills', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 16,
        courses: [
          { code: 'ENG104', name: 'Phonetics & Phonology', creditHours: 3, type: 'Core' },
          { code: 'ENG105', name: 'Classical Poetry (Chaucer to Milton)', creditHours: 3, type: 'Core' },
          { code: 'ENG106', name: 'Short Story & Classical Prose', creditHours: 3, type: 'Core' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' },
          { code: 'PSY101', name: 'Introduction to Psychology', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Basic Quantitative Reasoning', creditHours: 2, type: 'General' },
          { code: 'ENG107', name: 'Communication & Presentation Skills', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 16,
        courses: [
          { code: 'ENG201', name: 'Morphology & Syntax', creditHours: 3, type: 'Core' },
          { code: 'ENG202', name: 'Elizabethan & Jacobean Drama (Shakespeare)', creditHours: 3, type: 'Core' },
          { code: 'ENG203', name: 'Romantic Poetry', creditHours: 3, type: 'Core' },
          { code: 'HIST201', name: 'World History & Civilizations', creditHours: 3, type: 'General' },
          { code: 'PHIL201', name: 'Introduction to Philosophy', creditHours: 3, type: 'General' },
          { code: 'ENV201', name: 'Environmental Studies & Literature', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 16,
        courses: [
          { code: 'ENG204', name: 'Semantics & Pragmatics', creditHours: 3, type: 'Core' },
          { code: 'ENG205', name: '18th & 19th Century English Novel', creditHours: 3, type: 'Core' },
          { code: 'ENG206', name: 'Victorian Poetry', creditHours: 3, type: 'Core' },
          { code: 'ENG207', name: 'Sociolinguistics', creditHours: 3, type: 'Major' },
          { code: 'RES201', name: 'Literary Research Methodology', creditHours: 3, type: 'Core' },
          { code: 'ETH201', name: 'Human Rights & Professional Ethics', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 15,
        courses: [
          { code: 'ENG301', name: 'Psycholinguistics', creditHours: 3, type: 'Major' },
          { code: 'ENG302', name: 'Modern Drama', creditHours: 3, type: 'Major' },
          { code: 'ENG303', name: 'Modern Poetry', creditHours: 3, type: 'Major' },
          { code: 'ENG304', name: 'Classical Literary Criticism (Plato to Eliot)', creditHours: 3, type: 'Major' },
          { code: 'ENG305', name: 'American Literature (Poetry & Drama)', creditHours: 3, type: 'Major' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 16,
        courses: [
          { code: 'ENG306', name: 'Modern & Postmodern Novel', creditHours: 3, type: 'Major' },
          { code: 'ENG307', name: 'Contemporary Critical Theory', creditHours: 3, type: 'Major' },
          { code: 'ENG308', name: 'Discourse Analysis', creditHours: 3, type: 'Major' },
          { code: 'ENG309', name: 'Pakistani Literature in English', creditHours: 3, type: 'Major' },
          { code: 'ENG310', name: 'Second Language Acquisition (SLA)', creditHours: 3, type: 'Major' },
          { code: 'MGT301', name: 'Entrepreneurship for Writers', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 18,
        courses: [
          { code: 'ENG490A', name: 'Research Project / Thesis I', creditHours: 3, type: 'Project' },
          { code: 'ENG401', name: 'Postcolonial Literature & Theory', creditHours: 3, type: 'Major' },
          { code: 'ENG402', name: 'English for Specific Purposes (ESP)', creditHours: 3, type: 'Major' },
          { code: 'ENG403', name: 'World Literature in Translation', creditHours: 3, type: 'Elective' },
          { code: 'ENG404', name: 'Stylistics', creditHours: 3, type: 'Major' },
          { code: 'ENG405', name: 'Corpus Linguistics', creditHours: 3, type: 'Elective' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 17,
        courses: [
          { code: 'ENG490B', name: 'Research Project / Thesis II', creditHours: 3, type: 'Project' },
          { code: 'ENG406', name: 'Media Discourse & Digital Storytelling', creditHours: 3, type: 'Major' },
          { code: 'ENG407', name: 'Feminist Literature & Gender Studies', creditHours: 3, type: 'Elective' },
          { code: 'ENG408', name: 'Creative Writing Workshop', creditHours: 3, type: 'Elective' },
          { code: 'INT499', name: 'Teaching / Publishing Internship', creditHours: 5, type: 'Project' }
        ]
      }
    ]
  },

  // ==========================================
  // 7. BS PSYCHOLOGY (8 Semesters, 132 Cr)
  // ==========================================
  'bs-psychology': {
    programId: 'bs-psychology',
    programName: 'BS Psychology',
    totalSemesters: 8,
    totalCreditHours: 132,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 16,
        courses: [
          { code: 'PSY101', name: 'Introduction to Psychology', creditHours: 3, type: 'Core' },
          { code: 'ENG101', name: 'Functional English', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 2, type: 'General' },
          { code: 'IT101', name: 'Computer Applications in Behavioral Sciences', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Basic Mathematics', creditHours: 3, type: 'General' },
          { code: 'SOC101', name: 'Introduction to Sociology', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 16,
        courses: [
          { code: 'PSY102', name: 'Schools & Perspectives in Psychology', creditHours: 3, type: 'Core' },
          { code: 'ENG102', name: 'Expository Writing & Academic Communication', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' },
          { code: 'BIO101', name: 'Biology & Brain Functions', creditHours: 3, type: 'General' },
          { code: 'PHIL101', name: 'Logic & Critical Thinking', creditHours: 3, type: 'General' },
          { code: 'STAT101', name: 'Basic Statistics in Social Sciences', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'PSY201', name: 'Developmental Psychology', creditHours: 3, type: 'Core' },
          { code: 'PSY202', name: 'Experimental Psychology', creditHours: 3, type: 'Core' },
          { code: 'PSY202L', name: 'Experimental Psychology Lab', creditHours: 1, type: 'Lab' },
          { code: 'STAT201', name: 'Psychological Statistics', creditHours: 3, type: 'Core' },
          { code: 'PSY203', name: 'Social Psychology', creditHours: 3, type: 'Core' },
          { code: 'ENG201', name: 'Professional Writing Skills', creditHours: 4, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 17,
        courses: [
          { code: 'PSY204', name: 'Theories of Personality', creditHours: 3, type: 'Core' },
          { code: 'PSY205', name: 'Psychological Testing & Measurement', creditHours: 3, type: 'Core' },
          { code: 'PSY205L', name: 'Psychological Testing Lab', creditHours: 1, type: 'Lab' },
          { code: 'PSY206', name: 'Biopsychology / Physiological Psychology', creditHours: 3, type: 'Core' },
          { code: 'RES201', name: 'Research Methods in Psychology', creditHours: 3, type: 'Core' },
          { code: 'ETH201', name: 'Professional Ethics in Psychology', creditHours: 4, type: 'General' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 16,
        courses: [
          { code: 'PSY301', name: 'Abnormal Psychology & Psychopathology', creditHours: 3, type: 'Major' },
          { code: 'PSY302', name: 'Cognitive Psychology', creditHours: 3, type: 'Major' },
          { code: 'PSY303', name: 'Clinical Psychology', creditHours: 3, type: 'Major' },
          { code: 'STAT301', name: 'Advanced Statistical Analysis (SPSS)', creditHours: 3, type: 'Major' },
          { code: 'STAT301L', name: 'SPSS Data Analysis Lab', creditHours: 1, type: 'Lab' },
          { code: 'PSY304', name: 'Health Psychology', creditHours: 3, type: 'Major' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 17,
        courses: [
          { code: 'PSY305', name: 'Counseling Psychology & Psychotherapy', creditHours: 3, type: 'Major' },
          { code: 'PSY306', name: 'Organizational & Industrial Psychology', creditHours: 3, type: 'Major' },
          { code: 'PSY307', name: 'Educational Psychology', creditHours: 3, type: 'Major' },
          { code: 'PSY308', name: 'Neurological Assessment & Neuropsychology', creditHours: 3, type: 'Major' },
          { code: 'PSY-EL1', name: 'Psychology Elective I (Positive Psychology)', creditHours: 3, type: 'Elective' },
          { code: 'PSY309', name: 'Qualitative Research in Psychology', creditHours: 2, type: 'Major' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 17,
        courses: [
          { code: 'PSY490A', name: 'Psychology Capstone Research Thesis I', creditHours: 3, type: 'Project' },
          { code: 'PSY401', name: 'Forensic & Criminal Psychology', creditHours: 3, type: 'Major' },
          { code: 'PSY402', name: 'Child Psychopathology & Special Education', creditHours: 3, type: 'Major' },
          { code: 'PSY-EL2', name: 'Psychology Elective II (Addiction Counseling)', creditHours: 3, type: 'Elective' },
          { code: 'PSY403', name: 'Community Psychology', creditHours: 3, type: 'Major' },
          { code: 'GEN401', name: 'Ideology of Pakistan & Civil Rights', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 16,
        courses: [
          { code: 'PSY490B', name: 'Psychology Capstone Research Thesis II', creditHours: 3, type: 'Project' },
          { code: 'INT499', name: 'Supervised Clinical / Hospital Internship', creditHours: 4, type: 'Project' },
          { code: 'PSY404', name: 'Cross-Cultural Psychology', creditHours: 3, type: 'Elective' },
          { code: 'PSY405', name: 'Behavior Therapy & Cognitive Interventions', creditHours: 3, type: 'Major' },
          { code: 'COM401', name: 'Mental Health Community Outreach', creditHours: 3, type: 'General' }
        ]
      }
    ]
  },

  // ==========================================
  // 8. BS BIOTECHNOLOGY (8 Semesters, 134 Cr)
  // ==========================================
  'bs-biotechnology': {
    programId: 'bs-biotechnology',
    programName: 'BS Biotechnology',
    totalSemesters: 8,
    totalCreditHours: 134,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 17,
        courses: [
          { code: 'BT101', name: 'Inorganic Chemistry & Cell Biology', creditHours: 3, type: 'Core' },
          { code: 'BT101L', name: 'Cell Biology Lab', creditHours: 1, type: 'Lab' },
          { code: 'ENG101', name: 'English Composition', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 2, type: 'General' },
          { code: 'MATH101', name: 'Calculus & Biomathematics', creditHours: 3, type: 'General' },
          { code: 'IT101', name: 'Computer Applications in Biology', creditHours: 2, type: 'General' },
          { code: 'BT102', name: 'Introduction to Biotechnology', creditHours: 3, type: 'Core' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'BT103', name: 'Organic Chemistry', creditHours: 3, type: 'Core' },
          { code: 'BT103L', name: 'Organic Chemistry Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT104', name: 'Microbiology', creditHours: 3, type: 'Core' },
          { code: 'BT104L', name: 'Microbiology Lab', creditHours: 1, type: 'Lab' },
          { code: 'ENG102', name: 'Technical Report Writing', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' },
          { code: 'STAT101', name: 'Biostatistics', creditHours: 4, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'BT201', name: 'Biochemistry I', creditHours: 3, type: 'Core' },
          { code: 'BT201L', name: 'Biochemistry I Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT202', name: 'Classical & Molecular Genetics', creditHours: 3, type: 'Core' },
          { code: 'BT202L', name: 'Genetics Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT203', name: 'Immunology', creditHours: 3, type: 'Core' },
          { code: 'BT203L', name: 'Immunology Lab', creditHours: 1, type: 'Lab' },
          { code: 'SOC101', name: 'Sociology & Professional Bioethics', creditHours: 5, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 17,
        courses: [
          { code: 'BT204', name: 'Biochemistry II', creditHours: 3, type: 'Core' },
          { code: 'BT204L', name: 'Biochemistry II Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT205', name: 'Molecular Biology', creditHours: 3, type: 'Core' },
          { code: 'BT205L', name: 'Molecular Biology Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT206', name: 'Analytical Chemistry & Instrumentation', creditHours: 3, type: 'Core' },
          { code: 'BT206L', name: 'Instrumentation Lab', creditHours: 1, type: 'Lab' },
          { code: 'RES201', name: 'Research Methodology in Life Sciences', creditHours: 5, type: 'General' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 17,
        courses: [
          { code: 'BT301', name: 'Recombinant DNA Technology & Genetic Eng.', creditHours: 3, type: 'Major' },
          { code: 'BT301L', name: 'Recombinant DNA Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT302', name: 'Bioinformatics & Computational Biology', creditHours: 3, type: 'Major' },
          { code: 'BT302L', name: 'Bioinformatics Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT303', name: 'Plant Biotechnology', creditHours: 3, type: 'Major' },
          { code: 'BT303L', name: 'Plant Tissue Culture Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT304', name: 'Biosafety & Bio-regulations', creditHours: 5, type: 'Major' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 17,
        courses: [
          { code: 'BT305', name: 'Industrial & Fermentation Biotechnology', creditHours: 3, type: 'Major' },
          { code: 'BT305L', name: 'Fermentation Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT306', name: 'Animal Biotechnology', creditHours: 3, type: 'Major' },
          { code: 'BT306L', name: 'Animal Cell Culture Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT307', name: 'Medical Biotechnology & Diagnostics', creditHours: 3, type: 'Major' },
          { code: 'BT-EL1', name: 'Biotech Elective I (Nanobiotechnology)', creditHours: 3, type: 'Elective' },
          { code: 'MGT301', name: 'Bio-entrepreneurship & Patent Law', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 17,
        courses: [
          { code: 'BT490A', name: 'Research Thesis / Project I', creditHours: 3, type: 'Project' },
          { code: 'BT401', name: 'Environmental Biotechnology', creditHours: 3, type: 'Major' },
          { code: 'BT401L', name: 'Environmental Biotech Lab', creditHours: 1, type: 'Lab' },
          { code: 'BT402', name: 'Food Biotechnology & Food Processing', creditHours: 3, type: 'Major' },
          { code: 'BT-EL2', name: 'Biotech Elective II (Pharmacogenomics)', creditHours: 3, type: 'Elective' },
          { code: 'BT403', name: 'Genomics & Proteomics', creditHours: 4, type: 'Major' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 16,
        courses: [
          { code: 'BT490B', name: 'Research Thesis / Project II', creditHours: 3, type: 'Project' },
          { code: 'INT499', name: 'Industrial / Clinical Lab Internship', creditHours: 4, type: 'Project' },
          { code: 'BT-EL3', name: 'Biotech Elective III (Stem Cell Biology)', creditHours: 3, type: 'Elective' },
          { code: 'BT404', name: 'Quality Assurance in Biotech Products', creditHours: 3, type: 'Major' },
          { code: 'COM401', name: 'Community Science Extension Project', creditHours: 3, type: 'General' }
        ]
      }
    ]
  },

  // ==========================================
  // 9. BS BIOCHEMISTRY (8 Semesters, 134 Cr)
  // ==========================================
  'bs-biochemistry': {
    programId: 'bs-biochemistry',
    programName: 'BS Biochemistry',
    totalSemesters: 8,
    totalCreditHours: 134,
    degreeType: 'BS (4 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 17,
        courses: [
          { code: 'BCH101', name: 'Introduction to Biochemistry', creditHours: 3, type: 'Core' },
          { code: 'BCH101L', name: 'Introductory Biochemistry Lab', creditHours: 1, type: 'Lab' },
          { code: 'BIO101', name: 'Cell Biology', creditHours: 3, type: 'Core' },
          { code: 'BIO101L', name: 'Cell Biology Lab', creditHours: 1, type: 'Lab' },
          { code: 'ENG101', name: 'English Composition', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Mathematics for Chemists', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'CHM102', name: 'Physical Chemistry', creditHours: 3, type: 'Core' },
          { code: 'CHM102L', name: 'Physical Chemistry Lab', creditHours: 1, type: 'Lab' },
          { code: 'CHM103', name: 'Organic Chemistry', creditHours: 3, type: 'Core' },
          { code: 'CHM103L', name: 'Organic Chemistry Lab', creditHours: 1, type: 'Lab' },
          { code: 'ENG102', name: 'Technical Writing', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' },
          { code: 'IT101', name: 'Computer Applications in Chemistry', creditHours: 4, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'BCH201', name: 'Carbohydrates & Lipids', creditHours: 3, type: 'Major' },
          { code: 'BCH201L', name: 'Macromolecules Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH202', name: 'Microbiology & Parasitology', creditHours: 3, type: 'Core' },
          { code: 'BCH202L', name: 'Microbiology Lab', creditHours: 1, type: 'Lab' },
          { code: 'STAT201', name: 'Biostatistics', creditHours: 3, type: 'General' },
          { code: 'PHY201', name: 'Biophysics', creditHours: 3, type: 'General' },
          { code: 'SOC101', name: 'Sociology & Bioethics', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 17,
        courses: [
          { code: 'BCH203', name: 'Proteins & Nucleic Acids', creditHours: 3, type: 'Major' },
          { code: 'BCH203L', name: 'Proteins Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH204', name: 'Enzymology', creditHours: 3, type: 'Major' },
          { code: 'BCH204L', name: 'Enzymology Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH205', name: 'Bioenergetics & Intermediary Metabolism', creditHours: 3, type: 'Major' },
          { code: 'CHM204', name: 'Analytical Chemistry & Spectroscopy', creditHours: 3, type: 'Core' },
          { code: 'CHM204L', name: 'Spectroscopy Lab', creditHours: 1, type: 'Lab' }
        ]
      },
      {
        semester: 5,
        title: 'Semester 5',
        totalCredits: 17,
        courses: [
          { code: 'BCH301', name: 'Metabolism of Amino Acids & Lipids', creditHours: 3, type: 'Major' },
          { code: 'BCH301L', name: 'Metabolism Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH302', name: 'Molecular Biology', creditHours: 3, type: 'Major' },
          { code: 'BCH302L', name: 'Molecular Biology Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH303', name: 'Immunochemistry', creditHours: 3, type: 'Major' },
          { code: 'BCH303L', name: 'Immunochemistry Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH304', name: 'Biochemical Techniques & Chromatography', creditHours: 3, type: 'Major' },
          { code: 'BCH304L', name: 'Chromatography Lab', creditHours: 1, type: 'Lab' }
        ]
      },
      {
        semester: 6,
        title: 'Semester 6',
        totalCredits: 17,
        courses: [
          { code: 'BCH305', name: 'Clinical Biochemistry', creditHours: 3, type: 'Major' },
          { code: 'BCH305L', name: 'Clinical Diagnostics Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH306', name: 'Endocrinology & Molecular Signaling', creditHours: 3, type: 'Major' },
          { code: 'BCH307', name: 'Nutritional Biochemistry', creditHours: 3, type: 'Major' },
          { code: 'BCH308', name: 'Bioinformatics & Computational Biochemistry', creditHours: 3, type: 'Major' },
          { code: 'BCH308L', name: 'Bioinformatics Lab', creditHours: 1, type: 'Lab' },
          { code: 'MGT301', name: 'Entrepreneurship & Scientific IP', creditHours: 3, type: 'General' }
        ]
      },
      {
        semester: 7,
        title: 'Semester 7',
        totalCredits: 17,
        courses: [
          { code: 'BCH490A', name: 'Biochemistry Research Project I', creditHours: 3, type: 'Project' },
          { code: 'BCH401', name: 'Toxicology & Forensic Biochemistry', creditHours: 3, type: 'Major' },
          { code: 'BCH401L', name: 'Toxicology Lab', creditHours: 1, type: 'Lab' },
          { code: 'BCH402', name: 'Pharmacology & Drug Design', creditHours: 3, type: 'Major' },
          { code: 'BCH-EL1', name: 'Biochemistry Elective I (Neurobiochemistry)', creditHours: 3, type: 'Elective' },
          { code: 'GEN401', name: 'Ideology of Pakistan & Ethical Science', creditHours: 4, type: 'General' }
        ]
      },
      {
        semester: 8,
        title: 'Semester 8',
        totalCredits: 16,
        courses: [
          { code: 'BCH490B', name: 'Biochemistry Research Project II', creditHours: 3, type: 'Project' },
          { code: 'INT499', name: 'Diagnostic & Pathology Lab Internship', creditHours: 4, type: 'Project' },
          { code: 'BCH-EL2', name: 'Biochemistry Elective II (Cancer Biology)', creditHours: 3, type: 'Elective' },
          { code: 'BCH403', name: 'Industrial Biochemistry & Enzyme Tech', creditHours: 3, type: 'Major' },
          { code: 'COM401', name: 'Community Public Health Campaign', creditHours: 3, type: 'General' }
        ]
      }
    ]
  },

  // ==========================================
  // 10. ADP COMPUTER SCIENCE (4 Semesters, 68 Cr)
  // ==========================================
  'adp-computer-science': {
    programId: 'adp-computer-science',
    programName: 'Associate Degree in Computer Science (ADP CS)',
    totalSemesters: 4,
    totalCreditHours: 68,
    degreeType: 'ADP (2 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 17,
        courses: [
          { code: 'CS101', name: 'Programming Fundamentals', creditHours: 3, type: 'Core' },
          { code: 'CS101L', name: 'Programming Fundamentals Lab', creditHours: 1, type: 'Lab' },
          { code: 'IT101', name: 'Introduction to ICT', creditHours: 2, type: 'General' },
          { code: 'IT101L', name: 'Introduction to ICT Lab', creditHours: 1, type: 'Lab' },
          { code: 'ENG101', name: 'Functional English', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Calculus & Analytical Geometry', creditHours: 3, type: 'General' },
          { code: 'PHY101', name: 'Applied Physics', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'CS102', name: 'Object Oriented Programming', creditHours: 3, type: 'Core' },
          { code: 'CS102L', name: 'Object Oriented Programming Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS103', name: 'Digital Logic Design', creditHours: 3, type: 'Core' },
          { code: 'CS103L', name: 'Digital Logic Design Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS104', name: 'Discrete Structures', creditHours: 3, type: 'Core' },
          { code: 'ENG102', name: 'Communication & Presentation Skills', creditHours: 3, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' },
          { code: 'MATH102', name: 'Multivariate Calculus', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'CS201', name: 'Data Structures & Algorithms', creditHours: 3, type: 'Core' },
          { code: 'CS201L', name: 'Data Structures Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS202', name: 'Computer Architecture & Assembly', creditHours: 3, type: 'Core' },
          { code: 'CS202L', name: 'Computer Architecture Lab', creditHours: 1, type: 'Lab' },
          { code: 'MATH201', name: 'Linear Algebra', creditHours: 3, type: 'General' },
          { code: 'CS203', name: 'Database Management Systems', creditHours: 3, type: 'Core' },
          { code: 'CS203L', name: 'Database Management Systems Lab', creditHours: 1, type: 'Lab' },
          { code: 'ENG201', name: 'Technical & Report Writing', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 17,
        courses: [
          { code: 'CS204', name: 'Operating Systems', creditHours: 3, type: 'Core' },
          { code: 'CS204L', name: 'Operating Systems Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS205', name: 'Web Design & Development', creditHours: 3, type: 'Major' },
          { code: 'CS205L', name: 'Web Development Lab', creditHours: 1, type: 'Lab' },
          { code: 'CS206', name: 'Computer Networks', creditHours: 3, type: 'Core' },
          { code: 'CS206L', name: 'Computer Networks Lab', creditHours: 1, type: 'Lab' },
          { code: 'PRJ290', name: 'ADP Software Capstone Project', creditHours: 3, type: 'Project' },
          { code: 'MGT201', name: 'Entrepreneurship & Freelancing', creditHours: 2, type: 'General' }
        ]
      }
    ]
  },

  // ==========================================
  // 11. ADP BUSINESS ADMINISTRATION (4 Semesters, 66 Cr)
  // ==========================================
  'adp-business-administration': {
    programId: 'adp-business-administration',
    programName: 'Associate Degree in Business Administration (ADP BBA)',
    totalSemesters: 4,
    totalCreditHours: 66,
    degreeType: 'ADP (2 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 16,
        courses: [
          { code: 'MGT101', name: 'Principles of Management', creditHours: 3, type: 'Core' },
          { code: 'ENG101', name: 'Business English & Communication', creditHours: 3, type: 'General' },
          { code: 'IT101', name: 'Computer Applications in Business', creditHours: 3, type: 'General' },
          { code: 'MATH101', name: 'Business Mathematics', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 2, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'MKT101', name: 'Principles of Marketing', creditHours: 3, type: 'Core' },
          { code: 'ACT101', name: 'Financial Accounting I', creditHours: 3, type: 'Core' },
          { code: 'ECO101', name: 'Microeconomics', creditHours: 3, type: 'Core' },
          { code: 'STAT101', name: 'Business Statistics', creditHours: 3, type: 'General' },
          { code: 'ENG102', name: 'Oral Communication & Presentation', creditHours: 3, type: 'General' },
          { code: 'SOC101', name: 'Introduction to Sociology', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'ACT102', name: 'Financial Accounting II', creditHours: 3, type: 'Core' },
          { code: 'ECO102', name: 'Macroeconomics', creditHours: 3, type: 'Core' },
          { code: 'HRM201', name: 'Human Resource Management', creditHours: 3, type: 'Core' },
          { code: 'FIN201', name: 'Business Finance', creditHours: 3, type: 'Core' },
          { code: 'LAW201', name: 'Business & Commercial Law', creditHours: 3, type: 'Core' },
          { code: 'ACT203', name: 'Computerized Accounting (QuickBooks)', creditHours: 2, type: 'Lab' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 16,
        courses: [
          { code: 'MKT201', name: 'Consumer Behavior & Advertising', creditHours: 3, type: 'Major' },
          { code: 'ACT201', name: 'Cost Accounting', creditHours: 3, type: 'Major' },
          { code: 'MGT201', name: 'Organizational Behavior', creditHours: 3, type: 'Core' },
          { code: 'ENT201', name: 'Entrepreneurship & Small Enterprise', creditHours: 3, type: 'Core' },
          { code: 'PRJ290', name: 'Business Project / Comprehensive Report', creditHours: 4, type: 'Project' }
        ]
      }
    ]
  },

  // ==========================================
  // 12. ADP ARTIFICIAL INTELLIGENCE (4 Semesters, 68 Cr)
  // ==========================================
  'adp-artificial-intelligence': {
    programId: 'adp-artificial-intelligence',
    programName: 'Associate Degree in Artificial Intelligence (ADP AI)',
    totalSemesters: 4,
    totalCreditHours: 68,
    degreeType: 'ADP (2 Years)',
    semesters: [
      {
        semester: 1,
        title: 'Semester 1',
        totalCredits: 17,
        courses: [
          { code: 'CS101', name: 'Programming Fundamentals (Python)', creditHours: 3, type: 'Core' },
          { code: 'CS101L', name: 'Python Programming Lab', creditHours: 1, type: 'Lab' },
          { code: 'AI101', name: 'Introduction to Artificial Intelligence', creditHours: 3, type: 'Core' },
          { code: 'MATH101', name: 'Calculus & Analytical Geometry', creditHours: 3, type: 'General' },
          { code: 'ENG101', name: 'Functional English', creditHours: 3, type: 'General' },
          { code: 'PHY101', name: 'Applied Physics / ICT', creditHours: 3, type: 'General' },
          { code: 'ISL101', name: 'Islamic Studies / Ethics', creditHours: 1, type: 'General' }
        ]
      },
      {
        semester: 2,
        title: 'Semester 2',
        totalCredits: 17,
        courses: [
          { code: 'CS102', name: 'Object Oriented Programming (Python/C++)', creditHours: 3, type: 'Core' },
          { code: 'CS102L', name: 'OOP Programming Lab', creditHours: 1, type: 'Lab' },
          { code: 'MATH102', name: 'Linear Algebra for Machine Learning', creditHours: 3, type: 'General' },
          { code: 'AI102', name: 'Knowledge Representation & Reasoning', creditHours: 3, type: 'Major' },
          { code: 'STAT101', name: 'Probability & Statistics for AI', creditHours: 3, type: 'General' },
          { code: 'ENG102', name: 'Technical & Business Writing', creditHours: 2, type: 'General' },
          { code: 'PAK101', name: 'Pakistan Studies', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 3,
        title: 'Semester 3',
        totalCredits: 17,
        courses: [
          { code: 'CS201', name: 'Data Structures & Algorithms', creditHours: 3, type: 'Core' },
          { code: 'CS201L', name: 'Data Structures Lab', creditHours: 1, type: 'Lab' },
          { code: 'AI201', name: 'Machine Learning Algorithms', creditHours: 3, type: 'Major' },
          { code: 'AI201L', name: 'Machine Learning Lab', creditHours: 1, type: 'Lab' },
          { code: 'DB201', name: 'Database Systems for Big Data', creditHours: 3, type: 'Core' },
          { code: 'DB201L', name: 'Database Systems Lab', creditHours: 1, type: 'Lab' },
          { code: 'AI202', name: 'Data Preprocessing & Feature Engineering', creditHours: 3, type: 'Major' },
          { code: 'ETH201', name: 'AI Ethics, Bias & Governance', creditHours: 2, type: 'General' }
        ]
      },
      {
        semester: 4,
        title: 'Semester 4',
        totalCredits: 17,
        courses: [
          { code: 'AI203', name: 'Neural Networks & Deep Learning Intro', creditHours: 3, type: 'Major' },
          { code: 'AI203L', name: 'Deep Learning Frameworks Lab', creditHours: 1, type: 'Lab' },
          { code: 'AI204', name: 'Computer Vision & Natural Language Basics', creditHours: 3, type: 'Major' },
          { code: 'AI204L', name: 'CV & NLP Applications Lab', creditHours: 1, type: 'Lab' },
          { code: 'PRJ290', name: 'AI Capstone Applied Project', creditHours: 4, type: 'Project' },
          { code: 'MGT201', name: 'AI Product Commercialization & Freelancing', creditHours: 3, type: 'General' },
          { code: 'CLD201', name: 'Cloud AI Services Deployment', creditHours: 2, type: 'Lab' }
        ]
      }
    ]
  }
};

// Generic fallback generator for any missing programme that generates standard authentic 8-semester or 4-semester scheme
export function getProgramCurriculum(programId: string, programName: string, level: string): ProgramCurriculum {
  if (PROGRAMMES_CURRICULUM[programId]) {
    return PROGRAMMES_CURRICULUM[programId];
  }

  const isAdp = level === 'Associate Degree' || programId.startsWith('adp-') || programId.startsWith('ads-');
  const totalSemesters = isAdp ? 4 : 8;
  const totalCreditHours = isAdp ? 66 : 130;

  const semesters: SemesterData[] = [];
  for (let sem = 1; sem <= totalSemesters; sem++) {
    const semCredits = Math.round(totalCreditHours / totalSemesters);
    semesters.push({
      semester: sem,
      title: `Semester ${sem}`,
      totalCredits: semCredits,
      courses: [
        { code: `COURSE-${sem}01`, name: `${programName} Core Theory I`, creditHours: 3, type: 'Core' },
        { code: `COURSE-${sem}02`, name: `${programName} Practical Application Lab`, creditHours: 1, type: 'Lab' },
        { code: `COURSE-${sem}03`, name: `${programName} Departmental Major`, creditHours: 3, type: 'Major' },
        { code: `GEN-${sem}01`, name: 'Interdisciplinary Analytical Foundation', creditHours: 3, type: 'General' },
        { code: `GEN-${sem}02`, name: 'Communication & Research Inquiry', creditHours: 3, type: 'General' },
        { code: `ELEC-${sem}01`, name: sem === totalSemesters ? 'Capstone Project & Viva' : 'Applied Elective Course', creditHours: sem === totalSemesters ? 4 : 3, type: sem === totalSemesters ? 'Project' : 'Elective' }
      ]
    });
  }

  return {
    programId,
    programName,
    totalSemesters,
    totalCreditHours,
    degreeType: isAdp ? 'ADP (2 Years)' : 'BS (4 Years)',
    semesters
  };
}
