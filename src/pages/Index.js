import React, { useEffect } from "react";
import { fetchData } from "../features/Home/action";
import { useSelector, useDispatch } from "react-redux";

export default function Index() {
  let dispatch = useDispatch();
  // const home = useSelector((state) => state.home);
  const home = useSelector((state) => state.home);
  console.log(home.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <h1>Data from api</h1>
      <ul>
        {home &&
          home.data.map((item, i) => {
            return (
              <li key={i}>
                <div className="card">
                  <p className="title">{item.body}</p>
                  <p className="body">{item.title}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
