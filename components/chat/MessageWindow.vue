<template>
    <v-flex>
        <v-window
                v-model="window"
                class="elevation-1"
                vertical>
            <v-window-item
                    v-for="user in users"
                    :key="user.id">
                <v-card flat>
                    <v-card-text>
                        {{user.messageHistory}}
                    </v-card-text>
                </v-card>
                <v-text-field class="input">
                </v-text-field>
                <v-btn color="success" style="float: right">Send</v-btn>
            </v-window-item>
        </v-window>
    </v-flex>
</template>
<script>
    export default {
        props:{
            users:{
                type: Array
            },
            window:{
                type: Number
            }
        }
    }
</script>
<style scoped>
    .input{
        text-align: right;
    }
</style>
