const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      id: new URLSearchParams(location.search).get("id"),
      params: "",
      accountsId: "",
      transactions: [],
      data: "",
    };
  },
  created() {
    this.loadData();
    this.loadData2();
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:8080/api/clients/current/accounts/" + this.id)
        .then((response) => {
          this.accountId = response.data;
          this.transactions = this.accountId.transactions.sort(
            (x, y) => y.id - x.id
          );
        })
        .catch((err) => console.log(err));
    },
    loadData2() {
      axios
        .get("http://localhost:8080/api/clients/current")
        .then((response) => {
          this.data = response.data;
        })
        .catch((err) => console.log(err));
    },
    formatCurrency(amount) {
      let options = { style: "currency", currency: "USD" };
      let numberFormat = new Intl.NumberFormat("en-US", options);
      return numberFormat.format(amount);
    },
    signOut() {
      Swal.fire({
        title: "Are you sure to logout?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .post("/api/logout")
              .then((response) => (window.location.href = "/web/index.html"))
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.response.data,
                });
              });
          }
        })
        .catch((error) => console.log(error));
    },
  },
}).mount("#app");
window.onload = function(){
  $('#loader').fadeOut();
  $('body').removeClass('hidden');
}
