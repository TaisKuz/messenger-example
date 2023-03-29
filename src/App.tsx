import { FC, useEffect, useState } from 'react';
import LayoutMain from './layout/Main';
import { DataI } from 'App.types';

const App: FC = () => {
  const InitData = {} as DataI;
  const [data, setData] = useState<DataI>(InitData);

  useEffect( () => {
    const getData = async () => {
      await fetch('data.json'
      ,{
        method: 'GET',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
        return myJson;
      })
      .catch((error) => {
        console.log(`fetch error: ${error}`);
      });
    }

    getData();
  }, [])

  return (
    <>
      <LayoutMain data={data} />
    </>
  );
}

export default App;
