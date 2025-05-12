"use client"

import Page from "@/components/Page";
import { Image } from "@heroui/react";
import NextImage from "next/image";

export default function About() {
    return <Page heading="A little about myself">
        <div>
            <Image
                alt="Profile picture"
                as={NextImage}
                className="float-left rounded-xl grayscale m-8 ml-0"
                src="/profile.jpg"
                width={300}
                height={300}
            />
            <p className="text-2xl font-light mt-8">  
                I'm Tushar Srivastava, a hands-on technologist and software architect from Lucknow, India. My career has spanned government, enterprise, and startup sectors where I've led full-cycle software development—from architecting and coding, to team leadership and client management.
                <br/><br/>
                My work with organizations like the Indian Army, Google India, Boston Consulting Group, Pioneer Natural Resources, and more, involved delivering mission-critical systems that were predictive, secure, and scalable.
                <br/><br/>
                From developing on air-gapped machines in defense environments to deploying cloud-native microservices in the oil and gas industry, I bring battle-tested experience and reliability to every project.
            </p>
        </div>
    </Page>   
}