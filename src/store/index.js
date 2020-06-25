import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter:0,
    burger: [{
      id: 1,
      name: "chicken burger",
      price: 3,
      time: 10,
      count: 0,
      path: "chicken-burger.jpg",
      type: "b"
    },
    {
      id: 2,
      name: "bigmac burger",
      price: 4,
      time: 10,
      count: 0,
      path: "bigmac.jpg",
      type: "b"
    },
    {
      id: 3,
      name: "spicy burger",
      price: 2,
      time: 8,
      count: 0,
      path: "spicy-burger.jpg",
      type: "b"
    },
    {
      id: 4,
      name: "cheese burger",
      price: 3,
      time: 8,
      count: 0,
      path: "cheese-burger.jpg",
      type: "b"
    }],
    drink: [{
      id: 1,
      name: "coca cola",
      price: 2,
      time: 5,
      count: 0,
      path: "coca-cola.jpg",
      type: "d"
    },
    {
      id: 2,
      name: "sprite",
      price: 1,
      time: 5,
      count: 0,
      path: "sprite.jpg",
      type: "d"
    },
    {
      id: 3,
      name: "zero cola",
      price: 2,
      time: 6,
      count: 0,
      path: "zero-cola.jpg",
      type: "d"
    },
    {
      id: 4,
      name: "fanta",
      price: 1,
      time: 4,
      count: 0,
      path: "fanta.jpg",
      type: "d"
    }],
    total: 0,
    orderCheckList: {
      id: 1,
      names: [],
      price: 0,
      time: 0
    },
    orderList: []
  },
  mutations: {
    addCounter: function(state, obj) {
      if (obj.type === "b") {
        state.burger[obj.id-1].count++;
        state.total = state.total + state.burger[obj.id-1].price;
      } else {
        state.drink[obj.id-1].count++;
        state.total = state.total + state.drink[obj.id-1].price;
      }
    },
    removeCounter: function(state, obj) {
      if (obj.type === "b") {
        if (state.burger[obj.id-1].count !== 0) {
          state.burger[obj.id-1].count--;
          state.total = state.total - state.burger[obj.id-1].price;
        }
      } else {
        if (state.drink[obj.id-1].count !== 0) {
          state.drink[obj.id-1].count--;
          state.total = state.total - state.drink[obj.id-1].price;
        }
      }
    },
    checkOrder: function(state) {
      state.burger.forEach(data => {
        if (data.count > 0) {
          state.orderCheckList.names.push(data.name + " x " +data.count);
          state.orderCheckList.price = state.orderCheckList.price + data.price * data.count;
          state.orderCheckList.time = state.orderCheckList.time + data.time * data.count;
        }
      });
      state.drink.forEach(data => {
        if (data.count > 0) {
          state.orderCheckList.names.push(data.name + " x " +data.count);
          state.orderCheckList.price = state.orderCheckList.price + data.price * data.count;
          state.orderCheckList.time = state.orderCheckList.time + data.time * data.count;
        }
      });
      console.log(state.orderCheckList);
    },
    resetOrderCheck: function(state) {
      state.orderCheckList.names = [];
      state.orderCheckList.price = 0;
      state.orderCheckList.time = 0; 
    }
  },
  actions: {},
  modules: {}
});
