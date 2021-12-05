<template>
  <div class="container">
    <p>UPDATE INFO</p>
    <form action="">
      <input
        type="text"
        id="nameUpdate"
        v-model="name"
        placeholder="Name"
      />
      <input
        type="text"
        id="lasNameUpdate"
        v-model="lastName"
        placeholder="Lastname"
      />
      <input
        type="text"
        id="courseUpdate"
         v-model="course"  
        placeholder="Course"
      />
    </form>

    <input type="submit" value="Update" id="btn-update" @click="updateInfo()" />
    <span class="material-icons cancel" @click="this.$emit('closedTab')"
      >close</span
    >
  </div>
</template>

<script>
export default {
  name: "UpdateCard",
  data() {
    return {};
  },
  props: {
    name: String,
    lastName: String,
    course: String,
    id: String,
  },
  methods: {
    updateInfo() {
      const url = `https://backend-students-crud.herokuapp.com/${this.id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body:
        JSON.stringify(   {
            
            name: this.name,
            lastName: this.lastName,
            course: this.course,
            id: this.id
        }) 
     
      }).then(() => {
        this.$emit("studentUpdated");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  border-radius: 3px;

  height: 230px;
  width: 200px;
  // background-color: rgb(112, 107, 107);
  background-color: rgb(231, 231, 231);

  z-index: 1000;
  color: rgb(0, 0, 0);

  .cancel {
    color: rgb(252, 85, 85);
    position: absolute;
    top: 0;
    left: 85%;
    cursor: pointer;
  }

  form {
    margin-top: 30px;

    input {
      color: rgb(0, 0, 0);
      margin-bottom: 20px;
      border: none;
      outline: none;
      text-align: center;
      //   background-color: rgb(164, 213, 247);;
      background-color: rgb(231, 231, 231);
      border-bottom: 1.4px solid rgb(87, 87, 87);
    }
  }
  #btn-update {
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 5px 10px;
    color: #ffffff;
    background-color: rgb(141, 141, 141);
  }

  #btn-update:hover {
    cursor: pointer;
  }
}
</style>