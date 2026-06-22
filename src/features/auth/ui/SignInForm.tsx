import { useForm } from "react-hook-form";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { useNavigate } from "react-router-dom";

type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    console.log(values);
  };

  return (
    <form
      className={"flex w-full max-w-100 flex-col gap-3"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type={"email"} label={"Email"} {...register("email")} />
      <Input type={"password"} label={"Password"} {...register("password")} />
      <div className={"mt-2 flex gap-2"}>
        <Button type={"submit"} className={"flex-1"} size={"sm"}>
          Login
        </Button>
        <Button
          onClick={() => navigate("/register")}
          size={"sm"}
          variant={"secondary"}
          className={"flex-1"}
        >
          Don't have account?
        </Button>
      </div>
    </form>
  );
};
