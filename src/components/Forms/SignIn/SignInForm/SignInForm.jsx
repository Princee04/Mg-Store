import React from "react";
import Button from "../../../Buttons/Button";

const SignInForm = () => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="email"
          className="form-control border-0 shadow-none"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="password"
          className="form-control border-0 shadow-none"
          placeholder="Password"
        />
      </div>
      <div className="text-secondary my-3">Forgot your password?</div>
      <Button>SIGN IN</Button>
    </form>
  );
};

export default SignInForm;
