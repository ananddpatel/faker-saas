const app = new Vue({
  el: '#app',
  data: {
    fakerMethods: null,
    error: null
  },
  mounted() {
    axios.get('/methods')
      .then(res => {
        const data = res.data;
        for (const methodGroup in data) {
          if (data.hasOwnProperty(methodGroup)) {
            data[methodGroup] = data[methodGroup].map(item => ({name: item, selected: false}))
          }
        }
        this.fakerMethods = res.data;
      })
      .catch(err => {
        this.error = 'Error! Unable to get data.';
      })
  },
  computed: {
    groups() {
      return this.fakerMethods ? Object.keys(this.fakerMethods) : null;
    }
  },
  methods: {
    selectMethod(method) {
      method.selected = !method.selected;
    }
  }
})