const users = [
  {
    id: 1,
    name: "John Doe",
    login: "test",
    password: "123",
    postList: [
      {
        id: 101,
        title: "Welcome to the Admin Panel",
        description:
          "This post explains how to use the admin panel effectively.",
      },
      {
        id: 102,
        title: "Managing Users",
        description:
          "A guide on how to add, remove, and edit users in the system.",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    login: "jane.smith",
    password: "mypassword",
    postList: [
      {
        id: 201,
        title: "Understanding React Components",
        description: "A deep dive into how React components work and interact.",
      },
      {
        id: 202,
        title: "React State Management",
        description:
          "An overview of managing state in React using hooks and context.",
      },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    login: "alice.johnson",
    password: "alice123",
    postList: [
      {
        id: 301,
        title: "Intro to JavaScript",
        description:
          "A beginner-friendly introduction to JavaScript and its core concepts.",
      },
      {
        id: 302,
        title: "JavaScript Promises Explained",
        description:
          "A post that simplifies the concept of promises and async/await.",
      },
    ],
  },
  {
    id: 4,
    name: "Robert Brown",
    login: "robert.brown",
    password: "robertpass",
    postList: [
      {
        id: 401,
        title: "CSS Grid vs Flexbox",
        description:
          "A comparison between CSS Grid and Flexbox for layout design.",
      },
      {
        id: 402,
        title: "Responsive Web Design Tips",
        description:
          "Tips and tricks for creating responsive and adaptive web layouts.",
      },
    ],
  },
  {
    id: 5,
    name: "Emily Davis",
    login: "emily.davis",
    password: "emilysecure",
    postList: [
      {
        id: 501,
        title: "Getting Started with Node.js",
        description:
          "A beginner’s guide to building back-end services with Node.js.",
      },
      {
        id: 502,
        title: "REST API Design Best Practices",
        description: "Learn the best practices for designing RESTful APIs.",
      },
    ],
  },
];

export default users;
