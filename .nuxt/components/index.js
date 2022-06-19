export { default as Loading } from '../..\\src\\components\\shared\\loading\\index.vue'
export { default as Alert } from '../..\\src\\components\\shared\\alert\\index.vue'
export { default as BaseBtn } from '../..\\src\\components\\base\\btn\\index.vue'
export { default as BaseFileInput } from '../..\\src\\components\\base\\file-input\\index.vue'
export { default as BaseForm } from '../..\\src\\components\\base\\form\\index.vue'
export { default as BaseRadioGroup } from '../..\\src\\components\\base\\radio-group\\index.vue'
export { default as BaseTextField } from '../..\\src\\components\\base\\text-field\\index.vue'
export { default as BaseTextarea } from '../..\\src\\components\\base\\textarea\\index.vue'
export { default as BaseTooltip } from '../..\\src\\components\\base\\tooltip\\index.vue'
export { default as CoreAppBar } from '../..\\src\\components\\core\\app-bar\\index.vue'
export { default as CoreDrawer } from '../..\\src\\components\\core\\drawer\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
