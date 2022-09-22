import * as Actions from "../actionTypes";

const initialState = {
  items: [],
  addedItems: [],
  total: 0,
  addProduct: false,
  removeProduct: false,
  orderPlace: false,
  orderReciept: [],
  order_id: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.CART_PRODUCT_FETCH_ALL:
      return {
        ...state,
        items: action.payload,
      };
    case Actions.CART_PRODUCT_FETCH_FAIL:
      return {
        ...state,
        items: action.data.payload,
      };
    case Actions.ADD_TO_CART:
      var itemsArry = action.allProduct;
      let existed_item;
      let addedItem = itemsArry.find((item) => item.id === action.id);
      console.log("State :", state.addedItems);
      if (state.addedItems !== undefined) {
        console.log("Array State", state.addedItems);
        existed_item = state.addedItems.find((item) => action.id === item.id);
        console.log("Existed Items State ", existed_item);
        if (existed_item) {
          addedItem.quantity += 1;
          return {
            ...state,
            total: state.total + addedItem.amount,
            addProduct: true,
          };
        } else {
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.amount;
          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            orderReciept: [...state.addedItems, addedItem],
            total: newTotal,
            addProduct: true,
          };
        }
      } else {
        console.log("Array Inital State", initialState.addedItems);
        existed_item = initialState.addedItems.find(
          (item) => action.id === item.id
        );
        console.log("existed Items 2", existed_item);
        if (existed_item) {
          addedItem.quantity += 1;
          return {
            ...initialState,
            total: initialState.total + addedItem.amount,
            addProduct: true,
          };
        } else {
          addedItem.quantity = 1;
          return {
            ...initialState,
            addedItems: [...initialState.addedItems, addedItem],
            orderReciept: [...initialState.addedItems, addedItem],
            total: newTotal,
            addProduct: true,
          };
        }
      }
    case Actions.REMOVE_TO_CART:
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      console.log("itemToRemove :", itemToRemove);
      let new_items = state.addedItems.filter((item) => action.id !== item.id);
      console.log("new_items :", new_items);
      let newTotal = state.total - itemToRemove.amount * itemToRemove.quantity;
      console.log(
        "newTotal :",
        state.total,
        itemToRemove.amount,
        itemToRemove.quantity,
        newTotal
      );
      return {
        ...state,
        addedItems: new_items,
        orderReciept: new_items,
        total: newTotal,
        removeProduct: true,
      };
    case Actions.ADD_QUANTITY:
      var itemsArry = action.addedItems;
      let addItem = itemsArry.find((item) => item.id === action.id);
      addItem.quantity += 1;
      let newAddTotal = state.total + addItem.amount;
      return {
        ...state,
        total: newAddTotal,
      };
    case Actions.SUBTRACT_QUANTITY:
      var itemsArry = action.addedItems;
      let subItem = itemsArry.find((item) => item.id === action.id);
      if (subItem.quantity === 1) {
        let new_items = itemsArry.filter((item) => item.id !== action.id);
        let newTotal = state.total - subItem.amount;
        return {
          ...state,
          addedItems: new_items,
          orderReciept: new_items,
          total: newTotal,
        };
      } else {
        subItem.quantity -= 1;
        let newTotal = state.total - subItem.amount;
        return {
          ...state,
          total: newTotal,
        };
      }
    case Actions.CART_PRODUCT_PAYMENT_SUCCESS:
      console.log("Cart Success :", initialState.addedItems);
      return {
        ...state,
        addedItems: initialState.addedItems,
        total: initialState.total,
      };
    case Actions.REFRESH_PRODUCT_FLAG:
      return {
        ...state,
        addProduct: initialState.addProduct,
        removeProduct: initialState.removeProduct,
      };
    case Actions.ORDER_PLACE_SUCCESS:
      return {
        ...state,
        addedItems: initialState.addedItems,
        order_id: action.payload,
        orderPlace: true,
      };
    case Actions.REFRESH_ORDER_FLAG:
      return {
        ...state,
        orderPlace: false,
      };
    case Actions.REFRESH_ORDER_RECIEPT:
      return {
        ...state,
        orderReciept: initialState.orderReciept
      };
    default:
      return state;
  }
};
