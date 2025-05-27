import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import APP_IMAGES from "./images";

export const INFORMATION = {

    PROFILE_PICTURE: '/maryam.png',
    ProfilePictureBlurred: "/maryam-reduced.jpg",

    NAME: "MARYAM HAIDER",
    EMAIL: "maryamhaider34@gmail.com ",
    PHONE: "+92 335-2409878",
    BRIEF: `A passionate Graphic Designer and 2D Animator with a
strong background in media studies. I specialize in
creating visually captivating designs and animations that
effectively communicate messages and enhance brand
identities.`,
    RESUME: "/Maryam Haider 2D Animator and Graphic Designer Resume .pdf",

    LOCAL_TIME_ZONE: "Asia/Karachi",
    CITY_PICTURE: '/city.jpg',
    CITY: "Karachi",
    COUNTRY: "Pakistan",

    EXPIRIENCE: 4,
    FREELANCE: 2,

    LINKS: {
        BEHANCE: "https://www.behance.net/maryamhaider2",
        LINKEDIN: "https://www.linkedin.com/in/maryammhaider/",
        CONTACT_LINK: "mailto:maryamhaider34@gmail.com",
    },
    SKILLS: {
        'Adobe After Effects': SiAdobeaftereffects,
        'Adobe Photoshop': SiAdobephotoshop,
        'Adobe Premiere Pro': SiAdobepremierepro,
        'Adobe Illustrator': SiAdobeillustrator,
    },
    PROJECTS: [
        {
            title: "ARTT Learning Management System Web App",
            category: "Full Stack Development",
            date: "Dec 2020",
            thumbnail: APP_IMAGES.ArttLms,
            logo: APP_IMAGES.ArttLogo,
        }
    ],
    REVIEWS: [
        {
            name: "Muhammad Saqlain",
            text: ''
        }
    ],
    EXPIRIENCE_LIST: [
        {
            designation: "2D Animator & Graphic Designer ",
            company: "Ogilvy Pakistan",
            link: "https://ogilvy.com",
            timeline: "Jan 2024 - Present",
            text: `Working as a digital and conventional designer and animator at Ogilvy & Mather. 
Develop presentation approaches style & design to the team.
Develop innovative approaches for 2D animations and main Key Visuals.
Lead a team of designers for a brand to exceed client goals and expectations.
Creating research based designs for various campaigns`,
            logo: '/images/companies/ogilvy-logo.png',
            logoStyles: {
                width: "100px",
                filter: "brightness(0) invert(1);"
            },
            onHoverTransform: "translate(-62%, -59%)"
        },
        {
            designation: "Motion Artist & Graphic Designer",
            company: "PTAX Solutions",
            link: "https://koderlabs.com",
            timeline: "Feb 2023 - Dec 2023",
            text: `Created engaging social media posts for various digital platforms.
Designed and animated eye-catching GIFs to enhance visual communication.
Produced animated introductory & explainer videos to simplify complex concepts.
Developed innovative approaches for 2D animations and contributed to key visual designs.`,
            logo: "/images/companies/ptax-logo.png",
            logoStyles: {
                width: "100px",
                filter: "brightness(0) invert(1);"
            },
            onHoverTransform: "translate(-40%, -190%)"
        },
        {
            designation: "Graphic Designer",
            company: "ARTT Business School",
            link: "https://koderlabs.com",
            timeline: "May 2021 - Dec 2022",
            text: `Crafted compelling social media posts across multiple digital platforms.
Designed and animated vibrant class schedules to boost visual appeal.`,
            logo: "/images/companies/artt-logo.png",
            logoStyles: {
                filter: "invert(1) grayscale(1)",
                width: "100px"
            },
            onHoverTransform: "translate(-62%, -70%)"
        },
    ],
    CARRIER_START_DATE: "2021-05-21",
}