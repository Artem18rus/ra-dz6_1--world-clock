import React, { useState } from "react";
import { nanoid } from "nanoid";
import FieldList from "../FieldList/FieldList";

function InputData() {
  const [fields, setFields] = useState([]);

  const [newName, setNewName] = useState("");
  const [newTimeZone, setNewTimeZone] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const newFields = {
      id: nanoid(),
      name: newName,
      zone: newTimeZone
    };
    setFields((prevField) => {
      return [...prevField, newFields];
    });
  };

  const changeName = (e) => {
    setNewName(e.target.value);
  };

  const changeTimeZone = (e) => {
    setNewTimeZone(e.target.value);
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className="form-data">
        <div className="name">
          <p>Название</p>
          <input
            type="text"
            className="inputName"
            value={newName}
            placeholder="Введите название города"
            onChange={changeName}
          />
        </div>
        <div className="time-zone">
          <p>Временная зона</p>
          <input
            type="text"
            className="inputTimeZone"
            value={newTimeZone}
            placeholder="Введите временную зону"
            onChange={changeTimeZone}
          />
        </div>
        <button className="btn">Добавить</button>
      </form>
      <FieldList fields={fields} />
    </>
  );
}

export default InputData;
