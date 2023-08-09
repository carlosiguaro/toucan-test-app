import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Divider, Typography } from "@mui/material";

export default function MapView() {
  const router = useRouter();
  const [dynamicMapComponent, setDynamicMapComponent] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("../components/map/Map").then((module) => {
        setDynamicMapComponent(module.default);
      });
    }
  }, []);

  return (
    <main id="map-view-container">
      <div>
        <div className="d-flex flex-direction-row jutify-contend-between p-1">
          <div>
            <Button
              onClick={(e) => router.replace("/")}
              color="secondary"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </div>
          <div className="d-flex flex-direction-row">
            <Typography variant="h6">Toucan App Test</Typography>
            <Divider className="mx-1" orientation="vertical" variant="middle" flexItem />
            <img src="assets/icons/logo.png" width={150} />
          </div>
        </div>
        {dynamicMapComponent}
      </div>
    </main>
  );
}
