<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
    <router-link to="/add-student">Add Students</router-link>
  </div> -->
  <div class="toolbar" role="banner">
    <img width="40" alt="Vue logo" src="./assets/logo.png" />
    <span>CRUD App</span>
    <div class="spacer"></div>
    <a href="https://github.com/pablo-menor" target="_blank" rel="noopener noreferrer" class="media">
      <i class="fab fa-github github-icon"></i>
    </a>
    <a href="https://www.linkedin.com/in/pablo-menor-de-o%C3%B1ate-0404471b9/" target="_blank" rel="noopener noreferrer" class="media">
      <i class="fab fa-linkedin-in linkedin-icon"></i>
    </a>  
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 
#nav {
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
.toolbar .github-icon, .linkedin-icon {
  font-size: 1.9rem;
}
.toolbar .github-icon:hover, .linkedin-icon:hover {
  opacity: 0.8;
  cursor: pointer;
}
.media {
  color: #fafafa;
}
</style>
