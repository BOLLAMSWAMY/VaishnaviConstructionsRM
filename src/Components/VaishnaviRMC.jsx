import React from 'react'
import DarkMap from '../assets/DarkMap.png'
import LightMap from '../assets/LightMap.png'
import G1 from '../assets/ServiceAsserts/RMCImgs/G1.png'
import G2 from '../assets/ServiceAsserts/RMCImgs/G2.png'
import G3 from '../assets/ServiceAsserts/RMCImgs/G3.png'
import RMC_hero from '../assets/rmc-banner.png'
import RMCTrucks from '../assets/about-rmc.png'
import whatsappImg from '../assets/whatsappImg.png'
import { FormComponent, InputComponent } from './Form'
import { ContentIntro, ExtraSmallText, GalleryImg, GallerySection, HeroSection, LocationCard, SmallText, TheameBtn, TheameLargeText, WhatsappIcon, WhiteDiv, XlText } from './styledComponents'


function VaishnaviRMC() {

  return (
    <>
    <HeroSection style={{height:'auto', padding:'10rem'}} bgImage={RMC_hero} >
       <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
       <p className='HeroText' >Precision-Mixed Concrete for Every Project</p>
       <SmallText style={{color:'whitesmoke'}}>RMC‘s full form is Ready Mixed Concrete. It is manufactured in a batching plant or factory according to the standard specifications that are required. After being prepared it is delivered to the construction location in two different ways. </SmallText>
       </div>
       <div>
        <FormComponent style={{width:'fit-content', alignItems:'flex-start', border:'1px solid #9d9797', boxShadow: '#fdfdfd5e -1rem -1rem 0px'}}>
            <XlText>Get In Touch</XlText>
            <SmallText style={{fontSize:'14px'}}>Leave us your details and we’ll call you</SmallText>
            <InputComponent placeholder='Enter Your Name' />
            <InputComponent placeholder='Enter Your Email' style={{border:'none'}} />
            <InputComponent placeholder='Enter Your Number' />
            <TheameBtn style={{borderRadius:'5px', fontSize:'1rem',width:'100%'}}>Submit</TheameBtn>
        </FormComponent>

       </div>

       <WhatsappIcon src={whatsappImg} onClick={() =>
        window.open(
            'https://wa.me/917093320405?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
            '_blank'
        )
        } />


    </HeroSection>


    {/* 2nd section  */}
    <div className='ContentSection'>
        <ContentIntro>
            <XlText style={{}} >About Vaishnavi RMC</XlText>
            <SmallText>Ready Mix Concrete is an ideal solution for varied applications in residential constructions such as apartments, villas and independent houses. From building walls to foundations to sidewalks and driveways, RMC is high on quality and versatility and, more importantly, saves time. It also contributes to the desired sophistication and finishes that mark new-age constructions. Depending on your project’s scale and scope, Vaishnavi Concrete provides customization with the help of additives and colourants to meet specifi design requirements.</SmallText>
            <div style={{display:'flex', gap:'9rem'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>2K</TheameLargeText>
                    <ExtraSmallText>Happy Clients</ExtraSmallText>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>75</TheameLargeText>
                    <ExtraSmallText>Projects Completed</ExtraSmallText>
                </div>
            </div>

            <div style={{display:'flex', gap:'7rem', }}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>2 L</TheameLargeText>
                    <ExtraSmallText>Cubic MTRS Extract</ExtraSmallText>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <TheameLargeText>5 M</TheameLargeText>
                    <ExtraSmallText style={{textAlign:'center', lineHeight:'19px'}}>Soft Upcomming <br></br> Project</ExtraSmallText>
                </div>
            </div>
        </ContentIntro>
        
        <img src={RMCTrucks} className='IntoImg'  />
    </div>


    {/* 3rd Section */}
    <WhiteDiv>
    Our Locations
    </WhiteDiv>
    <div style={{padding:'2rem 0rem'}}>

        <div className='LocationContentSection' >
            <LocationCard>
                <XlText>Step 1</XlText>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-location-dot"></i>
                    <SmallText style={{fontWeight:'bold'}}>Survey No - 578/2 Rachaloor Village,
                    Thukkuguda, Kandukur, RR Dist, Pin: 501359</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-phone-volume"></i>
                    <SmallText style={{fontWeight:'bold'}}>+91 7396040405</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-regular fa-envelope"></i>
                    <SmallText style={{fontWeight:'bold'}}>vaishnavireadymix@gmail.com</SmallText>
                </div>
                <TheameBtn style={{width:'100%', borderRadius:"5px"}}>Get In Touch</TheameBtn>
                </LocationCard>
            {/* <img src={DarkMap} className='LocationMap'/> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.090099822109!2d78.5120649!3d17.1171038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbaf96ba86c579%3A0xe402197c339990c7!2sVaishnavi%20Constructions%20%2F%20Ready%20Mix!5e0!3m2!1sen!2sin!4v1730189388787!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15252.360399288436!2d78.5120649!3d17.1171038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbaf96ba86c579%3A0xe402197c339990c7!2sVaishnavi%20Constructions%20%2F%20Ready%20Mix!5e0!3m2!1sen!2sin!4v1730202873357!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className='LocationContentSection' >
            <LocationCard>
                <XlText>Step 2</XlText>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-location-dot"></i>
                    <SmallText style={{fontWeight:'bold'}}>Survey No - 585 Pati Ghanpur Village, Pathancheru Mandal, Sagareddy Dist. Pin: 502300</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-solid fa-phone-volume"></i>
                    <SmallText style={{fontWeight:'bold'}}>+91 9000368293</SmallText>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:"1rem"}}>
                    < i style={{color:'#9734A6', fontSize:'20px'}} class="fa-regular fa-envelope"></i>
                    <SmallText style={{fontWeight:'bold'}}>vaishnavireadymix@gmail.com</SmallText>
                </div>
                <TheameBtn style={{width:'100%', borderRadius:"5px"}}>Get In Touch</TheameBtn>
                </LocationCard>
            {/* <img src={LightMap} className='LocationMap'/> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2668345507986!2d78.21606747462926!3d17.494771299703824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbedb0b3753e91%3A0xff53bdd53a6d2a00!2sVaishnavi%20Redymix%20concrete!5e0!3m2!1sen!2sin!4v1730203091880!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    {/* Gallery Section */}
    <div style={{marginBottom:'4rem'}}>
    <WhiteDiv>
        Site Gallery
    </WhiteDiv>
    <GallerySection>
        <GalleryImg src={G1} />
        <GalleryImg src={G2} />
        <GalleryImg src={G3} />
    
    </GallerySection>
    </div>
    





    </>
  )
}

export default VaishnaviRMC