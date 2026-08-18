export interface Applicant {
  id: number;
  name: string;
  jobTitle: string;
  status: "New" | "Shortlisted" | "Rejected";
}
