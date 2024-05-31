<template>
	<p>App.vue</p>

	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view />

	<button type="button" class="btn btn-primary">Primary</button>
</template>

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
