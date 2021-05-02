const initialState = {
  items: [],
};
const updateItems = (items, item, idx) => {
  if(item.count == 0){
    return [
      ...items.slice(0,idx),
      ...items.slice(idx+1)
    ]
  }

  if(idx == -1) {
    return [
      ...items,
      item
    ];
  }

  return [
    ...items.slice(0,idx),
    item,
    ...items.slice(idx+1)
  ]
}

const updateItem = (object,item,q) => {
  if(item) {
    return {
      ...item,
      count: item.count + q,
      totalPrice: item.newPrice * (item.count + q),
    }
  }
  return {
    discount: object.discount,
    id: object.id,
    image: object.image,
    newPrice:object.newPrice,
    oldPrice: object.oldPrice,
    title: object.title,
    count: 1,
    totalPrice:object.newPrice,
  }
}

const shablon = (state , object , q) => {
  const { items } = state
  const watchId = object.id;
  const itemIndex = items.findIndex(({id}) => id == watchId)
  const item = items[itemIndex]

  let newItem = updateItem(object, item, q)
  
  return {
    ...state,
    items: updateItems(items,newItem,itemIndex)
  }
}

const watchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      return shablon(state, action.payload, 1)
    }
    case 'DECREMENT':{
      return shablon(state, action.payload, -1)
    }
    case 'REMOVE' :{
      const item = state.items.find(({id}) => id == action.payload.id)
      return shablon(state, action.payload, -item.count)
    }
    default: {
      return state;
    }
  }
};
export default watchesReducer;


// const getTotalPrice = (arr) => {
//   return arr.reduce((sum, obj) => obj.newPrice + sum, 0);
// };

// const _get = (obj, path) => {
//   const [firstKey, ...keys] = path.split('.');
//   return keys.reduce((val, key) => {
//     return val[key];
//   }, obj[firstKey]);
// };

// const getTotalSum = (obj, path) => {
//   return Object.values(obj).reduce((sum, obj) => {
//     const value = _get(obj, path);
//     return sum + value;
//   }, 0);
// };