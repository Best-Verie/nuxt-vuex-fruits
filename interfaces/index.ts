interface Projects {
  [key: number]: Project;
}

interface Investor {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Project {
  id?: string;
  projectName: string;
  startDate: Date | string;
  targetInvestment: string;
  investors?: Investor[];
}
interface Response {
  message?: string;
  status?: number;
}

export interface ProjectState {
  projects: Projects;
  errors: Response;
  currentProject: Project;
}
