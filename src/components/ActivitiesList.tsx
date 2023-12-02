import React, { ReactElement } from "react";
import { List, ListItem, ListItemText, ListItemAvatar, ListItemIcon } from "@mui/material";

import { LocalActivity } from "@mui/icons-material";

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

  return (
    <>
        <List sx={{
            width: '100%',
            maxWidth: 500,
            bgcolor: 'background.paper'
        }}>
            {props.activities.map((activity) => (
                <ListItem 
                    key={activity.id}
                    alignItems="center"
                    divider={true}
                    sx={{
                        padding: 2
                    }}
                >
                    <ListItemIcon>
                        <LocalActivity />
                    </ListItemIcon>

                    <ListItemText 
                        primary={activity.name} 
                        secondary={
                            <>
                                [{activity.category}] {activity.description}
                            </> 
                        }
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

{/* <h1>October Potluck Dinner</h1>
<p>Date: Oct 20 4pm to 6pm</p>
<p>Activities List</p>
<ul>
  {props.activities.map((activity) => (
    <li key={activity.id}>
      <h2>Activity: {activity.name}</h2>
      <p>Description: {activity.description}</p>
      <p>Category: {activity.category}</p>
      <p>
        Vote Count: {activity.voteCount}
      </p>
    </li>
  ))}
</ul> */}