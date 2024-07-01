import React, { useRef } from "react";
import Button from "../../../Buttons/Button";
import { helpLink } from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().max(14).min(3),
  email: z.string().email(),
  password: z.string().min(8).max(16),
  confirm_password: z.string().min(8).max(16),
});

const SignUpForm = () => {
  const form = useRef("form");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          {...register("username")}
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Nom d'utilisateur"
        />
        {errors.username && (
          <div className="text-danger">{errors.username.message}</div>
        )}
      </div>

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

      <div className="mb-3">
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

      <div className="mb-3">
        <input
          {...register("confirm_password")}
          type="password"
          className="form-control border-0 shadow-none"
          placeholder="Confirmation mot(s) de passe"
        />
        {errors.confirm_password && (
          <div className="text-danger">{errors.confirm_password.message}</div>
        )}
      </div>

      <div className={`${helpLink} mb-3`}>
        Déja inscrit? <Link to={"/"}>Se connecter</Link>
      </div>

      <Button disabled={isSubmitting} type={"submit"}>
        {isSubmitting ? "Chargement..." : "S'INSCRIRE"}
      </Button>
    </form>
  );
};

export default SignUpForm;
