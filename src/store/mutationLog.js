// 记录每次城市变更记录，便于撤销操作
export default store => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
        // if (
        //     mutation.payload.key === 'array'
        //     && Object.keys(mutation.payload.value).some(x => x === 'currCity')
        // ) {
        //     state.cityMutationLog.unshift(mutation.payload.value.currCity)
        // } else if (mutation.payload.key === 'currCity') {
        //     state.cityMutationLog.unshift(mutation.payload.value)
        // }

        // if (state.cityMutationLog.length > 10) {
        //     state.cityMutationLog = state.cityMutationLog.slice(0, 10)
        // }
        // store.commit('setByField', )
    })
}
