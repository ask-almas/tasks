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
            ],
            users:[
                {
                    id:1,
                    name: 'A User',
                    messageHistory:'A User History'
                },
                {
                    id:2,
                    name: 'AB User',
                    messageHistory:'AB User History'
                },
                {
                    id:3,
                    name: 'ABC User',
                    messageHistory:'ABC User History'
                },

            ]
        },
        mutations:{
            setToDoList(state, data){
                console.log("setToDoList")
                state.todolist = data
            },
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
            },
            addContact(state,data){
                data.id=state.users[state.users.length - 1].id + 1
                state.users.push(data);
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                if(process.client){
                    console.log(JSON.parse(localStorage.getItem('todolist')))
                    if(localStorage.getItem('todolist')===null){
                        localStorage.setItem('todolist', JSON.stringify(vuexContext.state.todolist))
                    }else{
                        vuexContext.commit('setToDoList', JSON.parse(localStorage.getItem('todolist')))
                    }
                }
            },
            markAsDone(vuexContext, id){
                vuexContext.commit('markAsDone', id);
                localStorage.setItem('todolist', JSON.stringify(vuexContext.state.todolist))
                console.log(JSON.parse(localStorage.getItem('todolist')))
            },
            deleteItem(vuexContext, id){
                vuexContext.commit('deleteItem', id);
                localStorage.setItem('todolist', JSON.stringify(vuexContext.state.todolist))
            },
            saveItem(vuexContext, data){
                vuexContext.commit('saveItem', data);
                localStorage.setItem('todolist', JSON.stringify(vuexContext.state.todolist))
            },
            addItem(vuexContext, data){
                vuexContext.commit('addItem', data);
                localStorage.setItem('todolist', JSON.stringify(vuexContext.state.todolist))
            },
            addContact(vuexContext, data){
                vuexContext.commit('addContact', data);
            }
        },
        getters:{
            getToDoList(state) {
                return state.todolist;
            },
            getUsers(state){
                return state.users;
            }
        }
    })
};

export default createStore
