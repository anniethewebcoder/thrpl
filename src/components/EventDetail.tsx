import MembersList from './MembersList';
import { List, ListItem, ListItemAvatar, Avatar} from '@mui/material';
import { MEMBERS_MOCK } from './mockmembers';
function EventDetail() {
    return (
        <>
            <MembersList members={MEMBERS_MOCK} />

        </>
    )
}

export default EventDetail;