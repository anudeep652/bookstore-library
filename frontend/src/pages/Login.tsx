import React from "react";
import Form from "../components/Form";
import { caseEnum } from "../types";

const Login = () => {
  return (
    <>
      <Form formCase={caseEnum.LOGIN} />
    </>
  );
};

export default Login;
