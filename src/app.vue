<template>
  <div id="app">


    <div id="navbar">
      <div class="logo">
          <img src="../muninn-logo01-color2.png" alt="logo">
      </div>
      <ul class="navbar-links">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/notes" exact>Notes</router-link></li>
        <li><router-link to="/contacts" exact>Contacts</router-link></li>
        <li><router-link to="/projects" exact>Projects</router-link></li>
        <li><router-link to="/tasks" exact>Tasks</router-link></li>
        <li><router-link to="/devtools" exact>DevTools</router-link></li>
        <li><a href="#">About</a></li>
      </ul>
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
  background-color: #E8E8E8;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  margin: 0;
  padding: 0;
}

#app {
  background-color: white;
  height: 95%;
  width: 95%;
  border-radius: 20px;
  margin: auto;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
}

#navbar {
  height: 100%;
  width: 10%;
  position: absolute;
  top: 10%;
  left: 5%;
}

.logo {
  height: 120px;
  position: relative;
  left: -5%;
}

.logo img {
  height: 100%;
}

.navbar-links {
  color: #5e616a;
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: left;
}

.navbar-links li {
  padding: 0;
}

.navbar-links li a {
  display: block;
  color: #5e616a;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.navbar-links li a:hover {
  background-color: #e8aa8c;
}

.navbar-links .router-link-active {
  background-color: #5e616a;
  color: white;
}


#wrapper {
  background-color: white;
  align-content: center;
  width: 100%;
  min-height: 800px;
  margin: auto;
  margin-top: 0;
  margin-right: 20px;
  clear: both;
  padding: 10px;
}


.index-actions {
  text-align: center;
}

.button {
  display: inline-block;
  padding-right: 10px;
  background-color: #e8aa8c;
  border-radius: 10px;
  border: none;
  position: relative;
  text-decoration: none;
  color: white;
  margin: auto;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.button-text{
  text-transform: uppercase;
  font-size: 0.8em;
}

.button:hover {
  background-color: #5e616a;
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
  box-shadow: 5px 5px 5px lightgrey;
  overflow: auto;
  box-sizing: border-box;
}



.form h1, .homepage-wrapper h1 {
  text-align: center;
  text-transform: uppercase;
  color: #5e616a;
  font-size: 1.4em;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
}

.form textarea {
  height: 200px;
  width: 100%;
  outline: none;
  background: #f8f8f8;
  border: 0;
}

.form .input {
  position: relative;
	margin: auto;
  width: 40%;
  display: block;
  border-bottom: 1px solid lightgrey;
  outline: none;
  padding: 5px 0;
}

.form input {
  background: none;
  outline: none;
  border: 0;
  width: 100%;
}

.form .input span {
  text-transform: uppercase;
  font-size: 0.7em;
  color: #5e616a;
  font-weight: 10px;
  margin: 0 5px 0 5px;
  display: block;
  padding: 5px;
}

.form input:focus, textarea:focus {
  background: #f8f8f8;
  border-radius: 5px;
  outline: none;
}

.form button {
  display: block;
  margin: auto;
  margin-top: 10px;
}

.select-title {
  text-align: center;
}

.form .input select {
  height: 2em;
  display: block;
  margin: 0 auto;
}


.box {
  border-radius: 10px;
  box-shadow: 5px 5px 5px lightgrey;
  background-color: white;
  height: auto;
  width: 60%;
  padding: 10px;
  margin: auto;
}

#tasks-container {
  height: auto;
  width: 60%;
  margin: auto;
}


.checkbox-wrapper {
  position: relative;
}

.checkbox-wrapper label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.checkbox-wrapper label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.checkbox-wrapper input[type="checkbox"] {
  visibility: hidden;
}

.checkbox-wrapper input[type="checkbox"]:checked + label {
  background-color: #e8aa8c;
  border-color: #e8aa8c;
}

.checkbox-wrapper input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.taskcompleted {
    text-decoration: line-through;
    font-style: italic;
}



.delete-button {
  cursor: pointer;
}



@media (min-width: 576px) {
  #wrapper {
    width: 430px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #wrapper {
    width: 700px;
  }
}

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  #wrapper {
    width: 900px;
  }
}

/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
  #wrapper {
    width: 1200px;
  }
}

</style>
