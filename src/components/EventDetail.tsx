import MembersList from './MembersList';
import { List, ListItem, ListItemAvatar, Avatar} from '@mui/material';
import { MEMBERS_MOCK } from './mockmembers';
import ActivitiesList from './ActivitiesList';
import { ACTIVITIES_MOCK } from "./mocklist";
function EventDetail() {
    return (
        <>
            <h2>Guests</h2>
            <MembersList members={MEMBERS_MOCK} />
            <h2>Suggested Activities</h2>
            <ActivitiesList activities={ACTIVITIES_MOCK}/>
        </>
    )
}

export default EventDetail;