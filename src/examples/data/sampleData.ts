const generateRandomEntries = (numEntries: number) => {
  const titles = [
    'How To Get Value From Wireframes',
    'Understanding React Hooks',
    'A Guide to Node.js',
    'Mastering TypeScript',
    'Building Scalable Applications',
    'Introduction to GraphQL',
    'Advanced CSS Techniques',
    'JavaScript Best Practices',
    'Optimizing Web Performance',
    'Getting Started with Redux',
    'Exploring Next.js',
    'Serverless Architecture',
    'Progressive Web Apps',
    'Understanding REST APIs',
    'Building with Webpack',
    'Introduction to Docker',
    'Microservices with Kubernetes',
    'Learning Python for Web Development',
    'Building Mobile Apps with React Native',
    'Understanding Machine Learning',
    'Data Visualization with D3.js',
    'Building Real-time Applications',
    'Introduction to DevOps',
    'Testing with Jest',
    'Deploying Applications with AWS',
  ]

  const authors = [
    'Jonathan Mangrove',
    'Alice Johnson',
    'Robert Brown',
    'Emily White',
    'Michael Green',
    'Sarah Black',
    'David Blue',
    'Laura Red',
    'James Yellow',
    'Linda Purple',
    'Daniel Orange',
    'Jessica Pink',
    'Thomas Gray',
    'Patricia Cyan',
    'Christopher Magenta',
    'Barbara Lime',
    'Matthew Indigo',
    'Susan Violet',
    'Anthony Teal',
    'Karen Olive',
    'Mark Maroon',
    'Nancy Navy',
    'Steven Aqua',
    'Betty Coral',
    'Paul Amber',
  ]

  return Array.from({ length: numEntries }, (_, index) => ({
    id: (index + 1).toString(),
    // url: `posts/${index + 1}`,
    title: titles[Math.floor(Math.random() * titles.length)],
    author: authors[Math.floor(Math.random() * authors.length)],
  }))
}

export const items = generateRandomEntries(5)
