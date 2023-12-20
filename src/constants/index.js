import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    threejs,
    sanjay,
    aashutosh,
    neehar,
    udemy,
    pk,
    skolar,
    zsec,
    ai,
    kali,
    android,
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Andriod Developer",
      icon: mobile,
    },
    {
      title: "AI Developer",
      icon: backend,
    },
    {
      title: "Ethical Hacker",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AI",
      icon: ai,
    },
    {
      name: "Ethical Hacking",
      icon: kali,
    },
    {
      name: "Android Developer",
      icon: android,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#383E56",
      date: "Nov 2022 - Jul 2023",
      points: [
        "Mastered web development fundamentals through comprehensive Udemy courses.",
        "Acquired proficiency in front-end and back-end technologies.",
        "Developed responsive and dynamic websites to solidify practical skills.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Andriod Developer",
      company_name: "PK-Innovatives",
      icon: pk,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Jun 2023",
      points: [
        "Collaborated with PK Innovatives as an intern, contributing to Android app development.",
        "Acquired hands-on experience in building and optimizing Android applications.",
        "Worked on diverse projects, enhancing problem-solving and teamwork skills.",
        "Gained insights into the Android development lifecycle and best practices.",
      ],
    },
    {
      title: "AI Developer",
      company_name: "Skolar",
      icon: skolar,
      iconBg: "#383E56",
      date: "Jul 2023 - Oct 2023",
      points: [
        "Embarked on the journey into AI development as an intern at Skolar.",
        "Learned the basics of artificial intelligence and machine learning.",
        "Applied AI concepts to real-world scenarios, fostering practical knowledge.",
        "Contributed to projects, gaining valuable experience in the evolving AI landscape.",
      ],
    },
    {
      title: "Ethical Hacker",
      company_name: "Z-Security",
      icon: zsec,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Present",
      points: [
        "Currently engaged in comprehensive learning at Z-Security, specializing in ethical hacking.",
        "Exploring various aspects of cybersecurity, from penetration testing to vulnerability assessment.",
        "Developing skills to identify and mitigate security threats in diverse environments.",
        "Preparing for the dynamic challenges of cybersecurity with a strong ethical hacking foundation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mani proved me wrong.",
      name: "Sanjay Karthik",
      designation: "Student",
      company: "SRM Inst",
      image: sanjay,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mani does.",
      name: "Aashutosh Indhusekhar",
      designation: "Student",
      company: "SRM Inst",
      image: aashutosh,
    },
    {
      testimonial:
        "After Mani optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Neehar Krishna",
      designation: "Student",
      company: "SRM Inst",
      image: neehar,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, navLinks };  