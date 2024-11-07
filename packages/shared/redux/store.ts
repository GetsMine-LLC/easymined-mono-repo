import {
  Action,
  configureStore,
  combineReducers,
  ThunkAction,
  EnhancedStore,
} from "@reduxjs/toolkit";
import * as localforage from "localforage";

import { persistStore, persistReducer } from "redux-persist";
import { createWrapper, MakeStore } from "next-redux-wrapper";

import cartReducer, { ICartState } from "./slices/cartSlice";
import favoritesRedicer, { IFavoritesState } from "./slices/favoritesSlice";
import paymentsReducer, { IPaymentsState } from "./slices/paymentsSlice";
import notificationsRedicer, {
  INotitificationsState,
} from "./slices/notificationSlice";
import profileReducer, { IProfileState } from "./slices/profileSlice";
import signReducer, { ISignState } from "./slices/signSlice";
import UIReducer, { IUIState } from "./slices/UISlice";

const isServer = typeof window === "undefined";

export interface IRootReducer {
  cart: ICartState;
  favorites: IFavoritesState;
  sign: ISignState;
  profile: IProfileState;
  payments: IPaymentsState;
  notifications: INotitificationsState;
  ui: IUIState;
}

const appStore = localforage.createInstance({
  name: "app",
});

const persistConfig = {
  key: "root",
  storage: appStore,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesRedicer,
  sign: signReducer,
  profile: profileReducer,
  payments: paymentsReducer,
  notifications: notificationsRedicer,
  ui: UIReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = isServer
  ? configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }),
    })
  : configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }),
      devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
    });

const setupStore = (): EnhancedStore => store;

const makeStore: MakeStore<any> = () => setupStore();

export const persistor = persistStore(store);

export const wrapper: any = createWrapper<Store>(makeStore);

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
