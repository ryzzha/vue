export default {
    data() {
      return {
        count: 0,
      }
    },
    computed: {
      double() {
        return this.count * 2;
      }
    },
    watch: {
      count(newVal, oldVal) {
        console.log('Count changed', newVal);
      }
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  }
  