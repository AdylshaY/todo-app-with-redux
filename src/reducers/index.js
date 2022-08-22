import { EKLE, ISARETLE, TEMIZLE } from "../actions";

const INITIAL_STATE = {
  list: [
    { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
    { id: 2, baslik: "Fatura ode", tamamlandi: true },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EKLE:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            baslik: action.payload,
            tamamlandi: false,
          },
        ],
      };
    case ISARETLE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, tamamlandi: !item.tamamlandi }
            : item
        ),
      };
    case TEMIZLE:
      return {
        ...state,
        list: state.list.filter((item) => item.tamamlandi === false),
      };
    default:
      return state;
  }
};
