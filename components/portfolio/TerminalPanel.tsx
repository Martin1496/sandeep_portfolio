"use client";
import Link from "next/link";
import {FormEvent,useEffect,useRef,useState} from "react";
import {ArrowUpRight,CornerDownLeft} from "lucide-react";

type Command="whoami"|"projects"|"stack"|"services"|"journey"|"contact"|"help";
type Line={kind:"command"|"response"|"error";text:string;link?:{label:string;href:string}};
const commands:Command[]=["whoami","projects","stack","services","journey","contact","help"];
const answers:Record<Command,{text:string;link?:{label:string;href:string}}>= {
 whoami:{text:"Hey, I'm Sandeep — a full-stack developer in Mumbai. I bring sharp interfaces and dependable backend systems together.",link:{label:"Get to know me",href:"/about"}},
 projects:{text:"Take a look at ClipVexa, UniversalFetch and PharmacyDesk, plus future concepts like TrustLens. Each has a story, scope and current stage.",link:{label:"Open project archive",href:"/projects"}},
 stack:{text:"Frontend: React, Vue, Nuxt. Backend: Python, FastAPI, SQL, Redis. Delivery: Docker, Linux and thoughtful deployment.",link:{label:"Explore tools & stack",href:"/tools"}},
 services:{text:"I can help with web experiences, Python APIs, workflow software, integrations and practical AI features.",link:{label:"See what I offer",href:"/services"}},
 journey:{text:"I started by learning how websites work and how people discover them. Today I build full products: UI, API, data and release.",link:{label:"Read my story",href:"/about"}},
 contact:{text:"Have a project in mind? Tell me what you're building, your timeline and the problem you want solved.",link:{label:"Let's talk",href:"/contact"}},
 help:{text:"Try a command: whoami, projects, stack, services, journey or contact. Select a shortcut below or type one yourself."}
};
export default function TerminalPanel({intro="whoami",label="A quick introduction",className=""}:{intro?:Command;label?:string;className?:string}){
 const [lines,setLines]=useState<Line[]>([]),[typing,setTyping]=useState(""),[input,setInput]=useState(""),[busy,setBusy]=useState(false);
 const timers=useRef<ReturnType<typeof setTimeout>[]>([]),outputRef=useRef<HTMLDivElement>(null),inputRef=useRef<HTMLInputElement>(null);
 const clearTimers=()=>{timers.current.forEach(clearTimeout);timers.current=[]};
 const later=(fn:()=>void,ms:number)=>{timers.current.push(setTimeout(fn,ms))};
 const run=(raw:string,animate=true)=>{
  const value=raw.trim().toLowerCase();if(!value||busy)return;
  clearTimers();setBusy(true);setInput("");setTyping("");
  const finish=()=>{const isKnown=commands.includes(value as Command);const answer=isKnown?answers[value as Command]:null;setTyping("");setLines(prev=>[...prev.slice(-7),{kind:"command",text:value},{kind:answer?"response":"error",text:answer?.text||`I don't know “${value}” yet. Try help to see the available commands.`,link:answer?.link}]);setBusy(false)};
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!animate||motion){finish();return}
  for(let i=1;i<=value.length;i++)later(()=>setTyping(value.slice(0,i)),i*62);
  later(finish,value.length*62+420);
 };
 const runRef=useRef(run);
 useEffect(()=>{runRef.current=run});
 useEffect(()=>{const t=setTimeout(()=>runRef.current(intro),650);timers.current.push(t);return clearTimers},[intro]);
 useEffect(()=>{outputRef.current?.scrollTo({top:outputRef.current.scrollHeight,behavior:"smooth"})},[lines,typing]);
 const submit=(e:FormEvent)=>{e.preventDefault();run(input,false)};
 return <div className={`terminal ${className}`} aria-label="Interactive portfolio guide"><div className="terminal-bar"><div className="terminal-dots" aria-hidden="true"><i/><i/><i/></div><span>visitor-guide / sandeep.dev</span><span className="terminal-live"><i/> LIVE</span></div><div className="terminal-body"><div className="terminal-greeting"><span>HELLO, VISITOR</span><p>{label}. Curious about something? Ask the terminal.</p></div><div className="terminal-output" ref={outputRef} role="log" aria-live="polite" aria-relevant="additions">{lines.map((line,i)=><div key={i} className={`terminal-line ${line.kind}`}>{line.kind==="command"?<><span className="terminal-prompt">sandeep@portfolio:~$</span> {line.text}</>:<><span className="terminal-mark">↳</span><span>{line.text}{line.link&&<Link href={line.link.href} className="terminal-link">{line.link.label} <ArrowUpRight size={13}/></Link>}</span></>}</div>)}{busy&&<div className="terminal-line command"><span className="terminal-prompt">sandeep@portfolio:~$</span> {typing}<span className="terminal-cursor"/></div>}</div><form className="terminal-form" onSubmit={submit}><label htmlFor={`terminal-input-${intro}`}>$</label><input ref={inputRef} id={`terminal-input-${intro}`} autoComplete="off" spellCheck={false} value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a command..." disabled={busy} maxLength={40}/><button type="submit" disabled={!input.trim()||busy} aria-label="Run command"><CornerDownLeft size={18}/></button></form><div className="terminal-shortcuts" aria-label="Suggested commands">{(["whoami","projects","stack","contact"] as Command[]).map(cmd=><button onClick={()=>run(cmd)} disabled={busy} key={cmd} type="button">/{cmd}</button>)}</div></div></div>
}
