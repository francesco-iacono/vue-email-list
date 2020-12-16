

var app = new Vue({
  el: '#app',
  data: {
    ciao: 'ciao',
    emailList: [],
    newEmail: '',
  },
  mounted: function () {
      for (var i = 0; i < 10; i++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then( (result) => {
            this.newEmail = result.data.response;
            console.log(this.newEmail);
            this.emailList.push(this.newEmail)
            console.log(this.emailList);
         }
        );
      }
    }
})
