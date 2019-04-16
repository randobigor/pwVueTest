import $ from 'jquery'
export default {
  name: 'students',
  components: {},
  props: [],
  data () {
    return {
      students: [],
      fields: [
        {
          key: 'name',
          sortable: false
        },
        {
          key: 'surname',
          sortable: false
        },
        {
          key: 'average',
          sortable: true,
          variant: 'success'
        }
      ]
    }
  },
  computed: {

  },
  mounted () {
    $.getJSON('http://localhost:3000/students', data => {
      this.students = data
    })
  },
  methods: {

  }
}
