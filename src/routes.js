// Importing the specific files for routing
import Login from './components/login.vue';
import First from './components/first.vue';
import Hello from './components/Hello.vue';
import Second from './components/second.vue';
import Third from './components/third.vue';
import App from './App.vue';

// Defining paths to the respective pages
export default[
	{path: '/', component: Login},
	{path: '/login', component: Login},
	{path: '/first', component: First},
	{path: '/Hello', component: Hello},
	{path: '/second', component: Second},
	{path: '/third', component: Third},
]