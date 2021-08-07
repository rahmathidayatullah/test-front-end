import * as React from "react";
import axios from "axios";
import { formatRupiah } from "../utils/formatRupiah";
export default function Index() {
  const [data, setData] = React.useState([]);
  console.log("data >>");
  console.log(data);

  const fetchData = async () => {
    const res = await axios.get(
      "https://spe-academy.spesolution.net/api/recruitment",
      {
        headers: {
          Authorization: `Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y`,
        },
      }
    );

    res?.data?.forEach((element) => {
      element.total = element.quantity * element.product.price;
    });

    setData(res?.data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e, i) => {
    const _temp = [...data];

    if (e.target.value > _temp[i]["product"]["stock"]) {
      alert("stock tidak cukup");
      _temp[i][e.target.name] = 1;
      _temp[i]["total"] = 1 * _temp[i]["product"]["price"];
    } else {
      _temp[i][e.target.name] = e.target.value;
      _temp[i]["total"] = e.target.value * _temp[i]["product"]["price"];
      console.log(_temp);
    }
    setData(_temp);
  };

  React.useEffect(() => {
    let time = setInterval(() => {
      let newTIme = new Date();
      console.log(newTIme);
    }, 1000);
  }, []);

  return (
    <div className="p-4 bg-gray h-screen overflow-scroll">
      <div className="bg-gradient-cs w-full h-96 mb-24 overflow-hidden">
        <div
          className="w-full border-4 bg-black border-white relative"
          style={{
            height: "28rem",
            top: "-18rem",
            transform: "rotate(-16deg)",
          }}
        ></div>
      </div>
      <h1 className="text-center text-4xl font-semibold mb-6">
        SPE Frontend Shop
      </h1>
      <div className="p-4 bg-white">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-black">
              <th className="text-white p-4">Product</th>
              <th className="text-white p-4">Quantity</th>
              <th className="text-white p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              return (
                <tr className="border" key={i}>
                  <td className="p-4">
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="w-56 h-56 shadow">
                          <img
                            src={data?.product?.media_url}
                            alt="image"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col ml-4">
                          <p>{data?.product?.code}</p>
                          <p>{data?.product?.name}</p>
                          <p>{`${formatRupiah(data?.product?.price)}`}</p>
                          <p>{data?.product?.stock}</p>
                        </div>
                      </div>
                      <div className="flex items-center"></div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center items-center">
                      <input
                        type="number"
                        value={data.quantity}
                        name="quantity"
                        placeholder="0"
                        className="border p-4 w-16"
                        onChange={(e) => handleChange(e, i)}
                      />
                    </div>
                  </td>
                  <td className="p-4 text-center">{`${formatRupiah(
                    data?.total
                  )}`}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border bg-black font-semibold text-white">
              <td colSpan="2" className="text-right p-4">
                <p className="relative right-16">Total</p>
              </td>
              <td colSpan="2" className="text-center p-4">
                {formatRupiah(data.reduce((a, b) => a + b.total, 0))}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* header */}
      {/* <ul className="flex items-center bg-black p-4">
        <li className="text-white w-full">Product</li>
        <li className="text-white w-64 justify-center">Quantity</li>
        <li className="text-white w-64 flex justify-center">Sub Total</li>
      </ul>

      <ul className="border p-4 flex items-center">
        <li className="w-full">
          <div className="flex items-start">
            <div className="w-56 h-56 border"></div>
            <div className="flex flex-col ml-4">
              <p>STROFEK</p>
              <p>AutoAcrrker - sdfsdf</p>
              <p>IDR 303003.3003</p>
              <p>redfasdfkj</p>
            </div>
          </div>
        </li>
        <li className="w-64">
          <input className="border p-4" type="number" placeholder="0" />
        </li>
        <li className="w-64">Rp. 1000.000.000</li>
      </ul> */}

      {/* list product */}
      {/* <ul>
        <li className="border p-4 w-full">
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="w-56 h-56 border"></div>
              <div className="flex flex-col ml-4">
                <p>STROFEK</p>
                <p>AutoAcrrker - sdfsdf</p>
                <p>IDR 303003.3003</p>
                <p>redfasdfkj</p>
              </div>
            </div>
            <div className="flex items-center">
              
            </div>
          </div>
        </li>
      </ul> */}
    </div>
  );
}
