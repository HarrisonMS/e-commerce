import React from "react";
import SignIn from "../../components/sign-in/sign-in.jsx";
import SignUp from "../../components/sign-up/sign-up.jsx";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const LoginRegister = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default LoginRegister;
