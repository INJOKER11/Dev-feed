import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/Sidebar/Sidebar.tsx";
import { RightPanel } from "../widgets/RightPanel/RightPanel.tsx";

export const MainLayout = () => {
  return (
    <div className={"bg-background max-h-screen"}>
      <div className={"mx-auto flex min-h-screen max-w-316.25"}>
        <Sidebar />
        <Outlet />
        <RightPanel />
      </div>
    </div>
  );
};
