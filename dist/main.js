// ###### first app
var app = new Vue({
	el: "#app",
	data: {
		product: "Socks",
		brand: "Vue Masery",
		selectedVariant: 0,
		href: "https://crm.aasaam.org",
		onSale: true,
		classObject: {
			'gradient-border': true,  
			'removeClass': false, 
			'box': true,
		},		
		variants: [
			{
				id: 5445464,
				color: "green",
				variantImage: "assets/1.png",
				variantQuantity: 10,
			},
			{
				id: 5787,
				color: "blue",
				variantImage: "assets/1.jpg",
				variantQuantity: 0,
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
		updadeProduct(index) {
			this.selectedVariant = index;
		},
	},
	computed: {
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		title() {
			if(this.onSale){
				return this.brand + ' ' + this.product;
			}
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		}
	},
});
