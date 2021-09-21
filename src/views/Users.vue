<template>
    <div id="app">
        <b-row class="p-4">
        <b-col>
        <b-table :items="items" :fields="fields" fixed>
            <template 
            :slot="field.key" 
            v-for="field in editableFields"
            slot-scope="{ item, value }"
            >
            <span v-if="!item.editing">
                {{ value }}
            </span>
            <!-- <b-input v-else v-model="item.temp[field.key]" @keydown.enter.exact="doSave(item)"></b-input> -->
            </template>
            <template slot="active" slot-scope="{ value, item }">
            <span v-if="!item.editing">
                <span v-if="value">✔</span>
                <span v-else>✖</span>
            </span>
            <span v-else>
                <b-checkbox v-model="item.temp['active']"></b-checkbox>
            </span>
            </template>
            <template slot="actions" slot-scope="{ item }">
            <b-btn v-if="!item.editing" @click="doEdit(item)" variant="primary">
                Edit    
            </b-btn>
            <b-btn v-if="item.editing" @click="doSave(item)" variant="success">
                Save
            </b-btn>
            <b-btn v-if="item.editing" @click="doCancel(item)" variant="info">
                Cancel
            </b-btn>
            </template>
        </b-table>
        </b-col>
    </b-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'dashboard',
    components: {
        
    },

    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            users: 'users/list',
            alert: 'auth/alert',
        }),
        editableFields() {
            return this.fields.filter(field => { return field.editable === true })
        },
        data() {
            return {
                fields: [
                { key: 'id', sortable: true },
                { key: 'firstName', editable: true  },
                { key: 'lastName', editable: true  },
                { key: 'age', sortable: true, editable: true },
                { key: 'active'},
                { key: 'actions', class: 'text-center' }
                ],
                items: [
                { id: 1, firstName: 'Mikkel', lastName: 'Hansen', age: 65, active: true },
                { id: 2, firstName: 'Mads', lastName: 'Mikkelsen', age: 49, active: true },
                { id: 3, firstName: 'Mia', lastName: 'Moody', age: 19, active: false },
                ]
            }
        },
        methods: {
            doEdit(item) {
                this.$set(item, 'temp', JSON.parse(JSON.stringify(item)))
                this.$set(item, 'editing', true)
            },
            doSave(item) {
                this.$set(item, 'editing', false)
                for(let key in item.temp){
                if(item[key] != item.temp[key]){
                    item[key] = item.temp[key]
                }
                }s
            },
            doCancel(item) {
                this.$set(item, 'editing', false)
                this.$delete(item, 'temp')
            }
        }
    },
        
    
}
</script>