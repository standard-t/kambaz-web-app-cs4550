import { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((_item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn btn-success m-2">Add Element</button>
            <ul className="form-control list-unstyled w-25">
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteElement(index)}
                            id="wd-delete-element-click"
                            className="btn btn-danger position-relative float-end ">
                            Delete</button>

                        <hr />
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
