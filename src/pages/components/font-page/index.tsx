
import { ReactNode } from 'react';
import { Divider, Typography } from "@mui/material";

interface FontPageProps {
    view: string;
    children: ReactNode;
}
  
export default function FontPage({ view, children }: FontPageProps) {
    const src = view == 'home' ? view : 'dashboard';
    return (
        <div className="fontpage-container">
            <div>
                <img src="/assets/icons/toucan-talent-logo.png" width={150} alt="nextauth" />
            </div>
            <div>
                <div>
                    <img src={`/assets/image/${src}.jpg`} width={290} />
                </div>
                <div>
                    {children}
                </div>
            </div>
            <div>
                <Divider textAlign="left">
                <Typography variant="subtitle1" className='opacity-2p'>
                   Test App | Technologies:
                </Typography>
                </Divider>
                <div>
                    <img src="/next.svg"  height={15} />
                    <img src="assets/icons/auth0.logo.svg"  height={23} />
                    <img src="assets/icons/logo-xs.png"  height={23} />
                    <img src="assets/icons/mui.svg"  height={23} />
                    <img src="assets/icons/logo.png"  height={23} />
                </div>
            </div>
        </div>
    )
}