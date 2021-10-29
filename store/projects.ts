import { GetterTree, ActionTree, MutationTree } from "vuex";
import { ProjectState } from "../interfaces";

const MyState = (): ProjectState => {
  const state = {
    projects: [
      {
        id: "1",
        projectName: "EcoKnow",
        startDate: "September 13, 2022",
        targetInvestment: "$37000",
        investors: [
          { id: 0, firstName: "John", lastName: "Doe", email: "" },
          { id: 0, firstName: "Alice", lastName: "Doe", email: "" }
        ]
      },
      {
        id: "2",
        projectName: "Grow green",
        startDate: "September 13, 2022",
        targetInvestment: "$37000",
        investors: [
          { id: 0, firstName: "John", lastName: "Doe", email: "" },
          { id: 0, firstName: "Alice", lastName: "Doe", email: "" }
        ]
      },
      {
        id: "3",
        projectName: "Without Waste",
        startDate: "September 13, 2022",
        targetInvestment: "$37000",
        investors: [
          { id: 0, firstName: "John", lastName: "Doe", email: "" },
          { id: 0, firstName: "Alice", lastName: "Doe", email: "" }
        ]
      },
      {
        id: "4",
        projectName: "Green Life",
        startDate: "September 13, 2022",
        targetInvestment: "$37000",
        investors: [
          { id: 0, firstName: "John", lastName: "Doe", email: "" },
          { id: 0, firstName: "Alice", lastName: "Doe", email: "" }
        ]
      },
      {
        id: "5",
        projectName: "EcoTopia",
        startDate: "September 13, 2022",
        targetInvestment: "$37000",
        investors: [
          { id: 0, firstName: "John", lastName: "Doe", email: "" },
          { id: 0, firstName: "Alice", lastName: "Doe", email: "" }
        ]
      },
      {
        id: "6",
        projectName: "Vitals",
        startDate: "September 13, 2022",
        targetInvestment: "$37000",
        investors: [
          { id: 0, firstName: "John", lastName: "Doe", email: "" },
          { id: 0, firstName: "Alice", lastName: "Doe", email: "" }
        ]
      },
      {
        id: "7",
        projectName: "GlobalMed",
        startDate: "September 13, 2022",
        targetInvestment: "$37000",
        investors: [
          { id: 0, firstName: "John", lastName: "Doe", email: "" },
          { id: 0, firstName: "Alice", lastName: "Doe", email: "" }
        ]
      }
    ],
    errors: {},
    currentProject: {
      projectName: "",
      startDate: "",
      targetInvestment: "",
      investors: [],
      createdAt: "",
      updatedAt: ""
    }
  };
  return state;
};
export const mutations: MutationTree<ProjectState> = {
  SET_CURRENT_PROJECT: (state, project) => (state.currentProject = project)
};

const getters: GetterTree<ProjectState, ProjectState> = {
  projects: state => state.projects
};

export const actions: ActionTree<ProjectState, ProjectState> = {};
export { MyState as state, getters };
