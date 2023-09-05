// import React from 'react'
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
// import ModalPage from './ModalPage';

const UserPage = () => {

  const [searchterm, setSearchTerm] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const navigate = useNavigate();

  console.log('in');
  const { name } = useParams();
  console.log(name);

  const handleAccordianClick = () => {
    navigate(`/accordian`);
  }
  
  const handleHomeClick = () => {
    navigate(`/`);
  }

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchClick = () => {
    // navigate(`https://www.google.com/search?q=${searchterm}`);
    window.open(`https://www.google.com/search?q=${searchterm}`,"_self")
  }

  const handleCounterClick = () => {
    navigate(`/counter`);
  }

  const handleHellClick = () => {
    navigate(`/hell`);
  }

  const handleModalClick = () => {
    navigate(`/modal`);
  }

  const handleLatitudeInput = (event) => {
    setLatitude(event.target.value);
  }

  const handleLongitudeInput = (event) => {
    setLongitude(event.target.value);
  }

  const handleMapsClick = () => {
    window.open(`https://www.google.com/maps/place/${latitude}+${longitude}`,"_self") 
  }

  const handleTicTacToeClick = () => {
    navigate(`/tictactoe`);
  }

  return (
    <div className='bg-zinc-100 pb-10'>
      <h1 className='bg-blue-300 font-extrabold text-blue-800 text-center py-6 mx-4'>Welcome!!! {name?.toUpperCase()}</h1>
      <h2 className='mt-10 text-center font-bold italic bg-zinc-300 py-5 mx-52 border-b-2 border-black'>Click on any of these button</h2>
      <div className='mx-56 my-4 grid grid-cols-6'>
      <button className='bg-blue-300 p-2 rounded-xl border-b-2 border-black outline-2 mx-8' onClick={handleAccordianClick}>Accordian</button>
      <button className='bg-green-300 p-2 rounded-xl border-b-2 border-black outline-2 mx-8' onClick={handleHomeClick}>Home</button>
      <input type='text' className="bg-slate-200 border-2 border-gray-400 p-2 ml-8" value={searchterm} onChange={handleSearchInput} />
      <button className='bg-orange-300 p-2 rounded-xl border-b-2 border-black outline-2 ml-4 mr-8' onClick={handleSearchClick}>Search</button>
      <button className='bg-yellow-300 p-2 rounded-xl border-b-2 border-black outline-2 mx-8' onClick={handleCounterClick}>Counter</button>
      <button className='bg-red-400 p-2 rounded-xl border-b-2 border-black outline-2 mx-8' onClick={handleHellClick}>Hell !!!</button>
      <button className='bg-red-500 p-2 my-4 rounded-xl border-b-2 border-black outline-2 mx-8' onClick={handleModalClick}>Don't Click</button>
      <input type='number' className="bg-slate-200 my-4 border-2 border-gray-400 p-2 ml-8" value={latitude} onChange={handleLatitudeInput} />
      <input type='number' className="bg-slate-200 my-4 border-2 border-gray-400 p-2 ml-4" value={longitude} onChange={handleLongitudeInput} />
      <button className='bg-cyan-500 p-2 my-4 rounded-xl border-b-2 border-black outline-2 ml-4 mx-8' onClick={handleMapsClick}>Maps</button>
      <button className='bg-fuchsia-300 p-2 my-4 rounded-xl border-b-2 border-black outline-2 mx-8' onClick={handleTicTacToeClick}>TicTacToe</button>
      </div>
      
    </div>
  )
}

export default UserPage;