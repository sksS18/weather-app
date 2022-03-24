import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter } from "@mui/material";
import { backdropUnstyledClasses } from "@mui/base";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', +, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const BasicTable = () => {
   const [num, setNum] = useState('');
   const [next, setNext] = useState('')
   const [total, setTotal] = useState('')
   const [actionType, setActionType] = useState();

   const onNumberClick = (number) => {
      // !num && setNum(number)
      // num && setNum(num + number);
      (actionType === '') && setNum(num+number);
      (actionType !== '') && setNext(next+number);
      console.log('action', (actionType === ''))
      console.log('num', {num, next, total})
      
     
   };

   const isEqualTo = () => {
      console.log('actionType', actionType)
      if(actionType)
      return actionType(num, next)
   }

   const onClear = () => {
      setTotal('');
      setNum();
      setNext();

   }

   const onAddition = () => {
      console.log('log', Number(num) + Number(next));
      setTotal(Number(num) + Number(next))
      console.log('num', {num, next, total})
   }
   const onSubstraction = () => {
      setTotal(Number(num) - Number(next))
   }
   const onMultiply = () => {
      setTotal(Number(num) * Number(next))

   }
   const onDivision = () =>{
      setTotal(Number(num) % Number(next))
   }
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell>Calories</TableCell>
                  <TableCell>Fat&nbsp;(g)</TableCell>
                  <TableCell>Carbs&nbsp;(g)</TableCell>
                  <TableCell>Carbs&nbsp;(g)</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               <TableRow>
                  <TableCell
                     onClick={() => onNumberClick("1")}
                     component="th"
                     scope="row"
                  ></TableCell>
                  <TableCell onClick={() => setActionType('+')} component="th">
                     +
                  </TableCell>
                  <TableCell onClick={() => setActionType('-')} component="th">
                     -
                  </TableCell>
                  <TableCell onClick={() => setActionType('*')} component="th">
                     *
                  </TableCell>
                  <TableCell onClick={() => setActionType('%')} component="th">
                     %
                  </TableCell>
               </TableRow>
               <TableRow>
                  <TableCell
                     onClick={() => onNumberClick("")}
                     component="th"
                     scope="row"
                  ></TableCell>
                  <TableCell onClick={() => onNumberClick("1")}>1</TableCell>
                  <TableCell onClick={() => onNumberClick("2")}>2</TableCell>
                  <TableCell onClick={() => onNumberClick("3")}>3</TableCell>
                  <TableCell onClick={() => onNumberClick("4")}>4</TableCell>
               </TableRow>

               <TableRow>
                  <TableCell
                     onClick={() => onNumberClick("")}
                     component="th"
                     scope="row"
                  ></TableCell>
                  <TableCell onClick={() => onNumberClick("5")}>5</TableCell>
                  <TableCell onClick={() => onNumberClick("6")}>6</TableCell>
                  <TableCell onClick={() => onNumberClick("7")}>7</TableCell>
                  <TableCell onClick={() => onNumberClick("8")}>8</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell
                     onClick={() => onNumberClick("")}
                     component="th"
                     scope="row"
                  ></TableCell>
                  <TableCell onClick={() => onNumberClick("9")}>9</TableCell>
                  <TableCell onClick={() => onNumberClick("0")}>0</TableCell>
                  <TableCell onClick={() => isEqualTo()}>=</TableCell>
                  <TableCell onClick={() => onClear()}>Clear</TableCell>
               </TableRow>
            </TableBody>
            <TableFooter>
               <TableRow>
                  <TableCell></TableCell>
                  <TableCell colSpan={4}>{total}</TableCell>
               </TableRow>
            </TableFooter>
         </Table>
      </TableContainer>
   );
};

const Calculator = () => {
   return (
      <>
         <h4>Calcultor</h4>

         {BasicTable()}
      </>
   );
};

export default Calculator;
