import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiFillInfoCircle, AiOutlineSetting, AiFillHome, AiOutlineCloudUpload} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'
import {MdSchool, MdHelp} from 'react-icons/md'
import {BiHomeAlt} from 'react-icons/bi'
import {RiVideoFill} from 'react-icons/ri'


const iconSize = 24
const authIconSize = 24

const color = "#1A8F4A"
export const navItems = [
    {
        label:'Home',
        icon:<AiFillHome color={color} size={iconSize} />,
        path:'/'
    },
    {
        label:'Resources',
        icon:<RiVideoFill color={color} size={iconSize} />,
        path:'/resources'
    },
    {
        label:'E-portal',
        icon:<MdSchool color={color} size={iconSize} />,
        path:'/login'
    },
    {
        label:'About Us',
        icon:<AiFillInfoCircle color={color} size={iconSize} />
    },
    {
        label:'Contact Us',
        icon:<MdHelp color={color} size={iconSize} />
    }
]



export const AuthNav = [
    {
        label:'Home',
        icon:<BiHomeAlt size={authIconSize} />,
        path:'/user',
        location:['/user']
    },
    {
        label:'Students',
        icon:<FaUserGraduate size={authIconSize} />,
        path:'/user/students',
        location:['/user/students', '/user/students/profile', '/user/students/create']
    },
    {
        label:'Upload Result',
        icon:<AiOutlineCloudUpload size={authIconSize} />,
        path:'/user/uploadResult',
        location:['/user/uploadResult']
    },
    {
        label:'Notifications',
        icon:<IoMdNotificationsOutline size={authIconSize}/>,
        path:'/user/notification',
        location:['/user/notification']
    },
    {
        label:'Settings',
        icon:<AiOutlineSetting size={authIconSize}/>,
        path:'/user/settings',
        location:['/user/settings']
    },
    
    
]