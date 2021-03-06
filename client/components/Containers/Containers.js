import { inject, observer } from "mobx-react";
import React from "react";
import AppStore from "stores/AppStore";
import { STATE } from "stores/Containers/Containers";
import { Link } from "react-router";

@inject("store")
@observer
export default class Containers extends React.Component {
  props: {
    store: AppStore,
  };

  constructor(props) {
    super(props);

    this.appStore = props.store;
    this.containersStore = this.appStore.containers;
  }

  componentDidMount() {
    this.loadContainers();
  }

  closeInspector = () => {
    this.containersStore.closeInspector();
  };

  destroyContainer = (id) => {
    if (confirm(`Are you sure you want to delete container ${id}`)) {
      this.containersStore.destroyContainer(id);
    }
  };

  inspectContainer = (e, id) => {
    e.preventDefault();

    this.containersStore.inspectContainer(id);
  };

  loadContainers = () => {
    this.containersStore.loadContainers();
  };

  loadContainersLogs = () => {
    this.containersStore.loadContainersLogs();
  };

  pauseContainer = (id) => {
    if (confirm(`Are you sure you want to pause container ${id}?`)) {
      this.containersStore.pauseContainer(id);
    }
  };

  unpauseContainer = (id) => {
    if (confirm(`Are you sure you want to unpause container ${id}?`)) {
      this.containersStore.unpauseContainer(id);
    }
  };

  renameContainer = (container) => {
    const name = prompt(
      "What would you like the new name to be?",
      container.names
    );

    if (name) {
      this.containersStore.renameContainer(container.id, name);
    }
  };

  restartContainer = (id) => {
    if (confirm(`Are you sure you want to restart container ${id}?`)) {
      this.containersStore.restartContainer(id);
    }
  };

  startContainer = (id) => {
    if (confirm(`Are you sure you want to start container ${id}?`)) {
      this.containersStore.startContainer(id);
    }
  };

  stopContainer = (id) => {
    if (confirm(`Are you sure you want to stop container ${id}?`)) {
      this.containersStore.stopContainer(id);
    }
  };

  killContainer = (id) => {
    if (confirm(`Are you sure you want to kill container ${id}?`)) {
      this.containersStore.killContainer(id);
    }
  };

  render() {
    const { containers, error, inspect } = this.containersStore;

    return (
      <div className="Containers">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Container ID</th>
                <th>Image</th>
                <th>Command</th>
                <th>Created</th>
                <th>Status</th>
                <th>Ports</th>
                <th>Names</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {containers.map((container, i) => (
                <tr key={i}>
                  <td title={container.id_full}>
                    <a
                      href="#"
                      onClick={(e) => this.inspectContainer(e, container.id)}
                    >
                      {container.id}
                    </a>
                  </td>
                  <td title={container.image}>{container.image}</td>
                  <td title={container.command_full}>{container.command}</td>
                  <td title={container.created}>{container.created}</td>
                  <td title={container.status}>
                    {container.state === STATE.CREATED && (
                      <span className="label label-info">created</span>
                    )}
                    {container.state === STATE.RUNNING && (
                      <span className="label label-success">running</span>
                    )}
                    {container.state === STATE.PAUSED && (
                      <span className="label label-warning">paused</span>
                    )}
                    {container.state === STATE.RESTARTING && (
                      <span className="label label-warning">restarting</span>
                    )}
                    {container.state === STATE.REMOVING && (
                      <span className="label label-danger">removing</span>
                    )}
                    {container.state === STATE.EXITED && (
                      <span className="label label-danger">exited</span>
                    )}
                    {container.state === STATE.DEAD && (
                      <span className="label label-danger">dead</span>
                    )}
                    &nbsp;
                    {container.status}
                  </td>
                  <td title={container.ports_full}>{container.ports}</td>
                  <td title={container.names_full}>{container.names}</td>
                  <td>
                    <div className="dropdown pull-right">
                      <button
                        className="btn btn-default dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <span className="glyphicon glyphicon-cog" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        {(container.state === STATE.EXITED ||
                          container.state === STATE.DEAD) && (
                          <li>
                            <a
                              href="#"
                              onClick={() => this.startContainer(container.id)}
                            >
                              Start
                            </a>
                          </li>
                        )}
                        {(container.state === STATE.EXITED ||
                          container.state === STATE.DEAD) && (
                          <li>
                            <a
                              href="#"
                              onClick={() =>
                                this.destroyContainer(container.id)
                              }
                            >
                              Delete
                            </a>
                          </li>
                        )}
                        {container.state === STATE.RUNNING && (
                          <li>
                            <a
                              href="#"
                              onClick={() =>
                                this.restartContainer(container.id)
                              }
                            >
                              Restart
                            </a>
                          </li>
                        )}
                        {container.state === STATE.RUNNING && (
                          <li>
                            <a
                              href="#"
                              onClick={() => this.stopContainer(container.id)}
                            >
                              Stop
                            </a>
                          </li>
                        )}
                        {container.state === STATE.RUNNING && (
                          <li>
                            <a
                              href="#"
                              onClick={() => this.killContainer(container.id)}
                            >
                              Kill
                            </a>
                          </li>
                        )}
                        {container.state === STATE.RUNNING && (
                          <li>
                            <a
                              href="#"
                              onClick={() => this.pauseContainer(container.id)}
                            >
                              Pause
                            </a>
                          </li>
                        )}
                        {container.state === STATE.PAUSED && (
                          <li>
                            <a
                              href="#"
                              onClick={() =>
                                this.unpauseContainer(container.id)
                              }
                            >
                              Unpause
                            </a>
                          </li>
                        )}
                        {container.state === STATE.RUNNING && (
                          <li>
                            <Link to={`/docker-terminal/${container.id}`}>
                              {console.log("test")}Terminal
                            </Link>
                          </li>
                        )}
                        <li>
                          <a
                            href="#"
                            onClick={() => this.renameContainer(container)}
                          >
                            Rename
                          </a>
                        </li>
                        <li>
                          <Link to={`/Logs?containerId=${container.id}`}>
                            Logs
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="modal fade in"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          style={{ display: inspect ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={this.closeInspector}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Inspect Container
                </h4>
              </div>
              <div className="modal-body" style={{ overflow: "scroll" }}>
                {inspect && (
                  <table>
                    <tr>
                      <th scope="row">Id</th>
                      <td>{inspect.Id}</td>
                    </tr>
                    <tr>
                      <th scope="row">Created</th>
                      <td>{inspect.Created}</td>
                    </tr>
                    <tr>
                      <th scope="row">Path</th>
                      <td>{inspect.Path}</td>
                    </tr>
                    <tr>
                      <th scope="row">Status</th>
                      <td>{inspect.State.Status}</td>
                    </tr>
                    <tr>
                      <th scope="row">Running</th>
                      <td>{"" + inspect.State.Running}</td>
                    </tr>
                    <tr>
                      <th scope="row">Paused</th>
                      <td>{"" + inspect.State.Paused}</td>
                    </tr>
                    <tr>
                      <th scope="row">Restarting</th>
                      <td>{"" + inspect.State.Restarting}</td>
                    </tr>
                    <tr>
                      <th scope="row">OOMKilled</th>
                      <td>{"" + inspect.State.OOMKilled}</td>
                    </tr>
                    <tr>
                      <th scope="row">Dead</th>
                      <td>{"" + inspect.State.Dead}</td>
                    </tr>
                    <tr>
                      <th scope="row">Pid</th>
                      <td>{inspect.State.PID}</td>
                    </tr>
                    <tr>
                      <th scope="row">ExitCode</th>
                      <td>{inspect.State.ExitCode}</td>
                    </tr>
                    <tr>
                      <th scope="row">Error</th>
                      <td>{inspect.State.Error}</td>
                    </tr>
                    <tr>
                      <th scope="row">StartedAt</th>
                      <td>{inspect.State.StartedAt}</td>
                    </tr>
                    <tr>
                      <th scope="row">FinishedAt</th>
                      <td>{inspect.State.FinishedAt}</td>
                    </tr>
                    <tr>
                      <th scope="row">Image</th>
                      <td>{inspect.Image}</td>
                    </tr>
                    <tr>
                      <th scope="row">Name</th>
                      <td>{inspect.Name}</td>
                    </tr>
                    <tr>
                      <th scope="row">RestartCount</th>
                      <td>{inspect.RestartCount}</td>
                    </tr>
                    <tr>
                      <th scope="row">Driver</th>
                      <td>{inspect.Driver}</td>
                    </tr>
                    <tr>
                      <th scope="row">Platform</th>
                      <td>{inspect.Platform}</td>
                    </tr>
                    <tr>
                      <th scope="row">MountLabel</th>
                      <td>{inspect.MountLabel}</td>
                    </tr>
                    <tr>
                      <th scope="row">ProcessLabel</th>
                      <td>{inspect.ProcessLabel}</td>
                    </tr>
                    <tr>
                      <th scope="row">AppArmorProfile</th>
                      <td>{inspect.AppArmorProfile}</td>
                    </tr>
                    <tr>
                      <th scope="row">ExecIDs</th>
                      <td>{inspect.ExecIDs}</td>
                    </tr>
                  </table>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={this.closeInspector}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
