const contact = JSON.parse(localStorage.getItem("contactUsers") || "[]");

export const reContactCrud = (state = contact, action) => {
    switch (action.type) {
        case "ADD_CONTACT_CRUD":
            return [...state, action.payload];

        case "DELETE_CONTACT_CRUD":
            return state.filter((item) => item.id !== action.payload);


        case "UPDATE_CONTACT_CRUD":
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



export const acContactAddCrud = (payload) => ({
    type: "ADD_CONTACT_CRUD",
    payload,
});

export const acContactDeleteCrud = (id) => ({
    type: "DELETE_CONTACT_CRUD",
    payload: id,
});

export const acContactUpdateCrud = (payload) => ({
    type: "UPDATE_CONTACT_CRUD",
    payload,
});