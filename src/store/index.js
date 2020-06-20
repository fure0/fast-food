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
      count: 0
    },
    {
      id : 2,
      name : "bigmac burger",
      price : 4,
      time : 10,
      count: 0
    },
    {
      id : 3,
      name : "spicy burger",
      price : 2,
      time : 8,
      count: 0
    },
    {
      id : 4,
      name : "cheese burger",
      price : 3,
      time : 8,
      count: 0
    }],
    drink: [{
      id : 1,
      name : "coca cola",
      price : 2,
      time : 5,
      count: 0
    },
    {
      id : 2,
      name : "sprite",
      price : 1,
      time : 5,
      count: 0
    },
    {
      id : 3,
      name : "zero cola",
      price : 1,
      time : 6,
      count: 0
    },
    {
      id : 4,
      name : "fanta",
      price : 1,
      time : 4,
      count: 0
    }],
    orderList: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
