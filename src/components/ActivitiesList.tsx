import React, { ReactElement } from "react";
import { createTheme, List, ListItem, ListItemText, ListItemIcon, Typography } from "@mui/material";

import { LocalActivity, CircleOutlined} from "@mui/icons-material";
import EventDetail from "./EventDetail";
export interface Activity {
  id: number;
  name: string;
  description: string;
  voteCount: number;
  category: string;
}

interface ActivitiesListProps {
  activities: Activity[];
}

export default function ActivitiesList(props: ActivitiesListProps): ReactElement {
    // const theme = createTheme({
    //     palette: {
    //         primary: {

    //         },
    //         secondary: {
                
    //         }
    //     }
    // })
  return (
    <>
        <EventDetail />
        <List sx={{
            width: '100%'
        }}>
            {props.activities.map((activity) => (
                <ListItem 
                    key={activity.id}
                    alignItems="center"
                    divider={true}
                    sx={{
                        margin: 2,
                    }}
                >
                    <ListItemIcon>
                        <LocalActivity fontSize="large" />
                    </ListItemIcon>

                    <ListItemText
                        primary={activity.name}
                        secondary={
                            <>
                                <p>{activity.category}</p>
                                <p>{activity.description}</p>
                            </> 
                        }
                        sx={{
                            margin: 1
                        }}
                    />
                    <ListItemIcon
                        sx={{
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderRadius: 50,
                            paddingTop: 1,
                            paddingBottom: 1,
                            marginLeft: 1,
                            justifyContent: "center"
                        }}
                    >
                        {activity.voteCount}
                    </ListItemIcon>
                </ListItem>
            ))}
        </List>
    </>
  );
}