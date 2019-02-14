<template>
  <div id="app">
    <header id="navbar">
      <div class="logo">
        <img src="../muninn-logo01-color.png" alt="logo">
      </div>
      <ul class="navbar-links">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/notes" exact>Notes</router-link></li>
        <li><router-link to="/contacts" exact>Contacts</router-link></li>
        <li><router-link to="/projects" exact>Projects</router-link></li>
        <li><router-link to="/devtools" exact>DevTools</router-link></li>
        <li><a href="#">About</a></li>
      </ul>
    </header>
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
    background-color: #fbeed7;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    margin: 0;
}

#navbar {
  position: absolute;
  background-color: #ffba5a;
  height: 50px;
  width: 100%;
}

.navbar-links {
    color: white;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    float: left;
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
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
}


button {
    display: block;
    height: 50px;
    width: 150px;
    background-color: #ff7657;
    color: white;
    text-transform: uppercase;
    border-radius: 10px;
    border: none;
}

button i {
    float: right;
}

.logo {
    float: left;
    margin: 3px;
}

.logo img {
    height: 50px;
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
