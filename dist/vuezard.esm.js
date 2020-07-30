//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'wizard-tab',
  props: {
    tab: {
      type: Object
    },
    transition: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    iconActiveStyle() {
      return {
        color: this.tab.color
      };
    },

    stepCheckedStyle() {
      return {
        borderColor: this.tab.color,
        color: this.tab.color
      };
    },

    errorStyle() {
      return {
        borderColor: this.tab.errorColor
      };
    },

    stepTitleStyle() {
      let isError = this.tab.validationError;
      return {
        color: isError ? this.tab.errorColor : this.tab.color
      };
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    class: {
      active: _vm.tab.active
    }
  }, [_c('a', {
    class: {
      disabled: !_vm.tab.checked
    },
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('div', {
    staticClass: "wizard-tab",
    class: {
      checked: _vm.tab.checked
    },
    style: [_vm.tab.checked ? _vm.stepCheckedStyle : {}, _vm.tab.validationError ? _vm.errorStyle : {}],
    attrs: {
      "role": "tab",
      "tabindex": _vm.tab.checked ? 0 : '',
      "id": "step-" + _vm.tab.tabId,
      "aria-controls": _vm.tab.tabId,
      "aria-disabled": _vm.tab.active,
      "aria-selected": _vm.tab.active
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.transition,
      "mode": "out-in"
    }
  }, [_vm.tab.active ? _c('span', {
    staticClass: "wizard-icon-container",
    style: [_vm.tab.active ? _vm.iconActiveStyle : {}, _vm.tab.validationError ? _vm.errorStyle : {}]
  }, [_vm._t("active-step", [_vm.tab.icon ? _c('i', {
    staticClass: "wizard-icon",
    class: _vm.tab.icon
  }) : _c('i', {
    staticClass: "wizard-icon"
  }, [_vm._v(_vm._s(_vm.index + 1))])])], 2) : _vm._e(), _vm._v(" "), !_vm.tab.active ? _vm._t("default", [!_vm.tab.active && _vm.tab.icon ? _c('i', {
    staticClass: "wizard-icon",
    class: _vm.tab.icon
  }) : _vm._e(), _vm._v(" "), !_vm.tab.active && !_vm.tab.icon ? _c('i', {
    staticClass: "wizard-icon"
  }, [_vm._v(_vm._s(_vm.index + 1))]) : _vm._e()]) : _vm._e()], 2), _vm._v(" "), _vm._t("title", [_c('span', {
    staticClass: "stepTitle",
    class: {
      active: _vm.tab.active,
      has_error: _vm.tab.validationError
    },
    style: _vm.tab.active ? _vm.stepTitleStyle : {}
  }, [_vm._v("\n                    " + _vm._s(_vm.tab.title) + "\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "stepSubtitle",
    class: {
      active: _vm.tab.active,
      has_error: _vm.tab.validationError
    },
    style: _vm.tab.active ? _vm.stepTitleStyle : {}
  }, [_vm._v("\n                    " + _vm._s(_vm.tab.subTitle) + "\n                ")])])], 2)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

function getFocusedElementId() {
  return document.activeElement.id;
}
function getFocusedTabIndex(tabs = []) {
  let activeId = getFocusedElementId();
  let tabIndex = tabs.findIndex(tab => tab.tabId === activeId);
  return tabIndex;
}
function findElementAndFocus(elemId) {
  let elem = document.getElementById(elemId);
  elem.focus();
}
function isPromise(func) {
  return func.then && typeof func.then === 'function';
}

//
var script$1 = {
  name: 'vuezard',
  // vue component name
  components: {
    WizardTab: __vue_component__
  },
  props: {
    id: {
      type: String,
      default: 'vw_' + new Date().valueOf()
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    nextButtonText: {
      type: String,
      default: 'Next'
    },
    backButtonText: {
      type: String,
      default: 'Back'
    },
    finishButtonText: {
      type: String,
      default: 'Finish'
    },
    hideButtons: {
      type: Boolean,
      default: false
    },
    validateOnBack: {
      type: Boolean
    },
    color: {
      type: String,
      default: '#2D3748'
    },
    errorColor: {
      type: String,
      default: '#8b0000'
    },
    shape: {
      type: String,
      default: 'circle'
    },
    layout: {
      type: String,
      default: 'horizontal'
    },
    stepsClasses: {
      type: [String, Array],
      default: ''
    },
    transition: {
      type: String,
      default: ''
    },
    startIndex: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0;
      }
    }
  },

  provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    };
  },

  data() {
    return {
      activeTabIndex: 0,
      currentPercentage: 0,
      maxStep: 0,
      loading: false,
      tabs: []
    };
  },

  computed: {
    slotProps() {
      return {
        nextTab: this.nextTab,
        prevTab: this.prevTab,
        activeTabIndex: this.activeTabIndex,
        isLastStep: this.isLastStep,
        fillButtonStyle: this.fillButtonStyle
      };
    },

    tabCount() {
      return this.tabs.length;
    },

    isLastStep() {
      return this.activeTabIndex === this.tabCount - 1;
    },

    isVertical() {
      return this.layout === 'vertical';
    },

    displayPrevButton() {
      return this.activeTabIndex !== 0;
    },

    stepPercentage() {
      return 1 / (this.tabCount * 2) * 100;
    },

    progressBarStyle() {
      return {
        backgroundColor: this.color,
        width: `${this.progress}%`,
        color: this.color
      };
    },

    fillButtonStyle() {
      return {
        backgroundColor: this.color,
        borderColor: this.color,
        color: 'white'
      };
    },

    progress() {
      let percentage = 0;

      if (this.activeTabIndex > 0) {
        let stepsToAdd = 1;
        let stepMultiplier = 2;
        percentage = this.stepPercentage * (this.activeTabIndex * stepMultiplier + stepsToAdd);
      } else {
        percentage = this.stepPercentage;
      }

      return percentage;
    }

  },
  methods: {
    emitTabChange(prevIndex, nextIndex) {
      this.$emit('on-change', prevIndex, nextIndex);
      this.$emit('update:startIndex', nextIndex);
    },

    addTab(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      item.tabId = `${item.title.replace(/ /g, '')}${index}`;
      this.tabs.splice(index, 0, item); // if a step is added before the current one, go to it

      if (index < this.activeTabIndex + 1) {
        this.maxStep = index;
        this.changeTab(this.activeTabIndex + 1, index);
      }
    },

    removeTab(item) {
      const tabs = this.tabs;
      const index = tabs.indexOf(item);

      if (index > -1) {
        // Go one step back if the current step is removed
        if (index === this.activeTabIndex) {
          this.maxStep = this.activeTabIndex - 1;
          this.changeTab(this.activeTabIndex, this.activeTabIndex - 1);
        }

        if (index < this.activeTabIndex) {
          this.maxStep = this.activeTabIndex - 1;
          this.activeTabIndex = this.activeTabIndex - 1;
          this.emitTabChange(this.activeTabIndex + 1, this.activeTabIndex);
        }

        tabs.splice(index, 1);
      }
    },

    reset() {
      this.maxStep = 0;
      this.tabs.forEach(tab => {
        tab.checked = false;
      });
      this.navigateToTab(0);
    },

    activateAll() {
      this.maxStep = this.tabs.length - 1;
      this.tabs.forEach(tab => {
        tab.checked = true;
      });
    },

    navigateToTab(index) {
      let validate = index > this.activeTabIndex;

      if (index <= this.maxStep) {
        let callback = () => {
          if (validate && index - this.activeTabIndex > 1) {
            // validate all steps recursively until destination index
            this.changeTab(this.activeTabIndex, this.activeTabIndex + 1);
            this.beforeTabChange(this.activeTabIndex, callback);
          } else {
            this.changeTab(this.activeTabIndex, index);
            this.afterTabChange(this.activeTabIndex);
          }
        };

        if (validate) {
          this.beforeTabChange(this.activeTabIndex, callback);
        } else {
          this.setValidationError(null);
          callback();
        }
      }

      return index <= this.maxStep;
    },

    nextTab() {
      let callback = () => {
        if (this.activeTabIndex < this.tabCount - 1) {
          this.changeTab(this.activeTabIndex, this.activeTabIndex + 1);
          this.afterTabChange(this.activeTabIndex);
        } else {
          this.$emit('on-complete');
        }
      };

      this.beforeTabChange(this.activeTabIndex, callback);
    },

    prevTab() {
      let callback = () => {
        if (this.activeTabIndex > 0) {
          this.setValidationError(null);
          this.changeTab(this.activeTabIndex, this.activeTabIndex - 1);
        }
      };

      if (this.validateOnBack) {
        this.beforeTabChange(this.activeTabIndex, callback);
      } else {
        callback();
      }
    },

    focusNextTab() {
      let tabIndex = getFocusedTabIndex(this.tabs);

      if (tabIndex !== -1 && tabIndex < this.tabs.length - 1) {
        let tabToFocus = this.tabs[tabIndex + 1];

        if (tabToFocus.checked) {
          findElementAndFocus(tabToFocus.tabId);
        }
      }
    },

    focusPrevTab() {
      let tabIndex = getFocusedTabIndex(this.tabs);

      if (tabIndex !== -1 && tabIndex > 0) {
        let toFocusId = this.tabs[tabIndex - 1].tabId;
        findElementAndFocus(toFocusId);
      }
    },

    setLoading(value) {
      this.loading = value;
      this.$emit('on-loading', value);
    },

    setValidationError(error) {
      this.tabs[this.activeTabIndex].validationError = error;
      this.$emit('on-error', error);
    },

    validateBeforeChange(promiseFn, callback) {
      this.setValidationError(null); // we have a promise

      if (isPromise(promiseFn)) {
        this.setLoading(true);
        promiseFn.then(res => {
          this.setLoading(false);
          let validationResult = res === true;
          this.executeBeforeChange(validationResult, callback);
        }).catch(error => {
          this.setLoading(false);
          this.setValidationError(error);
        });
      } else {
        let validationResult = promiseFn === true;
        this.executeBeforeChange(validationResult, callback);
      }
    },

    executeBeforeChange(validationResult, callback) {
      this.$emit('on-validate', validationResult, this.activeTabIndex);

      if (validationResult) {
        callback();
      } else {
        this.tabs[this.activeTabIndex].validationError = 'error';
      }
    },

    beforeTabChange(index, callback) {
      if (this.loading) {
        return;
      }

      let oldTab = this.tabs[index];

      if (oldTab && oldTab.beforeChange !== undefined) {
        let tabChangeRes = oldTab.beforeChange();
        this.validateBeforeChange(tabChangeRes, callback);
      } else {
        callback();
      }
    },

    afterTabChange(index) {
      if (this.loading) {
        return;
      }

      let newTab = this.tabs[index];

      if (newTab && newTab.afterChange !== undefined) {
        newTab.afterChange();
      }
    },

    changeTab(oldIndex, newIndex, emitChangeEvent = true) {
      let oldTab = this.tabs[oldIndex];
      let newTab = this.tabs[newIndex];

      if (oldTab) {
        oldTab.active = false;
      }

      if (newTab) {
        newTab.active = true;
      }

      if (emitChangeEvent && this.activeTabIndex !== newIndex) {
        this.emitTabChange(oldIndex, newIndex);
      }

      this.activeTabIndex = newIndex;
      this.activateTabAndCheckStep(this.activeTabIndex);
      return true;
    },

    tryChangeRoute(tab) {
      if (this.$router && tab.route) {
        this.$router.push(tab.route);
      }
    },

    checkRouteChange(route) {
      let matchingTabIndex = -1;
      let matchingTab = this.tabs.find((tab, index) => {
        let match = tab.route === route;

        if (match) {
          matchingTabIndex = index;
        }

        return match;
      });

      if (matchingTab && !matchingTab.active) {
        const shouldValidate = matchingTabIndex > this.activeTabIndex;
        this.navigateToTab(matchingTabIndex, shouldValidate);
      }
    },

    deactivateTabs() {
      this.tabs.forEach(tab => {
        tab.active = false;
      });
    },

    activateTab(index) {
      this.deactivateTabs();
      let tab = this.tabs[index];

      if (tab) {
        tab.active = true;
        tab.checked = true;
        this.tryChangeRoute(tab);
      }
    },

    activateTabAndCheckStep(index) {
      this.activateTab(index);

      if (index > this.maxStep) {
        this.maxStep = index;
      }

      this.activeTabIndex = index;
    },

    initializeTabs() {
      if (this.tabs.length > 0 && this.startIndex === 0) {
        this.activateTab(this.activeTabIndex);
      }

      if (this.startIndex < this.tabs.length) {
        this.activateTabAndCheckStep(this.startIndex);
      } else {
        window.console.warn(`Prop startIndex set to ${this.startIndex} is greater than the number of tabs - ${this.tabs.length}. Make sure that the starting index is less than the number of tabs registered`);
      }
    }

  },

  mounted() {
    this.initializeTabs();
  },

  watch: {
    '$route.path'(newRoute) {
      this.checkRouteChange(newRoute);
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vuezard"
  }, [_vm.title ? _c('div', {
    staticClass: "wizard-header"
  }, [_c('h4', {
    staticClass: "wizard-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', {
    staticClass: "wizard-subtitle"
  }, [_vm._v(_vm._s(_vm.subTitle))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "wizard-container"
  }, [_c('div', {
    staticClass: "wizard-tabs",
    attrs: {
      "role": "tablist"
    }
  }, [_c('ul', {
    staticClass: "wizard-tablist"
  }, [_vm._l(_vm.tabs, function (tab, index) {
    return _vm._t("tab", [_c('wizard-tab', {
      attrs: {
        "tab": tab,
        "index": index,
        "transition": _vm.transition
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.navigateToTab(index);
        },
        "keyup": function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }

          return _vm.navigateToTab(index);
        }
      }
    })], {
      "index": index,
      "tab": tab
    });
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "wizard-content-footer"
  }, [_c('div', {
    staticClass: "wizard-content"
  }, [_vm._t("default", null, null, _vm.slotProps)], 2), _vm._v(" "), !_vm.hideButtons ? _c('div', {
    staticClass: "wizard-card-footer"
  }, [_vm._t("footer", [_c('div', {
    staticClass: "wizard-footer-left"
  }, [_vm.displayPrevButton ? _c('button', {
    staticClass: "prev-button",
    attrs: {
      "role": "button",
      "tabindex": "0"
    },
    on: {
      "click": _vm.prevTab,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.prevTab($event);
      }
    }
  }, [_vm._t("prev", [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.backButtonText) + "\n\t\t\t\t\t\t\t")], null, _vm.slotProps)], 2) : _vm._e(), _vm._v(" "), _vm._t("custom-buttons-left", null, null, _vm.slotProps)], 2), _vm._v(" "), _c('div', {
    staticClass: "wizard-footer-right"
  }, [_vm._t("custom-buttons-right", null, null, _vm.slotProps), _vm._v(" "), _vm.isLastStep ? _c('button', {
    staticClass: "finish-button",
    attrs: {
      "role": "button",
      "tabindex": "0"
    },
    on: {
      "click": _vm.nextTab,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.nextTab($event);
      }
    }
  }, [_vm._t("finish", [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.finishButtonText) + "\n\t\t\t\t\t\t\t")], null, _vm.slotProps)], 2) : _c('button', {
    staticClass: "next-button",
    attrs: {
      "role": "button",
      "tabindex": "0"
    },
    on: {
      "click": _vm.nextTab,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.nextTab($event);
      }
    }
  }, [_vm._t("next", [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.nextButtonText) + "\n\t\t\t\t\t\t\t")], null, _vm.slotProps)], 2)], 2)], null, _vm.slotProps)], 2) : _vm._e()])])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
var script$2 = {
  name: 'tab-content',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },

    /***
     * Icon name for the upper circle corresponding to the tab
     */
    icon: {
      type: String,
      default: ''
    },

    /***
     * Function to execute before tab switch. Return value must be boolean
     * If the return result is false, tab switch is restricted
     */
    beforeChange: {
      type: Function
    },

    /***
    * Function to execute after tab switch. Return void for now.
    * Safe to assume necessary validation has already occured
    */
    afterChange: {
      type: Function
    },
    route: {
      type: [String, Object]
    },
    additionalInfo: {
      type: Object,
      default: () => {}
    }
  },
  inject: ['addTab', 'removeTab'],

  data() {
    return {
      active: false,
      validationError: null,
      checked: false,
      tabId: ''
    };
  },

  computed: {
    shape() {
      return this.$parent.shape;
    },

    color() {
      return this.$parent.color;
    },

    errorColor() {
      return this.$parent.errorColor;
    }

  },

  mounted() {
    this.addTab(this);
  },

  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    this.removeTab(this);
  }

};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.active,
      expression: "active"
    }],
    staticClass: "wizard-tab-container",
    attrs: {
      "role": "tabpanel",
      "id": _vm.tabId,
      "aria-hidden": !_vm.active,
      "aria-labelledby": "step-" + _vm.tabId
    }
  }, [_vm._t("default", null, {
    "active": _vm.active
  })], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Vuezard: __vue_component__$1,
    TabContent: __vue_component__$2,
    WizardTab: __vue_component__
});

// Import vue components

const install = function installVueWizard(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__$2 as TabContent, __vue_component__$1 as Vuezard, __vue_component__ as WizardTab };
