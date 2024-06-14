import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/newpage',
		name: '新增頁面',
		component: () => import('../views/NewPage.vue'),
	},
	{
		path: '/nestedpage',
		name: '巢狀路由頁面',
		component: () => import('../views/NestedPage.vue'),
		children: [
			{
				path: '',
				name: '巢狀路由預設頁面',
				component: () => import ('../views/PageDefault.vue'),
			},
			{
				path: 'a',
				component: () => import ('../views/PageA.vue'),
			},
			{
				path: 'b',
				component: () => import ('../views/PageB.vue'),
			},
			{
				path: 'namedView',
				name: '具名視圖頁面',
				component: () => import ('../views/NamedView.vue'),
				children: [
					{
						path: '',
						name: '具名視圖預設頁面',
						components: {
							left: () => import ('../views/PageDefault.vue'),
							// right: () => import ('../views/PageDefault.vue'),
						},
					},
					{
						path: 'c2a',
						components: {
							left: () => import ('../views/PageC.vue'),
							right: () => import ('../views/PageA.vue'),
						},
					},
					{
						path: 'a2b',
						components: {
							left: () => import ('../views/PageA.vue'),
							right: () => import ('../views/PageB.vue'),
						},
					},
				],
			},
			{
				path: 'dynamicRouter/:id',
				name: '動態路由頁面',
				component: () => import ('../views/DynamicRouter.vue'),
			},
			{
				path: 'props',
				name: '給入固定的 Props',
				component: () => import ('../views/DynamicRouterProps.vue'),
				props: () => ({
					id: 'bf1469ac2805f040',
				}),
			},
			{
				path: 'dynamicRouterProps/:id',
				name: '動態路由與 Props (參數) 頁面',
				component: () => import ('../views/DynamicRouterProps.vue'),
				props: (route) => {
					console.log(`[dynamicRouterProps] route ==>`, route);
					return {
						id: route.params.id,
					};
				},
			},
			{
				path: 'dynamicRouterProps2/:id',
				name: '動態路由與 Props (參數) 頁面 2',
				component: () => import ('../views/DynamicRouterProps.vue'),
				// 當 props 設為 true 時，route.params 將被設為組件的 props。
				props: true,
			},
			{
				path: 'routerNavigation',
				name: '路由導覽頁面',
				component: () => import ('../views/RouterNavigation.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
