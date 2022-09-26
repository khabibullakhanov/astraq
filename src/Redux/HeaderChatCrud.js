const headerChatCrud = JSON.parse(localStorage.getItem("headerChats") || "[]");

export const reHeaderChatCrud = (state = headerChatCrud, action) => {
    switch (action.type) {
        case "ADD_HEADER_CHAT_CRUD":
            return [...state, action.payload];

        case "DELETE_HEADER_CHAT_CRUD":
            return state.filter((item) => item.id !== action.payload);


        case "UPDATE_HEADER_CHAT_CRUD":
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



export const acHeaderChatAddCrud = (payload) => ({
    type: "ADD_HEADER_CHAT_CRUD",
    payload,
});

export const acHeaderChatDeleteCrud = (id) => ({
    type: "DELETE_HEADER_CHAT_CRUD",
    payload: id,
});

export const acHeaderChatUpdateCrud = (payload) => ({
    type: "UPDATE_HEADER_CHAT_CRUD",
    payload,
});