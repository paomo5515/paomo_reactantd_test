import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

import saga from "./saga.js";
import reducercopy from "./reducercopy";

import createSagaMiddleware from "redux-saga"

// chrome 插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 2.创建sagaMiddleware 中间件
const sagaMiddleware = createSagaMiddleware()


// 应用一些中间件
const storeEnhancer = applyMiddleware(thunk ,sagaMiddleware)
const store = createStore(reducercopy, composeEnhancers(storeEnhancer))
// trace 表示是否需要跟踪

sagaMiddleware.run(saga)

export default store;  