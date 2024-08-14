import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArticleIcon from "@mui/icons-material/Article";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const ConceptTable = ({ tableData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Topic</TableCell>
            <TableCell align="center">Blog</TableCell>
            <TableCell align="center">YouTube</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="body2">{index + 1}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{row.title}</Typography>
              </TableCell>
              <TableCell align="center">
                {row.blogLink === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 18 }} />
                ) : (
                  <IconButton component="a" href={row.blogLink} target="_blank">
                    <ArticleIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell align="center">
                {row.videoLink === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 18 }} />
                ) : (
                  <IconButton
                    component="a"
                    href={row.videoLink}
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

export default ConceptTable;
