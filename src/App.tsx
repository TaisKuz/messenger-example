import { useEffect, useState } from 'react';
import LayoutMain from './layout/Main';
import { DataI } from 'App.types';

function App() {
  const InitData = {} as DataI;
  const [data, setData] = useState(InitData);
  const getData = () => {
    fetch('data.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setData(myJson);
    });
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <LayoutMain data={data} />
    </>
  );
}

export default App;
