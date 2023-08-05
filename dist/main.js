// ###### my component
Vue.component("product", {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	template: `
	<div :class="classObject">
		<a class="res" :href="href">
			<img :src="image" width="400" />
		</a>
		<div class="content">
			<h1>{{ title }}</h1>
			<p v-if="inStock > 0">In stock</p>
			<p v-else-if="inStock == 0">sold out!</p>
			<p>shipping: {{ shipping }}</p>
			
			<!-- colors  -->
			<div class="colors"
			v-for="(variant, index) in variants" 
			:key="variant.id"
			:style="{ backgroundColor: variant.color }"
			@mouseover="updadeProduct(index)"
			>
			</div>
			
			<!-- info -->
			<ol>
				<li 
				v-for="size in sizes"
				:key="size.id"
				>{{ size.andaze }}</li>
			</ol>

			<!-- add to Cart -->
			<div class="cart">
				<button
				:disabled="!inStock" 
				v-on:click="addToCart"
				:class="{ disableButton: !inStock }"
				>Add to Cart</button>
				<div>cart ({{ cart }})</div>
			</div>
			<div>
				<button v-if="cart > 0" v-on:click="removeFromCart">Remove From Cart</button>
			</div>
			<p :class="{ outOfStock: !inStock }">Out of Stock</p>
		</div>
	</div>`,
	data() {
		return {
			product: "Socks",
			brand: "Vue Masery",
			selectedVariant: 0,
			href: "https://crm.aasaam.org",
			onSale: true,
			datails: true,
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
		};
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
			return this.variants[this.selectedVariant].variantImage;
		},
		title() {
			if (this.onSale) {
				return this.brand + " " + this.product;
			}
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity;
		},
		shipping() {
			if (this.premium) {
				return "free"
			}
			return 2.99
		}
	},
});

Vue.component("product-details", {
	props: {
		details: {
			type: String,
		},
	},
	template: `
	<div>
		<h5>
			details of sock
		</h5>
		<p>
			type: {{ details }}
		</p>
	</div>
	`
})

// ###### app
var app = new Vue({
	el: "#app",
	data: {
		premium: true,
		details: 'wool',
	},
});
