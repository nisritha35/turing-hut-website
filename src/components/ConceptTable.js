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
    <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold", fontSize: 14, padding: '10px 16px' }}>S.No</TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 14, padding: '10px 16px' }}>Topic</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 14, padding: '10px 16px' }}>
              Blog
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 14, padding: '10px 16px' }}>
              YouTube
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                "&:hover": { backgroundColor: "#f1f1f1" }
              }}
            >
              <TableCell sx={{ padding: '10px 16px' }}>
                <Typography variant="body2">{index + 1}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '10px 16px' }}>
                <Typography variant="body2">{row.title}</Typography>
              </TableCell>
              <TableCell align="center" sx={{ padding: '10px 16px' }}>
                {row.blogLink === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 20, color: "#888" }} />
                ) : (
                  <IconButton
                    component="a"
                    href={row.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#3f51b5", padding: 0 }}
                  >
                    <ArticleIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                )}
              </TableCell>
              <TableCell align="center" sx={{ padding: '10px 16px' }}>
                {row.videoLink === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 20, color: "#888" }} />
                ) : (
                  <IconButton
                    component="a"
                    href={row.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#f50057", padding: 0 }}
                  >
                    <YouTubeIcon sx={{ fontSize: 20 }} />
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
