"use client"

import Page from "@/components/Page";
import { IconType } from "react-icons";
import { FaPython, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoDjango, BiLogoPostgresql, BiLogoKubernetes } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiFastapi, SiPandas, SiScikitlearn, SiStreamlit, SiOctanerender,
    SiApachekafka, SiRabbitmq, SiCelery } from "react-icons/si";
import { DiMongodb, DiRedis } from "react-icons/di";
import { TbApi, TbAutomation } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

interface SkillProps {
    name: string,
    description?: string
    icon: IconType
}
function Skill(props: SkillProps) {
    return (
    <div className="flex items-center gap-2 p-2 pl-0 w-full">
        <props.icon className="text-default-700 text-2xl"/>
        <div className="flex flex-col">
            <span className="">{props.name}</span>
            {props.description && <span className="text-sm ">{props.description}</span>}
        </div>
    </div>
    )
}

interface SkillSectionProps {
    sectionLabel: string,
    skills: SkillProps[]
}
function SkillSection(props: SkillSectionProps) {
    return (
        <div className="flex flex-col border border-default rounded p-6">
            <h1 className="text-sm mb-3 font-semibold text-default-600 underline decoration-1">{props.sectionLabel}</h1>
            {props.skills.map(data => (<Skill key={data.name} icon={data.icon} name={data.name}/>))}
        </div>
    )
}
export default function TechStack() {
    const data = [
        {
            sectionLabel: "Languages",
            skills: [
                {name: "Python", icon: FaPython},
                {name: "Javascript", icon: IoLogoJavascript},
                {name: "Typescript", icon: SiTypescript},
            ],
        },
        {
            sectionLabel: "Backend",
            skills: [
                {name: "Django", icon: BiLogoDjango},
                {name: "FastAPI", icon: SiFastapi},
                {name: "REST", icon: TbApi},
                {name: "Microservices", icon: GrServices},
            ],
        },
        {
            sectionLabel: "Frontend",
            skills: [
                {name: "React", icon: FaReact},
                {name: "NextJS", icon: RiNextjsFill},
                {name: "TailwindCSS", icon: RiTailwindCssFill},
            ],
        },
        {
            sectionLabel: "Data",
            skills: [
                {name: "Pandas", icon: SiPandas},
                {name: "Scikit Learn", icon: SiScikitlearn},
                {name: "Streamlit", icon: SiStreamlit},
                {name: "Bokeh", icon: SiOctanerender},
            ],
        },
        {
            sectionLabel: "Messaging",
            skills: [
                {name: "Kafka", icon: SiApachekafka},
                {name: "RabbitMQ", icon: SiRabbitmq},
                {name: "Celery", icon: SiCelery},
            ],
        },
        {
            sectionLabel: "Databases",
            skills: [
                {name: "PostgreSQL", icon: BiLogoPostgresql},
                {name: "MongoDB", icon: DiMongodb},
                {name: "Redis", icon: DiRedis},
            ],
        },
        {
            sectionLabel: "DevOps",
            skills: [
                {name: "Docker", icon: FaDocker},
                {name: "Kubernetes", icon: BiLogoKubernetes},
                {name: "CI/CD", icon: TbAutomation},
            ],
        },
        {
            sectionLabel: "Cloud",
            skills: [
                {name: "AWS", icon: FaAws},
                {name: "Azure", icon: VscAzure},
            ],
        }
    ]
    return (
        <Page heading="technologies i work with">
            <div className="flex flex-wrap gap-12 mt-12">
                {
                    data.map(skillSectionData => (
                        <SkillSection key={skillSectionData.sectionLabel}
                        sectionLabel={skillSectionData.sectionLabel}
                        skills={skillSectionData.skills} />
                    ))
                }
            </div>
        </Page>
    )
}