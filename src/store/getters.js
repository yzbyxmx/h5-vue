/**
 * created by xumx 2019/3/1
 * */

export default { 
    user (state) {
        return state.user || {uid: '123456', name: 'test'}
    }
}