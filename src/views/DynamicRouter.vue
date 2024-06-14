<template>
	<h2>動態路由</h2>
	<p>{{ people.email }}</p>
	<p>{{ seed }}</p>
</template>


<script>

import axios from "axios";

export default {
	data() {
		return {
			people: {},
			seed: "",
		};
	},
	
	methods: {
		initial(id) {
			this.seed = id;
			console.log(`@ seed = ${this.seed}`);

			// axios.get(`https://randomuser.me/api/`)
			axios
				.get(`https://randomuser.me/api/?seed=${this.seed}`)
				.then((res) => {
					console.log(`[initial] res ==>`, res);
					this.people = res.data.results[0];
				});
		},
	},
	
	watch: {
		// 可以監聽整個 $route，也可以只監聽裡面的某個屬性。
		// $route: {
		'$route.params.id': {
			handler (newId, oldId) {
				console.log(``);
				console.log(`===== [watch - Start] =====`);
				console.log(`[watch] newId ==>`, newId);
				console.log(`[watch] oldId ==>`, oldId);
				
				this.initial(newId);
				
				console.log(`===== [watch - End] =====`);
			},
			immediate: true,
		},
	},
	
	created() {
		console.log(`[created] this ==>`, this);
		console.log(`[created] route ==>`, this.$route);

		/* this.$watch (
			// 監聽來源
			() => this.$route.params.id,
			
			// callback
			(newId, oldId) => {
				console.log(``);
				console.log(`===== [$watch - Start] =====`);
				console.log(`[$watch] newId ==>`, newId);
				console.log(`[$watch] oldId ==>`, oldId);
				
				this.initial(newId);
				
				console.log(`===== [$watch - End] =====`);
			},
			
			// options
			{ immediate: true },
		); */
	},
};

</script>
