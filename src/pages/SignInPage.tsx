import { SignInForm } from "../features/auth/ui/SignInForm.tsx";

export const SignInPage = () => {
  return (
    <div
      className={"bg-background flex min-h-screen items-center justify-center"}
    >
      <SignInForm />
    </div>
  );
};
