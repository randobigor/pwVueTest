export default {
  name: 'students',
  components: {},
  props: [],
  data() {
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
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('http://localhost:3000/students').then(response => {
        this.students = response.body
      });
    }
  }
}
