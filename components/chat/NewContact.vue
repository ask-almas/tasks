<template>
    <div>
        <v-form>
            <v-container>
                <v-layout>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="form.name"
                                label="Name"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="form.messageHistory"
                                label="Message"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-btn color="info" @click="addContact">Add Contact</v-btn>
        </v-form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                form:{
                    name:'ABCD User',
                    messageHistory:'Hello World'
                }
            }
        },
        methods:{
            addContact(){
                this.$emit('onAddNewContact', this.form);
                this.form.name='';
                this.form.messageHistory='';
            }
        }
    }
</script>
<style>

</style>
