export { persistor, wrapper, store } from "./store";
export type { IRootReducer } from "./store";

export {
  setCountCart,
  setShowAnimationCart,
  addItemCart,
  itemCountChange,
  initialItems,
  clearCartItems,
} from "./slices/cartSlice";
export { setCountFavorites, setUpdateFavorites } from "./slices/favoritesSlice";
export {
  setCountPayments,
  setShowAnimationPayments,
  setUpdatePayments,
  setStatusPayment,
  setIdPayment,
  resetPaymentState,
} from "./slices/paymentsSlice";
export {
  changeUserProfileType,
  setDataProfile,
  setShowAnimationProfile,
  setShowImpersonation,
  setShowWalletConfirm,
  resetProfileState,
} from "./slices/profileSlice";
export { setOpenModalSign } from "./slices/signSlice";
export {
  setShowAppInfo,
  setShowWelcomeModal,
  setShowMarketplaceAgreement,
  setDisableScroll,
  UIShowAppInfo,
} from "./slices/UISlice";
export { setSubscribe } from "./slices/notificationSlice";

export type { UserType } from "./slices/profileSlice";
export type { ITypeModalState } from "./slices/signSlice";
export type { TTypeCartItemCountChange } from "./slices/cartSlice";
