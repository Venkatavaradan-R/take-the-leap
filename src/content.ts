// All site copy lives here, so updating the website rarely means touching components.

export const contact = {
  name: 'Priya Raghuraman',
  brand: 'Leap of French',
  email: 'raghuraman.priya@gmail.com',
  phoneDisplay: '+91 99451 22664',
  phoneE164: '+919945122664',
  whatsappNumber: '919945122664',
  whatsappMessage:
    "Bonjour Priya! I'm enquiring about one-on-one French tuition. Student's grade: __ · Board: IB / IGCSE / other: __",
  location: 'Bengaluru · all lessons online',
  availability: ['Weekday evenings', 'Weekends', 'Online lessons'],
};

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'lessons', label: 'Lessons' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'testimonials', label: 'Students' },
  { id: 'faq', label: 'FAQ' },
];

export const heroStats = [
  { value: '25+', label: 'years teaching French' },
  { value: 'IB', label: 'Senior Examiner & Team Leader' },
  { value: '1:1', label: 'every lesson, full attention' },
];

export const credentials = [
  'Greenwood High International School',
  'Indus International School',
  'Alliance Française de Delhi',
  'Jawaharlal Nehru University',
];

export const about = {
  intro: [
    "I've spent more than 25 years teaching French in international schools in Bengaluru, at Indus International School and then at Greenwood High, where I was Head of Language Acquisition until 2025. Now I teach one-on-one.",
    "I also mark IB French exams as a Team Leader and Senior Examiner. That means I know exactly what examiners reward, and I can show students how to get there in their writing and their orals, without rote learning.",
    'In my one-on-one lessons, I work with each student on what they need, at their own pace, with real French material, and with feedback based on the official IB and IGCSE criteria.',
  ],
  examinerRoles: [
    { role: 'Team Leader / Senior Examiner', detail: 'French B SL · Writing' },
    { role: 'IA Moderator', detail: 'French B SL · Individual Oral' },
    { role: 'Assistant Examiner', detail: 'French B SL · Listening' },
    { role: 'Assistant Examiner & Moderator', detail: 'Theory of Knowledge · Essay and presentation' },
  ],
  experience: [
    {
      period: '2019 – 2025',
      title: 'Head of Department, Language Acquisition',
      place: 'Greenwood High International School',
      detail: 'Subject Lead for French and TOK teacher. Led French curriculum planning and assessment from K–12 across IGCSE and the IB Diploma.',
    },
    {
      period: '2012 – 2019',
      title: 'French & TOK Teacher, TOK Coordinator',
      place: 'Indus International School',
      detail: 'Taught French for IBDP (B SL and Ab Initio), IGCSE and MYP, and coordinated TOK for Grade 11.',
    },
  ],
  education: [
    { year: '1997', title: 'Teacher Training in French', place: 'Alliance Française de Delhi' },
    { year: '1994', title: 'MA French Studies (Translation & Interpretation)', place: 'Jawaharlal Nehru University' },
    { year: '1993', title: 'Diplôme supérieur', place: 'Alliance Française de Delhi' },
    { year: '1990', title: 'B.A. (Hons.) Economics', place: 'University of Delhi' },
  ],
};

export const lessons = {
  tracks: [
    {
      tag: 'IB Diploma',
      title: 'French B & Ab Initio',
      body: 'Help with the full course and both papers, with a strong focus on text types, written tasks and the Individual Oral, taught by someone who marks them.',
      points: ['Paper 1 writing practice', 'Paper 2 reading & listening', 'Individual Oral preparation'],
    },
    {
      tag: 'IGCSE & MYP',
      title: 'Strong foundations',
      body: 'Grammar, vocabulary and confidence built step by step, so students go into exams knowing the language rather than memorising answers.',
      points: ['Grammar that sticks', 'Speaking confidence', 'Exam technique'],
    },
    {
      tag: 'Exam & oral prep',
      title: 'Exam-season preparation',
      body: 'Focused preparation for the final weeks before IB or IGCSE exams, with timed practice and detailed feedback.',
      points: ['Past papers with guidance', 'Full-length mock exams', 'Recorded mock orals with feedback'],
    },
  ],
  included: [
    'A plan based on the student’s current level and goals',
    'Real-world French: articles, audio and film',
    'Progress tracked against the official IB & IGCSE criteria',
    'Learning materials and resources chosen for each student',
  ],
};

export const steps = [
  {
    title: 'Say bonjour',
    body: 'Message me on WhatsApp with the student’s grade, board and what they need help with.',
  },
  {
    title: 'Trial lesson',
    body: 'We meet for a trial lesson so I can understand the student’s level and how they learn best.',
  },
  {
    title: 'A personal plan',
    body: 'Regular one-on-one lessons online, with feedback and progress checks along the way.',
  },
];

export const testimonials = {
  featured: {
    quote:
      'You’re really a teacher who has been involved in our lives and KNOWS how to teach. I love your method. It is so effective, and your classroom is such a safe space.',
    who: 'Former student',
    when: 'Class of 2023',
  },
  more: [
    {
      quote:
        'Scored 62.5/62 on my college French test! Huge thanks to Priya ma’am. Her skills and teaching are why I’m doing so well.',
      who: 'Former student',
      when: 'Class of 2023',
    },
    {
      quote:
        'Thank you for guiding me throughout and for all your help, especially with the French orals.',
      who: 'IB French student',
      when: 'Class of 2021',
    },
    {
      quote:
        'I want to thank you for all your help throughout IB. I loved our small class of French B SL, and thank you for making all our classes so interesting and engaging.',
      who: 'IB French B SL student',
      when: 'Class of 2021',
    },
    {
      quote:
        'Our classes will truly stay with me, and since French is widely spoken in Canada, I hope to remain in touch with the language.',
      who: 'Former student',
      when: 'Class of 2021',
    },
  ],
};

export const faqs = [
  {
    q: 'Are lessons online or in person?',
    a: 'All lessons are online, so students can join from home, wherever they are.',
  },
  {
    q: 'Which boards and levels do you teach?',
    a: 'IB Diploma French B and Ab Initio, IGCSE French and MYP. I also teach students who are learning French from the beginning.',
  },
  {
    q: 'Do you teach groups?',
    a: 'No. All my lessons are one-on-one, so each lesson is planned around one student.',
  },
  {
    q: 'When are lessons held?',
    a: 'Weekday evenings and weekends. We’ll agree on a regular time that fits around school.',
  },
  {
    q: 'Is there a trial lesson?',
    a: 'Yes. Every student starts with a trial lesson so we can both see whether it’s a good fit before committing.',
  },
  {
    q: 'What are the fees?',
    a: 'Fees depend on the level and how often lessons are held. Send me a message on WhatsApp and I’ll share the details.',
  },
];

// Path under /public, or null to show the typographic "Bonjour !" panel instead.
export const portrait: { src: string; alt: string } | null = null;
