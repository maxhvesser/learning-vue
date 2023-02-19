<template>
  <active-user
      :age="activeUser.age"
      :username="activeUser.username"
  ></active-user>
  <user-data
    @user-data="updateEnteredUser"
  ></user-data>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeUser: {
        username: '',
        age: '',
      },
    };
  },
  methods: {
    updateEnteredUser(username, age) {
      this.activeUser = {
        username: username,
        age: age,
      };
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid lightgray;
  padding: 1rem;
}
</style>