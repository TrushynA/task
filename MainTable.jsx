import React, { useEffect, useState } from "react";

import MaterialTable from "material-table";
import axios from "axios";

export default function MaterialTableDemo() {
  const [selectedRow] = useState({ selectedRow: null });
  const [data, setData] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://172.16.0.160:8080`, {
          headers: {'Access-Control-Allow-Origin':'*'}
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  console.log(data);

  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "Name" },
      { title: "Connection string", field: "Connection_string" },
      { title: "DB IP", field: "Db_ip" },
      { title: "DB Name", field: "Db_name" },
      { title: "Server IP", field: "Server_ip" },
      { title: "Port Connection String", field: "Port_cs" },
      { title: "Port DB", field: "Port_db" },
      { title: "Name Latin", field: "Name_lat" }
    ]
  });

  return (
    <>
      {data.length > 0 && (
        <>
          <MaterialTable
            options={{
              search: true,
              headerStyle: {
                backgroundColor: "#01579b",
                color: "#FFF",
                textAlign: "center"
              },
              rowStyle: {
                backgroundColor: "#EEE",
                textAlign: "center"
              }
            }}
            title="Список организаций"
            columns={state.columns}
            data={data.length > 0 && data}
          />
          {console.log(data)}
        </>
      )}
    </>
  );
}
