export default {
  data () {
    return {
      active: 'one' // two
    }
  },
  computed: {
    // componentName () {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get () {
        return 'app-text-' + this.active
      },
      set (value) {

      }
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  }
}
