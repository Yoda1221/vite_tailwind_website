import { 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  facebook, 
  instagram, 
  linkedin, 
  people01, 
  people02, 
  people03, 
  twitter, 
  send, 
  shield, 
  star  } from "../assets";

export const navLinks = [
  { id: "home",     title: "Home" },
  { id: "features", title: "Features" },
  { id: "product",  title: "Product" },
  { id: "clients",  title: "Clients" }
]

export const features = [
  { id: "1", icon: star, title: "Rewards",
    content: "The best credit cards offer some tantalizing combinations of promotions and prizes"
  },
  { id: "2", icon: shield, title: "100% Secured",
    content: "We take proactive steps make sure your information and transactions are secure."
  },
  { id: "3", icon: send, title: "Balance Transfer",
    content: "A balance transfer credit card can save you a lot of money in interest charges."
  }
]

export const feedback = [
  {
    id: "1",
    img: people01,
    name: "Herman Jensen",
    title: "Founder & Leader",
    content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
  },
  {
    id: "2",
    img: people02,
    name: "Steve Mark",
    title: "Founder & Leader",
    content: "Money makes your life easier. If you're lucky to have it, you're lucky."
  },
  {
    id: "3",
    img: people03,
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    content: "It is usually people in the money business, finance, and international trade that are really rich."
  }
]

export const stats = [
  { id: "stats-1", value: "3800+",  title: "User Active" },
  { id: "stats-2", value: "230+",   title: "Trusted by Company" },
  { id: "stats-3", value: "$230M+", title: "Transaction" }
]

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { name: "Content",      link: "https://www.hoobank.com/content/" },
      { name: "How it Works", link: "https://www.hoobank.com/how-it-works/" },
      { name: "Create",       link: "https://www.hoobank.com/create/" },
      { name: "Explore",      link: "https://www.hoobank.com/explore/" },
      { name: "Terms & Services", link: "https://www.hoobank.com/terms-and-services/" }
    ]
  },
  {
    title: "Community",
    links: [
      { name: "Help Center",  link: "https://www.hoobank.com/help-center/"},
      { name: "Partners",     link: "https://www.hoobank.com/partners/"},
      { name: "Suggestions",  link: "https://www.hoobank.com/suggestions/"},
      { name: "Blog",         link: "https://www.hoobank.com/blog/"},
      { name: "Newsletters", link: "https://www.hoobank.com/newsletters/"}
    ]
  },
  {
    title: "Partners",
    links: [
      { name: "Our Partner", link: "https://www.hoobank.com/our-partner/" },
      { name: "Become a Partner", link: "https://www.hoobank.com/become-a-partner/" }
    ]
  }
]

export const socialMedia = [
  /* { id: "1", icon: instagram,  link: "https://www.instagram.com/" }, */
  { id: "2", icon: facebook,   link: "https://www.facebook.com/" },
  { id: "3", icon: linkedin,   link: "https://www.linkedin.com/" },
  /* { id: "4", icon: twitter,    link: "https://www.twitter.com/" } */
]

export const clients = [
  { id: "1", logo: airbnb },
  { id: "2", logo: binance },
  { id: "3", logo: coinbase },
  { id: "4", logo: dropbox }
]
