<script>
	import Vue from 'vue';
	import { VueWizard, TabContent } from '@/entry';

	export default Vue.extend({
		name: 'ServeDev',
		components: {
			VueWizard, TabContent
		}
	});
</script>

<template>
    <div id="app">
        <vue-wizard>
			<tab-content title="Stor ostemad">Ostemad</tab-content>
			<tab-content title="Dunser">Frikadelle</tab-content>
			<tab-content title="Juleaften!">Flæskesteg</tab-content>
		</vue-wizard>
    </div>
</template>
