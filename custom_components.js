Vue.component('tasks-component', {
	props: ['list'],
	template: "#tasks-template"
});

new Vue({
	el: "#app",
	data:{
		// testhtml:"testjs",
		tasks:[
			{ body:"Learn Vue Js",completed: true },
			{ body:"learn Laravel 5",completed:false },
			{ body:"Learn Python", completed:false }
		]
	}
});