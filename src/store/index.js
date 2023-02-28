import { createStore } from "vuex";

import explore from "./modules/explore";
import user from "./modules/user";
import film from "./modules/film";
import fujifilm from "./modules/fujifilm";
import card from "./modules/card";
export default createStore({
    modules: {
        card,
        user,
        explore,
        film,
        fujifilm
    }
})