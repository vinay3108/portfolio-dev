import React,{useState,useEffect} from 'react'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import {Home,Info,Person,AppRegistration,Beenhere,BorderColor,Menu,Close} from '@mui/icons-material';
import Link from 'next/link'
const rightSliderData=[
    {
        id:'1',
        icon:<Home/>,
        name:'Home',
        path:'/'
    },
    {
        id:'2',
        icon:<Info/>,
        name:'About',
        path:'/about' 
    },
    {
        id:'3',
        icon:<AppRegistration/>,
        name:'Skills',
        path:'/skills' 
    },
    {
        id:'4',
        icon:<Beenhere/>,
        name:'Projects',
        path:'/projects' 
    },
    {
        id:'5',
        icon:<BorderColor/>,
        name:'Blog',
        path:'/blogs' 
    },
    {
        id:'6',
        icon:<Person/>,
        name:'Contact',
        path:'/contact' 
    },
]

const RightSlider = () => {
    const [hamMenu,setHamMenu]=useState(false);
    const[selectedOption,setSelectedOption]=useState('Home');
    const [openWindow,setOpenWindow]=useState("100%");
    const handleHam=(value)=>{
        setHamMenu(value);
    }
    const handleOptions=(value)=>{
        setSelectedOption(value);
    }
    useEffect(()=>{
        hamMenu?setOpenWindow('100%'):setOpenWindow('60%');
    },[hamMenu])
    

  return (
    <RightSliderItem widthh={openWindow}>
        {
        hamMenu?
        <RightSliderOpen handleHam={handleHam} handleOptions={handleOptions}/>
        :
        <RightSliderClosed handleHam={handleHam} selectedItem={selectedOption}/>
        }
    </RightSliderItem>
  )
}

export default RightSlider


const RightSliderClosed=(props)=>{

    // const [selectedItem,setSelectedItem]=useState('Home');
    const handleChangeClosed=()=>{
        props.handleHam(true); 
    }
    return (
        <RightSliderClosedItem>
            <div>
            <Box className="icon-container">
                <Menu onClick={handleChangeClosed}/>
            </Box>
            <p>  {props.selectedItem.toUpperCase()}</p>
            </div>
        </RightSliderClosedItem>
    )
}


const RightSliderOpen=(props)=>{
    const [selectedMenu,setSelectedMenu]=useState('Home');
    const handleChange=(name)=>{
        setSelectedMenu(name);
        props.handleHam(false);
        props.handleOptions(name);
    }
    return(
        <RightSliderOpenItem>
        <Box className="icon-container">
            <Close onClick={()=>{ props.handleHam(false)}}/>
        </Box>
        <ul>
        {
            rightSliderData.map((item)=>(
                <li key={item.id} onClick={()=>handleChange(item.name)}>
                    <div>
                        <Link href={item.path}>
                        <p><span>{item.icon}</span>{item.name}</p>
                        </Link>
                    </div>
                </li>
            ))
        }
        </ul>
        </RightSliderOpenItem>
    )
}

const RightSliderItem=styled(Box)((props)=>({
    backgroundColor:'#2C2C39',
    height:'100vh',
    transition:'all 0.8s linear',
    color:'#fff',
    width:`${props.widthh?props.widthh:'100%'}`,
    float:`${props.widthh=='60%'&&'right'}`
    // float:'right'
}))

const RightSliderOpenItem=styled(Box)(()=>({
    transition:'all 1s linear',
    '.icon-container':{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'60px',
        marginBottom:'1rem',
        backgroundColor:'#6e6e79',
        svg:{
            fontSize:'2rem',
            fontWeight:500,
            transition:"all 0.4s ease-in",
            '&:hover':{
                cursor:'pointer',
                transform:'scale(1.2)',
            }
        }
    },
    ul:{
        listStyle:'none',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        transition:'all 0.5s ease',
        
        li:{
            margin:'10px 0',
            width:'90%',
            p:{
                display:'flex',
                alignItems:'center',
                fontSize:'1.2rem',
               svg:{
                fontSize:'1.8rem',
                marginRight:'8px'
               }
            },
            '&:hover':{
                cursor:'pointer',
                transform:'scale(1.1)',
                transition: 'all 0.3s ease-out',
                color:'yellow'
            }
        }
    }
}))

const RightSliderClosedItem=styled(Box)(()=>({
    transition:'all 1s linear',
    div:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        transition:'all 0.4s ease',
        '.icon-container':{
            width:'100%',
            height:'60px',
            marginBottom:'5rem',
            backgroundColor:'#6e6e79',
            svg:{
                fontSize:'2rem',
                "&:hover":{
                    cursor:'pointer'
                }
            },
        },
        p:{
            
            fontSize:'2.5rem',
            transform:'rotate(90deg)',
        }
    }
}))