<template>
    <div>
        <template>
            <h2>Settings</h2>
            <p>{{ message }}</p>
            <div>
                <div v-for="(api, index) in apis" :key="api.id" :value="api.value">
                    <strong>{{index}}:</strong>
                    <a v-bind:href="''">
                        {{ api }}
                    </a>
                </div>
            </div>
        </template>
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
            apis: 'settings/list',
            alert: 'auth/alert',
            message: 'auth/message',
        })
    },
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        // fields: ['firstname', 'lastname', 'age'],
        // items: [users]
      }
    },

}
</script>