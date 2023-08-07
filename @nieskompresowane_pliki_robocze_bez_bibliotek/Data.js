import { SettingsOutlined,AccountCircleOutlined,LogoutOutlined } from '@mui/icons-material';
import {Box} from "@mui/material";

export const menuLista = {
    name: ['DASHBOARD','REPORTS',<Box sx={{pb:0.60,borderBottom:'2px solid'}}>EXPENSES</Box>,<SettingsOutlined/>,<AccountCircleOutlined/>,<LogoutOutlined/>,],
    id: ['ML-00-01','ML-00-02','ML-00-03','ML-00-04','ML-00-05','ML-00-06'],
};

export const listaSummary = [
    {title: 'Total', variant: 'subtitle1', price: '797 PLN', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4,borderBottom:'2px solid white',pb:5}, id: 'LS-00-01',},
    {title: 'Per period',variant: 'subtitle1', price: '', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4}, id: 'LS-00-02',},
    {title: '2022-07',variant: 'inherit', price: '40 PLN', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4}, id: 'LS-00-03',},
    {title: '2022-08',variant: 'inherit', price: '349 PLN', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4}, id: 'LS-00-04',},
    {title: '2022-09',variant: 'inherit', price: '408 PLN', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4,borderBottom:'2px solid white',pb:5}, id: 'LS-00-05',},
    {title: 'Per category',variant: 'subtitle1', price: '', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4}, id: 'LS-00-06',},
    {title: 'food',variant: 'inherit', price: '97 PLN', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4}, id: 'LS-00-07',},
    {title: 'car',variant: 'inherit', price: '700 PLN', dash: {display:'flex',flexDirection:"row",justifyContent:"space-between",gap:4}, id: 'LS-00-08',}
];

export const filterCategories = [
    {value:'',label:'All',},
    {value:'food',label:'Food',},
    {value:'car',label:'Car',},
];

// -------------------------------------------------------- TABLE

export const tableHeader = [
    {id:0,name: 'NAME', category: 'CATEGORY', date: 'DATE', price: 'PRICE', key: 'TE-00-00', variant:'h3',style:{backgroundColor: 'white'}},
];


export const tableExpenses = [
    {id:1,name: 'coffee', category: 'food', date: '2022-07-16', price: '40 PLN', key: 'TE-00-01',variant:'inherit',style:{backgroundColor: 'secondary.main'}},
    {id:2,name: 'bread', category: 'food', date: '2022-08-03', price: '8 PLN', key: 'TE-00-02',variant:'inherit',style:{backgroundColor: 'white'}},
    {id:3,name: 'cheese', category: 'food', date: '2022-08-03', price: '21 PLN', key: 'TE-00-03',variant:'inherit',style:{backgroundColor: 'secondary.main'}},
    {id:4,name: 'fuel', category: 'car', date: '2022-08-14', price: '320 PLN', key: 'TE-00-04',variant:'inherit',style:{backgroundColor: 'white'}},
    {id:5,name: 'bread', category: 'food', date: '2022-09-01', price: '8 PLN', key: 'TE-00-05',variant:'inherit',style:{backgroundColor: 'secondary.main' }},
    {id:6,name: 'ham', category: 'food', date: '2022-09-01', price: '14 PLN', key: 'TE-00-06',variant:'inherit',style:{backgroundColor: 'white'}},
    {id:7,name: 'butter', category: 'food', date: '2022-09-10', price: '6 PLN', key: 'TE-00-07',variant:'inherit',style:{backgroundColor: 'secondary.main'}},
    {id:8,name: 'fuel', category: 'car', date: '2022-09-10', price: '320 PLN', key: 'TE-00-08',variant:'inherit',style:{backgroundColor: 'white'}},
    {id:9,name: 'car wash', category: 'car', date: '2022-09-10', price: '60 PLN', key: 'TE-00-09',variant:'inherit',style:{backgroundColor: 'secondary.main'}},
];




// -------------------------------------------------------- STYLE SX
export const styleSX = [
    // 0 - HEADER
    {pt:2,display:'flex',justifyContent:"space-between",gap:4},
    // 1 - NAV BAR
    {pt:0,display:{xs:"none", md:"flex"},flexDirection: {xs:"column", md:"row"},justifyContent:"space-between",gap:6},
    // 2 - NAV ITEM
    {color:'primary.main',pt:4,cursor:'pointer'},
    // 3 - NAV HAMBURGER
    {display:{xs:"flex", md:"none"},pt:2.1,fontSize:"3rem",cursor:'pointer',color:'primary.main'},
    // 4 - BODY
    {display:'flex',flexDirection: {xs:"column", md:"row"},justifyContent:"space-between",gap:4,pt:20},
    // 5 - EXPENSES COLUMN
    {display:'flex',flexDirection: {xs:"column", md:"column"},justifyContent:"space-between",gap:4, width:{xs:"100%", md:'66%'}},
    // 6 - IMAGE
    {width:'29em',height:'auto', zIndex: '-2'},
    // 7 - SUMMARY BACKGROUND
    {display:'flex',flexDirection:"column",backgroundColor: {xs:'none',md:'#1B1B1B'},right:0,position:'absolute',width:{xs:"100%", md:'26%'}, height:855,pl:8,zIndex: {xs:-2,md:0}},
    // 8 - SUMMARY COLUMN
    {display:'flex',pl:{xs:'10%', md:'13%'},backgroundColor: {xs:'#1B1B1B',md:'rgba(27, 27, 27, 0)'},pr: {xs:'10%',md:'11.5%'},right:0,position:{xs:'',md:'absolute'},justifyContent:"space-between",gap:2,flexDirection:"column",color: {xs:'white', md:'white'},width:{xs:"80%", md:'14%'},zIndex: {xs:0,md:2},pb:10,mt:{xs:-9,md:0}},
    // 9 - SUMMARY TITLE
    {pt:7,pb:1,fontSize:{xs:"3.9rem",md:"3.25vw"}},
    // 10 - FILTERS
    {pt:4,display:{xs:"flex", md:"flex"},flexDirection: {xs:"row", md:"row"},justifyContent:"space-between",gap:2,borderBottom: "1px solid #E3E3E3", pb:3,zIndex:10},
    // 11 - SHOW ITEMS
    {color:'primary.main',mt:-2.5,textAlign:'right'},
    // 12 - TABLE
    {width:'100%',display:'flex', flexDirection: 'row'},
    // 13 - TABLE COLUMN
    {width:'25%', height:65,pl:2, display:'flex',backgroundColor: 'secondary.main',alignItems:'center' },
    // 14 - PAGINATION SECTION
    {display:'flex', flexDirection:'row',pt:3,pb:8, borderTop:'1px solid #ECECEC',mt:8, justifyContent:'right',zIndex:5},
    // 15 - DZIOPINA SECTION
    {width:'29em',display:'flex',height:'auto', zIndex: '-2',position:'absolute',right: {xs:'0%',md:'26%'}, top:'13%',opacity: {xs:0.3,md:1}},
];

