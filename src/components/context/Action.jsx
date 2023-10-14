

export let Action = (state, action) => {
    switch(action.type){
        case "ADD":
            return {
               transaction: [
                ...state.transaction,
                {
                    discription: action.dis,
                    amount: action.amount,
                    id: action.id
                }
               ]
            }
        case "REMOVE":
            return {
                transaction: state.transaction.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}