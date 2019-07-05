const createStore = (reducer, inicialState) => {
    let store
    let listeners = []
    
    //--------- dispatch
    const dispatch = (action) => {
        store = reducer ? reducer(store, action) : {} 
        listeners.map(listener => {
            listener()
        })
    }
    //-------- subscribe
    const subscribe = (listener) => {
        listeners.push(listener)
        let listenerIndex = listeners.length - 1
        return () => {
            listeners.splice(listenerIndex, 1)
        }
    }

    //-------- getState
    const getState = () => {
        return store
    }

    //--------- store初始化
    if(inicialState) {
        store = inicialState
    }else {
        dispatch({})
    }
    
    //---------- output
    return { dispatch, subscribe, getState}
}


const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((state, key) => {
            state[key] = reducers[key](state[key], action)
            return state 
        }, state)
    }
}


const Redux = {
    createStore,
    combineReducers,
}