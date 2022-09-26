export const reSearch = (state = [], action) => {
    switch (action.type) {
        case "SEARCH_USERS":
            return state.filter((value) => {
                if (action.payload === "") {
                    return value;
                } else if (
                    value.name
                        .toLocaleLowerCase()
                        .includes(action.payload.toLocaleLowerCase()) ||
                    value.job
                        .toLocaleLowerCase()
                        .includes(action.payload.toLocaleLowerCase())
                ) {
                    return value.name;
                    return value.job;
                } else {
                }
            })
    }
}

export const acSearch = (payload) => ({
    type: "SEARCH_USERS",
    payload,
});