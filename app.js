const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
  methods: {
    async getUser() {
      // Do the fetch
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      const randomUser = results[0];

      this.firstName = randomUser.name.first;
      this.lastName = randomUser.name.last;
      this.email = randomUser.email;
      this.gender = randomUser.gender;
      this.picture = randomUser.picture.large;
    },
  },
});

app.mount('#app');
