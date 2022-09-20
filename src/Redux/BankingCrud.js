const banking = JSON.parse(localStorage.getItem("bankingUsers") || "[]");

export const reBankingCrud = (state = banking, action) => {
    switch (action.type) {
        case "ADD_BANKING_CRUD":
            return [...state, action.payload];

        case "DELETE_BANKING_CRUD":
            return state.filter((item) => item.id !== action.payload);


        case "UPDATE_BANKING_CRUD":
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...action.payload };
                }
                return item;
            });

        default:
            return state;
    }
};



export const acBankingAddCrud = (payload) => ({
    type: "ADD_BANKING_CRUD",
    payload,
});

export const acBankingDeleteCrud = (id) => ({
    type: "DELETE_BANKING_CRUD",
    payload: id,
});

export const acBankingUpdateCrud = (payload) => ({
    type: "UPDATE_BANKING_CRUD",
    payload,
});