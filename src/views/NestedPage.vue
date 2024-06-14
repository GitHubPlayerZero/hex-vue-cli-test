<template>
	<div class="container">
		<div class="row">
			<div class="col-4">
				<div class="list-group">
					<router-link
						to="/nestedpage/a"
						class="list-group-item list-group-item-action"
					>
						A 頁面
					</router-link>
					<router-link
						to="/nestedpage/b"
						class="list-group-item list-group-item-action"
					>
						B 頁面
					</router-link>
					<router-link
						to="/nestedpage/namedView"
						class="list-group-item list-group-item-action"
					>
						命名視圖 (預設)
					</router-link>
					<router-link
						to="/nestedpage/namedView/c2a"
						class="list-group-item list-group-item-action"
					>
						命名視圖 (c2a)
					</router-link>
					<router-link
						to="/nestedpage/namedView/a2b"
						class="list-group-item list-group-item-action"
					>
						命名視圖 (a2b)
					</router-link>
					<router-link
						to="/nestedpage/dynamicRouter/bf1469ac2805f040"
						class="list-group-item list-group-item-action"
					>
						動態路由 (bf1469ac2805f040)
					</router-link>
					<router-link
						to="/nestedpage/dynamicRouter/7e83b534c3d7fc96"
						class="list-group-item list-group-item-action"
					>
						動態路由 (7e83b534c3d7fc96)
					</router-link>
					<router-link
						to="/nestedpage/props"
						class="list-group-item list-group-item-action"
					>
						Props
					</router-link>
					<router-link
						to="/nestedpage/dynamicRouterProps/7e83b534c3d7fc96"
						class="list-group-item list-group-item-action"
					>
						動態路由 + Props
					</router-link>
					<router-link
						to="/nestedpage/dynamicRouterProps2/7e83b534c3d7fc96"
						class="list-group-item list-group-item-action"
					>
						動態路由 + Props (true)
					</router-link>
					<router-link to="/nestedpage/routerNavigation"
						class="list-group-item list-group-item-action"
					>
						路由導覽
					</router-link>
				</div>
			</div>
			<div class="col">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
