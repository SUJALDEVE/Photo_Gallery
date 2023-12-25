import React from 'react';
import './Fotter.css';
export default function Footer(props) {
  return (<>
   <strong><hr className={`mx-5 text-${props.mode1}`}/></strong> 
   <div className='ap4'>
   <strong><h1 className={` w-100 text-centre mt-4 text-${props.mode1}`}>⇱Quick Links:</h1></strong></div><br/><br/>
   <div className='al2'>
   <a href='https://github.com/SUJALDEVE'><img className='git' src='https://e7.pngegg.com/pngimages/266/559/png-clipart-cat-stencil-social-media-github-computer-icons-logo-github-mammal-cat-like-mammal.png'/></a>
   <a href='https://www.linkedin.com/in/sujal-agarwal-0420a3288/'><img className='ln' src='https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png'/></a>
   <a href='https://twitter.com/SUJAL9628985162'><img className='tw' src='https://pbs.twimg.com/profile_images/378800000041711687/d6050eb6ce3f141847fe200a914205bc_400x400.png'/></a>
   <a href='./sujalagarwalwk@gmail.com'><img className='mail' src='https://www.computerhope.com/jargon/g/gmail.png'/></a>
   <a href='https://www.instagram.com/sujal_0917/'><img className='ins' src='https://static.abplive.com/wp-content/uploads/sites/2/2018/09/05225134/instagram.jpg'/></a>
   </div>
   <div className='al'>
   <div className={`mx-5 w-100 text-centre mt-4 text-${props.mode1}`} >Built with 💜 by Sujal Kumar
            Agarwal</div></div>
            <br/>
    </>
  )
}
