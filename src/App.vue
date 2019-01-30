<template>
  <div id="app">
    <header>

      <ul id="navbar">
        <img id="logo" src="../muninn-logo01-color.png" alt="logo">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/notes" exact>Notes</router-link></li>
        <li><router-link to="/contacts" exact>Contacts</router-link></li>
        <li><router-link to="/projects" exact>Projects</router-link></li>
        <li><a href="#">Todos</a></li>
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
}

#navbar {
    background-color: #ffba5a;
    position: absolute;
    height: 50px;
    width: 100%;
    color: white;
    list-style-type: none;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
}

#navbar li {
    float: left;
}

#navbar li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}

#navbar li a:hover {
    background-color: #ff7657;
}

#navbar .router-link-active {
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

#logo {
    height: 50px;
    float: left;
    margin: 3px;
}

.delete-button {
    cursor: pointer;
}
</style>
