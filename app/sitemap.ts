import type {MetadataRoute} from "next";
import {projects} from "@/lib/portfolio";
import {SITE_URL} from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const main=["/","/projects","/services","/tools","/about","/contact"];return [...main.map(path=>({url:`${SITE_URL}${path}`,changeFrequency:"monthly" as const,priority:path==="/"?1:.7})),...projects.map(project=>({url:`${SITE_URL}/projects/${project.slug}`,changeFrequency:"monthly" as const,priority:.6}))]}
