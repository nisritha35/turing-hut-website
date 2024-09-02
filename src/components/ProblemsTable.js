import React from "react";
import {
  Box,
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
import { graphql, useStaticQuery } from "gatsby";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArticleIcon from "@mui/icons-material/Article";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PlatformIcon from "./PlatformIcon";  // Ensure this is defined correctly

const ProblemsTable = ({ tableData }) => {

  // GraphQL query to fetch logo images
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { fit: COVER }
              )
            }
          }
        }
      }
    }
  `);

  const nodes = data.allFile.edges;

  const getImage = val => {
    const result = nodes.filter(item => {
      const src = item.node.childImageSharp.gatsbyImageData.images.fallback.src;
      const filepath = /[^/]*$/.exec(src)[0];
      return filepath === val.icon;
    });
    return result.length > 0
      ? result[0].node.childImageSharp.gatsbyImageData
      : null;
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 14, width: '5%', padding: '10px 16px' }}>S.No</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 14, width: '40%', padding: '10px 16px' }}>Problem</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 14, width: '15%', padding: '10px 16px' }}>Try It Out</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 14, width: '15%', padding: '10px 16px' }}>Text Editorial</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 14, width: '15%', padding: '10px 16px' }}>Video Editorial</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: '#fafafa' },
                '&:hover': { backgroundColor: '#f1f1f1' }
              }}
            >
              <TableCell sx={{ padding: '10px 16px' }}>
                <Typography variant="body2">{index + 1}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '10px 16px' }}>
                <Typography variant="body2">{row.title}</Typography>
              </TableCell>
              <TableCell align="center" sx={{ padding: '10px 16px' }}>
                <PlatformIcon
                  logo={getImage(row)} url={row.practiceLink}
                />
              </TableCell>
              <TableCell align="center" sx={{ padding: '10px 16px' }}>
                {row.textEditorial === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 20, color: '#888' }} />
                ) : (
                  <IconButton
                    component="a"
                    href={row.textEditorial}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#3f51b5', padding: 0 }}
                  >
                    <ArticleIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                )}
              </TableCell>
              <TableCell align="center" sx={{ padding: '10px 16px' }}>
                {row.videoEditorial === "" ? (
                  <HourglassEmptyIcon sx={{ fontSize: 20, color: '#888' }} />
                ) : (
                  <IconButton
                    component="a"
                    href={row.videoEditorial}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#f50057', padding: 0 }}
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

export default ProblemsTable;
