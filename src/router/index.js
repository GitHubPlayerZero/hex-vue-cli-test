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
		path: '/newpage',
		name: '新增頁面',
		component: () => import('../views/NewPage.vue'),
	},
	{
		path: '/nestedpage',
		name: '巢狀路由頁面',
		component: () => import('../views/NestedPage.vue'),
		children: [
			// 預設會顯示的頁面
			{
				path: '',
				name: 'nestedDefault',
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
				path: 'dynamicRouter/:id',
				component: () => import ('../views/DynamicRouter.vue'),
			},
			{
				path: 'namedView',
				name: '具名視圖頁面',
				component: () => import ('../views/NamedView.vue'),
				children: [
					// 預設顯示的畫面
					{
						path: '',
						name: 'namedViewDefault',
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
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
