import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalStyle } from "@/styles/global-style";
import GlobalLayout from "@/components/global-layout";
import TestPage from "@/pages/test-page";
import MainPage from "@/pages/main-page";
import PostPage from "@/pages/post-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            {/* <Route path="/" element={<TestPage />} /> */}
            <Route path="/" element={<MainPage />} />
            <Route path="/post" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
