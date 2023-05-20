import React from 'react';
import { Container, Button, Stack } from '@mui/material';

import bgImage from '../assets/images/bg.jpg';

const styles = {
    container: {
        padding: '30px 0px',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        height: '100vh',
    }
}

function Tracker() {
    return (
        <div style={styles.container}>
            <Container>
                <Stack spacing={2} direction='row' justifyContent='flex-end'>
                    <Button href="/#/tracker" variant='contained' sx={{ fontWeight: '600' }}>Tracker</Button>
                    <Button href="/#/count" variant='contained' sx={{ fontWeight: '600' }}>Counts</Button>
                </Stack>
            </Container>
        </div>
    );
}

export default Tracker;
