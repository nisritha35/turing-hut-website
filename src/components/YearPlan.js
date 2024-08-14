import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ConceptTable from "./ConceptTable";
import ProblemsTable from "./ProblemsTable";
import jsondata from "../assets/year_plan.json";

const syllabus = jsondata.syllabus

const YearPlan = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Container maxwidth="sm">
        <Typography
          variant="h5"
          color="black"
          fontWeight={"bold"}
          align="center"
          sx={{ display: "inline" }}>
          Year&nbsp;
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          fontWeight={"bold"}
          align="center"
          sx={{ display: "inline" }}>
          Plan.
        </Typography>
        {syllabus.map((row, index) => (
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"panel" + { index } + "-content"}
              id={"panel" + { index } + "-header"}>
              <Typography>{`${index + 1}.  ${row.topic}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panel" + { index } + "-concept-content"}
                  id={"panel" + { index } + "concept-header"}>
                  <Typography>Concept</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ConceptTable tableData={row.concept} />
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panel" + { index } + "-concept-content"}
                  id={"panel" + { index } + "concept-header"}>
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
