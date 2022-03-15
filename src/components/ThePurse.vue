<template>
	<v-container class="px-4 pt-4 pb-6 bg-base-8dp d-flex justify-space-between rounded-b-8">
		<div>
			<p class="text-base-38 text-body-2 mb-4">Ваш баланс в BTC</p>
			<p class="text-base-86 text-h1 mb-4">0.76397307</p>
			<p class="text-base-38 text-body-1">$45,000.00</p>
		</div>
		<div class="d-flex justify-space-between align-end flex-column">
			<svg v-svg symbol="clock" size="20"></svg>
			<div class="d-flex align-end flex-column">
				<p class="text-green-300 text-body-2">+300,56 %</p>
				<p class="text-base-86 text-body-2">За все время</p>
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "ThePurse",
};
</script>

<!--<style scoped>-->

<!--</style>-->
