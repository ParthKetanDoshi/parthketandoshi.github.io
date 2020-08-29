
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
  // skills: [
  //   emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
  //   emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  //   emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  // ],

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
  title: "Achievements",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/campkt.png"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/campkt.png"),
      link: "http://nextu.se/"
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
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "DEV Post", url: "https://dev.to/parthketandoshi/bridge-health-monitoring-system-using-iot-3ppc" },
        { name: "Output PWA on GitHub", url: "https://github.com/Bridge-Health-Monitoring-System/Output-PWA" }
      ]
    },
    {
      title: "Google Compute Engine Chatbot",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Project Webpage", url: "https://ccl-mp.web.app" },
        // { name: "Tutorial for Chatbot", url: "https://youtu.be/aahtxFGiSko" }
      ]
    },
    {
      title: "Gujarati & Marathi NLP Projects",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "iNLTK on GitHub", url: "https://github.com/goru001/inltk" },
        { name: "Gujarati Colab File", url: "https://colab.research.google.com/drive/12vVV9AOyRRPf_BkFGj_e27cdaUXHKJEO?usp=sharing" },
        { name: "Marathi Colab File", url: "https://colab.research.google.com/drive/1kfykfypgbh8opnE7AlyMytWmaNqjmgsE?usp=sharing" }
      ]
    },
    {
      title: "Yodais & Jom Channel",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        // { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    }
  ]
};

// Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

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
  title: "Contact Me",
  subtitle: "",
  number: "+918169664802",
  email_address: "parthdoshi97@gmail.com"
};

//Twitter Section

// const twitterDetails = {

//   userName : "twitter"//Replace "twitter" with your twitter username without @
  
// };
export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, bigProjects, achievementSection, contactInfo};
