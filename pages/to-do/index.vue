<template>
    <div>
        <ListTable :todoList="todolist"
                   @onDone="markAsDone"
                   @onDelete="deleteItem"
                   @onSave="saveItem">
        </ListTable>
        <AddItem @onAdd="addItem"></AddItem>
    </div>
</template>

<script>
    import AddItem from "../../components/to-do/AddItem.vue"
    import ListTable from "../../components/to-do/ListTable.vue"
    export default {
        components:{
            AddItem,
            ListTable
        },
        computed:{
            todolist(){
                return this.$store.getters.getToDoList
            }
        },
        methods:{
            markAsDone(id){
                this.$store.dispatch('markAsDone', id);
            },
            deleteItem(id){
                this.$store.dispatch('deleteItem', id);
            },
            saveItem(data){
                this.$store.dispatch('saveItem', data);
            },
            addItem(form){
                this.$store.dispatch('addItem', form);
            }
        }
    }
</script>

<style>
</style>
