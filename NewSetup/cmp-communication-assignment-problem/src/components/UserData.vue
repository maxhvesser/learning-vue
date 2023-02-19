<template>
  <section>
    <form @submit.prevent="emitActiveUser">
      <label>Username</label>
      <input type="text" v-model="enteredUsername"/>
      <label>Age</label>
      <input type="text" v-model="enteredAge"/>
      <button>Set Active User</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserData",
  data() {
    return {
      enteredUsername: '',
      enteredAge: '',
    };
  },
  emits: ['user-data'],
  methods: {
    emitActiveUser() {
      this.$emit(
          'user-data',
          this.enteredUsername,
          this.enteredAge,
      );
    },
  },
}
</script>

<style scoped>

</style>