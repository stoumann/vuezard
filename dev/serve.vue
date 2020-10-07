<script>
	import Vue from 'vue';
	import { Vuezard, TabContent } from '@/entry';
	import styles from './styling.css';

	export default Vue.extend({
		name: 'ServeDev',
		data () {
			return {
				tab1Valid: false,
				activateTabs: false
			}
		},
		components: {
			Vuezard, TabContent
		},
		mounted () {
			var self = this;
				setTimeout(() => {
					self.tab1Valid = true;
					this.activateTabs = true;
				}, 10000);
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
        <vuezard @on-complete="done()" :activate-all-tabs="activateTabs">
			<tab-content title="Ild" subTitle="Tændstikker" icon="fa fa-fw fa-fire">Det brænder!!</tab-content>
			<tab-content title="Fjer" icon="fa fa-fw fa-feather-alt">Det er let nok!</tab-content>
			<tab-content title="Juleaften!" icon="fa fa-fw fa-grin-tongue">Flæskesteg</tab-content>
		</vuezard>
    </div>
</template>
