import React from "react";
const Strike = (id) => () => {
  var checkBox = document.getElementById(id+ "-select");
  var tr = document.getElementById(id+ "-tr");
  if (checkBox.checked === true) {
    tr.classList.add("line");
  } else {
    tr.classList.remove("line");
  }
};
export default function MyList(props) {
  return (
    <div>
      {
        <div>
          <table className="center">
            <thead>
              <tr>
                <th className="A"></th>
                <th className="B"></th>
                <th className="C"></th>
              </tr>
            </thead>
            <tbody>
              {props.tasks.map((task, index) => {
                return (
                  <tr onClick={Strike(`${index}`)} id={`${index}-tr`}>
                    <td>
                      <input id={`${index}-select`}
                        type="checkbox"
                        
                        name="select"
                        
                      ></input>
                    </td>
                    <td>{task}</td>
                    <td >
{/*                       <button onClick={Strike(`${index}`)} id={`${index}-tr`} className="btn">
                        <i className="fa fa-close"></i>
                      </button> */}
                     <input id={`${index}-select`} onClick={Strike(`${index}`)} id={`${index}-tr`}
                        type="checkbox"
                        
                        name="select"
                        
                      ></input>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}
