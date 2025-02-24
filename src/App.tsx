import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout} from "./routes/layout";
import './App.scss'
import { MainCoverPage } from "./routes/main-cover-page";
import { SomePage } from "./routes/some-page";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainCoverPage />} />
          <Route path="some-page" element={ <SomePage />}/>
        </Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App
