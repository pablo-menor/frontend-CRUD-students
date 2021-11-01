<template>
  <div class="home">
    <section class="actions">
       <router-link to="/add-student"> <i class="fas fa-plus-square plus" ></i></router-link>
       <router-link to="/students"><i class="fas fa-list-alt whole-list"></i></router-link>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      seen: false,
      students: [
        {name: "Jose", lastName: "Pérez", course: "Matess" , id: 'd'},
        {name: "Manuel", lastName: "Gn", course: "Lengua", id: '8'}
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.a{
  margin: 0 auto;

  .headings{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 50px;
    border-bottom: 1px solid black;
    padding-bottom: 15px;
    font-weight: bold;
    font-size: 0.7rem;
    width: 65vw;
   
    }
}
.home{
  margin-top: 100px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 8px 0;
}

p {
  margin: 0;
}

.spacer {
  flex: 1;
}

.toolbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #1976d2;
  color: white;
  font-weight: 600;
  padding-left: 5%;
  padding-right: 5%;
}

.toolbar img {
  margin: 0 16px;
}

.toolbar .github-icon {
  margin-right: 15px;
}
.toolbar .github-icon,
.linkedin-icon {
  font-size: 1.9rem;
}
.toolbar .github-icon:hover,
.linkedin-icon:hover {
  opacity: 0.8;
  cursor: pointer;
}

.media {
  color: #fafafa;
}
.content {
  display: flex;
  margin: 82px auto 32px;
  padding: 0 16px;
  max-width: 960px;
  flex-direction: column;
  align-items: center;
}

svg.material-icons {
  height: 24px;
  width: auto;
}

svg.material-icons:not(:last-child) {
  margin-right: 8px;
}

.card svg.material-icons path {
  fill: #888;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}

.card {
  all: unset;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #fafafa;
  height: 40px;
  width: 200px;
  margin: 0 8px 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  line-height: 24px;
}

.card-container .card:not(:last-child) {
  margin-right: 0;
}

.card.card-small {
  height: 16px;
  width: 168px;
}

.card-container .card:not(.highlight-card) {
  cursor: pointer;
}

.card-container .card:not(.highlight-card):hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
}

.card-container .card:not(.highlight-card):hover .material-icons path {
  fill: rgb(105, 103, 103);
}

.card.highlight-card {
  background-color: #1976d2;
  color: white;
  font-weight: 600;
  border: none;
  width: auto;
  min-width: 30%;
  position: relative;
}

.card.card.highlight-card span {
  margin-left: 60px;
}

svg#rocket {
  width: 80px;
  position: absolute;
  left: -10px;
  top: -24px;
}
input {
  margin-top: 6vw;
  outline: none;
  padding: 5px;
}

.plus {
  color: #1976d2;
  margin-left: 5px;
  font-size: 2.4rem;
  margin-right: 10px;
  cursor: pointer;
  @keyframes here {
    50% {
      font-size: 2.7rem;
    }
  }
}
.whole-list {
  cursor: pointer;
  color: #1976d2;
  margin-left: 5px;
  font-size: 2.4rem;
}

.go-back {
  cursor: pointer;
  color: #1976d2;
  font-size: 2.4rem;
  position: absolute;
  left: 0;
  margin-left: 40px;
  margin-top: 20px;
}

.search-icon {
  cursor: pointer;
  color: #1976d2;
  font-size: 1.6rem;
  position: absolute;
  margin-top: 25px;
  right: 0;
  margin-right: 40px;
}

.students {
  margin-top: 40px;
  // width: 80%;
}

.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.no-data .warning {
  color: #fd0000;
  font-size: 2rem;
  margin-bottom: 20px;
}
.no-data p {
  font-size: 1.3rem;
}

/* Responsive Styles */
@media screen and (max-width: 767px) {
  .card-container > *:not(.circle-link),
  .terminal {
    width: 100%;
  }

  .card:not(.highlight-card) {
    height: 16px;
    margin: 8px 0;
  }

  .card.highlight-card span {
    margin-left: 72px;
  }

  svg#rocket-smoke {
    right: 120px;
    transform: rotate(-5deg);
  }
}

@media screen and (max-width: 575px) {
  svg#rocket-smoke {
    display: none;
    visibility: hidden;
  }
}
</style>
