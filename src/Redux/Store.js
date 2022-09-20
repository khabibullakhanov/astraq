import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reContactCrud } from "./ContactCrud";
import { reCrud } from "./CRUD"
import { reEmailCrud } from "./EmailCrud";
import { reKanbanCrud } from "./KanbanCrud";
import { reLoading } from "./Loading";
import { reBankingCrud } from "./BankingCrud";
import { reEmailLeftCrud } from "./EmailLeft";

const reducer = combineReducers({
  crud: reCrud,
  emailCrud: reEmailCrud,
  reLoading,
  reContactCrud,
  reKanbanCrud,
  reBankingCrud,
  reEmailLeftCrud,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});