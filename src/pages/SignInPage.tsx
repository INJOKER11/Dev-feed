import { SignInForm } from "../features/auth/ui/SignInForm.tsx";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <div
      className={
        "bg-background flex min-h-screen flex-col items-center justify-center"
      }
    >
      <Link
        to={"/"}
        className={"text-text-primary p-3.25 text-3xl hover:opacity-20"}
      >
        Dev feed
      </Link>
      <SignInForm />
    </div>
  );
};
