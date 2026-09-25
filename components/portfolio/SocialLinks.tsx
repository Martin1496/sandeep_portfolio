import {ArrowUpRight, CodeXml, Camera, BriefcaseBusiness, Mail, MessageCircle} from "lucide-react";

const links = [
  {name:"LinkedIn",detail:"Experience & professional profile",href:"https://www.linkedin.com/in/sandeep-dusadh-11089a1b6/",icon:BriefcaseBusiness},
  {name:"GitHub",detail:"Code and repositories",href:"https://github.com/Martin1496",icon:CodeXml},
  {name:"Instagram",detail:"Connect on Instagram",href:"https://www.instagram.com/_imsandeep14_/",icon:Camera},
  {name:"WhatsApp",detail:"Message me about a project",href:"https://wa.me/918080003936",icon:MessageCircle},
  {name:"Email",detail:"sandeepdusadh07@gmail.com",href:"mailto:sandeepdusadh07@gmail.com",icon:Mail},
];

export default function SocialLinks({compact=false}:{compact?:boolean}) {
  return <div className={compact?"social-links compact":"social-links"}>{links.map(({name,detail,href,icon:Icon})=><a key={name} href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noopener noreferrer":undefined} aria-label={`Connect with Sandeep on ${name}`}><span className="social-icon"><Icon size={20}/></span><span className="social-copy"><strong>{name}</strong>{!compact&&<small>{detail}</small>}</span><ArrowUpRight className="social-arrow" size={17}/></a>)}</div>
}
