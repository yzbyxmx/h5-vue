import { UPDATE_USER_INFO } from './mutation-types'

export default { 
    [UPDATE_USER_INFO] (state, {uid, name}) {
        state.user = {
            uid,
            name
        }
    }
}