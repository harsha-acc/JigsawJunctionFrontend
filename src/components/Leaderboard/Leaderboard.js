import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import { useNavigate } from "react-router-dom";
import BasicTable from "./BasicTable";
import { useEffect, useState } from "react";
import axios from 'axios'


function Leaderboard() {
  const navigate = useNavigate()
  if(! localStorage.getItem('user'))navigate('/login')
  const [wordHuntRows, setWordHuntRows] = useState(null)
  const [logicalRows, setLogicalRows] = useState(null)

  useEffect(() => {
    axios.get('https://backend-6wmd.onrender.com/api/logical/sort').then((response) => {
      setLogicalRows(response.data.data)
    })
  }, [logicalRows])


  useEffect(() => {
    axios.get('https://backend-6wmd.onrender.com/api/wordhunt/sort').then((response) => {
      setWordHuntRows(response.data.data)
    })
  }, [wordHuntRows])


    return (
      <>
        <ProfileNavbar />
        <div>
          <BasicTable puzzle='WORD HUNT' rows={wordHuntRows}/>
          <BasicTable puzzle='LOGICAL' rows={logicalRows} />
        </div>
      </>
    );
  }

export default Leaderboard;
