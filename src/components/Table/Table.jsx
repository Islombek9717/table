import React from "react";
import "./Table.scss";
import { data } from "../../Data/data";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        status: "Table",
        dataList: data,
      },
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.data.dataList.filter((value) => value.id !== id);
      this.setState({
        data: {
          ...this.state.data,
          dataList: res,
        },
      });
    };

    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const onSave = (e) => {
      const newData = {
        id: Date.now(),
        name: this.state.name,
        age: this.state.age,
        address: this.state.address,
        status: this.state.status,
        nickname: this.state.nickname,
        university: this.state.university,
        job: this.state.job,
      };
      this.setState({
        data: {
          ...this.state.data,
          dataList: [...this.state.data.dataList, newData],
        },
        name: "",
        age: "",
        address: "",
        status: "",
        nickname: "",
        university: "",
        job: "",
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
            value={this.state.university}
            onChange={onChange}
            type="text"
            name="university"
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
            {this.state.data.dataList.map((value, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.address}</td>
                <td>{value.status}</td>
                <td>{value.nickname}</td>
                <td>{value.univ}</td>
                <td>{value.job}</td>
                <td>
                  <button onClick={() => onDelete(value.id)}>DELETE</button>
                </td>
                <td>
                  <button>EDIT</button>
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
