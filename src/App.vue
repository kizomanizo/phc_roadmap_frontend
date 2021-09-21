<template>
        <div id="app">
            <Navigation />
            <b-container>
                <Form />
                <router-view/>
            </b-container>
        </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    export default {
        components: {
            Navigation,
        }
    }
</script>