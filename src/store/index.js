import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {

        loginModule: {

            state: {
                token: null,
                credentials: Object,
                connected: false
            },
            getters: {
                getConnected: state => state.connected,
                getPrenom: state => state.credentials.prenom,
                getNom: state => state.credentials.nom,
                getToken: state => state.token
            },
            mutations: {
                SET_TOKEN(state, token) {
                    state.token = String(token)
                },
                RESET_TOKEN(state) {
                    state.token = null
                },
                SET_CREDENTIALS(state, credentials) {
                    state.credentials = Object(credentials)
                },
                SET_CONNECTED(state) {
                    state.connected = true
                },
                UNSET_CONNECTED(state) {
                    state.connected = false
                }
            },
            actions: {
                setToken(context, token) {
                    context.commit('SET_TOKEN', token)
                },
                resetToken(context) {
                    context.commit('RESET_TOKEN')
                },
                setCredentials(context, credentials) {
                    context.commit('SET_CREDENTIALS', credentials)
                },
                setConnected(context) {
                    context.commit('SET_CONNECTED')
                },
                unsetConnected(context) {
                    context.commit('UNSET_CONNECTED')
                },
                login(context, data) {

                    let config = {
                        Headers: {
                            'Content-type': 'application/json'
                        }
                    };

                    axios.post('http://127.0.0.1:8000/api/login', data, config)
                        .then(res => {
                            console.log(res)
                            let token = res.data.token;
                            let credentials = res.data.data;

                            context.commit('SET_TOKEN', token);
                            context.commit('SET_CREDENTIALS', credentials);
                            context.commit('SET_CONNECTED');

                        });

                },
            }
        }, // fin loginModule

        CatModule: {
            state: {
                newCategoryWanted: false
            },
            getters: {
                getNewCatWanted: state => state.newCategoryWanted
            },
            mutations: {
                TOGGLE_NEW_CAT_WANTED(state) {
                    state.newCategoryWanted = !(state.newCategoryWanted)
                }
            },

            actions: {
                toggleNewCatWanted(context) {
                    context.commit('TOGGLE_NEW_CAT_WANTED');
                }
            },

        },

        sousCatModule: {
            state: {
                newSubCatWanted: false,
                whereCreateSubcat: null
            },
            getters: {
                getNewSubCatWanted: state => state.newSubCatWanted,
                getWhereCreateSubcat: state => state.whereCreateSubcat
            },
            mutations: {
                TOGGLE_NEW_SUBCAT_WANTED(state) {
                    state.newSubCatWanted = !(state.newSubCatWanted)
                },
                SET_WHERE_CREATE_SUBCAT(state, where) {
                    state.whereCreateSubcat = where
                }
            },
            actions: {
                toggleNewSubCatWanted(context) {
                    context.commit('TOGGLE_NEW_SUBCAT_WANTED');
                },
                setWhereCreateSubcat(context, where) {
                    context.commit('SET_WHERE_CREATE_SUBCAT', where)
                }
            },

        },







    }
})