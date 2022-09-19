import React from "react";
import Form, { caseEnum } from "../components/Form";

const Login = () => {
  return (
    <>
      <Form formCase={caseEnum.REGISTER} />
    </>
  );
};

export default Login;
