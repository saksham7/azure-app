import Typography from "@mui/material/Typography";
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";
export const WelcomeName = () => {
  const { instance } = useMsal();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const currentAccount = instance.getActiveAccount();
    if (currentAccount) {
      setUsername(currentAccount.name);
    }
  }, [instance]);
  return <Typography variant="h6">Hi, {username} </Typography>;
};
