import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FontPage from "../components/font-page";
import { useRouter } from "next/router";
import { UserType } from "@/utils/interfaces/user";
import NavBar from "../components/nav-bar/NavBar";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function Dashboard({ user }: UserType) {
  const router = useRouter();
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
        <Paper elevation={3} className="p-relative">
          <FontPage view="dashboard">
            <div className="h-v-align">
              <EmojiPeopleIcon fontSize="large" />
              <Typography textAlign="center" variant="h4">
                Welcome
              </Typography>
              <Typography textAlign="center">{user?.name}</Typography>
            </div>
          </FontPage>
        </Paper>

        <Paper elevation={1} className="p-relative h-v-align">
          <NavBar user={user} />

          <div className="w-75">
            <Button variant="outlined" onClick={e =>  router.replace("/map")} size="medium" className="w-100">
              <TravelExploreIcon className="mr-1" />
              <Typography variant="subtitle1">Map Component</Typography>
            </Button>
          </div>
        </Paper>
      </Box>
    </>
  );
}
