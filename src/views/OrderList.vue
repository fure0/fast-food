<template>
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <h3>Cocking</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-if="getOrderList.length < 1"><h3>No Any Orders. Please Order</h3></v-col>
                    <v-col v-for="(orderlist, index) in getOrderList" :key="index">
                        <v-card max-width="200">
                            <v-card-title class="pb-0">Order No. {{orderlist.id}}</v-card-title>
                            <v-card-text class="text--primary">
                                <p v-for="(name, index) in orderlist.names" :key="index" class="mb-0">{{name}}</p>
                            </v-card-text>
                            <v-card-text class="text--primary">
                                Waiting Time: {{orderlist.time}}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                    <v-col>
                        <h3>Done</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="(donelist, index) in getDoneList" :key="index">
                        <v-card max-width="200">
                            <v-card-title class="pb-0">Order No. {{donelist.id}}</v-card-title>
                            <v-card-text class="text--primary">
                                <p v-for="(name, index) in donelist.names" :key="index" class="mb-0">{{name}}</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        getOrderList: state => state.orderList,
        getDoneList: state => state.doneList
    })
}

</script>