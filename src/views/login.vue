<template>
  <div>
    <input type="text" v-model="userName" />
    <input type="password" v-model="password" /> <br />
    <button @click="handleSubmit">登陆</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login_page",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      this.login({
        userName: this.userName,
        password: this.password
      })
        .then(() => {
          this.$router.push({
            name: "home"
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
