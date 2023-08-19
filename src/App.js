/* istanbul ignore file */
import "./App.scss";
import Page from "./pages/Home";
import { DataProvider } from "./contexts/DataContext";
import "./responsive.scss";

function App() {
  return (
    <DataProvider>
      <Page />
    </DataProvider>
  );
}

export default App;
