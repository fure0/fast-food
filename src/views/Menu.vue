<template>
    <v-container>
        <v-row>
            <v-col>
                <h3>Burgers</h3>
            </v-col>
        </v-row>
        <v-row class="text-left" align="start" justify="start">
            <v-col class="mb-4" v-for="burger in getBurgers" :key="burger.id">
                <v-card max-width="200">
                    <v-img
                        class="white--text align-end"
                        height="150px"
                        :src="getImgUrl(burger.path)">
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
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Drinks</h3>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col class="mb-4" v-for="drink in getDrinks" :key="drink.id">
                <v-card max-width="200">
                    <v-img
                        class="white--text align-end"
                        height="150px"
                        :src="getImgUrl(drink.path)">
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
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col>
                <v-btn outlined color="indigo">order</v-btn>
                <h3 style="display:inline; margin-left:20px">Total : {{getTotal}} $</h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        getBurgers: state => state.burger,
        getDrinks: state => state.drink,
        getTotal: state => state.total
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
        }
    }
}

</script>