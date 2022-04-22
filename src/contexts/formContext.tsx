import { createContext, ReactNode, useContext, useReducer } from "react";
import { FormReducer, Action, State } from "../reducers/formReducer";

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const InitialState: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(FormReducer, InitialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

//Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
