import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';



const ProblemsTable = ({ tableData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Problem</TableCell>
            <TableCell align="center">Practice</TableCell>
            <TableCell align="center">Text Editorial</TableCell>
            <TableCell align="center">Video Editorial</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="body2">{index+1}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{row.title}</Typography>
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <ArticleIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                {row.textEditorial === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 18 }} />
                ) : (
                  <IconButton component="a" href={row.textEditorial} target="_blank">
                    <ArticleIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell align="center">
                {row.videoEditorial === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 18 }} />
                ) : (
                  <IconButton
                    component="a"
                    href={row.videoEditorial}
                    target="_blank">
                    <YouTubeIcon />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProblemsTable;
