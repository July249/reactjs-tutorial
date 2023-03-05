import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import api from "./api/posts";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./context/DataContext";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  let navigate = useNavigate();

  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };

    // Create Operation
    try {
      const res = await api.post("/posts", newPost);
      const allPosts = [...posts, res.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // Edit funtion
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    // Update Operation
    try {
      const res = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? { ...res.data } : post)));
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // Delete Operation
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog" width={width} />
        <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={searchResults}
                fetchError={fetchError}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/post"
            element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditPost
                posts={posts}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editBody={editBody}
                setEditBody={setEditBody}
                handleEdit={handleEdit}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
