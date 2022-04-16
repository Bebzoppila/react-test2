import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Header from './components/Header'
import AboutMe from "./pages/AboutMe";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import ImgInfo from './pages/ImgInfo'
function App() {
  // const dispatcher = useDispatch()
  // useEffect(() => {
  //   axios.get('https://api.thecatapi.com/v1/categories',{
  //     params:{
  //       'limit': 4,
  //     },
  //     headers:{
  //       'x-api-key': '2e226e54-abba-469e-8f53-2c59cd789854',
  //     }
  //   }).then(data => console.log(data.data))
  // },[])

  return (
    <div className="App">
      <Header ></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="img-info/:id" element={<ImgInfo />} />
      </Routes>
    </div>
  );
}

export default App;
