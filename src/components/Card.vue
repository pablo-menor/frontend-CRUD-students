<template>
  <div class="card-container">
    <div class="card" v-if="!deleted" >
      <p>{{ name }}</p>
      <p>{{ lastName }}</p>
      <p>{{ course }}</p>
      <!-- <button class="btn-delete"  @click="deleteStudent()">DELETE</button> -->
      <span class="material-icons btn-delete"  @mouseover="cross(this)" @click="deleteStudent()">delete</span>
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
      const url = `https://backend-students-crud.herokuapp.com/${this.id}`;
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
    cross(t) {
      // let p = document.querySelectorAll('p');
      // p.style.textDecoration = 'underline';
      // // console.log(t.sy);
    },
  },
};
</script>
<style scoped lang="scss">
.card-container{
  margin: 0px;

  &:hover{
    cursor: pointer;
  }
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
  
  p{
    max-width: 50px;
  }

  .btn-delete {
    margin-top: 12px;
    font-size: 1.7em;
    cursor: pointer;
    color: rgb(255, 19, 19);  

    &:hover{
      color: rgb(255, 97, 97);
    }
  }

}
</style>
