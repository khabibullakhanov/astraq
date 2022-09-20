const emailLeft = JSON.parse(localStorage.getItem("emailLeftMessages") || "[]");

export const reEmailLeftCrud = (state = emailLeft, action) => {
    switch (action.type) {
        case "ADD_EMAIL_LEFT_CRUD":
            return [...state, action.payload];

        case "DELETE_EMAIL_LEFT_CRUD":
            return state.filter((item) => item.id !== action.payload);


        case "UPDATE_EMAIL_LEFT_CRUD":
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



export const acEmailLeftAddCrud = (payload) => ({
    type: "ADD_EMAIL_LEFT_CRUD",
    payload,
});

export const acEmailLeftDeleteCrud = (id) => ({
    type: "DELETE_EMAIL_LEFT_CRUD",
    payload: id,
});

export const acEmailLeftUpdateCrud = (payload) => ({
    type: "UPDATE_EMAIL_LEFT_CRUD",
    payload,
});