import { FC, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import LayoutMain from './layout/Main';
import { DataI } from 'App.types';

const App: FC = () => {
  const InitData = {} as DataI;
  const [data, setData] = useState<DataI>(InitData);

  useEffect( () => {
    // console.log("===fetch===");

    const getData = async () => {
      const fetchResponse = await fetch('data.json'
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
        // console.log("===response===", response);
        return response.json();
      })
      .then((myJson) => {
        // console.log("======", myJson);
        setData(myJson);
        return myJson;
      })
      .catch((error) => {
        // console.log(`fetch error: ${error}`);
      });

      return (fetchResponse);
    }

    getData();
  }, [])

  return (
    <>
      <GlobalStyle />
      <LayoutMain data={data} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a, button {
    cursor: revert;
  }

  ol, ul, menu {
    list-style: none;
  }

  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input, textarea {
    -webkit-user-select: auto;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  :where(pre) {
    all: revert;
  }

  ::placeholder {
    color: unset;
  }

  ::marker {
    content: initial;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  :where(dialog:modal) {
    all: revert;
  }
`

export default App;
