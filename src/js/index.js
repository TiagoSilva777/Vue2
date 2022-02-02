import App from './App.vue';
import Home from './Home.vue';
import Sobre from './Sobre.vue';

const router = new VueRouter({
	routes:[
		{path: '\' , componenet:Home},
		{path: '\sobre' , componenet:Sobre}
	]
})

new Vue({
	el:'#app',
	router:router,
	render:h=>h(App)
});