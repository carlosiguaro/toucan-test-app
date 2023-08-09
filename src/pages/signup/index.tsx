import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import auth from "../api/auth0js.config";

import { MessageConfigType } from "@/utils/interfaces/message";

export default function Signup() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [IsPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [IsEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageConfig, setMessageConfig] = useState<MessageConfigType>({
    type: "error",
    message: "",
    show: false,
  });

  const validateLowercase = () => /[a-z]/.test(password);
  const validateUppercase = () => /[A-Z]/.test(password);
  const validateNumbers = () => /[0-9]/.test(password);
  const validateLength = () => password.length >= 8;
  const validateSpecialChars = () => /[!@#$%^&*]/.test(password);
  const validateEmail = () => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateEmail()) {
      emailInput.current.focus();
      return;
    }
    if (
      !validateLowercase() ||
      !validateUppercase() ||
      !validateNumbers() ||
      !validateLength() ||
      !validateSpecialChars()
    ) {
      passwordInput.current.focus();
      return;
    }
    setLoading(true);
    auth.signup(
      {
        connection: "Username-Password-Authentication", // Cambia esto según tu estrategia de conexión
        email,
        password,
      },
      (err: any) => {
        if (err) {
          if (err.code === "invalid_signup") {
            setLoading(false);
            setMessageConfig({
              ...messageConfig,
              type: "error",
              show: true,
              message:
                "Ha ocurrido un error, puede que el email ya se encuentre registrado",
            });
          }
        } else {
          setMessageConfig({
            ...messageConfig,
            show: true,
            type: "success",
            message: "Usuario registrado exitosamente",
          });
          setTimeout(() => {
            router.replace("/");
          }, 2000);
        }
      }
    );
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [router, status]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": {
            m: 1,
            width: "40vw",
            height: "90vh",
          },
        }}
      >
        <Paper elevation={5} className="p-relative bg-grey h-v-align">
          <div className="p-absolute top-0 w-100 p-1">
            <Button
              onClick={e => router.replace('/')}
              color="secondary"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </div>

          <div className="p-relative">
            <Card sx={{ width: 350 }}>
              <CardContent>
              <Typography
                  variant="h5"
                  sx={{ textTransform: "uppercase" }}
                  textAlign="center"
                >
                  Toucan Test App
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textTransform: "uppercase" }}
                  className="mb-1"
                  textAlign="center"
                >
                  SignUp
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    margin="normal"
                    inputProps={{ ref: emailInput }}
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    fullWidth
                    required
                  />
                  {IsEmailFocused && (
                    <div>
                      <Typography
                        variant="caption"
                        style={{ color: validateEmail() ? "green" : "red" }}
                      >
                        {validateEmail() ? "✔" : "❌"} Valid Email
                      </Typography>
                    </div>
                  )}

                  <TextField
                    margin="normal"
                    inputProps={{ ref: passwordInput }}
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    fullWidth
                    required
                  />
                  {IsPasswordFocused && (
                    <div className="d-flex flex-direction-column">
                      <Typography
                        variant="caption"
                        style={{ color: validateLowercase() ? "green" : "red" }}
                      >
                        {validateLowercase() ? "✔" : "❌"} Lowercase letters
                        (a-z)
                      </Typography>

                      <Typography
                        variant="caption"
                        style={{ color: validateUppercase() ? "green" : "red" }}
                      >
                        {validateUppercase() ? "✔" : "❌"} Uppercase letters
                        (A-Z)
                      </Typography>

                      <Typography
                        variant="caption"
                        style={{ color: validateNumbers() ? "green" : "red" }}
                      >
                        {validateNumbers() ? "✔" : "❌"} Numbers (0-9)
                      </Typography>

                      <Typography
                        variant="caption"
                        style={{
                          color: validateSpecialChars() ? "green" : "red",
                        }}
                      >
                        {validateSpecialChars() ? "✔" : "❌"} Special characters
                        (!@#$%^&*)
                      </Typography>

                      <Typography
                        variant="caption"
                        style={{ color: validateLength() ? "green" : "red" }}
                      >
                        {validateLength() ? "✔" : "❌"} At least 8 characters
                      </Typography>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-100"
                  >
                    Sign up
                  </Button>
                </form>
                <Divider variant="middle" className="m-2" />
                <div>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link
                      style={{ fontWeight: "bold" }}
                      href="/api/auth/signin"
                    >
                      Sign In
                    </Link>
                  </Typography>
                </div>
              </CardContent>
            </Card>
            {loading && (
              <div className="loading-container">
                <CircularProgress />
              </div>
            )}
          </div>
        </Paper>
      </Box>

      <Snackbar
        open={messageConfig.show}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={messageConfig.type} sx={{ width: "100%" }}>
          {messageConfig.message}
        </Alert>
      </Snackbar>
    </>
  );
}
