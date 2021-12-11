import React from "react";
import "./Table.scss";
import { data } from "../../Data/data";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      data: data,
      name: "",
      age: "",
      address: "",
      status: "",
      nickname: "",
      univ: "",
      job: "",
    };
  }
  render() {
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const onEdit = (e) => {
      this.setState({
        name: e.name,
        age: e.age,
        address: e.address,
        status: e.status,
        nickname: e.nickname,
        univ: e.univ,
        job: e.job,
        active: e.id,
      });
    };

    const onChangeSave = () => {
      const changedData = this.state.data.map((value) =>
        value.id === this.state.active
          ? {
              ...value,
              name: this.state.name,
              age: this.state.age,
              address: this.state.address,
              status: this.state.status,
              nickname: this.state.nickname,
              univ: this.state.univ,
              job: this.state.job,
            }
          : value
      );
      this.setState({
        data: changedData,
        active: null,
      });
    };

    const onSave = () => {
      const newData = {
        id: Date.now(),
        name: this.state.name,
        age: this.state.age,
        address: this.state.address,
        status: this.state.status,
        nickname: this.state.nickname,
        univ: this.state.univ,
        job: this.state.job,
      };

      this.state.name.length
        ? this.setState({
            data: [...this.state.data, newData],

            name: "",
            age: "",
            address: "",
            status: "",
            nickname: "",
            univ: "",
            job: "",
          })
        : alert("Pls fill all inputs");
    };

    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({
        data: res,
      });
    };

    return (
      <div className="table_list">
        <h1>Table List</h1>
        <div className="inputs">
          <input
            value={this.state.name}
            onChange={onChange}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            value={this.state.age}
            onChange={onChange}
            type="number"
            name="age"
            placeholder="Age"
          />
          <input
            value={this.state.address}
            onChange={onChange}
            type="text"
            name="address"
            placeholder="Address"
          />
          <input
            value={this.state.status}
            onChange={onChange}
            type="text"
            name="status"
            placeholder="Status"
          />
          <input
            value={this.state.nickname}
            onChange={onChange}
            type="text"
            name="nickname"
            placeholder="Nickname"
          />
          <input
            value={this.state.univ}
            onChange={onChange}
            type="text"
            name="univ"
            placeholder="University"
          />
          <input
            value={this.state.job}
            onChange={onChange}
            type="text"
            name="job"
            placeholder="Job"
          />
          <button onClick={onSave}>Add new item</button>
        </div>
        <table>
          <thead>
            <tr className="table_header">
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>ADDRESS</th>
              <th>STATUS</th>
              <th>NICKNAME</th>
              <th>UNIV</th>
              <th>JOB</th>
              <th colSpan="2">FUNCTIONS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value, index) => (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>
                  {this.state.active === value.id ? (
                    <input
                      name="name"
                      onChange={onChange}
                      value={this.state.name}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {this.state.active === value.id ? (
                    <input
                      name="age"
                      onChange={onChange}
                      value={this.state.age}
                    />
                  ) : (
                    value.age
                  )}
                </td>
                <td>
                  {this.state.active === value.id ? (
                    <input
                      name="address"
                      onChange={onChange}
                      value={this.state.address}
                    />
                  ) : (
                    value.address
                  )}
                </td>
                <td>
                  {this.state.active === value.id ? (
                    <input
                      name="status"
                      onChange={onChange}
                      value={this.state.status}
                    />
                  ) : (
                    value.status
                  )}
                </td>
                <td>
                  {this.state.active === value.id ? (
                    <input
                      name="nickname"
                      onChange={onChange}
                      value={this.state.nickname}
                    />
                  ) : (
                    value.nickname
                  )}
                </td>
                <td>
                  {this.state.active === value.id ? (
                    <input
                      name="univ"
                      onChange={onChange}
                      value={this.state.univ}
                    />
                  ) : (
                    value.univ
                  )}
                </td>
                <td>
                  {this.state.active === value.id ? (
                    <input
                      name="job"
                      onChange={onChange}
                      value={this.state.job}
                    />
                  ) : (
                    value.job
                  )}
                </td>
                <td>
                  <button onClick={() => onDelete(value.id)}>DELETE</button>
                  {this.state.active === value.id ? (
                    <button onClick={onChangeSave}>SAVE</button>
                  ) : (
                    <button onClick={() => onEdit(value)}>EDIT</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
