"use client"

import Page from "@/components/Page"
import React from "react";
import { IconType } from "react-icons";
import { GoCodeSquare } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { SiSmartthings } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Button, Link } from "@heroui/react";

interface ServiceProps {
    label: string,
    description: string,
    Icon: IconType
}

function Service(props: ServiceProps) {
    return (
        // border border-default rounded-sm
        <div className="p-6 flex flex-col md:flex-row gap-x-4">
            <props.Icon size={56} className="p-2"/>
            <div className="flex flex-col justify-center">
                <h1 className="text-lg font-semibold">{props.label}</h1>
                <p className="text-md font-light self-center">{props.description}</p>
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <Page heading="what i can do for you">
            <div className="flex flex-col gap-y-4 py-6 divide-y-1 divide-default">
                <Service 
                    label="Custom Software Development"
                    description="From idea to launch — web platforms, internal tools, dashboards, and more using Django, React, Next.js."
                    Icon={GoCodeSquare}
                />
                <Service 
                    label="API & Microservice Architecture"
                    description="Scalable and well-documented RESTful APIs, event-driven microservices, and backend systems with Django, FastAPI, Kafka."
                    Icon={GrServices}
                />
                <Service 
                    label="Data Science & ML Solutions"
                    description="From pandas to predictive — data wrangling, analytics dashboards, and machine learning workflows."
                    Icon={SiSmartthings}
                />
                <Service 
                    label="DevOps & Deployment"
                    description="Dockerized apps, CI/CD pipelines, and Kubernetes orchestration on AWS, Azure, or on-prem environments."
                    Icon={VscAzureDevops}
                />
                <Service 
                    label="Team Augmentation & Mentoring"
                    description="Plug in as a senior engineer or mentor to help startups, teams, or projects meet high-quality engineering goals."
                    Icon={FaChalkboardTeacher}
                />
            </div>
            <div className="p-6 text-lg font-light rounded flex gap-x-2 bg-default-50">
                <p>You see something that you need help with?</p>
                <Link href="#" className="font-semibold">Let's talk!</Link>
            </div>
        </Page>
    )
}