import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Jhantu Samui",
        position : "Full Stack Developer At grew with US",
        img_url : "https://res.cloudinary.com/dnobahnvd/image/upload/v1680705548/WhatsApp_Image_2023-04-05_at_20.08.33_yxpxqi.jpg",
        stars : 3,
        disc : `As a developer, I have had the pleasure of working with Acoustemer on a recent project, and I must say that I am thoroughly impressed with their services. From start to finish, the team at Acoustemer demonstrated a high level of professionalism, expertise, and commitment to delivering high-quality solutions.

        One of the things that stood out to me about Acoustemer was their attention to detail. They took the time to really understand our project goals and requirements, and then worked tirelessly to create a solution that met those needs. Their technical expertise was evident throughout the project, and they were always quick to address any issues that arose.
        
        Another thing that impressed me was their communication. Throughout the project, Acoustemer kept us informed and updated on their progress, and were always available to answer any questions we had. They were also open to feedback and suggestions, which made the collaboration process much smoother.
        
        Overall, I would highly recommend Acoustemer to any developer looking for a reliable and experienced partner. Their commitment to quality, technical expertise, and excellent communication make them an ideal choice for any project..`
    },
    {
        name : "Ankit Mahato",
        position : "CEO of Grew With Us",
        img_url : "https://res.cloudinary.com/dnobahnvd/image/upload/v1680705301/IMG_20230327_002820_507_jwobhs.jpg",
        stars : 4,
        disc : `As a CEO, I am always on the lookout for tools and applications that can help me streamline my workflow and improve productivity. I recently came across an application that has truly impressed me, and I wanted to share my thoughts on it.

        The application in question is a project management tool that has really transformed the way my team and I work together. From the moment I started using it, I was struck by its intuitive interface and user-friendly design. It was easy to get started, and I was able to quickly create and assign tasks to my team members.

        Overall, I have been extremely pleased with this application, and I would highly recommend it to other CEOs and business leaders. 
        Another thing that impressed me about this application was its robust reporting capabilities. I was able to generate detailed reports on project progress, team performance, and other key metrics with just a few clicks. This has been incredibly helpful in keeping everyone on the same page and ensuring that we stay on track Overall, I have been extremely pleased with this application, and I would highly recommend it to other CEOs and business leaders. Its user-friendly interface, customization options, and reporting capabilities have truly transformed the way my team works together, and I can't imagine going back to our old way of doing things..
        `
    },
    {
        name : "Annesha Nashkar",
        position : "Software Enginner At Grew  With US",
        img_url : "https://res.cloudinary.com/dnobahnvd/image/upload/v1680705377/IMG_20230318_200907_297_x55rju.jpg",
        stars : 5,
        disc : `As a member of a busy and dynamic team, I am always looking for tools and applications that can help me stay organized, collaborate effectively with my colleagues, and keep track of my tasks and responsibilities. Recently, I had the opportunity to work with an application that has really impressed me, and I wanted to share my thoughts on it.

        The application in question is a project management tool that has really transformed the way our team works together. From the moment I started using it, I was struck by its intuitive interface and user-friendly design. It was easy to create tasks, assign them to team members, and keep track of deadlines and priorities.
        
        One of the things that sets this application apart from others is its communication features. I was able to communicate with my colleagues in real-time, share files and documents, and collaborate on tasks seamlessly. This has been incredibly helpful in keeping everyone on the same page and ensuring that we are all working towards the same goals.
        
       
        
        Overall, I have been extremely pleased with this application, and I would highly recommend it to other team members looking for a powerful and intuitive project management tool. Its communication features, reporting capabilities, and user-friendly interface have truly transformed the way we work together, and I can't imagine going back to our old way of doing things.`
    },
    {
        name : "Friends Forever",
        position : "Team Of Grew  With US",
        img_url : "https://res.cloudinary.com/dnobahnvd/image/upload/v1680705421/1000055638_rh6odn.jpg",
        stars : 5,
        disc : `As a member of a busy and dynamic team, I am always looking for tools and applications that can help me stay organized, collaborate effectively with my colleagues, and keep track of my tasks and responsibilities. Recently, I had the opportunity to work with an application that has really impressed me, and I wanted to share my thoughts on it.

        The application in question is a project management tool that has really transformed the way our team works together. From the moment I started using it, I was struck by its intuitive interface and user-friendly design. It was easy to create tasks, assign them to team members, and keep track of deadlines and priorities.
        
        One of the things that sets this application apart from others is its communication features. I was able to communicate with my colleagues in real-time, share files and documents, and collaborate on tasks seamlessly. This has been incredibly helpful in keeping everyone on the same page and ensuring that we are all working towards the same goals.
        
       
        
        Overall, I have been extremely pleased with this application, and I would highly recommend it to other team members looking for a powerful and intuitive project management tool. Its communication features, reporting capabilities, and user-friendly interface have truly transformed the way we work together, and I can't imagine going back to our old way of doing things.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Reviews</span>
            <h1>what clients say</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`