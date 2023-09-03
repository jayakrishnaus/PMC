import {createStore} from "vuex"
import  pmc from "./pmc"

const store = createStore({
    modules: {
        pmc,
    }
})
export default store