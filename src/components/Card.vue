<template>
  <div class="card-container">
    <div class="card" v-if="!deleted" >
      <p>{{ name }}</p>
      <p>{{ lastName }}</p>
      <p>{{ course }}</p>
      <button class="btn-delete"  @click="deleteStudent()">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return{
      deleted: false,
    }
  },
  props: {
    name: String,
    lastName: String,
    course: String,
    id: String,
  },  
  methods: {
    deleteStudent() {
      const url = `http://localhost:3000/${this.id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then(() => {
        this.deleted = true;
        this.$emit('studentDeleted')
      });
    },
  },
};
</script>
<style scoped lang="scss">
.card-container{
  margin: 0px;
}
.card {
  margin: 0 auto;
  width: 65vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  padding-bottom: 16px;
  border-bottom: 1px solid black;

  

  .btn-delete {
    height: 30px;
    margin-top: 10px;
  }
}
</style>
