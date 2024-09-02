import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Typography,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ConceptTable from "./ConceptTable";
import ProblemsTable from "./ProblemsTable";
import jsondata from "../assets/year_plan.json";

const syllabus = jsondata.syllabus;

const YearPlan = () => {
  return (
    <Box sx={{ my: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ display: "inline" }}>
          Year&nbsp;
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="bold"
          align="center"
          sx={{ display: "inline" }}>
          Plan.
        </Typography>
        <Paper
          elevation={0}
          sx={{
            padding: 3,
            backgroundColor: "#F9F9F9",
            borderRadius: 4,
            my: 3
          }}>
          <Typography variant="body1" paragraph>
            At Turing Hut, our mission is to enhance the competitive programming
            culture within our college. As part of this initiative, we have
            developed a comprehensive year plan designed for our peer learning
            sessions. We are excited to share this plan with everyone, making it
            freely accessible to all who wish to learn and grow in competitive
            programming. Our goal is to foster a collaborative and inclusive
            learning environment where anyone can develop their skills without
            any barriers.
          </Typography>
        </Paper>
        {syllabus.map((row, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 3,
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Slightly darker shadow for depth
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" // Darker shadow on hover
              },
              transition: "box-shadow 0.3s ease" // Smooth transition effect for shadow
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"panel" + index + "-content"}
              id={"panel" + index + "-header"}>
              <Typography>{`${index + 1}.  ${row.topic}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion
                sx={theme => ({
                  mb: 2,
                  backgroundColor: "#C4DAD2",
                  borderRadius: 1,
                  "&.Mui-expanded": {
                    backgroundColor: "#E9EFEC" // Green color when expanded
                  },
                  "&:hover": {
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" // Darker shadow on hover
                  },
                  transition: "box-shadow 0.3s ease" // Smooth transition effect for shadow
                })}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panel" + index + "-concept-content"}
                  id={"panel" + index + "concept-header"}>
                  <Typography>Concept</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ConceptTable tableData={row.concept} />
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={theme => ({
                  mb: 2,
                  backgroundColor: "#E9EFEC",
                  borderRadius: 1,
                  "&.Mui-expanded": {
                    backgroundColor: "#C4DAD2"
                  },
                  "&:hover": {
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" // Darker shadow on hover
                  },
                  transition: "box-shadow 0.3s ease" // Smooth transition effect for shadow
                })}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panel" + index + "-problem-content"}
                  id={"panel" + index + "problem-header"}>
                  <Typography>Problems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ProblemsTable tableData={row.problems} />
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default YearPlan;
