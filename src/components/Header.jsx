import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { WelcomeName } from "./WelcomeName";
import { Link as RouterLink } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { LoginActionButton } from "./LoginActionButton";

const Header = () => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <div sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        <Link component={RouterLink} to="/" color="inherit" variant="h6">React - Azure Portal</Link>
                    </Typography>
                    {isAuthenticated ? <WelcomeName /> : null}
                    {isAuthenticated ? <LoginActionButton buttonType='logout'/> : <LoginActionButton buttonType='login'/>}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;