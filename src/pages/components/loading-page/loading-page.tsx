import { CircularProgress } from "@mui/material";

export default function LoadingPage(){
    return (
        <main id="_tt-preloader">
          <div>
            <CircularProgress className="_tt-circular-preloader" color="primary"/>
            <img src="/assets/icons/toucan-talent-logo.png" />
          </div>
        </main>
    )
}