import { MainRoutes } from "./routes/MainRoutes";
import { FormProvider } from "./contexts/formContext";

const App = () => {
  return (
    <FormProvider>
      <MainRoutes />
    </FormProvider>
  );
};

export default App;
