import { Job } from "@/types/job"

export const jobs: Job[] = [
  {
    id: 1,
    name: "Social Media Assistant",
    title: "Social Media Assistant",
    company: "Young Men Christians Association",
    location: "Addis Ababa, Ethiopia",
    description:
      "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
    avatar: "https://i.pravatar.cc/150?img=12",
    jobType: "In Person",
    categories: ["Education", "IT"],
    skills: ["Social Media Marketing", "English", "Copywriting"],
    postedOn: "Jul 1, 2026",
    deadline: "Jul 31, 2026",
  },
  {
    id: 2,
    name: "Volunteer Teacher",
    title: "Volunteer Teacher",
    company: "School Under The Tree",
    location: "Adama, Ethiopia",
    description:
      "We are seeking a passionate Volunteer Teacher to support classroom learning for underserved children. You will assist lead teachers with lesson delivery, mentor students individually, and help create a positive, engaging classroom environment.",
    avatar: "https://i.pravatar.cc/150?img=32",
    jobType: "In Person",
    categories: ["Education"],
    skills: ["Teaching", "Communication", "Patience"],
    postedOn: "Jul 3, 2026",
    deadline: "Aug 5, 2026",
  },
  {
    id: 3,
    name: "Frontend Developer",
    title: "Frontend Developer",
    company: "Ethio Tech Solutions",
    location: "Dire Dawa, Ethiopia",
    description:
      "Ethio Tech Solutions is looking for a Frontend Developer to build and maintain responsive web applications using React and Tailwind CSS. You will collaborate closely with designers and backend engineers to ship polished, accessible interfaces.",
    avatar: "https://i.pravatar.cc/150?img=45",
    jobType: "Remote",
    categories: ["IT"],
    skills: ["React", "TypeScript", "Tailwind CSS"],
    postedOn: "Jul 10, 2026",
    deadline: "Aug 15, 2026",
  },
];
