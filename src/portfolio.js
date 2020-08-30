﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Parth Doshi",
  title: "Hey, I'm Parth!",
  subTitle: emoji("A Computer Engineering Fresher with a Passion for Programming, a Knack for Problem Solving and an Aptitude for Learning, I am curious about various technologies and driven to explore them."),
  resumeLink: "https://drive.google.com/file/d/1zZvHhbd3Xc0jNuMAhUSb4iQBBUaOqIlv/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/parthketandoshi",
  gitlab: "https://gitlab.com/parthdoshi97",
  gmail: "parthdoshi97@gmail.com",
  linkedin: "https://www.linkedin.com/in/parthketandoshi/",
  behance: "https://www.behance.net/parthketandoshi",
  twitter: "https://twitter.com/ParthDoshi97",
  facebook: "https://www.facebook.com/parthdoshi97",
  instagram: "https://www.instagram.com/parth_k_d/"
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji("🔸 Trainings:"),
    "Python App Development",
    "Android App Development",
    "iOS App Development"
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-google-play"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-app-store"
    },
    {
      skillName: "PWA",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AppleScript",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Version Control",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Graphics",
      fontAwesomeClassname: "fas fa-bezier-curve"
    },
    {
      skillName: "Internet of Things",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "Raspberry Pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "AR/VR",
      fontAwesomeClassname: "fas fa-vr-cardboard"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend/Design",  //Insert stack or technology you have experience in
//       progressPercentage: "90%"  //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ]
// };


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Mentor",  
      company: "CampK12",
      companylogo: require("./assets/images/campkt.png"),
      date: "April 2020 – May 2020",
      desc: "Worked as an instructor at CampK12 where I taught Android App Development on MIT App Inventor Platform using Scratch, 3D coding & VR using HatchXR platform and HTML, CSS and JavaScript using CodePen.",
    },
    {
      role: "Software Development Intern",   
      company: "FUBE Technology",
      companylogo: require("./assets/images/fube.jpeg"),
      date: "January 2019 – April 2019",
      desc: "Worked on Yodais and Jom Channel products by Fube Technology, Malaysia for the Front-end of a Bootstrap based Website"
    },
    {
      role: "Android & Python App Dev Intern",  
      company: "Trivia Software",
      companylogo: require("./assets/images/trivia.png"),
      date: "July 2018 – August 2018",
      desc: "Developed Android and Python Desktop Application during this internship and gained a lot of knowledge related to these technologies"
    },
    {
      role: "Wordpress Admin & SEO Manager Intern",  
      company: "Toppr",
      companylogo: require("./assets/images/toppr.png"),
      date: "February 2018 – June 2018",
      desc: "Joined Toppr as a Content Development Intern and worked on technical aspects of the project like Wordpress Administration, SEO, MathJAX and also managing other Interns & Freelancers",
    },
    {
      role: "Graphic Designing Intern",   
      company: "IdealVillage",
      companylogo: require("./assets/images/idealvillage.png"),
      date: "February 2018 – March 2018",
      desc: "Designed promotional material like posters, banners and videos for IdealVillage, an NGO incubatee of CCBUL as part of an unpaid and work from home internship"
    },
    {
      role: "General Secretary",   
      company: "ISTE Students' Chapter",
      companylogo: require("./assets/images/iste.jpg"),
      date: "May 2017 – April 2018",
      desc: "Organised and Volunteered in various Technical and Non-technical events, workshops, codelabs and an Industrial Visit and headed a council that comprised of various teams"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ParthKetanDoshi", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Certifications",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/kaggle.png"),
      link: "https://drive.google.com/drive/folders/1oWUVxi1P8S8ElNQmSN9Xka46GRAXDj3f?usp=sharing"
    },
    {
      image: require("./assets/images/coursera.png"),
      link: "https://drive.google.com/drive/folders/1i2ML5otr9yD5wwPzyGHMfO29A8hOX6t0?usp=sharing"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: "Projects",
  subtitle: "",

  achivementsCards: [
    {
      title: "Bridge Health Monitoring System",
      subtitle: "For our Undergraduate Capstone Project, we created a comprehensive IoT based System for monitoring the structural health of bridges. The system comprises of four modules: Sensor Network Module, Image Processing Module, Audio Processing Module and an Output PWA.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "DEV Post", url: "https://dev.to/parthketandoshi/bridge-health-monitoring-system-using-iot-3ppc" },
        { name: "Output PWA on GitHub", url: "https://github.com/Bridge-Health-Monitoring-System/Output-PWA" }
      ]
    },
    {
      title: "Google Compute Engine FAQ Chatbot",
      subtitle: "We have created a Conversational Chatbot which will resolve FAQs related to the Google Compute Engine using Dialogflow. We have also created a Single Page Website that will be used to hold the Conversational Chatbot and hosted the Website using Google Firebase.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Project Webpage", url: "https://ccl-mp.web.app" },
        // { name: "Tutorial for Chatbot", url: "https://youtu.be/aahtxFGiSko" }
      ]
    },
    {
      title: "Gujarati & Marathi NLP Projects",
      subtitle: "iNLTK (Natural Language Toolkit for Indic Languages) Python Package for implementing NLP on Indian Languages. We implemented Text Classification Python Script for Gujarati and Marathi Languages using Google Colab using the corresponding dataset on Kaggle.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "iNLTK on GitHub", url: "https://github.com/goru001/inltk" },
        { name: "Gujarati Colab File", url: "https://colab.research.google.com/drive/12vVV9AOyRRPf_BkFGj_e27cdaUXHKJEO?usp=sharing" },
        { name: "Marathi Colab File", url: "https://colab.research.google.com/drive/1kfykfypgbh8opnE7AlyMytWmaNqjmgsE?usp=sharing" }
      ]
    },
    {
      title: "Yodais & Jom Channel",
      subtitle: "For a Freelance Project, we created Yodais which is a Platform for Streaming with aspects of a Social Networking Website. We made use of Visual Studio Code, GitLab, HTML, CSS, Bootstrap, Laravel and MySQL. I have worked on the Front-end of the Project.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Yodais on GitLab", url: "https://gitlab.com/vivekbgawande/yodais" },
        { name: "Jom Channel on GitLab", url: "https://gitlab.com/vivekbgawande/jom-channel" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Miscellaneous",
  subtitle: "",

  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Organizing Head of Industrial Visit and Outbound Activity",
      // description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Core Member of TAPtheTECH (NGO, YouTube Channel & Coursera Learning Hub)",
      // description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Participated in Hacktoberfest",
      // description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Participated in Git Remote Graduation organised by GitHub and DEV Community",
      // description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Cracked TCS CodeVita",
      // description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Cracked Infosys HackWithInfy",
      // description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Participated in Google Hash Code",
      // description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Part of LinkedIn Campus Editor Community",
      // description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: "Contact",
  subtitle: "You can reach out to me at ",
  number: "+918169664802",
  email_address: "Parthdoshi97@GMail.com"
};

//Twitter Section

// const twitterDetails = {

//   userName : "twitter"//Replace "twitter" with your twitter username without @
  
// };
export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, bigProjects, blogSection, achievementSection, contactInfo};
