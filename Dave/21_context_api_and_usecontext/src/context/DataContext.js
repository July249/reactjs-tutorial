import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/posts';
import useAxiosFetch from '../hooks/useAxiosFetch';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // ContextProvider로 전달하는 것들은 공통의 것들인 경우에만 담는 것이 좋다
  // handleSubmit, handleEdit, handleDelete와 같은 함수들은 각 컴포넌트 안에서만 국한되어 필요하다
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  let navigate = useNavigate();

  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
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

  // Edit funtion
  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    // Update Operation
    try {
      const res = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? { ...res.data } : post)));
      setEditTitle('');
      setEditBody('');
      navigate('/');
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
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
