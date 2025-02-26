import img from "../assets/icons/agric.svg";
// import site from '../../public/images/site.png'
// import extension from '../../public/images/extention.jpg'
// import web from '../../public/images/app.jpg'

export const Features = [
  {
    id: 1,
    company: "whering Chrome Extension",
    role: "Software Developer",
    description:
      "Designed and developed the Whering 2.0 Chrome extension from scratch, overcoming challenges related to authentication, social login, CORS issues, script injection, and compatibility with web pages",
    stack: ["React", "Styled Component", "TypeScript"],
    img: "/images/extention.jpg"
  },
  {
    id: 2,
    company: "whering web application",
    role: "Software Developer",
    description:
      "Developed the web app using Next.js, providing users with an intuitive platform for easy wardrobe management and adding social features like viewing and following friends’ wardrobes",
    stack: ["jest", "Next.js", "Redux", "Styled Component", "TypeScript"],
    img: "/images/app.jpg"
  },
  {
    id: 3,
    company: "Whering Website",
    role: "Software Developer",
    description:
      "Regularly update the website to implement best practices in performance optimization and accessibility, boosting SEO rankings and organic visibility, increasing downloads to 5M+ across platforms",
    stack: ["React", "Tailwind", "Angular"],
    img: "/images/site.png"
  },

  {
    id: 4,
    company: "Kudi Marketplace",
    role: "Frontend Developer/Engineer",
    description:
      "With Kudi Marketplace you can accept payments, send payouts, onboard customers and more offline from any where in nigeria .",
    stack: ["React", "Tailwind", "Javascript"],
    img: "/images/marketplace-kudi.jpeg"
  },
  {
    id: 5,
    company: "Getripay",
    role: "Frontend Developer",
    description:
      "Led the implementation of key features such as fund transfers, bill payments, savings, virtual cards, loans, QR payments, and investments, ensuring high-quality, user-friendly experiences",
    stack: ["React", "Tailwind", "Angular", "TypeScript"],
    img: img
  }
];

export const Experiences = [
  {
    id: 1,
    company: "Whering",
    role: "Software Developer",
    duration: "Aug 2022 - Present",
    description: [
      "Developed the web app using Next.js, providing users with an intuitive platform for easy wardrobe management and adding social features like viewing and following friends’ wardrobes",
      "Designed and developed the Whering 2.0 Chrome extension from scratch, overcoming challenges related to authentication, social login, CORS issues, script injection, and compatibility with web pages",
      "Regularly update the website to implement best practices in performance optimization and accessibility, boosting SEO rankings and organic visibility, increasing downloads to 5M+ across platforms",
      "Initiated the creation of a component library using Storybook, ensuring consistent UI components across the app and promoting reusability for future development",
      "Led the effort to localize the Whering web pages, ensuring that the platform is accessible to a global audience and enhancing user experience across different languages and regions"
    ]
  },
  {
    id: 2,
    company: "TRAKTION (Acquired by IDX)",
    role: "Software Developer",
    duration: "Nov 2021 - Jun 2022",
    description: [
      "Achieved 100% test coverage for components using Jest and React Testing Library",
      "Ensured high-quality code through rigorous testing practices, enhancing application reliability",
      "Utilized JavaScript, React, and Redux to develop dynamic, responsive, and browser-compatible pages"
    ]
  },

  {
    id: 3,
    company: "Nomba (Formerly Kudi Inc)",
    role: "Software Developer",
    duration: "May 2021 - Nov 2021",
    description: [
      "Enhanced customer satisfaction by 30% and reduced reported bug issues by 15% by improving the Kudi Marketplace, incorporating new user-focused designs and features",
      "Utilized JavaScript, React, and Redux to design and build numerous dynamic, responsive, and browser-compatible pages; improved application performance, and increased conversion rates by 20%",
      "Reduced user-reported bugs by building comprehensive test coverage for components using React Testing Library, ensuring higher code reliability and stability"
    ]
  },

  {
    id: 4,
    company: "Duro Networks",
    role: "Frontend Engineer",
    duration: "july 2020 - june 2021",
    description: [
      "DuroNetworks is a financial technology organization that provides fast and convenient transaction. Worked on the following products alongside team members from scratch. ",
      "Collaborated with an agile team of 6 members, translating UI/UX design wireframes into high-quality React code, resulting in responsive, visually appealing web applications",
      "Spearheaded frontend team in the end-to-end product development of 3 financial technology solutions: GETRIPAY, GETRIVEST, and GETRISHOP, serving users across Africa",
      "Led the implementation of key features such as fund transfers, bill payments, savings, virtual cards, loans, QR payments, and investments, ensuring high-quality, user-friendly experiences"
    ]
  }
];
