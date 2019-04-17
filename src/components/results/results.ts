export default {
  name: 'results',
  components: {},
  props: [],
  data () {
    return {
      data: [],
      fields: ['x', 'y']
    }
  },
  computed: {

  },
  mounted () {
    this.getResults()
  },
  methods: {
    getResults() {
      this.$http.get('http://localhost:3000/values').then(data => this.data = data.body)
    }
  }
}
