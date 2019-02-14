<template>
  <div id="app">
    <div class="header-wrapper">
      <div class="logo">
          <img src="../muninn-logo01-color.png" alt="logo">
      </div>
      <div id="navbar">
        <ul class="navbar-links">
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/notes" exact>Notes</router-link></li>
          <li><router-link to="/contacts" exact>Contacts</router-link></li>
          <li><router-link to="/projects" exact>Projects</router-link></li>
          <li><router-link to="/devtools" exact>DevTools</router-link></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </div>
    <div id="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background-color: #ffba5a;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  margin: 0;
  padding: 0;
}

.header-wrapper {
  position: relative;
  height: 150px;
  width: 960px;
  margin: auto;
}

#navbar {
  height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: -2px;
}

.navbar-links {
  color: white;
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;
}

.navbar-links li {
  float: left;
  padding: 0;
}

.navbar-links li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.navbar-links li a:hover {
  background-color: #ff7657;
}

.navbar-links .router-link-active {
  background-color: #665c84;
}


#wrapper {
  border-top: 20px solid #665c84;
  background-color: #fbeed7;
  align-content: center;
  width: 960px;
  height: 800px;
  margin: auto;
  clear: both;
  padding: 10px;
}


.index-actions {
  text-align: center;
}

.button {
  display: inline-block;
  padding-right: 10px;
  background-color: #ff7657;
  border-radius: 10px;
  border: none;
  position: relative;
  text-decoration: none;
  color: white;
  margin: auto;
  padding: 10px;
}

.button-text{
  text-transform: uppercase;
  font-size: 0.8em;
}

.logo {
  height: 120px;
  position: absolute;
  left: 30%;
  bottom: 0;
}

.logo img {
  height: 100%;
}

.container {
  margin: 1em;
}

.preview {
  background-color: white;
  border-radius: 10px;
  height: 120px;
  padding-left: 15px;
  margin: 10px;
  border-left: 5px solid #ff7657;
  border-right: 5px solid #ff7657;
  overflow: auto;
}



.form textarea {
  height: 200px;
  width: 60%;
  border-radius: 10px;
  border: 5px solid #ff7657;
  outline-style: none;
}

.form .input {
  position: relative;
	display: inline-block;
	margin: 1em;
	max-width: 400px;
	width: 10%;
}

.box {
  border-radius: 10px;
  border: 5px solid #ff7657;
  background-color: white;
  height: auto;
  width: 60%;
  padding: 10px;
  margin: auto;
}


.delete-button {
  cursor: pointer;
}
</style>
