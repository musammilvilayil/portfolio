import { supabaseAdmin } from "../src/integrations/supabase/client.server";

type Skill = { name: string; category: string; level: number };

type AboutProfile = {
  profilePicture: string;
  summary: string;
  phone: string;
  email: string;
  location: string;
};

type Reference = {
  name: string;
  title: string;
  institution: string;
  phone: string;
};

type Education = {
  degree: string;
  institution: string;
  year: string;
  description: string;
};

type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  views: number;
  likes: number;
  difficulty: string;
};

const TECHNICAL_SKILLS: Skill[] = [
  { name: "React", category: "technical", level: 95 },
  { name: "JavaScript", category: "technical", level: 92 },
  { name: "Node.js", category: "technical", level: 90 },
  { name: "Python", category: "technical", level: 88 },
  { name: "Django", category: "technical", level: 85 },
  { name: "MongoDB", category: "technical", level: 90 },
  { name: "Express", category: "technical", level: 88 },
  { name: "TypeScript", category: "technical", level: 80 },
  { name: "Tailwind CSS", category: "technical", level: 92 },
  { name: "REST API", category: "technical", level: 85 },
];

const SOFT_SKILLS: Skill[] = [
  { name: "Project Management", category: "soft", level: 85 },
  { name: "Teamwork", category: "soft", level: 90 },
  { name: "Time Management", category: "soft", level: 88 },
  { name: "Problem-solving", category: "soft", level: 92 },
  { name: "Communication", category: "soft", level: 85 },
  { name: "Adaptability", category: "soft", level: 80 },
];

const LANGUAGES = ["English", "Malayalam", "Hindi", "Tamil"];

const ABOUT_PROFILE: AboutProfile = {
  profilePicture: "/profile.webp",
  summary:
    "Creative Web Developer with foundational expertise in Java and extensive practice in full-stack architecture, API design, and data management using the MERN stack, PHP and Python/Django.",
  phone: "+91 6282 135 504",
  email: "musammilvilayil@gmail.com",
  location: "Vilayil puthen veedu Kadappa, Mynagappally P.O, Kollam",
};

const REFERENCES: Reference[] = [
  {
    name: "Prof. Salini S",
    title: "HOD of BCA Dept",
    institution: "Sree Narayana College of Technology",
    phone: "+919497663664",
  },
  {
    name: "Deepa Rajendran",
    title: "Faculty",
    institution: "Sree Narayana College of Technology",
    phone: "+919544871832",
  },
];

const EDUCATION: Education[] = [
  {
    degree: "Bachelor's Degree in Computer Applications",
    institution: "Sree Narayana College of Technology",
    year: "2023 - 2026",
    description: "CGPA: 7.5",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Milade Sherif Higher Secondary School",
    year: "2021 - 2023",
    description: "Science Stream",
  },
  {
    degree: "Secondary Education",
    institution: "Govt. LVHS",
    year: "2021",
    description: "10th Grade",
  },
];

const EXPERIENCES: Experience[] = [
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    duration: "2023 - Present",
    description: "Building web applications for college projects and businesses",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Billing System",
    category: "Web Development",
    description:
      "A full-stack billing system with separate frontend and backend. Features include product management, customer management, billing/invoicing, and reporting.",
    tech: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Content Management System (CMS)",
    category: "Web Development",
    description:
      "A comprehensive parcel tracking and management system with customer and admin portals. Supports user management, branch management, parcel tracking, and reporting.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Content Management Platform",
    category: "Web Development",
    description:
      "A role-based content management system with multi-user support including Admin, Creator, Consumer, Distributor, and Monitor roles.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Emergency Ambulance Hiring Portal",
    category: "Web Development",
    description:
      "A web portal for booking emergency ambulances with real-time tracking, admin dashboard for ambulance management, and comprehensive reporting system.",
    tech: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Employee Management System (EMS)",
    category: "Web Development",
    description:
      "A PHP-based employee management system for admin and employee-level users. Features include employee registration, leave management, salary management, and project assignment.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Beginner",
  },
  {
    title: "Healthiet - Health & Diet Application",
    category: "Web Development",
    description:
      "A comprehensive health and diet management application featuring BMI calculator, calorie calculator, diet plans, workout management, mentor-mentee chat system, and recipe management.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Firebase"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Helping Hand - NGO Platform",
    category: "Web Development",
    description:
      "A web-based platform for NGO management featuring donation management, event management, volunteer management, and news management.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Job Portal",
    category: "Web Development",
    description:
      "A comprehensive job portal with separate portals for Job Seekers, Employers, and Administrators. Features include job posting, application tracking, resume management, and employer verification.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Natural Disaster Management System",
    category: "Web Development",
    description:
      "A Django-based system for tracking and managing natural disasters including earthquakes, tsunamis, tornadoes, and volcanic eruptions with real-time data visualization.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Office Life - HR Management System",
    category: "Web Development",
    description:
      "A Laravel-based comprehensive HR management system featuring employee management, leave tracking, expense management, project management, and performance analytics.",
    tech: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Product Listing App",
    category: "Web Development",
    description:
      "A simple and elegant product listing application with category filtering, product cards, and responsive design.",
    tech: ["React.js", "Node.js", "Express.js", "JSON"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Beginner",
  },
  {
    title: "Project Center Management",
    category: "Web Development",
    description:
      "A comprehensive project management system for educational centers featuring student group management, milestone tracking, progress reporting, meeting scheduling, certificate generation, and AI-powered assistance.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Socket.io"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A full-stack portfolio website with modern design, contact form functionality, and admin dashboard for content management.",
    tech: ["React", "Vite", "Node.js", "Express.js", "SQLite"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Reporting System",
    category: "Desktop Application",
    description:
      "A comprehensive billing and reporting software with dashboard, invoice generation, and financial reports.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Expense Tracker",
    category: "Web Development",
    description:
      "A Django-based expense tracking application with user authentication, transaction management, category filtering, and visual reports.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Beginner",
  },
  {
    title: "AI Career Guidance Platform",
    category: "Web Development",
    description:
      "An AI-driven career guidance platform with full usage audit logging, student counseling, institution management, community features, and real-time chat.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "AI Integration"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "RDMS - Request & Document Management System",
    category: "Web Development",
    description:
      "A PHP-based system for managing incident reports, incident tracking, team management, and QR code generation for document verification.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "QR Code Library"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Cookit - Recipe Management Application",
    category: "Web Development",
    description:
      "A recipe management application with user authentication, recipe CRUD operations, search functionality, and admin dashboard.",
    tech: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Responsive Billing Software",
    category: "Web Development",
    description:
      "A comprehensive billing software for mobile shops with GST support, product management, customer management, purchase tracking, and detailed reporting.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Smart Billing System",
    category: "Web Development",
    description:
      "A smart billing system with comprehensive features including category management, product management, sales tracking, daily/monthly reports, and user management.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Student Management System",
    category: "Web Development",
    description:
      "A comprehensive student management system with features for attendance tracking, exam management, class management, subject management, and parent notifications.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Intermediate",
  },
  {
    title: "Healthcare Platform",
    category: "Web Development",
    description:
      "A healthcare monitoring platform with patient management, vital sign tracking, alert system, predictive analytics, proxy AI chat, and comprehensive reporting.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Vite", "Socket.io"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Weather Application",
    category: "Web Development",
    description:
      "A simple weather application displaying current weather conditions and forecasts.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Beginner",
  },
  {
    title: "Secret Coder - Learning Platform",
    category: "Web Development",
    description:
      "An online learning platform with course management, assessment creation, student enrollment, gradebook, and certificate generation.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "SQLite"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "SheShield - Women's Safety Application",
    category: "Mobile Application",
    description:
      "A comprehensive women's safety Android application with emergency SOS button, emergency contact management, location sharing, and guardian watch integration.",
    tech: ["Android (Kotlin)", "Java", "Firebase", "Google Maps API"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Advanced",
  },
  {
    title: "Employee Management System (Version 2)",
    category: "Web Development",
    description:
      "Another version of the employee management system with enhanced features for employee registration, leave management, and project assignment.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    image: "",
    views: 0,
    likes: 0,
    difficulty: "Beginner",
  },
];

async function upsertSingleRow<T extends Record<string, unknown>>({
  table,
  match,
  data,
}: {
  table: string;
  match: Partial<T>;
  data: T;
}) {
  const { data: existing, error: selectError } = await supabaseAdmin
    .from(table)
    .select("id")
    .match(match)
    .maybeSingle();

  if (selectError) throw selectError;

  if (!existing) {
    const { error: insertError } = await supabaseAdmin.from(table).insert(data as any);
    if (insertError) throw insertError;
    return;
  }

  const id = (existing as any).id;
  const { error: updateError } = await supabaseAdmin
    .from(table)
    .update(data as any)
    .eq("id", id);

  if (updateError) throw updateError;
}

async function seedSkills(skills: Skill[]) {
  for (const skill of skills) {
    const { error } = await supabaseAdmin
      .from("skills")
      .upsert(skill as any, { onConflict: "name,category" });
    if (error) throw error;
  }
}

async function seedLanguages(languages: string[]) {
  for (const name of languages) {
    const { error } = await supabaseAdmin
      .from("languages")
      .upsert({ name } as any, { onConflict: "name" });
    if (error) throw error;
  }
}

async function seedReferences(refs: Reference[]) {
  for (const ref of refs) {
    const { error } = await supabaseAdmin
      .from("refs")
      .upsert(ref as any, { onConflict: "name" });
    if (error) throw error;
  }
}

async function seedEducation(list: Education[]) {
  for (const edu of list) {
    const { error } = await supabaseAdmin
      .from("education")
      .upsert(edu as any, { onConflict: "degree" });
    if (error) throw error;
  }
}

async function seedExperience(list: Experience[]) {
  for (const exp of list) {
    const { error } = await supabaseAdmin
      .from("experience")
      .upsert(exp as any, { onConflict: "title" });
    if (error) throw error;
  }
}

async function seedProjects(projects: Project[]) {
  // To mimic the SQLite behaviour: clear then insert.
  const { error: delError } = await supabaseAdmin.from("projects").delete().neq("id", -1);
  if (delError) throw delError;

  for (const project of projects) {
    const tech = project.tech;
    const row = {
      title: project.title,
      category: project.category,
      description: project.description,
      tech: tech as any,
      image: project.image,
      views: project.views,
      likes: project.likes,
      difficulty: project.difficulty,
    };

    const { error: insError } = await supabaseAdmin.from("projects").insert(row as any);
    if (insError) throw insError;
  }
}

async function main() {
console.log("🌱 Seeding Supabase database...");

  // Quick schema sanity check: ensure these tables exist before seeding.
  const tablesToCheck = [
    "about_profile",
    "skills",
    "languages",
    "refs",
    "education",
    "experience",
    "projects",
  ];
  // (If any are missing, Supabase will throw a helpful error below.)

  // About profile: seed/update single latest row (best-effort).
  // If your schema differs, adjust match/upsert strategy.
  const { data: aboutRows, error: aboutSelectError } = await supabaseAdmin
    .from("about_profile")
    .select("id")
    .order("id", { ascending: false })
    .limit(1);
  if (aboutSelectError) throw aboutSelectError;

  if (!aboutRows || aboutRows.length === 0) {
    const { error } = await supabaseAdmin.from("about_profile").insert(ABOUT_PROFILE as any);
    if (error) throw error;
  } else {
    const id = (aboutRows[0] as any).id;
    const { error } = await supabaseAdmin
      .from("about_profile")
      .update(ABOUT_PROFILE as any)
      .eq("id", id);
    if (error) throw error;
  }
  console.log("✅ About profile seeded");

  // Skills / Languages / References / Education / Experience
  await seedSkills(TECHNICAL_SKILLS);
  console.log("✅ Technical skills seeded");

  await seedSkills(SOFT_SKILLS);
  console.log("✅ Soft skills seeded");

  await seedLanguages(LANGUAGES);
  console.log("✅ Languages seeded");

  await seedReferences(REFERENCES);
  console.log("✅ References seeded");

  await seedEducation(EDUCATION);
  console.log("✅ Education seeded");

  await seedExperience(EXPERIENCES);
  console.log("✅ Experience seeded");

  // Projects
  await seedProjects(PROJECTS);
  console.log("✅ Projects seeded");

  console.log("🎉 Supabase seeding completed!");
}

main().catch((err) => {
  console.error("❌ Seeding error:", err);
  process.exit(1);
});

