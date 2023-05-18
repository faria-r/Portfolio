import Aos from "aos";
import { RouterProvider } from "react-router-dom";
import ParticlesComp from "./Components/PartilcesComp/ParticlesComp";
import { router } from "./Routes/Routes";

function App() {

  return (
    <div>
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
