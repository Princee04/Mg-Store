import React from "react";
import Button from "../../../Buttons/Button";
import { Link } from "react-router-dom";
import { helpLink } from "./SignInForm.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Adrèsse email déja utilisé ou mot(s) de passe incorrecte",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          {...register("email")}
          type="email"
          className="form-control border-0 shadow-none"
          placeholder="Adrèsse mail"
        />
        {errors.email && (
          <div className="text-danger">{errors.email.message}</div>
        )}
      </div>
      <div>
        <input
          {...register("password")}
          type="password"
          className="form-control border-0 shadow-none"
          placeholder="Mot(s) de passe"
        />
        {errors.password && (
          <div className="text-danger">{errors.password.message}</div>
        )}
      </div>
      <div className="text-secondary my-3">Mot(s) de passe oublié?</div>
      <div className={`${helpLink} mb-3`}>
        Pas encore de compte? <Link to={"/signup"}>S'inscrire</Link>
      </div>
      <Button disabled={isSubmitting} type={"submit"}>
        {isSubmitting ? "Chargement..." : "SE CONNECTER"}
      </Button>
      {errors.root && <div className="text-info">{errors.root.message}</div>}
    </form>
  );
};

export default SignInForm;
