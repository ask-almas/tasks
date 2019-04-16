<template>
    <v-data-table
            :headers="headers"
            :items="todoList"
            class="elevation-1">
        <template v-slot:items="props">
            <td class="text-xs-left" :contenteditable="editing && editingId==props.item.id">
                {{ props.item.name }}
            </td>
            <td class="text-xs-left">{{ props.item.completeDays }}</td>
            <td class="text-xs-left">{{ props.item.comments }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td>
                <v-btn color="warning" @click="editItem(props.item.id)"
                       v-if="(!editing || editingId!=props.item.id)">Edit</v-btn>
                <v-btn color="error" @click="deleteItem(props.item.id)"
                       v-if="(!editing || editingId!=props.item.id)">Delete</v-btn>
                <v-btn color="success" @click="done(props.item.id)"
                       v-if="(!editing || editingId!=props.item.id)">Done</v-btn>
                <v-btn color="success" @click="saveItem(props.item.id, props.item.name)"
                       v-if="(editing && editingId==props.item.id)">Save</v-btn>
            </td>
        </template>
    </v-data-table>
</template>
<script>
    export default {
        props:{
            todoList:{
                type: Array
            }
        },
        data(){
            return {
                headers: [
                    {
                        text: 'Task Name',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Days to Complete', value: 'completeDays', sortable: false,},
                    { text: 'Comments', value: 'comments', sortable: false,},
                    { text: 'Status', value: 'status', sortable: false,},
                ],
                editing:false,
                editingId: null
            }
        },
        methods:{
            done(id){
                this.$emit('onDone', id);
                console.log(id);
            },
            deleteItem(id){
                this.$emit('onDelete', id);
            },
            editItem(id){
                this.editing = !this.editing;
                this.editingId = id;
            },
            saveItem(id, name){
                this.$emit('onSave', {id:id, name:name});
                this.editing=!this.editing;
            }
        },
    }
</script>
