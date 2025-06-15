import { TechStack } from "./TechStack.interface";

export interface Project {
  name: string;
  subtitle: string;
  image: string;
  technologies: TechStack[];
  description: string;
  github: string;
  demo: string;
  demoToolTip: string;
  githubToolTip: string;
}
