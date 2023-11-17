
// eslint-disable-next-line react/prop-types
const DisplayArray = ({ array = [], name = "sin nombre"}) => {
  if (!Array.isArray(array)) {
    return <p className="text-red-500">El valor provisto no es un array.</p>;
  }

  return (
    <div className="flex flex-row items-center p-3">
      <div className="pr-2">
        {name && <p className="font-bold text-gray-800 mb-2">{name} =</p>}
      </div>
      <div>
      {Array.isArray(array[0]) ? (
        <table className="table-auto border-collapse border border-gray-500">
          <tbody>
            {array.map((row, i) => (
              <tr key={i} className="border border-gray-600">
                {row.map((val, j) => (
                  <td key={j} className="px-4 py-2 border border-gray-700">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="table-auto border-collapse border border-gray-500">
          <tbody>
            <tr className="border border-gray-600">
              {array.map((val, i) => (
                <td key={i} className="px-4 py-2 border border-gray-700">
                  {val}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};

export default DisplayArray;
