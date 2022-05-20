const initialState = {
  productos: [],
  error: null, //false
  loading: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
