import {Box, Container, TextField, Typography, MenuItem, Pagination} from "@mui/material";
import {ReactComponent as Logo} from "./@assets/LOGO_large.svg";
import { menuLista, listaSummary, styleSX, filterCategories, tableExpenses, tableHeader} from './Data.js';
import {MenuOutlined} from '@mui/icons-material';
import dziopina from './@assets/obrazek.webp';
import './style.css';
import React, {useState, useEffect} from 'react';

//BODY
function App() {
    //FUNCTIONS AND VARIABLES
    //Pagination
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage =5;

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    //Filters
    const [searchValue, setSearchValue] = useState("")
    const [dropdownSearchValue, setDropdownSearchValue] = useState("")
    const [startDateValue, setStartDateValue] = useState("2022-07-16")
    const [endDateValue, setEndDateValue] = useState("2022-09-10")


    function getResultsBetweenDates(expense) {
        const expenseDate = new Date(expense.date);
        const start = new Date(startDateValue);
        const end = new Date(endDateValue);

        return expenseDate >= start && expenseDate <= end;
    }

    //Count items
    const totalItems = tableExpenses
        .filter(product => product.name.match(new RegExp(searchValue, "i")))
        .filter(product => product.category.match(new RegExp(dropdownSearchValue, "i")))
        .filter((expense) => {
            return getResultsBetweenDates(expense);
        }).length;

    //Footer scrolled to bottom
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight;
            setIsFooterVisible(isScrolledToBottom);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container maxWidth="xl">
                {/* HEADER */}
                <Box sx={styleSX[0]}>
                    <Logo />
                    {/* DESKTOP */}
                    <Box sx={styleSX[1]}>
                        {menuLista.name.map ((name,id) => (
                            <Typography variant="h3" sx={styleSX[2]} key={id}>{name}</Typography>
                        ))}
                    </Box>
                    {/* MOBILE */}
                    <MenuOutlined sx={styleSX[3]}/>
                </Box>
                {/* BODY */}
                <Box sx={styleSX[4]}>
                    {/* EXPENSES */}
                    <Box sx={styleSX[5]}>
                        <Typography variant="h1">Expenses</Typography>
                        <Box sx={styleSX[15]}><img src={dziopina} alt="picture" style={styleSX[6]} /></Box>
                        {/* FILTERS */}
                        <Box sx={styleSX[10]}>
                            <TextField className="filterWidth" id="outlined-basic" label="Name" value={searchValue} onChange={e => setSearchValue(e.target.value)} ></TextField>
                            <TextField className="filterWidth" id="outlined-select" select label="Category" value={dropdownSearchValue}  onChange={e => setDropdownSearchValue(e.target.value)}>
                                {filterCategories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <input className="filterDate" name="dataStart" type="date" value={startDateValue} onChange={e => setStartDateValue(e.target.value)} />
                            <Typography variant="inherit" sx={{pt:2}}> - </Typography>
                            <input className="filterDate" name="dataEnd" type="date" value={endDateValue} onChange={e => setEndDateValue(e.target.value)}/>
                            {/*<Button className="filterButton" variant="outlined" >Filter</Button>*/}
                        </Box>
                        <Box>
                            <Typography variant="inherit" sx={styleSX[11]}>Total: {totalItems} of 9 items</Typography>
                        </Box>
                        {/* ------------------------------------------------------------------------ TABLE */}
                        <Box>
                            {/* TABLE HEADER */}
                            {tableHeader.map(product => (
                                <Box key={product.key} sx={styleSX[12]} >
                                    <Typography sx={styleSX[13]} style={product.style} variant={product.variant}>{product.name}</Typography>
                                    <Typography sx={styleSX[13]} style={product.style} variant={product.variant}>{product.category}</Typography>
                                    <Typography sx={styleSX[13]} style={product.style} variant={product.variant}>{product.date}</Typography>
                                    <Typography sx={styleSX[13]} style={product.style} variant={'h3'}>{product.price}</Typography>
                                </Box>
                            ))}
                            { tableExpenses
                                .filter(product => product.name.match(new RegExp(searchValue,"i")))
                                .filter(product => product.category.match(new RegExp(dropdownSearchValue,"i")))
                                .filter(expense => getResultsBetweenDates(expense))
                                .slice((currentPage -1) * itemsPerPage, currentPage * itemsPerPage)
                                .map(product => (
                                    <Box key={product.key} sx={styleSX[12]} >
                                        <Typography sx={styleSX[13]} style={product.style} variant={product.variant}>{product.name}</Typography>
                                        <Typography sx={styleSX[13]} style={product.style} variant={product.variant}>{product.category}</Typography>
                                        <Typography sx={styleSX[13]} style={product.style} variant={product.variant}>{product.date}</Typography>
                                        <Typography sx={styleSX[13]} style={product.style} variant={'h3'}>{product.price}</Typography>
                                    </Box>
                                ))}
                            {/*<Pagination*/}
                            <Box sx={styleSX[14]}>
                                <Pagination sx={{}}
                                            count={Math.ceil(
                                                tableExpenses
                                                    .filter(product => product.name.match(new RegExp(searchValue, "i")))
                                                    .filter(product => product.category.match(new RegExp(dropdownSearchValue, "i")))
                                                    .filter(expense => getResultsBetweenDates(expense))
                                                    .length / itemsPerPage
                                            )}
                                            page={currentPage}
                                            onChange={handlePageChange}
                                            color="primary"
                                            shape="rounded"
                                            size="large"
                                            variant="outlined"
                                />
                            </Box>
                        </Box>
                    </Box>
                    {/* SUMMARY */}
                    <Box sx={styleSX[7]}/>
                    <Box sx={styleSX[8]}>
                        <Typography variant="h1" sx={styleSX[9]}>Summary</Typography>
                        {listaSummary.map(item =>(
                            <Box key={item.id} sx={item.dash}>
                                <Typography variant={item.variant} sx={{pt:0.5}}>{item.title}</Typography>
                                <Typography variant='inherit' sx={{pt:0.5}}>{item.price}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                {/* FOOTER */}
            </Container>
            <Box sx={{
                textAlign: 'center',
                p: 1,
                backgroundColor: '#1B1B1B',
                color: 'white',
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                opacity: isFooterVisible ? 1 : 0,
                transition: 'opacity 0.3s ease',
            }}>
                <Typography variant="inherit">Magdalena Gryzło - zadanie testowe dla Parleto 2023</Typography>
            </Box>
        </Box>
    );
}

export default App;
