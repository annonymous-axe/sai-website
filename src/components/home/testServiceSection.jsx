import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function ServiceSection() {
  return (
    <div>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">STRUCTURAL ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Engineering Excellence from Concept to Completion</Typography>
            <Typography variant='p' textAlign='justify'>We deliver end-to-end Structural Engineering Services tailored to meet the unique demands of each project whether it's a new construction, extension, or redevelopment. Our solutions are designed with safety, efficiency, and sustainability at their core, and are backed by deep expertise in both traditional and advanced construction systems. From small buildings to large-scale industrial, commercial, and institutional complexes, we provide complete design, analysis, detailing, and documentation using advanced tools. Every design is carefully customized to suit the project's functional requirements, site conditions, and construction methodology. By working closely with architects, developers, and contractors, we ensure structurally sound, cost-effective, and long-lasting solutions—delivered on time with a strong emphasis on coordination and technical excellence.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">VALUE ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Design with Purpose. Performance with Precision. Value at Every Step.</Typography>
            <Typography variant='p' textAlign='justify'>Our value engineering process identifies areas where cost efficiencies can be achieved without compromising on function, safety, or aesthetics. By re-evaluating design elements and construction methods, we help clients optimize their investments and improve overall project value.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">REPAIR & REHABILITATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Bringing Structures Back to Life.</Typography>
            <Typography variant='p' textAlign='justify'>Over time, all structures face wear and deterioration. We specialize in diagnosing issues and implementing customized repair and rehabilitation techniques that restore structural integrity and extend service life. Our solutions address both visible damage and underlying structural concerns.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">RETROFITTING OF HERITAGE STRUCTURES</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Strengthening the Past for the Future.</Typography>
            <Typography variant='p' textAlign='justify'>Our team is experienced in retrofitting heritage structures with the utmost care and respect for their historic value. By combining traditional knowledge with modern engineering practices, we enhance the structural safety of these buildings while preserving their original aesthetics and significance.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">NON-DESTRUCTIVE TESTING (NDT)</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Insightful Evaluation without Structural Damage.</Typography>
            <Typography variant='p' textAlign='justify'>We offer a full suite of Non-Destructive Testing (NDT) methods to assess the internal health of structures without altering or damaging them. These techniques help identify structural weaknesses, material degradation, and construction flaws early—minimizing long-term risks.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">QUANTITY SURVEYING</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Precision in Cost Planning and Resource Management.</Typography>
            <Typography variant='p' textAlign='justify'>Accurate cost estimation and quantity take-offs are vital to the success of any project. Our quantity surveying services encompass budgeting, material estimation, tendering, and financial tracking—ensuring that projects stay on schedule and within budget from design through to delivery.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">VALUATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Trusted Property & Asset Valuation For Every Need.</Typography>
            <Typography variant='p' textAlign='justify'>We provide impartial and professional valuation services for buildings, land, and infrastructure assets. Whether for financial institutions, legal purposes, or investment decisions, our certified valuers deliver reports that are clear, compliant, and reliable.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">PROOF CHECKING / PEER REVIEWING DESIGN</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h6'>Ensuring Accuracy Through Independent Review</Typography>
            <Typography variant='p' textAlign='justify'>Our proof-checking and peer review services provide independent, expert-level verification of structural designs. We cross-check drawings, calculations, and compliance with codes to identify design gaps or risks—ensuring safety, functionality, and approval readiness.</Typography>
        </AccordionDetails>
      </Accordion>                                    
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
    </div>
  );
}
