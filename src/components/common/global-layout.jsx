import { Outlet, useLocation } from "react-router";
import Header from "@/components/common/header";

export default function GlobalLayout() {
  const location = useLocation();
  const showButton =
    location.pathname.includes("main-page") ||
    location.pathname.includes("list-page");

  return (
    <>
      <Header showButton={showButton} />
      <Outlet />
    </>
  );
}
