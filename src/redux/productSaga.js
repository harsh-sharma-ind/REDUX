import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

function* getProducts(){
    console.warn("call api")
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
  result = yield result.json();
  console.warn("action is called", result)
  yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga()
{
  yield takeEvery(PRODUCT_LIST, getProducts)
  yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga;