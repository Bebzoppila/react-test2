import { put, takeLatest } from 'redux-saga/effects'
import requestCategory from "../../api/catsApi"

function* fetchCategory() {
    try {
        const categoryParams = { 'limit': 4, }
        const allCatygory = yield requestCategory('https://api.thecatapi.com/v1/categories', categoryParams)
        yield put({ type: "SET_ALL_CATEGORY", payload: allCatygory.data });
    } catch (e) {
        yield put({ type: "FALI_ALL_CATEGORY", message: 'e.message' });
    }
}

function* categorySaga() {
    yield takeLatest("GALERY_FETCH_CATEGORY", fetchCategory);
}

export default categorySaga