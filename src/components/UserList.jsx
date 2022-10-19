import {
  InteractionStatus,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { FormControl, MenuItem, Select, InputLabel, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchData } from "../service";
import { UserDetails } from "./UserDetails";
const UserList = () => {
  const { instance, inProgress, accounts } = useMsal();
  const [usersData, setUsersData] = useState(null);
  const [selectedId, setSelectedId] = useState(-1);

  useEffect(() => {
    if (!usersData && inProgress === InteractionStatus.None) {
      instance
        .acquireTokenSilent({
          scopes: ["user.read", "Directory.Read.All"],
          account: accounts[0],
        })
        .then((result) => {
          if (result) {
            const { accessToken } = result;
            fetchData("https://graph.microsoft.com/v1.0/users", accessToken)
              .then((response) => {
                setUsersData(response.value);
                console.log(response.value);
                console.log(usersData);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => {
          if (error instanceof InteractionRequiredAuthError) {
            instance.loginRedirect({
              scopes: ["user.read"],
            });
          }
        });
    }
  }, [instance, accounts, inProgress, usersData]);

  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 330 }}>
        <InputLabel id="demo-simple-select-label">Users List</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedId}
          label="Users List"
          onChange={handleChange}
        >
          <MenuItem value="-1">Select User</MenuItem>
          {usersData &&
            usersData.map((data) => {
              return (
                <MenuItem key={data.id} value={data.id}>
                  {data.displayName}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: "100%" }}>
        <Grid display="flex" justifyContent="center">
          {selectedId !== -1 && usersData && (
            <UserDetails
              graphData={usersData.filter((x) => x.id === selectedId)[0]}
            />
          )}
        </Grid>
      </FormControl>
    </>
  );
};
export default UserList;
