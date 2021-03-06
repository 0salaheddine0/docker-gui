import axios from 'lib/axios'
import {sortBy} from 'lodash'
import {action, observable} from 'mobx'
import moment from 'moment'
import BaseStore from 'stores/BaseStore'

let baseURL = localStorage.getItem("baseUrl");
if(!baseURL) {
    baseURL = "http://localhost:9898";
    localStorage.setItem("baseUrl" , baseURL);
}
axios.defaults.baseURL = baseURL + '/api/v1/';
console.log("after :" + axios.defaults.baseURL)


const ellipsify = string => {
  return string.length > 40 ? `${string.substr(0, 37)}...` : string
}

export const STATE = {
  CREATED: 'created',
  RUNNING: 'running',
  PAUSED: 'paused',
  RESTARTING: 'restarting',
  REMOVING: 'removing',
  EXITED: 'exited',
  DEAD: 'dead',
}

export default class Containers extends BaseStore {
  @observable containers = []

  constructor(appStore) {
    super()

    this.appStore = appStore
  }

  componentDidMount() {
    changeBaseUrl();
  }

  @action destroyContainer = async id => {
    this.setError()

    try {
      await axios.delete(`containers/${id}`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action inspectContainer = async id => {
    this.setError()

    try {
      const res = await axios.get(`containers/${id}`)
      this.inspect = res.data
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action loadContainersLogs = async id => {
    this.setError()
    try {
      const res = await axios.get(`containers/${id}/logs`)
      this.inspect = res.data
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action loadContainers = async () => {
    this.setError()

    try {

      const res = await axios.get('containers')
      this.containers = sortBy(res.data, container => -container.Created).map(container => {
        const ports = sortBy(container.Ports, p => `${p.PrivatePort}/${p.Type}`).map(p => `${(p.IP || '') && `${p.IP || ''}:${p.PublicPort || ''}->`}${p.PrivatePort}/${p.Type}`).join(', ')
        const names = sortBy(container.Names, n => n.toLowerCase()).map(n => n.slice(1)).join(', ')

        return {
          id: container.Id.substr(0, 12),
          id_full: container.Id,
          image: container.Image,
          command: ellipsify(container.Command),
          command_full: container.Command,
          created: moment.unix(container.Created).fromNow(),
          status: container.Status,
          ports: ellipsify(ports),
          ports_full: ports,
          names: ellipsify(names),
          names_full: names,
          state: container.State,
        }
      })
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action pruneContainers = async () => {
    this.setError()

    try {
      await axios.post('containers/prune')
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action renameContainer = async (id, name) => {
    this.setError()

    try {
      await axios.put(`containers/${id}/rename`, {name: name})
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action restartContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/restart`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action startContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/start`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action stopContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/stop`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action killContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/kill`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action pauseContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/pause`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  @action unpauseContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/unpause`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }
}
