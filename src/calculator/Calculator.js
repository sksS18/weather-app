import "calculator/calculator.css";
import { useState } from "react";

export const Calculator = (params) => {
   const [num, setNum] = useState("");
   // const [btn, setBtn] = useState("");
   // const [firstNum, setFirstNum] = useState("");
   const [finalNum, setFinalNum] = useState("");
   // const [actionType, setActionType] = useState("");

   const onActionBtnClick = (number) => {
      let numLower = number.toLowerCase();
      if (
         numLower !== "multiply" &&
         numLower !== "divide" &&
         numLower !== "minus" &&
         numLower !== "plus" &&
         numLower !== "equals"
      ) {
         if (num === "") {
            setFinalNum("");
            setNum(number);
         } else {
            let lastNumber = num;
            let combinedNumber = (lastNumber += number);
            setNum(combinedNumber);
            // console.log("number =>", str);
            // console.table({ num, number });
         }
      } else if (numLower !== "equals") {
         let multi = numLower === "multiply",
            div = numLower === "divide",
            plus = numLower === "plus",
            min = numLower === "minus";
         if (num) {
            // let isPlus = num.split("+"),
            //    isMin = num.split("-"),
            //    isMul = num.split("*"),
            //    isDiv = num.split("/"),
            let lastNumber = num;
            // if (
            //    isPlus.length > 1 ||
            //    isMin.length > 1 ||
            //    isDiv.length > 1 ||
            //    isMul.length > 1
            // ) {
            
            //    setNum(eval(lastNumber));
            //    console.log('number', lastNumber)

            // }
               if (multi) {
                  setNum((lastNumber += "*"));
               } else if (div) {
                  setNum((lastNumber += "/"));
               } else if (plus) {
                  setNum((lastNumber += "+"));
               } else if (min) {
                  setNum((lastNumber += "-"));
               }
            
         }
         // setFirstNum(num);
         // setNum("");
         // setFinalNum(num);
         // setActionType(numLower);
      } else if (numLower === "equals") {
         setNum(eval(num));
         // console.log("<=>", actionType);

         // (actionType === "multiply")
         //    ? setFinalNum(Number(firstNum) * Number(num))
         //    : (actionType === "plus")
         //    ? setFinalNum(Number(firstNum) + Number(num))
         //    : (actionType === "divide")
         //    ? setFinalNum(Number(firstNum) / Number(num))
         //    : setFinalNum(Number(firstNum) - Number(num));

         // setActionType("");
         // setFirstNum("");
         // setNum("");
         // console.log(finalNum);
      }
   };

   const onClear = () => setNum("");
   const onBackSpace = () => {
      let lastNumber = String(num);
      console.log(lastNumber)
      let remainingNum = lastNumber.slice(0, -1);
      setNum(remainingNum);
   }

   return (
      <div id="calculatorBody">
         <div id="screen">
            <input id="numberArea" defaultValue={num} type="text" />
         </div>
         <div className="clear-section">
            <button onClick={onClear}>CE</button>
            <button onClick={onBackSpace}>C</button>
         </div>
         <div id="buttons">
            <button onClick={() => onActionBtnClick("7")} id="Seven">
               7
            </button>
            <button onClick={() => onActionBtnClick("8")} id="Eight">
               8
            </button>
            <button onClick={() => onActionBtnClick("9")} id="Nine">
               9
            </button>
            <button onClick={() => onActionBtnClick("Divide")} id="Divide">
               /
            </button>
            <button onClick={() => onActionBtnClick("6")} id="Six">
               6
            </button>
            <button onClick={() => onActionBtnClick("5")} id="Five">
               5
            </button>
            <button onClick={() => onActionBtnClick("4")} id="Four">
               4
            </button>
            <button onClick={() => onActionBtnClick("Multiply")} id="Multiply">
               x
            </button>
            <button onClick={() => onActionBtnClick("3")} id="Three">
               3
            </button>
            <button onClick={() => onActionBtnClick("2")} id="Two">
               2
            </button>
            <button onClick={() => onActionBtnClick("1")} id="One">
               1
            </button>
            <button onClick={() => onActionBtnClick("Minus")} id="Minus">
               -
            </button>
            <button onClick={() => onActionBtnClick("0")} id="Zero">
               0
            </button>
            <button onClick={() => onActionBtnClick(".")} id="Dot">
               .
            </button>
            <button  onClick={() => onActionBtnClick("Equals")} id="Equals">
               =
            </button>
            <button onClick={() => onActionBtnClick("Plus")} id="Plus">
               +
            </button>
         </div>
      </div>
   );
};
