import DisplayArray from "./DisplayMatrix";

/* eslint-disable react/prop-types */
const ShowMatrixByIter = ({ data, iter }) => {

  const showData = (a = []) => {
    return (a == null) ? false :  (a.length > 0 && a !== null && a[0] !== null)
  }
  const followIter = (a = []) => a[0] === true ? ["SI"] : ["NO"]

  const invB_b = data.InvB_b[iter];
  const x_b = data.X_b[iter];
  const z = [data.Z[iter]];
  const in_var = [data.in_var[iter]];
  const iterando = followIter([data.iterando[iter]]);
  const out_var = [data.out_var[iter]];
  const r = data.r[iter];

  return (
    <div>
      {showData(x_b) && <DisplayArray array={x_b} name="Variable solucion "/>}
      {showData(z) && <DisplayArray array={z} name={`Solución del modelo en la iteración ${iter+1}`}/>}
     {showData(invB_b) && <DisplayArray array={invB_b} name="Solución de la(s) variables"/>}
      {showData(r) && <DisplayArray array={r} name="Vector costo reducido"/>}
      {showData(iterando) && <DisplayArray array={iterando} name="Seguir iterando?"/>}
      {showData(in_var) && <DisplayArray array={in_var} name="Variable que entra"/>}
      {showData(out_var) && <DisplayArray array={out_var} name="Variable que sale"/>}
    </div>
  );
};

export default ShowMatrixByIter;
