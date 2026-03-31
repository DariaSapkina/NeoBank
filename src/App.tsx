import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Layout } from "./layout/Layout";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
