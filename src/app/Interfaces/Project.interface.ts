export interface Technology {
  name: string;
  color?: string;
}

export interface Project {
  name: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: Technology[];
  github: string;
  demo: string;
}
