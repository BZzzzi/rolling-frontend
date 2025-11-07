import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalStyle } from "@/styles/global-style";
import GlobalLayout from "@/components/global-layout";
import TestPage from "@/pages/test-page";
import MainPage from "@/pages/main-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<TestPage />} />
            <Route path="/main" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
