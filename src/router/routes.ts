import {CREATE_NEW_SPACE, JOIN_SPACE} from "@/utils/routes_utils";
// @ts-expect-error
import NewSpacePage from "@/views/NewSpacePage.vue";
// @ts-expect-error
import JoinSpacePage from "@/views/JoinSpacePage.vue";
// @ts-expect-error
import SpaceChoosePage from "@/views/SpaceChoosePage.vue";

const routes = [
    {
        path: '/',
        component: SpaceChoosePage
    },
    {
        path: CREATE_NEW_SPACE,
        component: NewSpacePage
    },
    {
        path: JOIN_SPACE,
        component: JoinSpacePage
    }
]

export default routes;