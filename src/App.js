// import { logo } from './logo.svg';
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "common/Home";
import Weather from "weather/Weather";
import Expenses from "expense/Expense";
// import Calculator from "calculator/Calculator-demo";
import { Calculator } from "calculator/Calculator";
import Store from "store/Store";
import WeatherForm from "weather/weather-form/WeatherForm";
import { ToDoLists } from "to-do-list/ToDoLists";
import { Error404 } from "error/Error404";
import { Login } from "user/Login";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Home />
            {/* <Login /> */}
            <Routes>
               <Route path="/weather" exact element={<Weather />} />
               <Route path="/expenses" element={<Expenses />} />
               <Route path="/calculator" element={<Calculator />} />
               <Route path="/store" element={<Store />} />
               <Route path="/form" exact element={<WeatherForm />} />
               <Route path="/todo-list" exact element={<ToDoLists />} />
               <Route path="/login" exact element={<Login />} />
               <Route element={<Error404 />} />

               {/* <Route path="/" element={<Home />} /> */}
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
