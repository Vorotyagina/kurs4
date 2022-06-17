import { useState } from "react";

// function FormsReact() {
//   const [checked, setChecked] = useState(false);

//   const items = ["Раз", "Два", "Три", "Четыре"];

//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item}>
//             <label>
//               <input
//                 type="radio"
//                 checked={checked === item}
//                 onChange={() => setChecked(item)}
//               ></input>
//               {item}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default FormsReact;

// <div>
// <input
//   value={value}
//   type="text"
//   onChange={(e) => setValue(e.target.value)}
// ></input>
// </div>

// <input
// value={checked}
// type="checkbox"
// onChange={(e) => setChecked(e.target.checked)}
// ></input>

function FormsReact() {
  const [value, setValue] = useState();

  const handlerChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      {value}
      <select value={value} onChange={handlerChange}>
        <option value="Война">Толстой</option>
        <option value="Два">Два</option>
        <option value="Три">Три</option>
        <option value="Четыре">Четыре</option>
      </select>
    </div>
  );
}


// в классовой компоненте
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			value: "Текст",
// 		};
// 	}

// 	handlerChange(event) {
// 		this.setState({
// 			value: event.target.value,
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{this.state.value}
// 				<br />
// 				<input
// 					value={this.state.value}
// 					onChange={(e) => this.handlerChange(e)}
// 				/>
// 			</div>
// 		);
// 	}
// }