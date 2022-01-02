import avatar from "./img/avatar.PNG";
import AmazonClone from "./img/amazone-clone.jpg";
import NetflixClone from "./img/netflix-clone.jpg";

export default {
    // NavBar
    name: "Youssef Moussafi",
    imgProfile: avatar,
    socialLinks:
        {
            twitter: "https://twitter.com/MoussafiY",
            facebook: "https://www.facebook.com/youssef.mussafi",
            instagram: "https://www.instagram.com/mussafi/",
            linkdin: "https://www.linkedin.com/in/youssef-moussafi/",
            github: "https://github.com/Youssef97dev",
        },

    // Banner
    bannerTagline: [
        //Line 1 For Banner
        "Hello , I'm Youssef Moussafi",
        //Line 2 For Banner
        "I'm a Front-End Developer,",
    ],

    // About
    about: {
        role: "Front-End Developer.",
        descriptionOne: "I'm a front-end developper and have a firm knowledge of HTML, CSS and JavaScript.",
        descriptionTwo: "On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills.",
        phone: "+212 6 33 73 78 51",
        city: "Casablanca",
        email: "youssefmoussafi97@gmail.com",
        freelance: "Available",
        location: "🇲🇦, Casablanca",
    },

    // Skills
    skills: {
        descriptionOne: "In addition to this, I have the ability to adapt to any type of team environment",
        descriptionTwo: "I also have the ability to work independently",
        technologiesLineOne: [
            {
                title: "HTML",
                progress: "100",
            },
            {
                title: "CSS",
                progress: "60",
            },
            {
                title: "Javascript",
                progress: "70",
            },
            {
                title: "ReactJS",
                progress: "80",
            },
        ],
        technologiesLineTwo: [
            {
                title: "NodeJS",
                progress: "40",
            },
            {
                title: "SQL Server",
                progress: "70",
            },
            {
                title: "Wordpress",
                progress: "60",
            },
            {
                title: "Photoshop",
                progress: "70",
            },
        ],
    },

    // Resume
    resume: {
        education: [
            {
                title: "Bachelor degree in Computer Methods Applied to Business Management",
                date: "2018 - 2019",
                description: "Faculty of Juridical, Economic and Social Sciences",
                city: "Mohammedia",
            },
            {
                title: "Diploma in IT Development ISGI/OFPPT",
                date: "2016 - 2017",
                description: "Specialized Institute of Management & IT",
                city: "Casablanca",
            },
            {
                title: "Certified by Microsoft: Programming in HTML5 With Javascript & CSS3",
                date: "2016 - 2017",
                description: "Specialized Institute of Management & IT",
                city: "Casablanca",
            },
        ],
        
        experience: [
            {
                title: ".Net Developer",
                date: "2020 - Present",
                description: "Eam Service",
                city: "Casablanca",
            },
            {
                title: "Wordpress Developer & Computer Teacher",
                date: "2019 - 2020",
                description: "School Group Riad Les Nobles",
                city: "Casablanca",
            },
            {
                title: "Internship as a Wordpress Developer",
                date: "2018 - 2019",
                description: "Carresa Group",
                city: "Casablanca",
            },
            {
                title: "ASP.Net MVC Developer",
                date: "2017 - 2018",
                description: "White House For Consulting and Engineering",
                city: "Casablanca",
            },
        ]
    },

    // Projects
    projects: [
        {
            title: "Amazone Clone",
            image: AmazonClone,
            link: "https://clone-79a07.web.app/",
            linkGithub: "https://github.com/Youssef97dev/Amazon-Clone",
        },
        {
            title: "Netflix Clone",
            image: NetflixClone,
            link: "https://netflix-clone-ea395.web.app/",
            linkGithub: "https://github.com/Youssef97dev/netflix-clone",
        },
    ],
}