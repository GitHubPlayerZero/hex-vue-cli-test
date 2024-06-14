<template>
	<h2>動態路由</h2>
	<p>{{ people.email }}</p>
	<p>{{ seed }}</p>
</template>

<script>

import axios from 'axios';

export default {
	props: ['id'],

	data () {
		return {
			people: {},
			seed: '',
		};
	},

	created () {
		console.log(`this =>`, this);
		this.seed = this.id;
		console.log(`@ seed = ${this.seed}`);
		// axios.get(`https://randomuser.me/api/`)
		axios.get(`https://randomuser.me/api/?seed=${this.seed}`)
			.then ((res) => {
				console.log(`res ==>`, res);
				this.people = res.data.results[0];
			});
	},
};

</script>
