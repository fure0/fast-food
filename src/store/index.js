import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  data: {
    
  },
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
    orderList: [],
    doneList: []
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
    },
    resetOrderCheck: function(state) {
      state.orderCheckList.names = [];
      state.orderCheckList.price = 0;
      state.orderCheckList.time = 0; 
    },
    addOrder: function(state, obj) {
      state.orderList.push(JSON.parse(JSON.stringify(obj))); //shallow copy
      console.log(state.orderList);
      
      //state.orderCheckList.id++;
    },
    resetSelectedCount: function(state) {
      state.burger.forEach(data => {
        data.count = 0;
      });
      state.drink.forEach(data => {
        data.count = 0;
      });
      state.total = 0;
    },
    countDown: function(state, obj) {
      var it = this;

      if(obj.time !=0) {
        obj.time--;
      } else {
        it.commit('addDoneList', obj);
        it.commit('deleteList', obj.id);
        //$store.commit("addDoneList", data);
      }

    },
    addDoneList: function(state, obj) {
      console.log("add done list");
      state.doneList.push(obj);
      console.log(state.doneList);
    },
    deleteList: function(state, index) { //todo
      state.orderList.splice(index, 1);
      console.log("delete index " +index);
      console.log(state.orderList);
    }
  },
  actions: {
    countDown: function(context, obj) {

      var thread = setInterval(function(){ 
        context.commit('countDown', obj);
      }, 1000);

      setTimeout(function(){
        clearInterval(thread);
        console.log("clearInterval");
      },obj.time * 1000);

    }
  },
  modules: {}
});
