<template>
    <div>
        <template>
            <div class="row">
                <div class="col-9">
                    <h2>Investment Summary Report</h2>
                </div>
                <div class="col-3 textRight">
                    <p><a class="text-right" href="#" @click.prevent="generateReport">Print PDF</a></p>
                </div>
            </div>
            <template>
                <div v-for="(goal, index) in goals" :key="goal.id">
                    <div class="p-3 mb-2 text-black goalText">
                        <h3>Strategic Goal {{ index+1 }}: {{ goal.name }}</h3>
                    </div>
                    <div v-for="(initiative, index) in goal.initiatives" class="row" :key="initiative.id">
                        <div class="row">
                            <div class="col-9">
                                <h4>Inititative {{ index+1 }}: {{ initiative.name }}</h4>
                            </div>
                            <div class="col-3 rightText">
                                <h4 class="text-right">$900,000</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div v-for="(activity, index) in initiative.activities" :key="activity.id">
                                <div class="activityText row">
                                    <hr class="thickHr">                     
                                    <div class="col-9">
                                        <span class="text-muted">Activity {{index+1}}:</span> {{ activity.name }}.
                                    </div>
                                    <div class="col-3 rightText">
                                        <!-- For dough/cheddar -->
                                        <p class="text-right">$70,000</p>
                                    </div>
                                    <p class="text-muted inputTitle">Inputs</p>
                                </div>
                                <div>                                    
                                    <p class="inputText" v-for="(input_type) in activity.input_types" :key="input_type.id">
                                        {{input_type.name}}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            <div>Print PDF</div>
            </template>
        </template>
        <template>
            <div>
                <vue-html2pdf
                    :show-layout="false"
                    :float-layout="true"
                    :enable-download="true"
                    :preview-modal="true"
                    :paginate-elements-by-height="1400"
                    filename="roadmap_report"
                    :pdf-quality="2"
                    :manual-pagination="false"
                    pdf-format="a4"
                    pdf-orientation="portrait"
                    pdf-content-width="800px"
                    @progress="onProgress($event)"
                    @hasStartedGeneration="hasStartedGeneration()"
                    @hasGenerated="hasGenerated($event)"
                    ref="html2Pdf">

                    <section slot="pdf-content">
                        <!-- PDF Content Here -->
                        <div class="row">
                            <div class="col-9">
                                <h2>Investment Summary Report</h2>
                            </div>
                            <div class="col-3">
                                <span class="textRight"><a href="#" @click.prevent="generateReport">PDF</a></span>
                            </div>
                        </div>
                        <template>
                            <div v-for="(data, index) in data" :key="data.id">
                                <div class="p-3 mb-2 text-black goalText">
                                    <h3>Strategic Goal {{ index+1 }}: {{ data.goal }}</h3>
                                </div>
                                <div v-for="(initiative, index) in data.initiatives" class="row" :key="initiative.id">
                                    <div class="row">
                                        <div class="col-9">
                                            <h4>Inititative {{ index+1 }}: {{ initiative.initiative }}</h4>
                                        </div>
                                        <div class="col-3 rightText">
                                            <!-- For dough/cheddar -->
                                            <h4 class="text-right">$900,000</h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div v-for="(activity, index) in initiative.activities" :key="activity.id">
                                            <div class="activityText row">
                                                <hr class="thickHr">                     
                                                <div class="col-9">
                                                    <span class="text-muted">Activity {{index+1}}:</span> {{ activity.activity }}.
                                                </div>
                                                <div class="col-3 rightText">
                                                    <!-- For dough/cheddar -->
                                                    <p class="text-right">$70,000</p>
                                                </div>
                                                <p class="text-muted inputTitle">Inputs</p>
                                            </div>
                                            <div>                                    
                                                <p class="inputText" v-for="(input) in activity.inputs" :key="input.id">
                                                    {{input.input_name}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                        <div>Print PDF</div>
                        </template>
                    </section>
                </vue-html2pdf>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueHtml2pdf from 'vue-html2pdf'
import moment from 'moment'

export default {
    methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        },
        format_date(value){
            if (value) {
                return moment(String(value)).format('YYYYMMDD')
            }
        },
    },
    name: 'dashboard',
    components: {
        VueHtml2pdf
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            alert: 'auth/alert',
            message: 'auth/message',
            goals: 'endpoints/payload',
        })
    },
}
</script>

<style scoped>

.goalText {
    border: 2px solid #000;
    background: #999;
}
.inputText {
  text-indent: 30px;
}

.activityText {
    text-indent: 10px;
    font-weight: bold;
}
.thickHr {
    border: 4px solid #999;
}
.rightText {
    text-align: right;
}
.inputTitle {
    font-style: italic;
}
</style>