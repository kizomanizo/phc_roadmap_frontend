<template>
    <div>
        <h2>Home</h2>
        <!-- <p>This is the Home page</p> -->
        <p>{{ alert }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            alert: 'auth/alert',
        })
    },
}
</script>