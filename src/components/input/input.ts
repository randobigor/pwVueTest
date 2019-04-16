export default {
  name: 'input',
  components: {},
  props: [],
  data () {
    return {
      inputX: '',
      inputY: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    translate() {
      this.$store.commit('setValues', [this.inputX, this.inputY]);
    }
  }
}
