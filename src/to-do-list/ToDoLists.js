import { useEffect, useState } from "react";
import { ToDoForm } from "to-do-list/ToDoForm";
import { ListItems } from "to-do-list/ListItems";
import PropTypes from "prop-types";

export const ToDoLists = (params) => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [list, setList] = useState([]);
   const [editTable, setEditTable] = useState(false);
   const [editId, setEditId] = useState("");
   // const [formData, setFormData] = useState('');

   useEffect(() => {
      const onSetList = () => {
         let data = [
            {
               id: 1,
               title: "Todo list",
               description: "This is this first custom to do list",
            },
            {
               id: 2,
               title: "Calculator",
               description: "This is custom calculator",
            },
            {
               id: 3,
               title: "Weather App",
               description: "This is custom Wheater App",
            },
         ];
         setList(data);
      };

      onSetList();
   }, [setList]);

   const onTitleChange = (params) => setTitle(params.target.value);

   const onDescriptionChange = (params) => setDescription(params.target.value);

   const onSubmit = (event) => {
      event.preventDefault();
      // console.log("params", title, description);
      // let id = Math.floor(Math.random() * 36).toFixed(2);
      if (title && description) {
         let id;
         !list.length && (id = 1);
         list.length && (id = list.slice(-1)[0].id + 1);

         let obj = { id: Number(id), title: title, description: description };
         setList([...list, obj]);
         setTitle("");
         setDescription("");
      } else {
         alert(`Please fill both the title & description field to submit !`);
      }
   };

   const onUpdate = (event) => {
      event.preventDefault();
      const selectedList = list.find((ele) => ele.id === editId);
      selectedList.title = title;
      selectedList.description = description;

      setList(list);
      setTitle("");
      setDescription("");
      setEditTable(false);
   };

   const onDelete = (id) => {
      let text = `Are you sure ?`;
      const confirm = window.confirm(text);
      confirm && setList(list.filter((ele) => ele.id !== id));
   };

   const onEdit = (id) => {
      const selectedList = list.find((ele) => ele.id === id);
      // console.log("SelectedList", selectedList);
      const { title, description } = selectedList;
      // const
      console.table({ title, description });
      setTitle(title);
      setDescription(description);
      setEditTable(true);
      setEditId(id);
   };

   return (
      <>
         <h4 gutter="standard">ToDo List</h4>
         <ToDoForm
            title={title}
            description={description}
            editTable={editTable}
            onTitleChange={onTitleChange}
            onDescriptionChange={onDescriptionChange}
            onSubmit={onSubmit}
            onUpdate={onUpdate}
         />
         {!list.length && (
            // <CircularProgress />
            <p>There is no Todo list here !</p>
         )}
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               flexDirection: 'column',
               alignItems: 'center'
            }}
         >
            {list.length > 0 &&
               list.map((ele, i) => (
                  <ListItems
                     key={i}
                     list={ele}
                     onDelete={onDelete}
                     onEdit={onEdit}
                  />
               ))}
         </div>
      </>
   );
};

ToDoLists.prototype = {
   title: PropTypes.string,
   description: PropTypes.string,
   onDelete: PropTypes.func,
};
