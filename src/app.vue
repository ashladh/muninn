<template>
  <div id="app" class="clearfix">


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
  background-color: #f0f0f5;
  color: #1f1f2e;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  margin: 0;
  padding: 0;
}

#app {
  background-color: white;
  border-radius: 20px;
  width: calc(100% - 80px);
  margin: 40px auto;
  position: relative;
}

#navbar {
  width: 100%;
  float: left;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
}

h1 {
  clear: both;
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
  display: inline-block;
}

.navbar-links li a {
  display: block;
  color: #5e616a;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 10px;
}

.navbar-links li a:hover {
  background-color: #e8aa8c;
}

.navbar-links .router-link-active {
  background-color: #5e616a;
  color: white;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}


#wrapper {
  align-content: center;
  width: 100%;
  min-height: 800px;
  float: left;
  box-sizing: border-box;
  padding: 20px 20px 0 20px;
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
  margin: 0 10px 10px 10px;
  box-shadow: 0 5px 5px #e0e0eb;
  overflow: auto;
  box-sizing: border-box;
  width: calc(50% - 20px);
  float: none;
}



.form h1, .homepage-wrapper h1 {
  text-align: center;
  text-transform: uppercase;
  color: #5e616a;
  font-size: 1.4em;
  background-color: #f0f0f5;
  padding: 10px;
  border-radius: 5px;
}

.form textarea {
  height: 200px;
  width: 100%;
  outline: none;
  background: #f0f0f5;
  border: 0;
  padding: 10px;
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
  box-shadow: 0 5px 5px #e0e0eb;
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
}

.contact-show-box, .note-show-box {
  width: 40%;
  margin: auto;
  word-break: break-all;
}

.project-content-text h1 {
  background-color: white;
}

.note-preview .note-content, .task-preview .task-content {
  font-size: 13px;
}

.task-preview, .note-preview {
  width: 70%;
  margin: auto;
  margin-bottom: 15px;
}


.checkbox-wrapper {
  position: relative;
  width: 30px;
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


.task-project-associated, .task-contact-associated {
    font-size: 12px;
    color: #b3b3cc;
    font-style: italic;
    padding-top: 5px;
    text-align: center;
}


.delete-button {
  cursor: pointer;
}


.contact-preview .contact-content {
    overflow: hidden;
}

.contact-preview {
    display: block;
    width: 100%;
}

.contact-lastname, .contact-firstname {
    display: inline-block;
    font-weight: bold;
    color: #5e616a;
    padding-right: 5px;
    padding-top: 30px;
}

.contact-firstname {
    padding-top: 0;
}

.contact-email {
    color: rgba(94, 97, 106, .7);
    font-size: 12px;
}

.associated-label {
  font-size: 12px;
  color: #b3b3cc;
  font-style: italic;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
}

.router-link-associated {
  text-decoration: none;
  color: #e8aa8c;
}



@media (min-width: 576px) {
  #app {
    width: 430px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #app {
    width: 700px;
  }

  #navbar {
    width: 140px;
  }

  #wrapper {
    width: calc(100% - 140px);
    margin-top: 20px;
  }
}

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  #app {
    width: 900px;
  }

  .contact-preview {
    display: inline-block;
    width: calc(33% - 20px);
  }
}

/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
  #app {
    width: 1200px;
  }

  #wrapper {
    width: 80%;
  }

  .contact-preview {
    display: inline-block;
    width: calc(33% - 20px);
  }
}
</style>
