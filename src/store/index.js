import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter:0,
    burger: [{
      id : 1,
      name : "chicken burger",
      price : 3,
      time : 10,
      count: 0,
      path: "chicken-burger.jpg"
    },
    {
      id : 2,
      name : "bigmac burger",
      price : 4,
      time : 10,
      count: 0,
      path: "bigmac.jpg"
    },
    {
      id : 3,
      name : "spicy burger",
      price : 2,
      time : 8,
      count: 0,
      path: "spicy-burger.jpg"
    },
    {
      id : 4,
      name : "cheese burger",
      price : 3,
      time : 8,
      count: 0,
      path: "cheese-burger.jpg"
    }],
    drink: [{
      id : 1,
      name : "coca cola",
      price : 2,
      time : 5,
      count: 0,
      path: "coca-cola.jpg"
    },
    {
      id : 2,
      name : "sprite",
      price : 1,
      time : 5,
      count: 0,
      path: "sprite.jpg"
    },
    {
      id : 3,
      name : "zero cola",
      price : 1,
      time : 6,
      count: 0,
      path: "zero-cola.jpg"
    },
    {
      id : 4,
      name : "fanta",
      price : 1,
      time : 4,
      count: 0,
      path: "fanta.jpg"
    }],
    orderList: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
