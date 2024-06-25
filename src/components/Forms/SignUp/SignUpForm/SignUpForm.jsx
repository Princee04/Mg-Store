import React from "react";
import Button from "../../../Buttons/Button";

const SignUpForm = () => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control border-0 shadow-none"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control border-0 shadow-none"
          placeholder="Password"
        />
      </div>
      <Button>SIGN UP</Button>
    </form>
  );
};

export default SignUpForm;
