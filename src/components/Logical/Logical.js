import { Button, Typography } from "@mui/material";
import { useState } from "react";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import { useNavigate } from "react-router-dom";
import './Logical.css';
import axios from 'axios';

const shapes = ['😇', '🥳', '😎', '🤩', '🤠', '😑', '😬', '🤫', '🥱', '🤐', '🤥', '🧐']

function Logical() {
    const navigate = useNavigate()
    if(! localStorage.getItem('user'))navigate('/login')
    const [dimension, setDimension] = useState(2)
    const [unqEmoji, setUnqEmoji] = useState(shapes[Math.floor(Math.random() * shapes.length)])
    const [x, setX] = useState(Math.floor(Math.random() * dimension))
    const [y, setY] = useState(Math.floor(Math.random() * dimension))
    const [score, setScore] = useState(0)

    const rotate = (matrix, n) => {
        while(n--){
            matrix = matrix[0].map((col, i) => matrix.map(row => row[i]));
        }
        return matrix;
    }

    const handleSubmit = (i, j) => {
        if(i == x && j == y){
            setScore(score + 1)
            setDimension(dimension + 1)
            setUnqEmoji(shapes[Math.floor(Math.random() * shapes.length)])
            setX(Math.floor(Math.random() * dimension))
            setY(Math.floor(Math.random() * dimension))
        }else {
            axios.post('https://backend-6wmd.onrender.com/api/logical/add', {
                userId : localStorage.getItem('userId'),
                score : score
            }).then((response) => {
                alert(response.data.description + '\nSCORE : '+ score)
                window.location.reload()
            }).catch((err) => {
                alert('RETRY !!!')
            })
        }
    }

    let grid = [];
    let multi = [];
    for(var i = 0;i < shapes.length; i++){
        if(shapes[i] != unqEmoji)multi.push(shapes[i]);
    }
    var count = 0;
    var prev = -1;
    for(var i = 0; i < dimension; i++){
        let row = [];
        for(var j = 0; j < dimension; j++){
            if(count == 0|| prev== -1)
            {
                let randIndex = Math.floor(Math.random() * multi.length)
                row.push(multi[randIndex]);
                prev = multi[randIndex];
                count++;
            }
            else{
                count++;
                row.push(prev);
                if(count == 3)count = 0;
            }
            if(j == dimension - 1)grid.push(row);
        }
    }
    if((dimension * dimension) % 3){
        grid[dimension - 1][dimension - 1] = grid[0][0];
        if((dimension * dimension) % 3 == 2)grid[dimension - 1][dimension - 2] = grid[0][0];
    }

    grid = rotate(grid, Math.floor(Math.random() * 5));
    grid[x][y] = unqEmoji;

    return (
        <>
        <ProfileNavbar />
        <Button variant="contained" style={{ margin: 12 }}><a href="https://www.cuemath.com/learn/maths-olympiad-odd-one-out/">HINT</a></Button>
        <div style={{textAlign: "center", fontSize: 50, margin: 20}}>
            <Typography variant="h1" color='#1976d2'>SCORE : {score}</Typography>
        </div>
        <div className="center_box">
        {grid.map((row, rowIndex) => (
            <div key={rowIndex}>
            {row.map((col, colIndex) => (
                <span key={colIndex} style={{fontSize: 75}}
                    onClick={() => handleSubmit(rowIndex, colIndex)}>
                        &nbsp;{col}&nbsp;
                </span>
            ))}
            </div>
        ))}
        </div>
      </>
    );
  }

export default Logical;



