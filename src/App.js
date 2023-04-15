import "./styles.css";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mode: "",
    favCar: "",
    isVisible: ""
  });
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  return (
    <div className="App">
      <div>
        <form>
          <input
            type="text"
            name="firstname"
            placeholder="Enter you first-name"
            value={formData.firstname}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Enter you last-name"
            value={formData.lastname}
            onChange={changeHandler}
          />
          <input
            type="checkbox"
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
            onChange={changeHandler}
          />

          {/* htmlfor used to attach label with checkbox */}
          <label htmlfor="isVisible">Am I visible?</label>

          <fieldset>
            <legend> Mode : </legend>
            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Online-mode"
              id="Online-mode"
              checked={formData.mode === "Online-mode"}
            />
            <label htmlfor="Online-mode">Online Mode</label>

            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Offline-mode"
              id="Offline-mode"
              checked={formData.mode === "Offline-mode"}
            />
            <label htmlfor="Offine-mode">Offline Mode</label>
          </fieldset>

          <label htmlfor="favCar"> Favorite Car</label>
          <select
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}
          >
            <option value="Scorpio">Scorpio</option>
            <option value="Thorr">Thorr</option>
            <option value="Ford">Ford</option>
          </select>
        </form>
      </div>
    </div>
  );
}
