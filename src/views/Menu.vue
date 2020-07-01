<template>
    <v-container>
        <v-row>
            <v-col>
                <h3>Burgers</h3>
            </v-col>
        </v-row>
        <v-row class="text-left" align="start" justify="start">
            <v-col class="mb-4" v-for="burger in getBurgers" :key="burger.id">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card max-width="200" :elevation="hover ? 16 : 2">
                        <v-img
                            class="white--text align-end"
                            height="150px"
                            :src="getImgUrl(burger.path)"
                            @click="addCounter(burger)">
                        </v-img>
                        <v-card-title class="pb-0">{{burger.id}}. {{burger.name}}</v-card-title>
                        <v-card-text class="text--primary">
                            Price : {{burger.price}}$
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn color="orange" text width="30" @click="removeCounter(burger)">-</v-btn>
                                {{burger.count}}
                            <v-btn color="orange" text width="30" class="ml-0" @click="addCounter(burger)">+</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Drinks</h3>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col class="mb-4" v-for="drink in getDrinks" :key="drink.id">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card max-width="200" :elevation="hover ? 16 : 2">
                        <v-img
                            class="white--text align-end"
                            height="150px"
                            :src="getImgUrl(drink.path)"
                            @click="addCounter(drink)">
                        </v-img>
                        <v-card-title class="pb-0">{{drink.id}}. {{drink.name}}</v-card-title>
                        <v-card-text class="text--primary">
                            Price : {{drink.price}}$
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn color="orange" text width="30" @click="removeCounter(drink)">-</v-btn>
                                {{drink.count}}
                            <v-btn color="orange" text width="30" class="ml-0" @click="addCounter(drink)">+</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col>
                <v-btn outlined color="indigo" @click="checkOrder()">check order</v-btn>
                <v-btn outlined color="indigo" @click="resetSelectCount()" style="display:inline; margin-left:20px">reset select</v-btn>
                <h3 style="display:inline; margin-left:20px">Total : {{getTotal}} $</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">Check order list</v-card-title>
                <v-card-text class="pb-2" v-for="list in getOrderCheckList.names" :key="list"><h3>{{list}}</h3></v-card-text>
                <v-card-text><h2>Total: {{getOrderCheckList.price}}$ , Watings: {{getOrderCheckList.time}}s</h2></v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="controlModal1(false)">Close</v-btn>
                    <v-btn color="green darken-1" text @click="addOrder()">Order</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data: () => ({
        dialog: false,
        orderCheckList: ""
    }),
    computed: mapState({
        getBurgers: state => state.burger,
        getDrinks: state => state.drink,
        getOrderCheckList: state => state.orderCheckList,
        getTotal: state => state.total,
        getModal: state => state.modal1
    }),
    methods: {
        getImgUrl(pic) {
            return require('../assets/'+pic)
        },
        addCounter(obj) {
            this.$store.commit('addCounter', obj);
        },
        removeCounter(obj) {
            this.$store.commit('removeCounter', obj);
        },
        checkOrder() {
            this.$store.commit('checkOrder');
            this.controlModal1(true);
        },
        controlModal1(b) {
            if (!b) {
                this.$store.commit('resetOrderCheck');
            } 
            this.orderCheckList = JSON.parse(JSON.stringify(this.getOrderCheckList));
            this.dialog = b;
        },
        addOrder() {
            this.$store.commit('addOrder', this.orderCheckList);
            this.$store.commit('resetOrderCheck');
            //this.$store.dispatch('countDown', this.orderCheckList);
            this.resetSelectCount();
            this.dialog = false;
        },
        resetSelectCount() {
            this.$store.commit('resetSelectedCount');
        }
    }
}

</script>