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
				<a href="#" class="text-base-86 text-body-2 text-decoration-underline">За все время</a>
			</div>
		</div>
	</v-container>
	<v-container class="px-4 py-0 mt-6">
		<div class="pa-4 bg-base-1dp d-flex justify-space-around rounded-4">
			<a href="#" class="d-flex flex-column align-center text-decoration-none">
				<div class="purse__icon-wrapper mb-1 pa-3 bg-base-8dp rounded-circle
					d-flex justify-center align-center">
					<svg v-svg symbol="plus" size="24"></svg>
				</div>
				<p class="text-base-86 text-caption-2">Пополнить</p>
			</a>
			<a href="#" class="d-flex flex-column align-center text-decoration-none">
				<div class="purse__icon-wrapper mb-1 pa-3 bg-base-8dp rounded-circle
					d-flex justify-center align-center">
					<svg v-svg symbol="arrow-down" size="24"></svg>
				</div>
				<p class="text-base-86 text-caption-2">Вывести</p>
			</a>
			<a href="#" class="d-flex flex-column align-center text-decoration-none">
				<div class="purse__icon-wrapper mb-1 pa-3 bg-base-8dp rounded-circle
					d-flex justify-center align-center">
					<svg v-svg symbol="reverse" size="24"></svg>
				</div>
				<p class="text-base-86 text-caption-2">Перевести</p>
			</a>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "ThePurse",
};
</script>

<style scoped lang="scss">
.purse {
	&__icon-wrapper {
		width: fit-content;
		width: -moz-fit-content;
	}
}
</style>
