<template>
  <div id="app">
    <div id="nav" class="mb-5">
      <div class="container">
        <b-nav fill tabs>
          <b-nav-item router-link to="/">Home</b-nav-item>
          <b-nav-item router-link to="/input">Input</b-nav-item>
          <b-nav-item router-link to="/output">Output</b-nav-item>
          <b-nav-item router-link to="/results">Results</b-nav-item>
          <b-nav-item router-link to="/students">Students</b-nav-item>
        </b-nav>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
