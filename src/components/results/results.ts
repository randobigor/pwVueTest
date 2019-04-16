import $ from 'jquery'
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
    $.getJSON('http://localhost:3000/values', data => {
      this.data = data
    })
  },
  methods: {
  }
}
