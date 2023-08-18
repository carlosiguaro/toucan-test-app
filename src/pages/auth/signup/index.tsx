import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Typography, Snackbar, Alert, CircularProgress } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import auth from "../../api/auth0js.config";
import Layout from "@/pages/components/layout/layout";
import { MessageConfig, FormData, FocusedData } from "@/utils/interfaces";
import ProtectedRoute from "@/pages/components/auth/protected-route";


export default function Signup() {
  const router = useRouter();
  const emailInput = useRef<HTMLInputElement | null>(null)
  const passwordInput = useRef<HTMLInputElement | null>(null)
  const rpasswordInput = useRef<HTMLInputElement | null>(null)

  /** STATES */
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<FormData>({
    email: '',
    password: '',
    rpassword: ''
  });
  const [focusedField, setFocusedField] = useState<FocusedData>({
    email: false,
    password: false,
    rpassword: false
  })
  const [messageConfig, setMessageConfig] = useState<MessageConfig>({
    type: "error",
    message: "",
    show: false,
  });

  /** VALIDATION FUNCTIONS */
  const validateLowercase = () => /[a-z]/.test(data.password);
  const validateUppercase = () => /[A-Z]/.test(data.password);
  const validateNumbers = () => /[0-9]/.test(data.password);
  const validateLength = () => data.password.length >= 8;
  const validateSpecialChars = () => /[!@#$%^&*]/.test(data.password);
  const validateEmail = () => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email);
  const validateConfirmPassword = () => data.password === data.rpassword && data.password.length;

  /** HANDLE FUNCTIONS */
  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((preDataValues) => ({
      ...preDataValues,
      [name]: value
    }));
  };

  const handleChangeFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { type } = event;
    const { name } = event.target;
    const value = type == "focus";
    setFocusedField((preFocusedValues) => ({
      ...preFocusedValues,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail()) {
      emailInput.current?.focus();
      return;
    }
    if (
      !validateLowercase() ||
      !validateUppercase() ||
      !validateNumbers() ||
      !validateLength() ||
      !validateSpecialChars()
    ) {
      passwordInput.current?.focus();
      return;
    }

    if (!validateConfirmPassword()){
      rpasswordInput.current?.focus();
      return;
    }
    setLoading(true);
    const {email, password} = data;
    auth.signup({
      connection: "Username-Password-Authentication",
      email,
      password,
    },
    (err: any) => {
      if (err) {
        if (err.code === "invalid_signup") {
          setLoading(false);
          setMessageConfig((prevConfig) => ({
            ...prevConfig,
            type: "error",
            show: true,
            message: "An error has occurred, it is possible that the mail is already registered",
          }));
        }
      } else {
        setMessageConfig((prevConfig) => ({
          ...prevConfig,
          show: true,
          type: "success",
          message: "Successfully registered user",
        }));
        setTimeout(() => {
          router.replace("/dashboard");
        }, 2000);
      }
    });
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    setMessageConfig((prevConfig) => ({
      ...prevConfig,
      show: false
    }));
  }

  const action = (
    <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
  );

  return (
    <ProtectedRoute authenticated={false}>
      <Layout section="Sign Up">
        <div id="signup-section">
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                name="email"
                inputProps={{ ref: emailInput }}
                label="Email"
                value={data.email}
                onChange={handleChangeData}
                onFocus={handleChangeFocus}
                onBlur={handleChangeFocus}
                fullWidth
                required
              />
              {focusedField.email && (
                <div>
                  <Typography variant="caption" style={{ color: validateEmail() ? "green" : "red" }}>
                    {validateEmail() ? "✔" : "❌"} Valid Email
                  </Typography>
                </div>
              )}
              <TextField
                margin="normal"
                name="password"
                inputProps={{ ref: passwordInput }}
                label="Password"
                type="password"
                value={data.password}
                onChange={handleChangeData}
                onFocus={handleChangeFocus}
                onBlur={handleChangeFocus}
                fullWidth
                required
              />
              {focusedField.password && (
                <div className="d-flex flex-direction-column">
                  <Typography variant="caption" style={{ color: validateLowercase() ? "green" : "red" }}>
                    {validateLowercase() ? "✔" : "❌"} Lowercase letters (a-z)
                  </Typography>

                  <Typography variant="caption" style={{ color: validateUppercase() ? "green" : "red" }}>
                    {validateUppercase() ? "✔" : "❌"} Uppercase letters (A-Z)
                  </Typography>

                  <Typography variant="caption" style={{ color: validateNumbers() ? "green" : "red" }}>
                    {validateNumbers() ? "✔" : "❌"} Numbers (0-9)
                  </Typography>

                  <Typography variant="caption" style={{ color: validateSpecialChars() ? "green" : "red", }}>
                    {validateSpecialChars() ? "✔" : "❌"} Special characters (!@#$%^&*)
                  </Typography>

                  <Typography variant="caption" style={{ color: validateLength() ? "green" : "red" }}>
                    {validateLength() ? "✔" : "❌"}At least 8 characters
                  </Typography>
                </div>
              )}

              <TextField
                margin="normal"
                name="rpassword"
                inputProps={{ ref: rpasswordInput }}
                label="Confirm Password"
                type="password"
                value={data.rpassword}
                onChange={handleChangeData}
                onFocus={handleChangeFocus}
                onBlur={handleChangeFocus}
                fullWidth
                required
              />
              {focusedField.rpassword && (
                <div className="d-flex flex-direction-column">
                  <Typography variant="caption" style={{ color: validateConfirmPassword() ? "green" : "red" }}>
                    {validateConfirmPassword() ? "✔" : "❌"} Confirm password
                  </Typography>
                </div>
              )}

              <Button type="submit" variant="contained" className="w-100 mt-1 py-1 bg-primary">
                Sign up
              </Button>
            </form>
                      
            {loading && (
              <div className="loading-container">
                <CircularProgress />
              </div>
            )}
          </div>
        </div>    
        <Snackbar
          open={messageConfig.show}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert 
            severity={messageConfig.type} 
            sx={{ width: "100%" }}
            onClose={handleClose}
            action={action}
          >
            {messageConfig.message}
          </Alert>
        </Snackbar>
      </Layout>
    </ProtectedRoute>
  );
}
