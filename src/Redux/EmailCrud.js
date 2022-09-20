const email = JSON.parse(localStorage.getItem("emailUsers") || "[]");

export const reEmailCrud = (state = email, action) => {
    switch (action.type) {
        case "ADD_EMAIL_CRUD":
            return [...state, action.payload];

        case "DELETE_EMAIL_CRUD":
            return state.filter((item) => item.id !== action.payload);


        case "UPDATE_EMAIL_CRUD":
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



export const acEmailAddCrud = (payload) => ({
    type: "ADD_EMAIL_CRUD",
    payload,
});

export const acEmailDeleteCrud = (id) => ({
    type: "DELETE_EMAIL_CRUD",
    payload: id,
});

export const acEmailUpdateCrud = (payload) => ({
    type: "UPDATE_EMAIL_CRUD",
    payload,
});