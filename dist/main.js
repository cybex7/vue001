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
		details: [
			{
				id: 5445464,
				color: "green",
				detailImage: "assets/1.png",
			},
			{
				id: 5787,
				color: "blue",
				detailImage: "assets/1.jpg",
			},
		],
		sizes: [
			{
				id: 464,
				andaze: "large",
			},
			{
				id: 6464,
				andaze: "X large",
			},
		],
		cart: 0,
	},
	methods: {
		addToCart: function () {
			this.cart += 1;
		},
		removeFromCart: function () {
			this.cart -= 1;
		},
		updadeProduct(detailImage) {
			this.image = detailImage;
		},
	},
});
