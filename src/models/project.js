import store from '../store'
import {DateTime} from 'luxon'

function Project (params) {
    this.title = params.title
    this.content = params.content
    if('id' in params) {
        this.id = params.id
    }
    else {
        this.id = getNextId()
    }

    if ('updatedAt' in params) {
        this.updatedAt = params.updatedAt
    }
    else {
        this.updatedAt = DateTime.local().toISO()
    }
    if ('createdAt' in params) {
        this.createdAt = params.createdAt
    }
    else {
        this.createdAt = DateTime.local().toISO()
    }
}


Project.prototype.update = function () {
    this.updatedAt = DateTime.local().toISO()
}


Project.prototype.remove = function () {
    var index = store.projects.indexOf(this)

    if (index != -1) {
        store.projects.splice(index, 1)
        Project.saveToLocalStorage(store.projects)
    }
}


Project.find = function (id) {
    var foundProject

    store.projects.forEach(function (project) {
        if (project.id === id) {
           foundProject = project
        }
    })

    return foundProject
}


Project.importFromLocalStorage = function () {
    var stringProjects = localStorage.getItem('projects')
    var projects = stringProjects ? JSON.parse(stringProjects) : []

    projects.forEach(function (projectData) {
        store.projects.push(new Project(projectData))
    })
}


Project.saveToLocalStorage = function () {
    localStorage.setItem('projects', JSON.stringify(store.projects))
}



function getNextId () {
    var currentId = localStorage.getItem('currentId')
    if(!currentId) {
        currentId = 0
    }
    currentId++
    localStorage.setItem('currentId', currentId)
    return currentId
}


export default Project