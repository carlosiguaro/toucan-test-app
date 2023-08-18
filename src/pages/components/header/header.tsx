import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState, MouseEvent, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { UserInterface } from "@/utils/interfaces";

export default function Header (){
    const { data: session, status } = useSession();
    const [user, setUser] = useState<UserInterface>({
        email: '',
        name: '',
        image: '',
    });
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    
    useEffect(() => {
        if (session) {
            const email = session?.user?.email || '';
            const name = session?.user?.name || '';
            const image = session?.user?.image || '';
    
          setUser({
            email,
            name,
            image,
          });
        }
    }, [session]);

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) =>  setAnchorElUser(event.currentTarget);
    
    const handleCloseUserMenu = () => setAnchorElUser(null);

    const logout =  async () => {
        await signOut(); 
    };

    return (
        <header className="_tt-header">
            <div>
                <Link href="/">
                    <img src="/assets/icons/toucan-talent-logo.png" /> 
                </Link>
                {!session &&
                    <div className="_tt-navbar">
                        <input type="checkbox" />
                        <button>
                            <div></div>
                        </button>
                        <div>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/services">Services</Link>
                                </li>
                                <li>
                                    <Link href="/our-process">Our Process</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link href="/address">Address</Link>
                                </li>
                                <li>
                                    <Link href="/api/auth/signin">Sign In</Link>
                                </li>
                                <li>
                                    <Link href="/auth/signup">Sing Up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                {session && 
                    <div>
                        <div className="d-flex jutify-contend-end align-items-center">
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
                            <MenuItem onClick={logout}>
                            <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}