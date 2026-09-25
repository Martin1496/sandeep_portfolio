import type {Metadata} from "next";
import SiteShell from "@/components/portfolio/SiteShell";
import {SITE_URL} from "@/lib/site";
import "./globals.css";
export const metadata:Metadata={
 metadataBase:new URL(SITE_URL),
 title:{default:"Sandeep Dusadh | Full-Stack Developer",template:"%s | Sandeep Dusadh"},
 description:"Sandeep Dusadh is a full-stack developer in Mumbai building responsive web products, Python FastAPI services, and practical business software.",
 alternates:{canonical:"/"},
 openGraph:{type:"website",locale:"en_IN",url:SITE_URL,siteName:"Sandeep Dusadh",title:"Sandeep Dusadh | Full-Stack Developer",description:"Responsive web products, Python APIs, and practical business software.",images:[{url:"/hero-installation.webp",width:1672,height:939,alt:"Abstract digital installation in blue light"}]},
 twitter:{card:"summary_large_image",title:"Sandeep Dusadh | Full-Stack Developer",description:"Responsive web products, Python APIs, and practical business software.",images:["/hero-installation.webp"]},
 icons:{icon:"/favicon.svg"},robots:{index:true,follow:true}
};
const structuredData={"@context":"https://schema.org","@graph":[{"@type":"Person","@id":`${SITE_URL}/#person`,name:"Sandeep Dusadh",jobTitle:"Full-Stack Developer",url:SITE_URL,email:"mailto:sandeepdusadh07@gmail.com",address:{"@type":"PostalAddress",addressLocality:"Mumbai",addressCountry:"IN"},sameAs:["https://www.linkedin.com/in/sandeep-dusadh-11089a1b6/","https://github.com/Martin1496","https://www.instagram.com/_imsandeep14_/"],knowsAbout:["Python","FastAPI","React","Vue","Nuxt","Web development","Business software"]},{"@type":"WebSite","@id":`${SITE_URL}/#website`,url:SITE_URL,name:"Sandeep Dusadh | Full-Stack Developer",description:"Portfolio and services by Sandeep Dusadh",publisher:{"@id":`${SITE_URL}/#person`}}]};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/><SiteShell>{children}</SiteShell></body></html>}
