import store from '../store'
import addLocalStorageCapabilities from './local_storage_capabilities'
import addTimestampCapabilities from './timestamp_capabilities'

function Project (params) {
    this.title = params.title
    this.content = params.content
    if('id' in params) {
        this.id = params.id
    }
    else {
        this.id = getNextId()
    }

    addTimestampCapabilities(this, params)
}


Project.prototype.update = function () {
    this.touch()
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


addLocalStorageCapabilities(Project, 'projects')



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