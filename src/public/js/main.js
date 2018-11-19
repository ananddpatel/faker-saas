Vue.use(VueStripeCheckout, options);
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
    rowData: [],
    jumbotronHidden: false
    // jumbotronHidden: localStorage.getItem('jumbotronHidden') === 'true' || false
  },
  mounted() {
    axios
      .get("/methods")
      .then(res => {
        const data = res.data;
        for (const methodGroup in data) {
          if (data.hasOwnProperty(methodGroup)) {
            // data[methodGroup] = data[methodGroup].map(item => ({group: methodGroup, name: item, selected: true}));
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
      // TODO: need to push new selected methods to the end instead of order that it appears inthe mapping
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
  filters: {
    strIfArr(val) {
      if (Array.isArray(val)) {
        return val.join(', ')
      }
      return val
    }
  },
  methods: {
    hideJumbotron() {
      this.jumbotronHidden = true;
      // localStorage.setItem('jumbotronHidden', true)
    },
    toggleMethodSelection(method) {
      method.selected = !method.selected;
    },
    getSampleData() {
      axios.post('/sampledata', this.selectedMethods)
        .then(res => {
          this.rowData = res.data
        })
        .catch(err => {
          this.error = "Error! Could not get sample data.";
        })
    },
    base64toBlob(base64Data, contentType) {
      contentType = contentType || '';
      var sliceSize = 1024;
      var byteCharacters = atob(base64Data);
      var bytesLength = byteCharacters.length;
      var slicesCount = Math.ceil(bytesLength / sliceSize);
      var byteArrays = new Array(slicesCount);
  
      for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          var begin = sliceIndex * sliceSize;
          var end = Math.min(begin + sliceSize, bytesLength);
  
          var bytes = new Array(end - begin);
          for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
              bytes[i] = byteCharacters[offset].charCodeAt(0);
          }
          byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new Blob(byteArrays, { type: contentType });
  },
    buy(fileType) {
      this.loadingData = true;
      axios.post('/download', {fileType: fileType, rows: this.requestedRowCount, methods: this.selectedMethods})
        .then(res => {
          this.loadingData = false;
          const blob = this.base64toBlob(res.data.buffer, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
          saveAs(blob, res.data.fileName);
        })
        .catch(err => {
          this.error = "Error! Could not download your file."
        })
    },
    checkout() {
      // this.$checkout.close() 
      // is also available.
      this.$checkout.open({
        name: 'FakeDataGen',
        currency: 'USD',
        amount: 99999,
        token: (token) => {
          console.log(token);
          
          // Send the token to your server
          // for payment or subscription handling,
          // or do whatever you want with it
          // I don't really care. 
        } 
      });
    }
  }
});
