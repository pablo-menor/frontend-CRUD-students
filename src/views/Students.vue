<template>
  <router-link to="/">
    <i class="fas fa-long-arrow-alt-left go-back"></i
  ></router-link>
  <input class="search-input" type="text" name="name" v-show="students" />
  <i
    class="fas fa-search search-icon"
    v-on:click="bringUserByName"
    v-show="students"
  ></i>
  <section class="students" v-show="students && !error">
    <div class="headings">
      <p>NAME</p>
      <p>LASTNAME</p>
      <p>COURSE</p>
      <p>ACTIONS</p>
    </div>
    <Card
      v-for="(item, i) in studentInfo"
      :key="i"
      :name="item.name"
      :lastName="item.lastname"
      :course="item.course"
      :id="item.id"
      @click="getPropsFromSelectedCard(item)"
      @studentDeleted="countStudents()"
    />
    <!-- @click="update=true"  -->
    <!-- añadir condición para que si DELETED update se mantenga en false  -->
  </section>

  <div class="no-data" v-show="!students">
    <i class="fas fa-exclamation-circle warning"></i>
    <p>Database empty!!!</p>
  </div>
  <div class="error" v-show="error">
    <i class="fas fa-exclamation-circle warning"></i>
    <p>Sorry, try a different name</p>
  </div>

  <UserDeleted v-if="userDeleted" class="user-deleted" />
  <UserUpdated v-if="updatedDiv" class="user-deleted" />
  <UpdateCard
    v-if="update"
    class="updated-user"
    :name="name"
    :lastName="lastName"
    :course="course"
    :id="id"
    @closedTab="update = false"
    @studentUpdated="studentUpdated()"
  />
</template>

<script>
import Card from "@/components/Card.vue";
import UserDeleted from "@/components/UserDeleted.vue";
import UpdateCard from "@/components/UpdateCard.vue";
import UserUpdated from "@/components/UserUpdated";

export default {
  components: {
    Card,
    UserDeleted,
    UpdateCard,
    UserUpdated
  },
  data() {
    return {
      students: true,
      studentInfo: [],
      cont: 0,
      userDeleted: false,
      update: false,
      error: false,
      updatedDiv: false,
      //Name, lastName and Course from selected card
      name: "",
      lastName: "",
      course: "",
      id: "",
    };
  },
  methods: {
    getPropsFromSelectedCard(item) {
      this.name = item.name;
      this.lastName = item.lastname;
      this.course = item.course;
      this.id = item.id;
      this.update = true;
    },
    countStudents() {
      setTimeout(() => {
         this.update = false;
      }, 2);
      this.cont--;
      if (this.cont === 0) {
        this.students = false;
      } else {
       
        this.userDeleted = true;
        this.studentInfo = [];
        this.getStudents();
        this.update = false;
        setTimeout(() => (this.userDeleted = false), 1000);
      }
    },
    getStudents() {
      fetch("https://backend-students-crud.herokuapp.com/")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.length === 0) {
            this.students = false;
          } else {
            for (let i = 0; i < data.length; i++) {
              const student = {
                name: data[i].name,
                lastname: data[i].lastName,
                course: data[i].course,
                id: data[i]._id,
              };
              this.studentInfo.push(student);
              this.cont++;
            }
            this.students = true;
          }
        });
    },
    //Bring user by Name
    bringUserByName() {
      this.studentInfo = [];
      const studentName2 = document.querySelector(".search-input");
      const text = studentName2.value;
      const url = `https://backend-students-crud.herokuapp.com/${text}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            this.error = false;
            for (let i = 0; i < data.length; i++) {
              const student = {
                name: data[i].name,
                lastname: data[i].lastName,
                course: data[i].course,
                id: data[i]._id,
              };
              this.studentInfo.push(student);
            }
          } else {
            this.error = true;
          }
        });
    },
    studentUpdated(){
      this.update = false;
        this.studentInfo = [];
        this.getStudents();
      this.updatedDiv = true;
       setTimeout(() => (this.updatedDiv = false), 1000);
    }
  },
  mounted() {
    //when dom is ready
    this.getStudents();
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input {
  margin-top: 100px;
  outline: none;
  padding: 5px;
}
.go-back {
  cursor: pointer;
  color: #1976d2;
  font-size: 2.4rem;
  position: absolute;
  left: 0;
  margin-left: 40px;
  margin-top: 100px;
}
.search-icon {
  cursor: pointer;
  color: #1976d2;
  font-size: 1.6rem;
  position: absolute;
  margin-top: 105px;
  right: 0;
  margin-right: 40px;
}

// .students {
//   width: 65vw;
//   margin-top: 80px;
// }
.students {
  margin: 0 auto;

  .headings {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 50px;
    border-bottom: 1px solid black;
    padding-bottom: 15px;
    font-weight: bold;
    font-size: 0.7rem;
    width: 65vw;
    // padding-left: 15px; //maybw this for pc view
    p {
      margin: 0;
    }
  }
}

.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}
.no-data .warning {
  color: #fd0000;
  font-size: 2rem;
  margin-bottom: 20px;
}
.no-data p {
  font-size: 1.3rem;
}

.user-deleted {
  position: absolute;
  top: 30%;
  left: calc(50% - 100px);
}

.updated-user {
  position: absolute;
  top: 30%;
  left: calc(50% - 100px);
}
</style>