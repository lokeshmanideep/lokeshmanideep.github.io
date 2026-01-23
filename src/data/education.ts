export interface Degree {
  title: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  gpa?: string;
  descriptions: string[];
  website_link: string;
}

export const degrees: Degree[] = [
  {
    title: "University of Illinois Chicago",
    subtitle: "M.S. in Computer Science",
    logo_path: "/uiclogo.png",
    alt_name: "University of Illinois Chicago",
    duration: "2024 - 2025",
    gpa: "4.0 / 4.0",
    descriptions: [
      "I have explored a diverse range of courses in Data Science and Machine Learning, along with hands-on experience in Linux Kernel Programming and Neural Networks.",
      "I also completed a research assistantship under [*Prof.Runa Bhaumik*](https://www.psych.uic.edu/profile/runa-bhaumik), where I worked on fine-tuning large language models for real-world applications and optimizing their performance for specific use cases.",
    ],
    website_link: "https://www.uic.edu/",
  },
  {
    title: "National Institute of Technology Karnataka",
    subtitle: "B.Tech. in Computer Engineering",
    logo_path: "/nitk_logo.png",
    alt_name: "NITK",
    duration: "2016 - 2020",
    gpa: "3.6 / 4.0",
    descriptions: [
      "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      "I was an active member of the Fest Club called Crescendo, where I took on a leadership role in organizing and managing entire carnival events, ensuring its successful execution from start to finish",
      "I was selected for Merit cum Means Scholarship which is given to top 10% of students in college.",
    ],
    website_link: "https://www.nitk.ac.in/",
  },
];
