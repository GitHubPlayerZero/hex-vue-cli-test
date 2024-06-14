<template>

	<div class="d-flex flex-wrap gap-2 mb-2">
		<button type="button" @click="getRoute">getRoute</button>
		<button type="button" @click="pushPath">Push (path)</button>
		<button type="button" @click="pushName">Push (name)</button>
		<button type="button" @click="replacePath">Replace (path)</button>
		<button type="button" @click="replaceName">Replace (name)</button>
	</div>
		
	<div class="d-flex flex-wrap gap-2">
		<button type="button" @click="go(-1)">Go (回上一頁)</button>
		<button type="button" @click="go(-2)">Go (回上兩頁)</button>
		<button type="button" @click="go(1)">Go (回下一頁)</button>
		<button type="button" @click="go(2)">Go (回下兩頁)</button>
	</div>

	<hr />

	<button type="button" class="me-3" @click="addRoute">新增路由</button>
	<router-link to="/addRouteNewPage">新增路由的新增頁面</router-link>

</template>

<script>

export default {
	methods: {
		getRoute () {
			console.log(`$route ==>`, this.$route);
			console.log(`$router ==>`, this.$router);
		},
		
		/* 切換頁面，會留歷史記錄 */
		// 使用 path
		pushPath () {
			this.$router.push('/nestedpage/dynamicRouterProps/7e83b534c3d7fc96');
		},
		// 使用 name
		pushName () {
			this.$router.push({
				name: '新增頁面',
			});
		},
		
		
		/* 切換頁面，不留歷史記錄 */
		// 使用 path
		replacePath() {
			this.$router.replace('/nestedpage/dynamicRouterProps/7e83b534c3d7fc96');
		},
		// 使用 name
		replaceName() {
			this.$router.replace({
				name: '新增頁面',
			});
		},
		
		
		/* 操作歷史記錄 */
		// 回上 N 頁、回下 N 頁
		// 回下 N 頁的功能，必須是曾經使用過歷史記錄的回上一頁，此時回下一頁才會有效果
		go(num) {
			this.$router.go(num);
		},
		
		
		/* 動態新增路由 */
		addRoute() {
			this.$router.addRoute({
				path: '/addRouteNewPage',
				name: '新增路由新增頁面',
				component: () => import('./NewPage.vue'),
			});
		},
	},
};

</script>
