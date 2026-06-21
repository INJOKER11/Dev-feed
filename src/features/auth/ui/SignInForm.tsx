import { useForm } from "react-hook-form";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { Button } from "../../../shared/ui/Button/Button.tsx";

type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
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
    <form className={"flex flex-col gap-3"} onSubmit={handleSubmit(onSubmit)}>
      <Input type={"email"} label={"Email"} {...register("email")} />
      <Input type={"password"} label={"Password"} {...register("password")} />
      <Button type={"submit"} className={"mt-2"} size={"sm"}>
        Login
      </Button>
    </form>
  );
};
