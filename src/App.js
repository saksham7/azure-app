import { MsalProvider, useIsAuthenticated } from "@azure/msal-react";
import "./App.css";
import Layout from "./components/Layout";
import { Grid } from "@mui/material";
import { Routes, Route, Navigate  } from "react-router-dom";
import { Home } from "./components/Home";
import { useEffect } from "react";

function App({ msalInstance }) {
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        // if (!isAuthenticated) {
        //     // TODO: grab the username from query params

        //     msalInstance.ssoSilent({
        //         scopes: ["user.read"]
        //     }).then((response) => {
        //       msalInstance.setActiveAccount(response.account);
        //     }).catch((error) => {
        //         if (error instanceof InteractionRequiredAuthError) {
        //           msalInstance.loginRedirect({
        //                 scopes: ["user.read"],
        //             });
        //         }
        //     });
        // }
    }, [msalInstance, isAuthenticated]);
  return (
    <>
      <MsalProvider instance={msalInstance}>
        <Layout>
          <Grid container justifyContent="center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logout" element={ <Navigate to="/" /> } />
            </Routes>
          </Grid>
        </Layout>
      </MsalProvider>
    </>
  );
}

export default App;
