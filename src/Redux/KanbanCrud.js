const kanban = JSON.parse(localStorage.getItem("kanbanUsers") || "[]");

export const reKanbanCrud = (state = kanban, action) => {
    switch (action.type) {
        case "ADD_KANBAN_CRUD":
            return [...state, action.payload];

        case "DELETE_KANBAN_CRUD":
            return state.filter((item) => item.id !== action.payload);


        case "UPDATE_KANBAN_CRUD":
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



export const acKanbanAddCrud = (payload) => ({
    type: "ADD_KANBAN_CRUD",
    payload,
});

export const acKanbanDeleteCrud = (id) => ({
    type: "DELETE_KANBAN_CRUD",
    payload: id,
});

export const acKanbanUpdateCrud = (payload) => ({
    type: "UPDATE_KANBAN_CRUD",
    payload,
});