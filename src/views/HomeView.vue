<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />

		<!-- 這邊不太一樣的是，元件名稱不需要使用烤肉串寫法。 -->
		<VeeForm v-slot="{ errors, values, validate }" @submit="onSubmit">
			{{ errors }} {{ values }}

			<div class="mb-3">
				<label for="email" class="form-label">Email </label>
				<VeeField
					id="email"
					name="email"
					type="email"
					class="form-control"
					:class="{ 'is-invalid': errors['email'] }"
					placeholder="請輸入 Email"
					rules="email|required"
					v-model="user.email"
				></VeeField>

				<VeeErrorMessage name="email" class="invalid-feedback"></VeeErrorMessage>
			</div>

			<button
				class="btn me-2 btn-outline-primary"
				type="button"
				@click="validate"
			>
				驗證
			</button>

			<button class="btn btn-primary" type="submit">Submit</button>
		</VeeForm>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "HomeView",
	components: {
		HelloWorld,
	},
	data() {
		return {
			user: {},
		};
	},
	methods: {
		onSubmit() {
			console.log(`onSubmit... this.user ==>`, this.user);
		},
	},
	created() {
		console.log("created ==>", this);
	},
};
</script>
