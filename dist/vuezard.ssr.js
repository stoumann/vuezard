'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
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
    iconActiveStyle: function iconActiveStyle() {
      return {
        color: this.tab.color
      };
    },
    stepCheckedStyle: function stepCheckedStyle() {
      return {
        borderColor: this.tab.color,
        color: this.tab.color
      };
    },
    errorStyle: function errorStyle() {
      return {
        borderColor: this.tab.errorColor
      };
    },
    stepTitleStyle: function stepTitleStyle() {
      var isError = this.tab.validationError;
      return {
        color: isError ? this.tab.errorColor : this.tab.color
      };
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    class: {
      active: _vm.tab.active
    }
  }, [_vm._ssrNode("<a href=\"javascript:void(0)\"" + _vm._ssrClass(null, {
    disabled: !_vm.tab.checked
  }) + ">", "</a>", [_vm._ssrNode("<div role=\"tab\"" + _vm._ssrAttr("tabindex", _vm.tab.checked ? 0 : '') + _vm._ssrAttr("id", "step-" + _vm.tab.tabId) + _vm._ssrAttr("aria-controls", _vm.tab.tabId) + _vm._ssrAttr("aria-disabled", _vm.tab.active) + _vm._ssrAttr("aria-selected", _vm.tab.active) + _vm._ssrClass("wizard-tab", {
    checked: _vm.tab.checked
  }) + _vm._ssrStyle(null, [_vm.tab.checked ? _vm.stepCheckedStyle : {}, _vm.tab.validationError ? _vm.errorStyle : {}], null) + ">", "</div>", [_c('transition', {
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
  }, [_vm._v(_vm._s(_vm.index + 1))]) : _vm._e()]) : _vm._e()], 2), _vm._ssrNode(" "), _vm._t("title", [_c('span', {
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

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-dc758a64";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);function getFocusedElementId() {
  return document.activeElement.id;
}
function getFocusedTabIndex() {
  var tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var activeId = getFocusedElementId();
  var tabIndex = tabs.findIndex(function (tab) {
    return tab.tabId === activeId;
  });
  return tabIndex;
}
function findElementAndFocus(elemId) {
  var elem = document.getElementById(elemId);
  elem.focus();
}
function isPromise(func) {
  return func.then && typeof func.then === 'function';
}//
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
      validator: function validator(value) {
        return value >= 0;
      }
    }
  },
  provide: function provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    };
  },
  data: function data() {
    return {
      activeTabIndex: 0,
      currentPercentage: 0,
      maxStep: 0,
      loading: false,
      tabs: []
    };
  },
  computed: {
    slotProps: function slotProps() {
      return {
        nextTab: this.nextTab,
        prevTab: this.prevTab,
        activeTabIndex: this.activeTabIndex,
        isLastStep: this.isLastStep,
        fillButtonStyle: this.fillButtonStyle
      };
    },
    tabCount: function tabCount() {
      return this.tabs.length;
    },
    isLastStep: function isLastStep() {
      return this.activeTabIndex === this.tabCount - 1;
    },
    isVertical: function isVertical() {
      return this.layout === 'vertical';
    },
    displayPrevButton: function displayPrevButton() {
      return this.activeTabIndex !== 0;
    },
    stepPercentage: function stepPercentage() {
      return 1 / (this.tabCount * 2) * 100;
    },
    progressBarStyle: function progressBarStyle() {
      return {
        backgroundColor: this.color,
        width: "".concat(this.progress, "%"),
        color: this.color
      };
    },
    fillButtonStyle: function fillButtonStyle() {
      return {
        backgroundColor: this.color,
        borderColor: this.color,
        color: 'white'
      };
    },
    progress: function progress() {
      var percentage = 0;

      if (this.activeTabIndex > 0) {
        var stepsToAdd = 1;
        var stepMultiplier = 2;
        percentage = this.stepPercentage * (this.activeTabIndex * stepMultiplier + stepsToAdd);
      } else {
        percentage = this.stepPercentage;
      }

      return percentage;
    }
  },
  methods: {
    emitTabChange: function emitTabChange(prevIndex, nextIndex) {
      this.$emit('on-change', prevIndex, nextIndex);
      this.$emit('update:startIndex', nextIndex);
    },
    addTab: function addTab(item) {
      var index = this.$slots.default.indexOf(item.$vnode);
      item.tabId = "".concat(item.title.replace(/ /g, '')).concat(index);
      this.tabs.splice(index, 0, item); // if a step is added before the current one, go to it

      if (index < this.activeTabIndex + 1) {
        this.maxStep = index;
        this.changeTab(this.activeTabIndex + 1, index);
      }
    },
    removeTab: function removeTab(item) {
      var tabs = this.tabs;
      var index = tabs.indexOf(item);

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
    reset: function reset() {
      this.maxStep = 0;
      this.tabs.forEach(function (tab) {
        tab.checked = false;
      });
      this.navigateToTab(0);
    },
    activateAll: function activateAll() {
      this.maxStep = this.tabs.length - 1;
      this.tabs.forEach(function (tab) {
        tab.checked = true;
      });
    },
    navigateToTab: function navigateToTab(index) {
      var _this = this;

      var validate = index > this.activeTabIndex;

      if (index <= this.maxStep) {
        var callback = function callback() {
          if (validate && index - _this.activeTabIndex > 1) {
            // validate all steps recursively until destination index
            _this.changeTab(_this.activeTabIndex, _this.activeTabIndex + 1);

            _this.beforeTabChange(_this.activeTabIndex, callback);
          } else {
            _this.changeTab(_this.activeTabIndex, index);

            _this.afterTabChange(_this.activeTabIndex);
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
    nextTab: function nextTab() {
      var _this2 = this;

      var callback = function callback() {
        if (_this2.activeTabIndex < _this2.tabCount - 1) {
          _this2.changeTab(_this2.activeTabIndex, _this2.activeTabIndex + 1);

          _this2.afterTabChange(_this2.activeTabIndex);
        } else {
          _this2.$emit('on-complete');
        }
      };

      this.beforeTabChange(this.activeTabIndex, callback);
    },
    prevTab: function prevTab() {
      var _this3 = this;

      var callback = function callback() {
        if (_this3.activeTabIndex > 0) {
          _this3.setValidationError(null);

          _this3.changeTab(_this3.activeTabIndex, _this3.activeTabIndex - 1);
        }
      };

      if (this.validateOnBack) {
        this.beforeTabChange(this.activeTabIndex, callback);
      } else {
        callback();
      }
    },
    focusNextTab: function focusNextTab() {
      var tabIndex = getFocusedTabIndex(this.tabs);

      if (tabIndex !== -1 && tabIndex < this.tabs.length - 1) {
        var tabToFocus = this.tabs[tabIndex + 1];

        if (tabToFocus.checked) {
          findElementAndFocus(tabToFocus.tabId);
        }
      }
    },
    focusPrevTab: function focusPrevTab() {
      var tabIndex = getFocusedTabIndex(this.tabs);

      if (tabIndex !== -1 && tabIndex > 0) {
        var toFocusId = this.tabs[tabIndex - 1].tabId;
        findElementAndFocus(toFocusId);
      }
    },
    setLoading: function setLoading(value) {
      this.loading = value;
      this.$emit('on-loading', value);
    },
    setValidationError: function setValidationError(error) {
      this.tabs[this.activeTabIndex].validationError = error;
      this.$emit('on-error', error);
    },
    validateBeforeChange: function validateBeforeChange(promiseFn, callback) {
      var _this4 = this;

      this.setValidationError(null); // we have a promise

      if (isPromise(promiseFn)) {
        this.setLoading(true);
        promiseFn.then(function (res) {
          _this4.setLoading(false);

          var validationResult = res === true;

          _this4.executeBeforeChange(validationResult, callback);
        }).catch(function (error) {
          _this4.setLoading(false);

          _this4.setValidationError(error);
        });
      } else {
        var validationResult = promiseFn === true;
        this.executeBeforeChange(validationResult, callback);
      }
    },
    executeBeforeChange: function executeBeforeChange(validationResult, callback) {
      this.$emit('on-validate', validationResult, this.activeTabIndex);

      if (validationResult) {
        callback();
      } else {
        this.tabs[this.activeTabIndex].validationError = 'error';
      }
    },
    beforeTabChange: function beforeTabChange(index, callback) {
      if (this.loading) {
        return;
      }

      var oldTab = this.tabs[index];

      if (oldTab && oldTab.beforeChange !== undefined) {
        var tabChangeRes = oldTab.beforeChange();
        this.validateBeforeChange(tabChangeRes, callback);
      } else {
        callback();
      }
    },
    afterTabChange: function afterTabChange(index) {
      if (this.loading) {
        return;
      }

      var newTab = this.tabs[index];

      if (newTab && newTab.afterChange !== undefined) {
        newTab.afterChange();
      }
    },
    changeTab: function changeTab(oldIndex, newIndex) {
      var emitChangeEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var oldTab = this.tabs[oldIndex];
      var newTab = this.tabs[newIndex];

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
    tryChangeRoute: function tryChangeRoute(tab) {
      if (this.$router && tab.route) {
        this.$router.push(tab.route);
      }
    },
    checkRouteChange: function checkRouteChange(route) {
      var matchingTabIndex = -1;
      var matchingTab = this.tabs.find(function (tab, index) {
        var match = tab.route === route;

        if (match) {
          matchingTabIndex = index;
        }

        return match;
      });

      if (matchingTab && !matchingTab.active) {
        var shouldValidate = matchingTabIndex > this.activeTabIndex;
        this.navigateToTab(matchingTabIndex, shouldValidate);
      }
    },
    deactivateTabs: function deactivateTabs() {
      this.tabs.forEach(function (tab) {
        tab.active = false;
      });
    },
    activateTab: function activateTab(index) {
      this.deactivateTabs();
      var tab = this.tabs[index];

      if (tab) {
        tab.active = true;
        tab.checked = true;
        this.tryChangeRoute(tab);
      }
    },
    activateTabAndCheckStep: function activateTabAndCheckStep(index) {
      this.activateTab(index);

      if (index > this.maxStep) {
        this.maxStep = index;
      }

      this.activeTabIndex = index;
    },
    initializeTabs: function initializeTabs() {
      if (this.tabs.length > 0 && this.startIndex === 0) {
        this.activateTab(this.activeTabIndex);
      }

      if (this.startIndex < this.tabs.length) {
        this.activateTabAndCheckStep(this.startIndex);
      } else {
        window.console.warn("Prop startIndex set to ".concat(this.startIndex, " is greater than the number of tabs - ").concat(this.tabs.length, ". Make sure that the starting index is less than the number of tabs registered"));
      }
    }
  },
  mounted: function mounted() {
    this.initializeTabs();
  },
  watch: {
    '$route.path': function $routePath(newRoute) {
      this.checkRouteChange(newRoute);
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vuezard"
  }, [_vm._ssrNode((_vm.title ? "<div class=\"wizard-header\"><h4 class=\"wizard-title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h4> <p class=\"wizard-subtitle\">" + _vm._ssrEscape(_vm._s(_vm.subTitle)) + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"wizard-container\">", "</div>", [_vm._ssrNode("<div role=\"tablist\" class=\"wizard-tabs\">", "</div>", [_vm._ssrNode("<ul class=\"wizard-tablist\">", "</ul>", [_vm._l(_vm.tabs, function (tab, index) {
    return _vm._t("tab", [_c('wizard-tab', {
      attrs: {
        "tab": tab,
        "index": index,
        "transition": _vm.transition
      },
      nativeOn: {
        "click": function click($event) {
          return _vm.navigateToTab(index);
        },
        "keyup": function keyup($event) {
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
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wizard-content-footer\">", "</div>", [_vm._ssrNode("<div class=\"wizard-content\">", "</div>", [_vm._t("default", null, null, _vm.slotProps)], 2), _vm._ssrNode(" "), !_vm.hideButtons ? _vm._ssrNode("<div class=\"wizard-card-footer\">", "</div>", [_vm._t("footer", [_c('div', {
    staticClass: "wizard-footer-left"
  }, [_vm.displayPrevButton ? _c('button', {
    staticClass: "prev-button",
    attrs: {
      "role": "button",
      "tabindex": "0"
    },
    on: {
      "click": _vm.prevTab,
      "keyup": function keyup($event) {
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
      "keyup": function keyup($event) {
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
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.nextTab($event);
      }
    }
  }, [_vm._t("next", [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.nextButtonText) + "\n\t\t\t\t\t\t\t")], null, _vm.slotProps)], 2)], 2)], null, _vm.slotProps)], 2) : _vm._e()], 2)], 2)], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-4fab8c86";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);//
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
      default: function _default() {}
    }
  },
  inject: ['addTab', 'removeTab'],
  data: function data() {
    return {
      active: false,
      validationError: null,
      checked: false,
      tabId: ''
    };
  },
  computed: {
    shape: function shape() {
      return this.$parent.shape;
    },
    color: function color() {
      return this.$parent.color;
    },
    errorColor: function errorColor() {
      return this.$parent.errorColor;
    }
  },
  mounted: function mounted() {
    this.addTab(this);
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    this.removeTab(this);
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
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

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-1e730e81";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,Vuezard: __vue_component__$1,TabContent: __vue_component__$2,WizardTab: __vue_component__});var install = function installVueWizard(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.TabContent=__vue_component__$2;exports.Vuezard=__vue_component__$1;exports.WizardTab=__vue_component__;exports.default=plugin;