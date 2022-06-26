<template>
	<v-container class="pa-0 bg-base-3dp footer">
		<v-row class="mt-1 mb-7 mx-5">
			<v-col class="pa-0">
				<the-icon-footer iconName="wallet" name="Главная"/>
			</v-col>
			<v-col class="pa-0">
				<the-icon-footer iconName="chat" name="Чат"/>
			</v-col>
			<v-col class="pa-0">
				<the-icon-footer iconName="cooler" name="Ферма"/>
			</v-col>
			<v-col class="pa-0">
				<the-icon-footer iconName="basket" name="Магазин"/>
			</v-col>
			<v-col class="pa-0">
				<the-icon-footer iconName="cart" name="Корзина"/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

const TheIconFooter = defineAsyncComponent( () => import( '@/components/TheIconFooter.vue' ) );

export default defineComponent( {
	name: "TheMainFooter",
	components: {
		'the-icon-footer': TheIconFooter,
	},
} );
</script>

<style scoped lang="scss">
.footer {
	position: sticky;
	bottom: 0;
}
</style>
