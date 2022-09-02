import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: 'Тест охраны труда',
                amount: 'Здесь будет список ответов',
            },
            {
                date: '2020-01-02',
                customerId: 'Тест пожарной безопасности',
                amount: 'Здесь будет список ответов',
            },
        ],
    };
}

function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Архив пройденных тестов
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{fontWeight: 'bold'}}>Дата</TableCell>
                                        <TableCell style={{fontWeight: 'bold'}}>Наименование теста</TableCell>
                                        <TableCell style={{fontWeight: 'bold'}} align="right">Ответы
                                            сотрудника</TableCell>
                                        <TableCell style={{fontWeight: 'bold'}}
                                                   align="right">Результат, &nbsp;%</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                85
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Иванов И. И', 2, '86%', 24, 4.0, 3.99),
    createData('Смирнов И. И', 3, '80%', 24, 4.0, 3.99),
    createData('Сидоров И. И', 1, '13%', 24, 4.0, 3.99),
    createData('Петров И. И', 9, '90%', 24, 4.0, 3.99),
    createData('Степанов И. И', 1, '50%', 24, 4.0, 3.99),
];

export const Results = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell style={{fontSize: 25, fontWeight: 'bold'}}>Сотрудник</TableCell>
                        <TableCell style={{fontSize: 25, fontWeight: 'bold'}} align="right">Количество пройденных
                            тестов</TableCell>
                        <TableCell style={{fontSize: 25, fontWeight: 'bold'}} align="right">Средний
                            результат, &nbsp;%</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
