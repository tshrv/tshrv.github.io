"use client"

import { Image } from "@heroui/react";
import { Button } from "@heroui/button";
import Page from "@/components/Page";
import { Divider } from "@heroui/divider";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Link } from "@heroui/react";
interface ProjectCardProps {
  customer_name: string
  customer_location: string
  project_title: string
  cover_image_href: string
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="py-4 w-fit" isHoverable isPressable>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-semibold">{props.customer_name}</p>
        <small className="text-default-500">{props.customer_location}</small>
        <h4 className="font-semibold text-lg">{props.project_title}</h4>
      </CardHeader>
      <CardBody className="overflow- py-2">
        <Image
          height="150px"
          alt="Card background"
          className="rounded-xl"
          src={props.cover_image_href}
        />
      </CardBody>
    </Card>
  )
}

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col gap-y-6 pt-12">
        <h1 className="text-8xl font-bold">Tushar<br/>Srivastava</h1>
        <h2 className="text-2xl font-semibold">Software Architect and Full-stack Developer</h2>
        <p className="text-2xl font-light italic">Designing and building intelligent, data-driven software solutions with Python, React, and a strategic mindset.</p>
        <div className="flex gap-x-4">
          <Button color="primary" variant="flat">
            Have something in mind?
            <span className="font-semibold">Let's talk!</span>
          </Button>
          <Button variant="flat">See my work</Button>
        </div>
      </div>
      <Divider className="my-12"/>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-md font-semibold uppercase">About me</h1>
        <p className="text-2xl font-light">
          I'm a solution architect and full-stack developer with over 7 years of experience working on data-intensive systems, cutting-edge machine learning pipelines, and scalable web platforms. I specialize in backend, frontend, and end-to-end software solutions.
        </p>
        <p className="text-lg py-6 italic font-light">
          "I build software that solves real-world problems and scales across systems, teams, and domains."
        </p>
        <Link href="/about" size="sm">
          learn more
        </Link>
      </div>
      <Divider className="my-12"/>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-md font-semibold uppercase">notable projects</h1>
        <div className="flex flex-wrap gap-4">
          <ProjectCard customer_name="Indian Armed Forces" customer_location="New Delhi, India"
          project_title="Risk Inference Engine" cover_image_href="/cover-risk-inference-engine.jpg"/>
          <ProjectCard customer_name="Pioneer Natural Resources" customer_location="Texas, USA"
          project_title="Real-time Well Monitoring" cover_image_href="https://assets.spe.org/67/5d/1df5c3c04cbfb9e682c3274abdcf/hero.jpg"/>
          <ProjectCard customer_name="Pioneer Natural Resources" customer_location="Texas, USA"
          project_title="ML Lifecycle App" cover_image_href="/oil-well-drilling-ai.png"/>
          <ProjectCard customer_name="Spetra" customer_location="New York, USA"
          project_title="F&B Business Portal" cover_image_href="https://cdn.prod.website-files.com/63280e67165b791199275cd1/632d47aae68d3a2ffc36b8ef_631eff439b6c6c20190d3535_pexels-imin-technology-12935048%2520(1).jpeg"/>
        </div>

      </div>
    </Page>
  );
}
