import { styled } from '@mui/system'
import React from 'react'
import { Box } from '@mui/system'

const details=[
    {
        id:"1",
        name:'Email',
        linkVal:'mailto:vinaykr3108@gmail.com',
        value:'vinaykr3108'
    },
    {
        id:"2",
        name:'LinkedIn',
        linkVal:'https://www.linkedin.com/in/vinaykr3108/',
        value:'vinaykr3108'
    },
    {
        id:"3",
        name:'Leetcode',
        linkVal:'https://leetcode.com/vinaykr3108/',
        value:'vinaykr3108'
    },
    {
        id:"4",
        name:'GFG',
        linkVal:'https://auth.geeksforgeeks.org/user/vinaykr3108/practice/',
        value:'vinaykr3108'
    },
    {
        id:"5",
        name:'Github',
        linkVal:'https://www.github.com/vinay3108',
        value:'vinay3108'
    },
    {
        id:"6",
        name:'Contact No.',
        linkVal:'https://api.whatsapp.com/send/?phone=918745916568',
        value:'+918745916568'
    },
]


const DetailSection = () => {
  return (
    <DetailItem>
        <ul>
       {
        details.map((item)=>(
            <li key={item.id}>
                <a  target='_blank' href={item.linkVal}>
                <div className="headings">
                  <h3>{item.name}</h3>
                  <p>{item.value}</p>
                </div>
                </a>
            </li>
        ))
       }
       </ul>
    </DetailItem>
  )
}

export default DetailSection

const DetailItem=styled(Box)(()=>({
    ul:{
        width:'100%',
        '.headings':{  
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'5px 10px',
            h3:{
                color:'#fff',
                fontSize:'0.9rem'
            },
            p:{
                fontSize:'0.7rem',
                color:'#fff',
                opacity:'0.5'

            }

        }
    }
}))