import { useForm } from "react-hook-form";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { useNavigate } from "react-router-dom";

type SignUpForm = {
  email: string;
  password: string;
  username: string;
};

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<SignUpForm>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = (values: SignUpForm) => {
    console.log(values);
  };

  return (
    <form
      className={"flex w-full max-w-100 flex-col gap-3"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type={"email"} label={"Email"} {...register("email")} />
      <Input type={"password"} label={"Password"} {...register("password")} />
      <Input type={"username"} label={"Username"} {...register("username")} />
      <div className={"mt-2 flex gap-2"}>
        <Button type={"submit"} size={"sm"} className={"flex-1"}>
          Register
        </Button>
        <Button
          onClick={() => navigate("/login")}
          variant={"secondary"}
          className={"flex-1"}
          size={"sm"}
        >
          Already have account
        </Button>
      </div>
    </form>
  );
};
