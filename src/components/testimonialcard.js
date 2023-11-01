import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import "../css/testimonialCards.css"
import { styled } from '@mui/system';

export default function TestimonialCard() {
    const CustomChip = styled(Chip)(({ theme }) => ({
        backgroundColor: 'black',
        height: '1.5vw',
        '@media (max-width: 600px)': {
          height: '3vw', 
        }
        // Add more styles as needed
      }));

    return (
        <Card className="testimonial-card" style={{boxShadow:" 0 0 6vw rgba(0, 0, 0, 0.6 )", '@media (max-width: 768px)': {
            boxShadow:" 0 0 9vw rgba(0, 0, 0, 0.6 )", 
          }}}>
            <CardActionArea className="testimonial-card-container">

                <CardContent className="custom-card-content">
                    <div className="custom-title">
                        <NetworkWifiIcon />Jayant Singh
                    </div>
                    <div className="custom-text">
                        "It was really awesome management and decoration. We are really much happy and too much enjoying in my function..."
                    </div>
                    <CustomChip label={<a className="custom-star"> ★★★★  </a>} />
                </CardContent>

            </CardActionArea>
        </Card>
    );
}