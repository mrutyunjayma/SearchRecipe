import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
function* fetchRecipes(action) {
  const API_URL = `https://api.edamam.com/search?q=${action.query}&app_id=75838b84&app_key=27ed0cae528d13cbb64a2ce7cb1f8b3c`;
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: "SET_RECIPE", data: response.data.hits });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

export default function* rootSaga() {
  yield takeLatest("SEARCH_RECIPE", fetchRecipes);
}
