import Button from '@mui/material/Button';
import { useMsal } from '@azure/msal-react';

export const LoginActionButton = ({buttonType}) => {
    const { instance } = useMsal();

    const handleAuthentication = () => {
        if(buttonType==='login') {
            instance.loginRedirect({
                scopes: ['user.read']
            });
        } else {
            instance.logoutRedirect();
        }
    }

    return (
        <Button color="inherit" onClick={handleAuthentication}>{buttonType==='login'? 'Login': 'Logout'}</Button>
    )
};