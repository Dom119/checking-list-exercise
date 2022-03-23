import logo from "./logo.svg";
import "./App.css";
import Check from "./Check";
import { useEffect, useState } from "react";

function App() {
  const [checkList, setCheckList] = useState([false, false, false]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const handleSingleCheck = (position) => {
    setCheckList(
      checkList.map((element, index) => {
        return index === position ? !element : element;
      })
    );
  };

  const handleAllCheck = () => {
    setIsCheckAll(!isCheckAll);

    if (isCheckAll) {
      setCheckList(checkList.map(() => false));
    } else {
      setCheckList(checkList.map(() => true));
    }
  };

  useEffect(() => {
    let newIsCheckAll = true;
    checkList.forEach((element) => {
      if (!element) {
        newIsCheckAll = false;
      }
    });
    newIsCheckAll ? setIsCheckAll(true) : setIsCheckAll(false);
  }, [checkList]);

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
            key={index}
            position={index}
            isCheck={element}
            handleSingleCheck={handleSingleCheck}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
