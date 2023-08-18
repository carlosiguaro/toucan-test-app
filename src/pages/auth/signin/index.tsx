import React from "react";
import { TextField, Button, Snackbar, Alert, CircularProgress } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Layout from "@/pages/components/layout/layout";
import { useState } from "react";
import { MessageConfig } from "@/utils/interfaces";
import auth from "../../api/auth0js.config";
import ProtectedRoute from "@/pages/components/auth/protected-route";

export default function Signin() {
    const [loading, setLoading] = useState<boolean>(false);
    const [messageConfig, setMessageConfig] = useState<MessageConfig>({
        type: "error",
        message: "",
        show: false,
      });
    const [data, setData] = useState({
        email: '',
        password:''
    });

    const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((preDataValues) => ({
          ...preDataValues,
          [name]: value
        }));
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const {email, password} = data;   
        setLoading(true);
        auth.login({
            realm: 'Username-Password-Authentication',
            email,
            password,
            redirect_uri: 'http://localhost:3000/dashboard',
            responseType: 'token id_token',
            scope: 'openid profile', 
        }, (err:any, authResult:any) => {
          if (err) {
              const {description} = err;
              setLoading(false);
              setMessageConfig((prevConfig) => ({
                ...prevConfig,
                type: "error",
                show: true,
                message: description
              }));
          } else {
            // Aquí puedes manejar el éxito del inicio de sesión
            console.log('Login successful:', authResult);
          }
        });
    }

    const signinWithGoogle = () => {
        auth.popup.authorize({
            redirect_uri: 'http://localhost:3000/dashboard',
            connection: 'google-oauth2'
        }, function(err:any, authResult:any) {
            if (err) {
                console.log(err)               
                return
            }
            if (authResult) console.log(authResult)
            
        });
    }
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
            <Layout section="Sign In">
                <div id="signin-section">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                type="email"
                                name="email"
                                label="Email"
                                value={data.email}
                                onChange={handleChangeData}
                                fullWidth
                                required
                            />
                            <TextField
                                margin="normal"
                                type="password"
                                name="password"
                                label="Password"
                                value={data.password}
                                onChange={handleChangeData}
                                fullWidth
                                required
                            />

                            <Button type="submit" variant="contained" className="w-100 mt-1 py-1 bg-primary">
                                Sign in
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
    )
}