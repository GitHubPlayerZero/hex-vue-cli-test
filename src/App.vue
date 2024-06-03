<template>
	<div class="container-fluid">
		<p>App.vue</p>

		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
		<router-view />

		<div class="my-4">
			<p>共用：{{ common }}</p>
			<p>狀態：{{ status }}</p>
			<p>DEV：{{ dev ? dev : dev === undefined ? " (Undefined)" : " (Null)" }}</p>
			<p>PROD：{{ prd ? prd : prd === undefined ? " (Undefined)" : " (Null)" }}</p>
		</div>

		<button type="button" class="btn btn-primary">Primary</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			common: process.env.VUE_APP_COMMON,
			status: process.env.VUE_APP_STATUS,
			dev: process.env.VUE_APP_DEV,
			prd: process.env.VUE_APP_PRD,
		};
	},
};
</script>

<style lang="scss">
@import "bootstrap";
// @import "bootstrap/dist/css/bootstrap.css";
// @import "../node_modules/bootstrap/dist/css/bootstrap.css";
// @import "../node_modules/bootstrap/dist/css/bootstrap";

// @import "bootstrap/scss/bootstrap.scss";
// @import "../node_modules/bootstrap/scss/bootstrap.scss";
// @import "../node_modules/bootstrap/scss/bootstrap";

// ~ 為 webpack 對於 node_modules 目錄的簡寫
// @import "~bootstrap/dist/css/bootstrap.css";
// @import "~bootstrap/scss/bootstrap";
</style>
