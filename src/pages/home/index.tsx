import { Fragment } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FontPage from "../components/font-page";

export default function Home() {
  const router = useRouter();

  const redirectToSignup = () => {
    router.replace("/signup");
  };

  return (
    <Fragment>
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
        <Paper elevation={5} className="p-relative">
          <FontPage view="home">
            <div className="h-v-align">
              <Typography
                variant="h4"
                sx={{ textTransform: "uppercase" }}
                textAlign="center"
              >
                Toucan TEST APP
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ textTransform: "uppercase" }}
                textAlign="center"
              >
                Carlos Iguaro
              </Typography>
            </div>
          </FontPage>
        </Paper>

        <Paper variant="outlined" className="h-v-align">
          <div className="h-align">
            <Card sx={{ width: 400 }}>
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{ textTransform: "uppercase" }}
                  className="mb-1"
                  textAlign="center"
                >
                  Join
                </Typography>

                <Button
                  variant="outlined"
                  size="medium"
                  className="w-100"
                  onClick={redirectToSignup}
                >
                  <Typography variant="subtitle1">Sign Up</Typography>
                </Button>

                <Divider variant="middle" className="m-2" />

                <div>
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link
                      className="font-bold"
                      href="/api/auth/signin"
                    >
                      Sign In
                    </Link>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </Paper>
      </Box>
    </Fragment>
  );
}
