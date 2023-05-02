import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function BasicTable({puzzle, rows}) {

  return (
    <>
    <TableContainer component={Paper}>
    <Typography variant='h2' textAlign='center' color='#1976d2'>{puzzle}</Typography>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>RANK</TableCell>
            <TableCell>USER</TableCell>
            <TableCell>SCORE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row,rank) => (
            <TableRow
              key={rank + 1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{rank + 1}</TableCell>
              <TableCell component="th">{row.user}</TableCell>
              <TableCell component="th">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br /><br /><br /><br />
    </>
  );
}
