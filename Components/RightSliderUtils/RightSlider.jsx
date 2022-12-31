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
    const[selectedOption,setSelectedOption]=useState('Home');
    const handleHam=(value)=>{
        setHamMenu(value);
    }
    const handleOptions=(value)=>{
        setSelectedOption(value);
    }
    

  return (
    <RightSliderItem>
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
            <Menu style={{marginBottom:'80px'}} onClick={handleChangeClosed} />
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
    transition:'all 1s linear',
    color:'#fff',
}))

const RightSliderOpenItem=styled(Box)(()=>({
    transition:'all 1s linear',
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
                fontSize:'1.4rem',
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
        svg:{
            marginTop:'10px',
            fontSize:'2rem',
            "&:hover":{
                cursor:'pointer'
            }
        },
        p:{
            
            fontSize:'2.5rem',
            transform:'rotate(90deg)',
        }
    }
}))