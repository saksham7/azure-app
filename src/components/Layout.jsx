import Typography from "@mui/material/Typography";
import Header from "./Header";

const Layout = (props) => {
    return (
        <>
            <Header />
            <br />
            <Typography variant="h4">
                <center>Hi, Welcome to React - Azure Msal Demo</center>
            </Typography>
            <br />
            {props.children}
        </>
    );
};

export default Layout;