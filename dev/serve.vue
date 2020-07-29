<script>
	import Vue from 'vue';
	import { Vuezard, TabContent } from '@/entry';

	export default Vue.extend({
		name: 'ServeDev',
		components: {
			Vuezard, TabContent
		},
		methods: {
			done () {
				console.log('Finito du!!');
			}
		}
	});
</script>

<template>
    <div id="app">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
        <vuezard @on-complete="done()">
			<tab-content title="Ild" subtitle="Tændstikker" icon="fa fa-fw fa-fire">Det brænder!!</tab-content>
			<tab-content title="Fjer" icon="fa fa-fw fa-feather-alt">Det er let nok!</tab-content>
			<tab-content title="Juleaften!" icon="fa fa-fw fa-grin-tongue">Flæskesteg</tab-content>
		</vuezard>
    </div>
</template>
