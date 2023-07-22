// ###### first app
var app = new Vue({
	el: "#app",
	data: {
		product: "Socks",
		description: "A pair of warm, fuzzy socks",
		image: "assets/1.png",
		href: "https://crm.aasaam.org",
		quantity: "11",
		onSale: true,
	},
});

// ###### second app
var app2 = new Vue({
	el: "#app2",
	data: {
		msg: "reverse my text",
	},
	methods: {
		reverseMessage: function () {
			this.msg = this.msg.split("").reverse().join("");
		},
	},
});

// ###### third app
var app3 = new Vue({
	el: "#app3",
	data: {
		msg: "text",
	},
});

// define my first component
Vue.component("todo-item", {
	props: ["todo"],
	template: "<li> {{ todo.text }} </li>",
});

// ###### fourth app
var app4 = new Vue({
	el: "#app4",
	data: {
		fruits: [
			{ id: 0, text: "apple" },
			{ id: 1, text: "limon" },
			{ id: 2, text: "banana" },
		],
	},
});
