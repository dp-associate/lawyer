import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GavelIcon from '@mui/icons-material/Gavel';
import ManIcon from '@mui/icons-material/Man';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};
export const SidebarData =[
    
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/homepage"
    },
    {
        title:"Dashboard",
        icon:<DashboardRoundedIcon />,
        link:"/dashboard"
    },
    {
        title:" Clients",
        icon:<ManIcon />,
        link:"/addclient"
    },
    {
        title:"Cases",
        icon:<GavelIcon />,
        link:"/mycase"
    },
    
    {
        title:"Appoinment",
        icon:<EventAvailableIcon />,
        link:"/appointment"
    },{
        title:"About",
        icon:<SettingsIcon />,
        link:"/setting"
    },
    {
        title:"Logout",
        icon:<LogoutIcon/>,
        link:"/",
        onclick:{handleLogout}
        
    },

];



