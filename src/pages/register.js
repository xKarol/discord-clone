import { useEffect, useState } from "react";
import Dropdown from "../components/validation/dropdown";
import InputField from "../components/validation/input-field";
import RedirectLink from "../components/validation/redirect-link";
import {
  ValidationBackground,
  StyledForm,
  StyledFormHeading,
  StyledInput,
} from "../components/validation/styles";
import { months } from "../utils/month-names";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/user/userActions";
import {
  IsValidUsername,
  isValidEmail,
  IsValidPassword,
} from "../utils/validation";
import { emailErrors, passwordErrors } from "../helpers/firebase-errors";
import Submit from "../components/validation/submit";
import { Navigate } from "react-router-dom";
import { HOME as ROUTE_HOME } from "../constants/routes";

function Register() {
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onSubmit = ({ email, username, password }) => {
    let checkError = false;
    if (!isValidEmail(email)) {
      setError("email", {
        type: "manual",
        message: "Email is invalid",
      });
      checkError = true;
    }
    if (!IsValidPassword(password)) {
      setError("password", {
        type: "manual",
        message: "Password is invalid",
      });
      checkError = true;
    }
    if (!IsValidUsername(username)) {
      setError("username", {
        type: "manual",
        message: "The username is invalid",
      });
      checkError = true;
    }
    if (checkError) return;
    setLoading(true);
    dispatch(registerUser(username, email, password));
    setLoading(false);
  };

  useEffect(() => {
    if (!user.error) return;
    let err = passwordErrors[user.error];
    if (err) {
      return setError("password", {
        type: "manual",
        message: err,
      });
    }
    err = emailErrors[user.error];
    if (err) {
      return setError("email", {
        type: "manual",
        message: err,
      });
    }
  }, [user.error, setError]);

  if (user.loggedIn) return <Navigate to={ROUTE_HOME} replace={true} />;
  return (
    <ValidationBackground>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormHeading>Create an account</StyledFormHeading>
        <InputField error={errors.email} label="Email">
          <StyledInput
            type="email"
            {...register("email", { required: "This field is required" })}
          />
        </InputField>
        <InputField error={errors.username} label="Username">
          <StyledInput
            type="text"
            {...register("username", {
              required: "This field is required",
            })}
          />
        </InputField>
        <InputField error={errors.password} label="Password">
          <StyledInput
            type="password"
            {...register("password", { required: "This field is required" })}
          />
        </InputField>
        <InputField label="Date of birth">
          <Dropdown>
            {[...new Array(31)].map((_, index) => (
              <li key={index}>{index + 1}</li>
            ))}
          </Dropdown>
          <Dropdown>
            {months.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </Dropdown>
          <Dropdown>
            {[...new Array(160)].map((_, index) => {
              if (currentYear - index < 1870) return null;
              return <li key={index}>{currentYear - index}</li>;
            })}
          </Dropdown>
        </InputField>
        <Submit loading={loading}>Continue</Submit>
        <RedirectLink linkText="Already have an account?" href={"/login"} />
      </StyledForm>
    </ValidationBackground>
  );
}

export default Register;
