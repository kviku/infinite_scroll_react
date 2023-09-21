
import './App.css';

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setFetching(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _limit: 100,
            _page: page,
          },
        }
      );
      setData((prevData) => [...prevData, ...response.data]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
      setFetching(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setFetching(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!fetching) {
          fetchData();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchData, fetching]);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <h1 className='h1'>Infinite Scroll Grid Card</h1>
      <div className="item-container">
        {data.map((post) => (
          <div className="item" key={post.id}>
            <h2>ID:{post.id}</h2>
            <h4>Name:{post.title}</h4>
            <p><h2>Description:</h2>{post.body}</p>
            
            <img
              src={`https://via.placeholder.com/150?text=Image${post.id}`}
              alt={`Item ${post.id}`}
              className="item-image"
            />
            <button onClick={() => openModal(post)}>View Details</button>
          </div>
        ))}
      </div>
      {fetching && <p className="loading">Loading...</p>}
      {loading && !fetching && <p className="loading">Initial Loading...</p>}

      {/* Modal */}
      <Modal
        isOpen={!!selectedItem}
        onRequestClose={closeModal}
        contentLabel="Item Details"
      >
        {selectedItem && (
          <div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.body}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;