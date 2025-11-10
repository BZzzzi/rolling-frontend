import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalStyle } from "@/styles/global-style";
import GlobalLayout from "@/components/global-layout";
import TestPage from "@/pages/test-page";
import MessagePage from "@/pages/message-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<TestPage />} />
            <Route path="/post/:id/message" element={<MessagePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
