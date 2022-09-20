import React from "react";
import Form from "../components/Form";
import { caseEnum } from "../types";

const Register = () => {
  return <Form formCase={caseEnum.REGISTER} />;
};

export default Register;
