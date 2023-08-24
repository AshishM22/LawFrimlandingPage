import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import "./Accordian.css";

export default function Accordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const circleStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "#E3B748",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
  };

  const iconStyle = {
    fontSize: "28px",
    color: "#000000",
  };

  return (
    <div className="accordian-main-container">
      <Accordion
        className="accodian-layer"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded !== "panel1" ? (
              <div style={circleStyle}>
                <AddIcon style={iconStyle} />
              </div>
            ) : null
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordian-heading">
            Do I need a personal injury report?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian-ans">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accodian-layer"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            expanded !== "panel2" ? (
              <div style={circleStyle}>
                <AddIcon style={iconStyle} />
              </div>
            ) : null
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="accordian-heading">
            How much is my case worth?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian-ans">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accodian-layer"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            expanded !== "panel3" ? (
              <div style={circleStyle}>
                <AddIcon style={iconStyle} />
              </div>
            ) : null
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordian-heading">
            What should I do right after car accidect
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian-ans">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accodian-layer"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={
            expanded !== "panel4" ? (
              <div style={circleStyle}>
                <AddIcon style={iconStyle} />
              </div>
            ) : null
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="accordian-heading">
            What things should be considered before filing a petition?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian-ans">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
