import React from "react";
import "./Table.scss";
import { data } from "../../Data/data";
import { Table } from "./tableStyle";
class TableList extends React.Component {
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
    const onEdit = (value) => {
      this.setState({
        active: value,
      });
    };

    const onChange = (e) => {
      const { value, name } = e.target;
      this.setState({
        active: {
          ...this.state.active,
          [name]: value,
        },
      });
    };

    const onChangeSave = () => {
      const changedData = this.state.data.map((value) =>
        value.id === this.state.active.id ? this.state.active : value
      );
      this.setState({
        data: changedData,
        active: null,
      });
    };

    const onAdd = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
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
            onChange={onAdd}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            value={this.state.age}
            onChange={onAdd}
            type="number"
            name="age"
            placeholder="Age"
          />
          <input
            value={this.state.address}
            onChange={onAdd}
            type="text"
            name="address"
            placeholder="Address"
          />
          <input
            value={this.state.status}
            onChange={onAdd}
            type="text"
            name="status"
            placeholder="Status"
          />
          <input
            value={this.state.nickname}
            onChange={onAdd}
            type="text"
            name="nickname"
            placeholder="Nickname"
          />
          <input
            value={this.state.univ}
            onChange={onAdd}
            type="text"
            name="univ"
            placeholder="University"
          />
          <input
            value={this.state.job}
            onChange={onAdd}
            type="text"
            name="job"
            placeholder="Job"
          />
          <button onClick={onSave}>Add new item</button>
        </div>
        <Table>
          <Table.Thead>
            <tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>NAME</Table.Th>
              <Table.Th>AGE</Table.Th>
              <Table.Th>ADDRESS</Table.Th>
              <Table.Th>STATUS</Table.Th>
              <Table.Th>NICKNAME</Table.Th>
              <Table.Th>UNIV</Table.Th>
              <Table.Th>JOB</Table.Th>
              <Table.Th colSpan="2">FUNCTIONS</Table.Th>
            </tr>
          </Table.Thead>
          <tbody>
            {this.state.data.map(
              (
                { id, name, age, address, status, nickname, univ, job },
                index
              ) => (
                <tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>
                    {this.state.active?.id === id ? (
                      <input
                        name="name"
                        onChange={onChange}
                        value={this.state.active.name}
                      />
                    ) : (
                      name
                    )}
                  </Table.Td>
                  <Table.Td>
                    {this.state.active?.id === id ? (
                      <input
                        name="age"
                        onChange={onChange}
                        value={this.state.active.age}
                      />
                    ) : (
                      age
                    )}
                  </Table.Td>
                  <Table.Td>
                    {this.state.active?.id === id ? (
                      <input
                        name="address"
                        onChange={onChange}
                        value={this.state.active.address}
                      />
                    ) : (
                      address
                    )}
                  </Table.Td>
                  <Table.Td>
                    {this.state.active?.id === id ? (
                      <input
                        name="status"
                        onChange={onChange}
                        value={this.state.active.status}
                      />
                    ) : (
                      status
                    )}
                  </Table.Td>
                  <Table.Td>
                    {this.state.active?.id === id ? (
                      <input
                        name="nickname"
                        onChange={onChange}
                        value={this.state.active.nickname}
                      />
                    ) : (
                      nickname
                    )}
                  </Table.Td>
                  <Table.Td>
                    {this.state.active?.id === id ? (
                      <input
                        name="univ"
                        onChange={onChange}
                        value={this.state.active.univ}
                      />
                    ) : (
                      univ
                    )}
                  </Table.Td>
                  <Table.Td>
                    {this.state.active?.id === id ? (
                      <input
                        name="job"
                        onChange={onChange}
                        value={this.state.active.job}
                      />
                    ) : (
                      job
                    )}
                  </Table.Td>
                  <Table.Td>
                    <button onClick={() => onDelete(id)}>DELETE</button>
                    <button
                      onClick={() => {
                        this.state.active
                          ? onChangeSave()
                          : onEdit({
                              id,
                              name,
                              age,
                              address,
                              status,
                              nickname,
                              univ,
                              job,
                            });
                      }}
                    >
                      {this.state?.active?.id === id ? "SAVE" : "EDIT"}
                    </button>
                  </Table.Td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableList;
