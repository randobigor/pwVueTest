export default {
  name: 'output',
  components: {},
  props: [],
  data () {
    return {
    }
  },
  computed: {
    valueX() {
      return this.$store.state.x
    },
    valueY() {
      return this.$store.state.y
    }
  },
  mounted () {

  },
  methods: {

  }
}
