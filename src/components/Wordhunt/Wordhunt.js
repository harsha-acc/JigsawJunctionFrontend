import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import Crossword from '@jaredreisinger/react-crossword';
import './Wordhunt.css'
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Wordhunt() {
    const navigate = useNavigate()
    if(! localStorage.getItem('user'))navigate('/login')

    const [answer, setAnswer] = useState(false)
    const crosswordRef = useRef()

    const data = {
        across: {
            1: {
              clue: 'Article used for stating universal facts',
              answer: 'THE',
              row: 0,
              col: 0,
            },
            3: {
                clue: 'Correct term for a group of fish',
                answer: 'SCHOOL',
                row: 3,
                col: 0,
            },
            6: {
                clue: 'Term used to refer both color and fruit',
                answer: 'ORANGE',
                row: 7,
                col: 5,
            },
            10: {
                clue: 'A person who makes chnages to documents',
                answer: 'EDITOR',
                row: 4,
                col: 5,
            },
            11: {
                clue: 'Idle talk or rumor, especially about the personal or private affairs of others',
                answer: 'GOSSIP',
                row: 8,
                col: 0,
            }
          },
          down: {
            2: {
              clue: 'Number of parts of speech',
              answer: 'EIGHT',
              row: 0,
              col: 2,
            },
            4: {
                clue: 'Instrument used to view starts and planets',
                answer: 'TELESCOPE',
                row: 1,
                col: 5
            },
            5: {
                clue: 'Best synonym for concentrate',
                answer: 'FOCUS',
                row: 1,
                col: 1,
            },
            7: {
                clue: 'Term used to refer the first appearance of light in the sky before sunrise',
                answer: 'DAWN',
                row: 6,
                col: 7,
            },
            8: {
                clue: 'Correct term for a group of theives',
                answer: 'GANG',
                row: 7,
                col: 9,
            },
            9: {
                clue: 'Best synonym for brave',
                answer: 'COURAGE',
                row: 1,
                col: 10,
            }
          }
    }

    const handleSubmit = () => {
        let score = 0
        if(answer){
            score = 100
            alert('YAY, NAILED IT !!!')
        }
        else {
            alert('TRY AGAIN !!!')
        }
        axios.post('https://backend-6wmd.onrender.com/api/wordhunt/add', {
            userId : localStorage.getItem('userId'),
            score : score
        }).then((response) => {
            alert(response.data.description + '\nSCORE : '+ score)
        }).catch((err) => {
            alert('RETRY !!!')
        })
        crosswordRef.current.reset()
    }

    return (
        <>
        <ProfileNavbar />
        <div className="cross">
            <Crossword data={data}
                onCrosswordComplete={(result) => setAnswer(result)}
                ref={crosswordRef}
            />
            <Button variant="contained" className="cross_btn"
                onClick={handleSubmit}
            >
                SUBMIT
            </Button>
            <a href="https://www.dictionary.com/browse/synonym"><Button variant='contained' className="cross_btn">HINT</Button></a>

        </div>
      </>
    );
  }

export default Wordhunt;
