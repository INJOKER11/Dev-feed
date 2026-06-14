import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className={""}>
      <div>sidebar</div>
      <Outlet />
    </div>
  );
};
