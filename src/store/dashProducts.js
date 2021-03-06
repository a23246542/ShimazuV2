import axios from 'axios';

export default {
  state: {
    products: [],
    pagination: {},
    tempProduct: {}, // 在 Modal 中的商品資訊
    isNew: false, // 先預設為 false
  },
  mutations: {
    DASHPRODUCTS(state, payload) {
      state.products = payload;
    },
    DASHPROPAGINATION(state, payload) {
      state.pagination = payload;
    },
    EDITPRODUCT(state, { isNew, item }) {
      if (isNew) {
        state.tempProduct = {};
        state.isNew = true;
      } else {
        // 把點選到的商品資訊 assign 給 Modal 顯示
        state.tempProduct = Object.assign({}, item);
        state.isNew = false;
      }
    },
    DELPROMODAL(state, item) {
      // 將所點選的產品資料帶入
      state.tempProduct = item;
    },
  },
  actions: {
    // 後台的產品列表
    getProducts(context, page) {
      // 該 API 透過分頁切換而取得產品列表
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      // 開啟 loading
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        // 關閉 loading
        context.commit('LOADING', false);
        // 存到陣列裡
        context.commit('DASHPRODUCTS', response.data.products);
        context.commit('DASHPROPAGINATION', response.data.pagination);
      });
    },
    openProModal(context, { isNew, item }) {
      context.commit('EDITPRODUCT', { isNew, item });
    },
    updateProduct(context) {
      // api 改用 let 宣告
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      // 先預設 http 方法為 post
      let httpMethod = 'post';
      // 如果是修改產品，就改用另一個 API 路徑跟方法
      if (!context.state.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${context.state.tempProduct.id}`;
        httpMethod = 'put';
      }
      // http 方法用中括號變數選取
      axios[httpMethod](api, { data: context.state.tempProduct }).then(
        (response) => {
          if (response.data.success) {
            context.dispatch('getProducts');
          } else {
            context.dispatch('getProducts');
            const { message } = response.data;
            const status = 'danger';
            context.dispatch('updateMessage', { message, status });
          }
        },
      );
    },
    deleteProModal(context, item) {
      context.commit('DELPROMODAL', item);
    },
    delProduct(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${context.state.tempProduct.id}`;
      axios.delete(api).then((response) => {
        if (response.data.success) {
          context.dispatch('getProducts');
        } else {
          const { message } = response.data;
          const status = 'danger';
          context.dispatch('updateMessage', { message, status });
          context.dispatch('getProducts');
        }
      });
    },
  },
  modules: {},
};
