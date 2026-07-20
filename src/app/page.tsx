import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex max-w-4xl flex-col m-auto min-h-screen justify-between">
      <div className="p-4 text-center mt-4 font-bold">
        <p>Transforming ideas into digital realities.</p>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/profile-picture.jpg"
            className="max-w-sm grayscale rounded-lg shadow-2xl"
            alt="Headshot"
            height={300}
            width={300}
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="text-5xl font-bold">Tushar Srivastava</h1>
            <p className="text-xl font-bold">
              Staff Software Engineer at <span> </span>
              <a
                className="hover:underline"
                href="https://www.nagarro.com/en/"
                target="_blank"
              >
                Nagarro
              </a>
            </p>
            <p className="py-6">
              8+ years across backend systems, data engineering, and applied AI, 
              building production systems end-to-end — from APIs and data pipelines 
              to multi-agent LLM applications — through architecture, implementation, 
              and deployment. Combines individual-contributor depth with experience 
              in leading teams and driving projects from requirements to production.
            </p>
            <div className="flex ">
              <a
                className="btn btn-circle btn-ghost"
                href="https://github.com/tshrv"
                target="_blank"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                className="btn btn-circle btn-ghost"
                href="https://www.linkedin.com/in/tshrv/"
                target="_blank"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                className="btn btn-ghost"
                href="/tushar-srivastava-resume-july-2026.pdf"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4">
        <p>© {new Date().getFullYear()} - All Rights Reserved.</p>
      </footer>
    </main>
  );
}
