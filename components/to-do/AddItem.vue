<template>
    <div>
        <v-form>
            <v-container>
                <v-layout>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="form.taskName"
                                label="Task name"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="form.comments"
                                label="Comments"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="form.completeDays"
                                label="Days to Complete"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-btn color="info" @click="addItem">Add Item</v-btn>
        </v-form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                form:{
                    name:'New Task',
                    comments:'New Comment',
                    completeDays: 1,
                    status:'In Progress'
                }
            }
        },
        methods:{
            addItem(){
                this.$emit('onAdd', this.form);
            }
        }
    }
</script>
<style>

</style>
