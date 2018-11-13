const app = new Vue({
  el: "#app",
  data: {
    fakerMethods: null,
    requestedRowCount: 1000,
    error: null,
    defaultSelected: [
      "full name",
      "internet username",
      "internet email",
      "address street name",
      "address street address",
      "address city",
      "address state",
      "address country",
      "address zip code",
      "phone number"
    ],
    loadingData: false,
    rowData: []
  },
  mounted() {
    axios
      .get("/methods")
      .then(res => {
        const data = res.data;
        for (const methodGroup in data) {
          if (data.hasOwnProperty(methodGroup)) {
            data[methodGroup] = data[methodGroup].map(item => ({group: methodGroup, name: item, selected: this.defaultSelected.indexOf(item) >= 0}));
          }
        }
        this.fakerMethods = res.data;
      })
      .catch(err => {
        this.error = "Error! Unable to get data.";
      });
  },
  computed: {
    groups() {
      return this.fakerMethods ? Object.keys(this.fakerMethods) : null;
    },
    selectedMethods() {
      let _selectedMethods = [];
      for (const group in this.fakerMethods) {
        if (this.fakerMethods.hasOwnProperty(group)) {
          _selectedMethods = _selectedMethods.concat(
            this.fakerMethods[group].filter(item => item.selected)
          );
        }
      }
      return _selectedMethods;
    }
  },
  methods: {
    selectMethod(method) {
      method.selected = !method.selected;
    },
    getSampleData() {
      this.loadingData = true;
      console.log(this.selectedMethods.map(item => item.name))
      axios.post('/sampledata', this.selectedMethods)
        .then(res => {
          this.rowData = res.data
          this.loadingData = false;
        })
        .catch(err => {
          this.error = "Error! Could not get sample data.";
        })
    },
    buy() {
      axios.post('/download', {rows: this.requestedRowCount})
        .then(d => {
          // console.log(d.data);
          console.log(d.headers);
          
          saveAs(new Blob(d.data, {type: d.headers['content-type']}))
        })
        .catch(err => {
          this.error = "Error! Could not download your file."
        })
    }
  }
});
