import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/Sidebar.tsx";
import { RightPanel } from "../widgets/RightPanel/RightPanel.tsx";

export const MainLayout = () => {
  return (
    <div className={"bg-background min-h-screen"}>
      <div className={"mx-auto flex max-w-316.25"}>
        <Sidebar />
        <Outlet />
        <RightPanel />
      </div>
    </div>
  );
};
