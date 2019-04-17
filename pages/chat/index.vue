<template>
    <div>
        <v-layout align-center>
            <v-item-group v-model="window" class="shrink mr-4" mandatory tag="v-flex">
                <v-item v-for="user in filteredUser" :key="user.id">
                    <div slot-scope="{ active, toggle }">
                        <v-btn :input-value="active" icon @click="toggle">
                            <v-icon>mdi-record</v-icon>{{user.name}}
                        </v-btn>
                    </div>
                </v-item>
            </v-item-group>
            <MessageWindow :users="filteredUser" :window="window"></MessageWindow>
        </v-layout>
        <v-text-field v-model="filterText" label="Search User (case sensitive)">
        </v-text-field>
        <NewContact @onAddNewContact="addContact"></NewContact>
    </div>
</template>
<script>
    import MessageWindow from '../../components/chat/MessageWindow.vue'
    import NewContact from '../../components/chat/NewContact.vue'

    export default {
        components:{
            MessageWindow, NewContact
        },
        data(){
            return{
                window:0,
                filterText:''
            }
        },
        computed:{
            users(){
                return this.$store.getters.getUsers
            },
            length(){
                this.users().length()
            },
            filteredUser(){
                return this.users.filter((element)=>{
                    return element.name.match(this.filterText);
                });
            }
        },
        methods:{
            addContact(form){
                this.$store.dispatch('addContact', form);
                console.log(form);
            }
        }
    }
</script>
