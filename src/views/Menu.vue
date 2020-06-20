<template>
    <v-container>
        <v-row>
            <v-col>
                <h3>Burgers</h3>
            </v-col>
        </v-row>
        <v-row class="text-left" align="start" justify="start">
            <v-col class="mb-4" v-for="buger in getBurgers" :key="buger.id">
                <v-card max-width="200">
                    <v-img
                        class="white--text align-end"
                        height="150px"
                        :src="getImgUrl(buger.path)">
                    </v-img>
                    <v-card-title class="pb-0">{{buger.id}}. {{buger.name}}</v-card-title>
                    <v-card-text class="text--primary">
                        Price : {{buger.price}}$
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="orange" text width="30">-</v-btn>
                            {{buger.count}}
                        <v-btn color="orange" text width="30" class="ml-0">+</v-btn>
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
                        <v-btn color="orange" text width="30">-</v-btn>
                            {{drink.count}}
                        <v-btn color="orange" text width="30" class="ml-0">+</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        getBurgers: state => state.burger,
        getDrinks: state => state.drink
    }),
    methods: {
        getImgUrl(pic) {
            return require('../assets/'+pic)
        }
    }
}

</script>