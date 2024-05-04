import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "./posts/postSlice";

const AddpostFrom = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(addPost({ id: nanoid(), title, content }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h1>Add post</h1>
      <label htmlFor="tiitle">Title</label>
      <input
        type="text"
        id="tiitle"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <lable htmlFor="content">Content</lable>
      <input
        type="text"
        id="content"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={onSavePostClicked}>Add post</button>
    </section>
  );
};

export default AddpostFrom;
