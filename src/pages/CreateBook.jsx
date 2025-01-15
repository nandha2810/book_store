import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .post("https://backend-gxlb.onrender.com/book/", data)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-gray-500 mr-4 text-xl">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border-2 border-gray-500 px-3 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-gray-500 mr-4 text-xl">
            Author
          </label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="border-2 border-gray-500 px-3 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-gray-500 mr-4 text-xl">
            Publish Year
          </label>
          <input
            type="number"
            onChange={(e) => setPublishYear(e.target.value)}
            value={publishYear}
            className="border-2 border-gray-500 px-3 py-2 w-full"
          />
        </div>
        <button className="bg-sky-300 p-2 mt-6 mb-2" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
