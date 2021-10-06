<template>
    <div>
        <template>
            <div class="row">
                <div class="col-9">
                    <h2>Activity Report</h2>
                </div>
                <div class="col-3" ml="auto">
                    <p class="text-right textRight"><a href="#" @click.prevent="generateReport">Print PDF</a></p>
                </div>
            </div>
            <template>
                <div v-for="(goal, index) in activityReport" :key="goal.id">
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
                                <div class="row">
                                    <hr class="thickHr">                     
                                    <div class="col-9 activityText">
                                        <span class="text-muted">Activity {{index+1}}:</span> {{ activity.name }}.
                                    </div>
                                    <div class="col-3 rightText">
                                        <!-- For dough/cheddar -->
                                        <p class="text-right">$70,000</p>
                                    </div>
                                    <br />
                                    <p class="text-muted inputTitle activityText">Inputs</p>
                                    <div class="row g-0 inputText">
                                        <div class="row col-5 inputTextLeft">
                                            <div class="col-4 inputTextLeftLeft">
                                                <p>Human Resources</p>
                                            </div>
                                            <div class="col-8 inputTextLeftRight">
                                                <p>Technical Expertise</p>
                                            </div>
                                        </div>
                                        <div class="col-7 inputTextRight">
                                            <div class="row g-0 rightText">
                                                <div class="col-3">094024898</div>
                                                <div class="col-6">Meeting at least three times with blah blah blah</div>
                                                <div class="col-3">$32,090</div>
                                            </div>
                                            <div class="row g-0 rightText">
                                                <div class="col-3">094024898</div>
                                                <div class="col-6">Transport to the field</div>
                                                <div class="col-3 text-right">$52,090</div>
                                            </div>
                                            <div class="row g-0 rightText">
                                                <div class="col-3">094024898</div>
                                                <div class="col-6">Conference food</div>
                                                <div class="col-3 text-right">$22,090</div>
                                            </div>
                                        </div>
                                    </div>
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
                        <!-- PDF Content Starts Here -->
                        <div class="row">
                            <div class="col-9">
                                <h2>Investment Summary Report</h2>
                            </div>
                            <div class="col-3 textRight">
                                <p><a class="text-right" href="#" @click.prevent="generateReport">Print PDF</a></p>
                            </div>
                        </div>
                        <template>
                            <div v-for="(goal, index) in activityReport" :key="goal.id">
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
                        </template>
                        <!-- PDF Content Ends Here -->
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

export default {
    methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        },
    },
    name: 'activityReport',
    components: {
        VueHtml2pdf
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            activityReport: 'endpoints/payload',
        })
    },
}
</script>

<style scoped>

.goalText {
    border: 2px solid #000;
    background: rgb(190, 190, 190);
}
.inputText {
  text-indent: 10px;
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