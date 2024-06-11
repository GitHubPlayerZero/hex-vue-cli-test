<template>
	<div style="margin-top: 30px; margin-bottom: 30px; border: 3px solid blue">
		<h3>這是新的頁面 (NewPage.vue)</h3>
	</div>

	<!-- 手風琴 -->
	<div class="accordion" id="accordionExample">
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingOne">
				<button
					class="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
					aria-expanded="true"
					aria-controls="collapseOne"
				>
					Accordion Item #1
				</button>
			</h2>
			<div
				id="collapseOne"
				class="accordion-collapse collapse show"
				aria-labelledby="headingOne"
				data-bs-parent="#accordionExample"
			>
				<div class="accordion-body">aaaaa</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingTwo">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
					aria-expanded="false"
					aria-controls="collapseTwo"
				>
					Accordion Item #2
				</button>
			</h2>
			<div
				id="collapseTwo"
				class="accordion-collapse collapse"
				aria-labelledby="headingTwo"
				data-bs-parent="#accordionExample"
			>
				<div class="accordion-body">bbbbb</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingThree">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseThree"
					aria-expanded="false"
					aria-controls="collapseThree"
				>
					Accordion Item #3
				</button>
			</h2>
			<div
				id="collapseThree"
				class="accordion-collapse collapse"
				aria-labelledby="headingThree"
				data-bs-parent="#accordionExample"
			>
				<div class="accordion-body">ccccc</div>
			</div>
		</div>
	</div>

</template>
