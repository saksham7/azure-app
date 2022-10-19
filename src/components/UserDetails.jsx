import {
  ListItem,
  ListItemText,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import BadgeIcon from "@mui/icons-material/Badge";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const UserDetails = ({ graphData }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText
                primary={graphData.displayName}
                alignItems="flex-end"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={graphData.mail} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={graphData.officeLocation} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
