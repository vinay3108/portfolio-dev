import React,{useState,useEffect} from 'react'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import {Home,Info,Person,AppRegistration,Beenhere,BorderColor,Menu} from '@mui/icons-material';
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
    const [hamMenu,setHamMenu]=useState(true);
    const handleHam=(value)=>{
        setHamMenu(value);
    }
  return (
    <RightSliderItem>
        {
        hamMenu?
        <RightSliderOpen handleHam={handleHam}/>
        :
        <RightSliderClosed handleHam={handleHam}/>
        }
    </RightSliderItem>
  )
}

export default RightSlider


const RightSliderClosed=(props)=>{

    const [selectedItem,setSelectedItem]=useState('Home');
    const handleChangeClosed=()=>{
        props.handleHam(true);
        
    }
    return (
        <RightSliderClosedItem>
            <div>
            <Menu onClick={handleChangeClosed}/>
            <p>  {selectedItem}</p>
            </div>
        </RightSliderClosedItem>
    )
}


const RightSliderOpen=(props)=>{
    const [selectedMenu,setSelectedMenu]=useState('Home');
    const handleChange=(name)=>{
        setSelectedMenu(name);
        props.handleHam(false);
    }
    return(
        <RightSliderOpenItem>
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

const RightSliderItem=styled(Box)(()=>({
    backgroundColor:'#2C2C39',
    height:'100vh',
    transition:'all 0.4s linear'
}))

const RightSliderOpenItem=styled(Box)(()=>({
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
               svg:{
                fontSize:'15px',
                marginRight:'8px'
               }
            },
            '&:hover':{
                cursor:'pointer',
                transform:'scale(1.1)',
                transition: 'all 0.3s ease-out',
            }
        }
    }
}))

const RightSliderClosedItem=styled(Box)(()=>({
    div:{

        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        transition:'all 0.4s ease',
        svg:{
            marginTop:'10px',
            fontSize:'2rem',
            "&:hover":{
                cursor:'pointer'
            }
        },
        p:{
            marginTop:'50px',
            fontSize:'2.5rem',
            transform:'rotate(90deg)',
        }
    }
}))