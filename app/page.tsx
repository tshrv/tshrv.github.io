import Image from "next/image";
import { Button } from "@heroui/button";
import Page from "@/components/Page";
import { Divider } from "@heroui/divider";

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col gap-y-6 pt-12">
        <h1 className="text-6xl font-bold">Tushar Srivastava</h1>
        <h2 className="text-2xl font-semibold">Software Architect and Full-stack Developer</h2>
        <p className="text-xl font-light italic">Building intelligent, data-driven software solutions with Python, React, and a strategic mindset.</p>
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
        <p className="italic py-6 font-light">"I build software that solves real-world problems and scales across systems, teams, and domains."
        </p>
      </div>
    </Page>
  );
}
