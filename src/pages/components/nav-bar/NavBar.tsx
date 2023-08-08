import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { UserType } from "@/utils/interfaces/user";
import { useRouter } from "next/router";

export default function NavBar({ user }: UserType) {
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="p-absolute top-0 w-100 d-flex p-1 jutify-contend-end align-items-center">
      <Typography textAlign="center" className="text-small mr-1">
        {user?.email}
      </Typography>

      <Tooltip title={user?.name}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user?.image} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={(e) => router.replace("/api/auth/signout")}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
