# VUEZARD
A simple wizard made using vue.js

**## Please let me know if you want me to add any features**

## Installation
```sh
$ npm install vuezard
```

## Usage
Add this to your javascript code
```js
import Vue from 'vue';
import Vuezard from 'vuezard';

export default {
	components: {
		Vuezard
	}
}
```

Add this to your html template
```html
<vuezard @on-complete="done()">
    <tab-content title="Title 1" subtitle="Subtitle 1">ADD CONTENT HERE</tab-content>
    <tab-content title="Title 2" subtitle="Subtitle 2">ADD CONTENT HERE</tab-content>
    <tab-content title="Title 3" subtitle="Subtitle 3">ADD CONTENT HERE</tab-content>
</vuezard>
```

## Props
| Name | Type | Default value |
| ------ | ------ | ------ |
| backButtonText | String | 'Back' |
| nextButtonText | String | 'Next' |
| finishButtonText | String | 'Finish' |
| hideButtons | Boolean | false |
| startIndex | Integer | 0 |
| title | String | '' |
| subTitle | String | '' |

## Methods
| Name | Description |
| ------ | ------ |
| @onComplete | Emits when finish button is clicked |
| @onError | Emits when there is an error and returns an error description
| @onChange | Emits on every button click with the index of the previous and next tab |
| @onLoading | *Not ready yet* |
| @onValidate | *Not ready yet* |

## Styling
If you like to use a default styling you can add this css to work from
```css
.vue-wizard {position: relative;border: 1px solid #EDF2F7;} 
.vue-wizard .wizard-header {display: flex;align-items: baseline;}
.vue-wizard .wizard-header .wizard-title {font-size: 24px;margin: 0 10px 0 0;padding: 0;}
.vue-wizard .wizard-header .wizard-subtitle {font-size: 14px;color: #2D3748;}
.vue-wizard .wizard-container {display: flex;align-items: stretch;height: 100%;}
.vue-wizard .wizard-container .wizard-tabs .wizard-tablist {list-style: none;margin: 0;padding: 0;height: 100%;background: #F7FAFC;border-right: 1px solid #EDF2F7;}
/* .vue-wizard .wizard-container .wizard-tabs .wizard-tablist li {} */
.vue-wizard .wizard-container .wizard-tabs .wizard-tablist li a {display: block;border-bottom: 1px solid #EDF2F7;text-decoration: none;}
.vue-wizard .wizard-container .wizard-tabs .wizard-tablist li a.disabled {color: #2D3748;cursor: not-allowed;}
.vue-wizard .wizard-container .wizard-tabs .wizard-tablist li:last-child a {border-bottom: 0;}
.vue-wizard .wizard-container .wizard-tabs .wizard-tablist .wizard-tab {margin: 0;padding: 10px;}
.vue-wizard .wizard-container .wizard-content-footer {flex: 1;display: flex;flex-direction: column;}
.vue-wizard .wizard-container .wizard-content-footer .wizard-content {margin: 0;padding: 10px;display: flex;flex: 1;}
.vue-wizard .wizard-container .wizard-content-footer .wizard-content {margin: 0;padding: 10px;}.vue-wizard .wizard-container .wizard-content-footer .wizard-card-footer {padding: 10px;background: #F7FAFC;border-top: 1px solid #EDF2F7;display: flex;justify-content: space-between;}
/* .vue-wizard .wizard-container .wizard-content-footer .wizard-card-footer .wizard-footer-left,
.vue-wizard .wizard-container .wizard-content-footer .wizard-card-footer .wizard-footer-right {} */
.vue-wizard .wizard-container .wizard-content-footer .wizard-card-footer .wizard-footer-left button,
.vue-wizard .wizard-container .wizard-content-footer .wizard-card-footer .wizard-footer-right button {background: #2D3748;border: none;color: #ffffff;padding: 4px 12px;border-radius: 4px;cursor: pointer;font-size: 12px;outline: none;}
.vue-wizard .wizard-container .wizard-content-footer .wizard-card-footer .wizard-footer-right button.finish-button {background: #f07d00 !important;}
```
