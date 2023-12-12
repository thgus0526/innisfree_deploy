import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapCom from './WrapCom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import topModal from './reducer/topModal';
import mainModal from './reducer/mainModal';
import searchModal from './reducer/searchModal';
import shoppingModal from './reducer/shoppingModal';
import viewProduct from './reducer/viewProduct';
import quickMenuViewProduct from './reducer/quickMenuViewProduct';
import viewProductIsFlag from './reducer/viewProductIsFlag';
import shoppingBasketModal from './reducer/shoppingBasketModal';
import confirmModal from './reducer/confirmModal.js';
import moreViewModal from './reducer/moreViewModal.js';
import messageModal from './reducer/messageModal.js'; 
import address from './reducer/address.js';
import addressSearch from './reducer/addressSearch.js';
import signIn from './reducer/signIn.js';
import adminsignIn from './reducer/adminsignIn.js';
import hpUpdateModal from './reducer/hpUpdateModal';
import hpUpdateNumber from './reducer/hpUpdateNumber';

let store = configureStore({
  reducer: {
    topModal,
    mainModal,
    searchModal,
    shoppingModal,
    viewProduct,
    quickMenuViewProduct,
    viewProductIsFlag,
    shoppingBasketModal,
    confirmModal,
    moreViewModal,
    messageModal,
    address,
    addressSearch,
    signIn,
    adminsignIn,
    hpUpdateModal,
    hpUpdateNumber
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrapCom />
    </Provider>
  </React.StrictMode>
);