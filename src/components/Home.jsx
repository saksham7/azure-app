import Typography from "@mui/material/Typography";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import UserList from "./UserList";

export const Home = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <UserList />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Typography variant="h6">Please sign-in to get started.</Typography>
            </UnauthenticatedTemplate>
        </>
    );
}