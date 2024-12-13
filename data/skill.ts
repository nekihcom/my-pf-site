type Skill = {
  name: string;
  image?: string;
  level: number;
}

export const skills:{[category:string]:{[skillName:string]:Skill}} = {
  frontend: {
    html: {
      name: "HTML",
      image: "/skill/html.svg",
      level: 3
    }, 
    css: {
      name: "CSS",
      image: "/skill/css.svg",
      level: 3
    },  
    javascript: {
      name: "Javascript",
      image: "/skill/js.png",
      level: 3
    }, 
    jquery: {
      name: "jQuery",
      image: "",
      level: 3
    }, 
    react: {
      name: "React",
      image: "/skill/react.svg",
      level: 2
    }, 
    nextjs: {
      name: "Next.js",
      image: "/skill/nextjs.svg",
      level: 2
    },
    typescript: {
      name: "TypeScript",
      image: "/skill/ts.svg",
      level: 2
    }
  },
  backend: {
    php: {
      name: "PHP",
      image: "/skill/php.svg",
      level: 3
    },
    python: {
      name: "Python",
      image: "/skill/python.svg",
      level: 3
    },
    java: {
      name: "Java",
      image: "",
      level: 3
    },
    cpp: {
      name: "C++",
      image: "",
      level: 1
    },
    ruby: {
      name: "Ruby",
      image: "",
      level: 1
    },
    rails: {
      name: "Ruby on Rails",
      image: "",
      level: 1
    },
  },
  cms: {
    drupal: {
      name: "Drupal",
      image: "",
      level: 3
    },
    wordpress: {
      name: "Wordpress",
      image: "/icon/wordpress.png",
      level: 3
    },
  },
  middleware: {
    sql: {
      name: "SQL",
      image: "",
      level: 3
    },
    mysql: {
      name: "MySQL",
      image: "",
      level: 3
    },
    postgresql: {
      name: "PostgreSQL",
      image: "",
      level: 3
    },
    apache: {
      name: "Apache",
      image: "",
      level: 3
    },
  },
  infrastructure: {
    cloudflare: {
      name: "CloudFlare",
      image: "",
      level: 3
    },
    aws: {
      name: "AWS",
      image: "",
      level: 3
    },
    vercel: {
      name: "Vercel",
      image: "",
      level: 2
    },
    netlify: {
      name: "Netlify",
      image: "",
      level: 1
    },
    firebase: {
      name: "Firebase",
      image: "",
      level: 1
    },
  },
  versionmanagement: {
    git: {
      name: "Git",
      image: "",
      level: 3
    },
    github: {
      name: "GitHub",
      image: "",
      level: 3
    },
    svn: {
      name: "SVN",
      image: "",
      level: 3
    },
  }
};