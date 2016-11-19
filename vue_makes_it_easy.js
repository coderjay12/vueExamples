Vue.component('tasks-component', {
	props: ['list'],
	template: "#tasks-template",
	computed: 
	{
		remainingTasks:function(){
			 return remaining_task = this.list.filter(this.isInProgress).length;
		}
	},
	methods:
	{
		isCompleted : function(taskss){
			// console.log(task.length);
			return taskss.completed ;
		},

		isInProgress : function(taskww)
		{
			return !this.isCompleted(taskww);
		},

		deleteTask : function(task)
		{
			this.list.$remove(task);
		},

		clearCompleted : function()
		{
			this.list = this.list.filter(this.isInProgress);
		}
	}
});

new Vue({
	el: "#app",
	data:{
		// testhtml:"testjs",
		tasks:[
			{ body:"Learn Vue Js",completed: true },
			{ body:"learn Laravel 5",completed:false },
			{ body:"Learn Python", completed:false },
			{ body:"Learn Ruby", completed:false },
			{ body:"Learn Node Js", completed:false }
		]
	}
});