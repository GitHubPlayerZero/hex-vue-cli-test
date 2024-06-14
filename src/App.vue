<template>
	<p>App.vue</p>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<!-- <a class="navbar-brand" href="#">Navbar</a> -->
			<router-link class="navbar-brand" to="/">Home</router-link>

			<!-- 手機版圖示 -->
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<!-- <a class="nav-link active" aria-current="page" href="#"
							>Home</a
						> -->
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
					<li class="nav-item">
						<!-- <a class="nav-link" href="#">Link</a> -->
						<router-link class="nav-link" :to="{ name: '新增頁面' }">New Page</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/nestedpage">巢狀路由</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/nestedpage/namedView">命名視圖</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/nestedpage/dynamicRouter/bf1469ac2805f040">
							動態路由
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/nestedpage/props">
							Props
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/nestedpage/dynamicRouterProps/7e83b534c3d7fc96">
							動態路由 + Props
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/nestedpage/routerNavigation">
							路由導覽
						</router-link>
					</li>
					<!-- <li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Dropdown
						</a>
						<ul
							class="dropdown-menu"
							aria-labelledby="navbarDropdown"
						>
							<li>
								<a class="dropdown-item" href="#">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#"
									>Another action</a
								>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" href="#"
									>Something else here</a
								>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled">Disabled</a>
					</li> -->
				</ul>
				<!-- <form class="d-flex">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success" type="submit">
						Search
					</button>
				</form> -->
			</div>
		</div>
	</nav>

	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link :to="{ name: '新增頁面' }">New Page</router-link> |
		<router-link :to="{ name: '巢狀路由頁面' }">巢狀路由 (無法帶出預設畫面)</router-link> |
		<router-link to="/nestedpage">巢狀路由</router-link> |
		<router-link to="/nestedpage/namedView">命名視圖</router-link> |
		<router-link to="/nestedpage/dynamicRouter/bf1469ac2805f040">動態路由</router-link> |
		<router-link to="/nestedpage/props">Props</router-link> |
		<router-link to="/nestedpage/dynamicRouterProps/7e83b534c3d7fc96">動態路由 + Props</router-link> |
		<router-link to="/nestedpage/routerNavigation">路由導覽</router-link> |
	</nav>

	<div class="container">
		<router-view />
	</div>

	<div class="my-4 pt-3 border-success" style="border-style: dashed;">
		<h4 class="mb-3 text-decoration-underline">App.vue 資訊</h4>
		<p>共用：{{ common }}</p>
		<p>狀態：{{ status }}</p>
		<p>
			DEV：{{
				dev ? dev : dev === undefined ? " (Undefined)" : " (Null)"
			}}
		</p>
		<p>
			PROD：{{
				prd ? prd : prd === undefined ? " (Undefined)" : " (Null)"
			}}
		</p>
	</div>

	<button type="button" class="btn btn-primary">Primary</button>
</template>

<script>
// import 'bootstrap';

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
// @import "bootstrap";

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
