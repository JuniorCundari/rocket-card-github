import { useEffect, useState } from 'react';

export default function useApi() {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState({
    login: '',
    avatar_url: '',
    followers: 0,
    following: 0,
    public_repos: 0,
    company: '',
    location: '',
  });

  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function handleSearch(event) {
    setUserInput(event.target.value);

    if (!event.target.value) {
      setError(null);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  }

  return {
    error,
    data,
    handleSearch,
    handleSubmit,
  };
}
