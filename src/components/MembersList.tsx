import React, { ReactElement } from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

export interface Member {
    id: number,
    name: string, 
    avatar: string
}

interface MembersListProps {
    members: Member[];
}

function MembersList(props: MembersListProps): ReactElement {
    
    const avatarPath = "./media/avatar/"
    return (

        <List>
            {props.members.map((member) => (
                <ListItem key={member.id}>
                    <ListItemAvatar>
                        <Avatar alt={member.name} src={member.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={member.name}/>
                </ListItem>
            ))}
        </List>
    )
}

export default MembersList;