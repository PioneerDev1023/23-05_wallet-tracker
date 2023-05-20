import React from 'react';
import MUIDataTable from 'mui-datatables';
import Container from '@mui/material/Container';

const columns = ['Datetime', 'Wallet', 'Ballence', 'Action', 'Token', 'Value', 'Token', 'Balance Input', 'Links'];

const data = [
    ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '10.15%', 'TX'],
    ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '10.15%', 'TX'],
    ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '10.15%', 'TX'],
    ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '10.15%', 'TX'],
    ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '10.15%', 'TX'],
    ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '10.15%', 'TX'],
    ['18/05/2023 4:47:02 pm', '0x523...26d2', '3.52', 'Buy', 'Unibot', '0.33', '533', '10.15%', 'TX'],
];

const options = {
    filterType: 'checkbox' as const, // Assign the correct type for filterType
};

function Tracker() {
    return (
        <div>
            <Container sx={{ padding: '30px 0px' }}>
                <MUIDataTable title={'Wallet Tracker'} data={data} columns={columns} options={options} />
            </Container>
        </div>
    );
}

export default Tracker;
