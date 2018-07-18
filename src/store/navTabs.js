import Vuex from 'vuex'

const Home = resolve => require(['../views/Home'], resolve)

const state = {
    activeTabName: "home",
    tabList: [
        {
            label: '主页',
            name: 'home',
            disabled: false,
            closable: false,
            component: Home
        }
    ]
}

const mutations = {
    setActiveTabName(state, name) {
        state.activeTabName = name;
    },
    addTab(state, index) {
        console.log(state, index)
        var str = index;
        let indexComponent = str.split('-')[0];
        let labelName = str.split('-')[1];
        if (state.tabList.filter(f => f.name == indexComponent) == 0) {
            let component = resolve => require([`../views/${indexComponent}`], resolve)
            state.tabList.push({
                label: labelName,
                name: indexComponent,
                disabled: false,
                closable: true,
                component: component
            })
        }
        state.activeTabName = indexComponent;
    },
    closeTab(state, name) {
        let tab = state.tabList.filter(f => f.name == name)[0];
        let index = state.tabList.indexOf(tab);
        if (index != state.tabList.length - 1) {
            state.activeTabName = state.tabList[index + 1].name;
        } else {
            state.activeTabName = state.tabList[index - 1].name;
        }
        state.tabList = state.tabList.filter(f => f.name != name);
    }
}

export default {
    namespaced: true,
    state,
    mutations
}