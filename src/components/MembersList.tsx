import React, { ReactElement } from "react";
import { List, ListItem, ListItemAvatar, Avatar } from '@mui/material';

import angelAvatar from './../media/avatar/angel.jpg';
import annieAvatar from './../media/avatar/annie.jpg';
import dargaAvatar from './../media/avatar/darga.jpg';
import jillianAvatar from './../media/avatar/jillian.png';
import mariceAvatar from './../media/avatar/marice.jpg';
import mohammedAvatar from './../media/avatar/mohammad.jpg';
import victoriaAvatar from './../media/avatar/victoria.jpg';

export interface Member {
    id: number,
    name: string, 
    avatar: string
}

interface MembersListProps {
    members: Member[];
}

function MembersList(props: MembersListProps): ReactElement {
    
    //const avatarPath = "src/media/avatar/"
    return (

        <List>
            {props.members.map((member) => (
                <ListItem
                    key={member.id}
                    alignItems="flex-start"
                >
                    <ListItemAvatar>
                        <Avatar alt={member.name} src={member.avatar} />
                    </ListItemAvatar>
                </ListItem>
            ))}
        </List>
    )
}

export default MembersList;