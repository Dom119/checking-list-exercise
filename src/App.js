import logo from "./logo.svg";
import "./App.css";
import Check from "./Check";
import { useEffect, useState } from "react";

function App() {
  const [checkList, setCheckList] = useState([
    { id: 1, status: false },
    { id: 2, status: false },
    { id: 3, status: false },
  ]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const handleSingleCheck = (position) => {
    setCheckList(
      checkList.map(({ id, status }) => {
        const newElement = {
          id: id,
          status: id === position ? !status : status,
        };

        return newElement;
        // return index === position ? !element : element;
      })
    );
  };

  const handleAllCheck = () => {
    setIsCheckAll(!isCheckAll);

    if (isCheckAll) {
      setCheckList(
        checkList.map(({ id, status }) => ({ id: id, status: false }))
      );
    } else {
      setCheckList(
        checkList.map(({ id, status }) => ({ id: id, status: true }))
      );
    }
  };

  useEffect(() => {
    console.log(checkList);
  }, [checkList]);

  // useEffect(() => {
  //   let newIsCheckAll = true;
  //   checkList.forEach((element) => {
  //     if (!element) {
  //       newIsCheckAll = false;
  //     }
  //   });
  //   newIsCheckAll ? setIsCheckAll(true) : setIsCheckAll(false);

  //   console.log(checkList);
  // }, [checkList]);

  //requirement
  //check all -> check all individual
  //uncheck all --> uncheck all individual
  //if one individual is unchecked => check all can not be checked

  return (
    <div className="App">
      <header className="App-header">
        check All
        <input type="checkbox" checked={isCheckAll} onChange={handleAllCheck} />
        Check
        {checkList.map((element, index) => (
          <Check
            key={element.id}
            position={element.id}
            isCheck={element.status}
            handleSingleCheck={handleSingleCheck}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
