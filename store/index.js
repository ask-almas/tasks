import Vuex from 'vuex'

const createStore =()=>{
    return new Vuex.Store({
        state:{
            todolist: [
                {
                    id: 1,
                    name: 'Action 1',
                    completeDays: 10,
                    comments: 'No Commments',
                    status: 'In Progress'
                },
                {
                    id: 2,
                    name: 'Action 2',
                    completeDays: 5,
                    comments: 'Some Commments',
                    status: 'In Progress'
                },
                {
                    id: 3,
                    name: 'Action 3',
                    completeDays: 15,
                    comments: 'Any Commments',
                    status: 'In Progress'
                },
            ]
        },
        mutations:{
            markAsDone(state,id){
                const listIndex = state.todolist.findIndex(item=>
                    item.id===id
                );
                state.todolist[listIndex].status='Done';
            },
            deleteItem(state,id){
                const listIndex = state.todolist.findIndex(item=>
                    item.id===id
                );
                state.todolist.splice(listIndex,1);
            },
            saveItem(state,data){
                const listIndex = state.todolist.findIndex(item=>
                    item.id===data.id
                );
                state.todolist[listIndex].name=data.name;
            },
            addItem(state,data){
                data.id=state.todolist[state.todolist.length - 1].id + 1
                state.todolist.push(data);
            }
        },
        actions:{
            markAsDone(vuexContext, id){
                vuexContext.commit('markAsDone', id);
            },
            deleteItem(vuexContext, id){
                vuexContext.commit('deleteItem', id);
            },
            saveItem(vuexContext, data){
                vuexContext.commit('saveItem', data);
            },
            addItem(vuexContext, data){
                vuexContext.commit('addItem', data);
            }
        },
        getters:{
            getToDoList(state){
                return state.todolist;
            }
        }
    })
};

export default createStore
