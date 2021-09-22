<template>
    <div>
        <template>
            <h2>Investment Summary Report</h2>
            <template>
                <div v-for="(report, index) in reports" :key="report.id">
                    <div class="p-3 mb-2 bg-secondary text-white">
                        <h3>Strategic Goal {{ index+1 }}: {{ report.goal }}</h3>
                    </div>
                    <div v-for="(info, index) in report.initiative_info" class="row" :key="info.id">
                        <div class="row">
                            <div class="col-9">
                                <h4>Inititative {{ index+1 }}: {{ info.initiative }}</h4>
                            </div>
                            <div class="col-3">
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="border-bottom" v-for="(input, index) in info.activity_initiative" :key="input.id">
                                <p class="activityText">
                                    <strong>Activity {{index+1}}:</strong> {{ input.activity }}.
                                </p>
                                <p class="font-italic inputText" v-for="(name, index)    in input.activity_input" :key="name.id">
                                    <strong>Input {{index+1}}:</strong> {{name.input_name}}
                                </p>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'dashboard',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            alert: 'auth/alert',
            message: 'auth/message',
            reports: 'endpoints/payload',
        })
    },
}
</script>

<style scoped>

.goal {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px; 
    color: #cccccc;
    background-color: #666666;
    }
.inputText {
  text-indent: 30px;
}

.activityText {
    text-indent: 10px;
}
</style>