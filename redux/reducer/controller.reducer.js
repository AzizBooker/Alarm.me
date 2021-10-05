

const initialState={
isActive:true

}

function ControllerReducer(state=initialState,action){
    switch(action.type){
        case 'controller/isActive':
        console.log('controller/toggleIsActive')
        return({
            ...state,isActive:!isActive
        })
        break;
        case "controller/setIsActive":
            console.log('controller/setIsActive')
            return({
                ...state,isActive:action.payload
            })
        default:
        return({
            ...state
        })
        break;
    }
}

export default ControllerReducer