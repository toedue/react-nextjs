export interface Job {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  description: string;
  avatar: string;
  jobType: string;
  categories: string[];
  skills: string[];
  postedOn: string;
  deadline: string;
}
