import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SchoolIcon from '@mui/icons-material/School';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessIcon from '@mui/icons-material/Business';

function CustomizedTimeline({ details }) {

  const person = {...details};

  return (
    <Box>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={person.image}
          sx={{ ml:20, width: 100, height: 100 }}
        />
        <Box sx={{ml: 10}}>
          <Typography variant='h4' color='textPrimary'>
            {person.name}
          </Typography>
          <Typography variant='h5' color='textPrimary'>
            {person.position}
          </Typography>
          <Typography variant='h6' color='textPrimary'>
            {person.work}
          </Typography>
        </Box>
      </Box>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.3,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textPrimary" variant='h5'>
            Experience
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='primary' >
              <AssignmentIndIcon sx={{fontSize: 30}}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <Typography color='textPrimary' variant='body1'>
                {person.experience}
              </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="textPrimary" variant='h5'>
            Qualification
          </TimelineOppositeContent>
          <TimelineSeparator>
              <TimelineDot color='primary'>
                  <SchoolIcon sx={{fontSize: 30}}/>
              </TimelineDot>
              {person.recognizionList &&
                <TimelineConnector />
              }
          </TimelineSeparator>
          <TimelineContent>
              <Typography color='textPrimary'>
                  {person.qualification}
              </Typography>
          </TimelineContent>
        </TimelineItem>

        {person.recognizionList &&
          <TimelineItem>
            <TimelineOppositeContent color="textPrimary" variant='h5'>
              Awards & Recognitions
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='primary'>
                    <EmojiEventsIcon sx={{fontSize: 30}}/>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography color='textPrimary'>
                  {person.recognizionList}
                </Typography>
            </TimelineContent>
          </TimelineItem>
        }

        {person.affliationList &&
          <TimelineItem>
            <TimelineOppositeContent color="textPrimary" variant='h5'>
              Professional Affiliations
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='primary'>
                    <BusinessIcon sx={{fontSize: 30}}/>
                </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
                <Typography color='textPrimary'>
                  {person.affliationList}
                </Typography>
            </TimelineContent>
          </TimelineItem>
        }

        
      </Timeline>
    </Box>

  );
}

export default CustomizedTimeline;