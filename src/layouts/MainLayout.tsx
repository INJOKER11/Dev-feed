import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/Sidebar.tsx";

export const MainLayout = () => {
  return (
    <div className={"bg-background min-h-screen"}>
      <div className={"mx-auto max-w-316.25"}>
        <Sidebar />
        <Outlet />
        <div>right panel</div>
      </div>
    </div>
  );
};
