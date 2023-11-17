import DisplayArray from "./DisplayMatrix";

/* eslint-disable react/prop-types */
const ShowMatrixByIter = ({ data, iter }) => {

  const showData = (a = []) =>( a.length > 0 && a !== null && a[0] !== null)
  const followIter = (a = []) => a[0] === true ? ["Seguir Iterando"] : ["No seguir Iterando"]

  const invB_b = data.InvB_b[iter];
  const x_b = data.X_b[iter];
  const z = [data.Z[iter]];
  const in_var = [data.in_var[iter]];
  const iterando = followIter([data.iterando[iter]]);
  const out_var = [data.out_var[iter]];
  const r = data.r[iter];

  return (
    <div>
     {showData(invB_b) && <DisplayArray array={invB_b} name="Matriz invB_b"/>}
      {showData(x_b) && <DisplayArray array={x_b} name="Matriz x_b"/>}
      {showData(z) && <DisplayArray array={z} name="Matriz z"/>}
      {showData(in_var) && <DisplayArray array={in_var} name="Matriz in_var"/>}
      {showData(iterando) && <DisplayArray array={iterando} name="Matriz iterando"/>}
      {showData(out_var) && <DisplayArray array={out_var} name="Matriz out_var"/>}
      {showData(r) && <DisplayArray array={r} name="Matriz r"/>}
    </div>
  );
};

export default ShowMatrixByIter;
