import { Box } from '@mui/material';

function OfficeMap(){
    return (
        <Box 
            sx={{ 
                width: "100%",
                height: { xs: "300px", sm: "400px", md: "450px", lg: "500px" },
                borderRadius: { xs: 2, sm: 3 },
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid',
                borderColor: 'grey.200'
            }}
        >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.9663125051212!2d72.79828382049637!3d21.197511269637438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e513aa9c71d%3A0xdd2c8580356b8925!2sSai%20Consultants%20Hiren%20G.Desai!5e0!3m2!1sen!2sin!4v1758187595502!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ 
                    border: 0,
                    display: 'block'
                }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Consultants Office Location"
            />
        </Box>
    );
}

export default OfficeMap;