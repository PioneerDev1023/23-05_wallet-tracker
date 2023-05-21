import React from 'react';
import MUIDataTable from 'mui-datatables';
import Container from '@mui/material/Container';

const columns = ['Token Name', 'Unique Buys', 'Total Buys', 'Unique Sells', 'Total Sells', 'Transaction Count'];

const data = [
    ['Unibot', '1', '1', '0', '0', '1'],
    ['Unibot', '1', '1', '0', '0', '1'],
    ['Unibot', '1', '1', '0', '0', '1'],
    ['Unibot', '1', '1', '0', '0', '1'],
    ['Unibot', '1', '1', '0', '0', '1'],
    ['Unibot', '1', '1', '0', '0', '1'],
    ['Unibot', '1', '1', '0', '0', '1'],
];

const options = {
    filterType: 'checkbox' as const, // Assign the correct type for filterType
};

function Counts() {
    return (
        <div>
            <Container sx={{ padding: '30px 0px' }}>
                <MUIDataTable title={'Transaction Counts'} data={data} columns={columns} options={options} />
            </Container>
        </div>
    );
}

export default Counts;
