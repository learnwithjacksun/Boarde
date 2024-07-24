export const socials = [
  {
    icon: "fa-facebook-f",
    path: "https://www.facebook.com/sharer/sharer.php?u=https://boarde.netlify.app",
  },
  {
    icon: "fa-whatsapp",
    path: "https://api.whatsapp.com/send?text=Check%20out%20Boarde%20-%20The%20simplest%20Todolist%20you%20will%20ever%20need!%20https://boarde.netlify.app",
  },
  {
    icon: "fa-x-twitter",
    path: "https://twitter.com/intent/tweet?text=Check%20out%20Boarde%20-%20The%20simplest%20Todolist%20you'll%20ever%20need!%20https://boarde.netlify.app/",
  },
];



export const data = [
  {
    id: crypto.randomUUID(),
    title: "Groceries",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Milk",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Bread",
        completed: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Cabbage",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Salt",
        completed: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Daily Tasks",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Run",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Laundry",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Feed the dog",
        completed: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Code",
        completed: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Call my babe",
        completed: true,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "School",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Solve Math",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Practice Spanish",
        completed: false,
      },
    ],
  },
];
