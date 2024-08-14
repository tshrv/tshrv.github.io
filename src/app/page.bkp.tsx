import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
export default function Home() {
  return (
    <>
      <main className="flex max-w-4xl min-h-screen flex-col m-auto justify-center py-12 gap-y-32 ">
        <div className="flex justify-between items-center">
          {/* <p className="spacer"></p> */}
          <Image src="/logo.png" alt="logo" height={50} width={50} />
          {/* <p className="text-lg font-medium italic text-center">
            Transforming ideas into digital realities
          </p>
          <button className="p-2 text-3xl rounded-full border border-slate-600 hover:bg-gray-200">
            <CiLight />
          </button> */}
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-center gap-y-8">
            <p className="text-6xl font-bold">Tushar Srivastava</p>
            <p className="text-2xl font-bold">Lead Software Engineer</p>
            <div className="flex gap-x-12 items-center">
              <FaGithub className="text-3xl" />
              <FaLinkedin className="text-3xl" />
              {/* <FaEnvelope /> */}
              <button className="bg-slate-900 text-gray-200 px-3 py-1 rounded-2xl text-md font-medium">
                Say Hi!
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src="/tushar.jpg"
              className="grayscale rounded-3xl"
              alt="Headshot"
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="flex py-12">
          <p className="w-full text-4xl font-light text-right">
            Transforming ideas into digital realities
          </p>
        </div>

        <div className="flex flex-col justify-center gap-y-4 ">
          <p className="text-xl font-bold">About me</p>
          <p className="text-2xl font-light">
            Full-stack software developer with an entrepreneurial mindset, from
            India, working with clients across the globe.
          </p>
          <p className="text-2xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            doloribus quasi sequi ab repellat magnam a ipsam doloremque hic
            quisquam, facere laboriosam tempore omnis cumque molestias
            consequuntur minus velit ipsa?
          </p>
        </div>

        <div className="flex flex-col justify-center gap-y-4 ">
          <p className="text-xl font-bold">Brands I have worked with</p>
          <div className="grid grid-cols-4 grid-flow-row gap-6">
            <Image
              src="/google-png.png"
              className="grayscale border border-slate-800 border-2 rounded-lg"
              alt="Google"
              height={200}
              width={200}
            />
            <Image
              src="/hitachi-tp.png"
              className="grayscale"
              alt="Hitachi"
              height={200}
              width={200}
            />
            <Image
              src="/epam-tp.png"
              className="grayscale"
              alt="EPAM"
              height={200}
              width={200}
            />
            <Image
              src="/philips-tp.png"
              className="grayscale"
              alt="Philips"
              height={200}
              width={200}
            />
            <Image
              src="/amara-tp.png"
              className="grayscale"
              alt="Amara AI"
              height={200}
              width={200}
            />
            <Image
              src="/hirexp-tp.png"
              className="grayscale"
              alt="HireXP"
              height={200}
              width={200}
            />
            <Image
              src="/pioneer-tp.png"
              className="grayscale"
              alt="Pioneer Natural Resources"
              height={200}
              width={200}
            />
            <Image
              src="/nucleus-tp.png"
              className="grayscale"
              alt="Nucleus Software"
              height={200}
              width={200}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-4 ">
          <p className="text-xl font-bold">
            Tools & technologies in my skillset
          </p>
          <div className="text-sm font-light">
            <span className="chip">Programming Language</span>
            <span className="chip">Web Framework</span>
            <span className="chip">Machine Learning</span>
            <span className="chip">Database</span>
            <span className="chip">Containerization</span>
            <span className="chip">UI Libraries</span>
          </div>
          <div className="text-2xl font-light">
            <span className="skill">Python</span>
            <span className="skill">Typescript</span>
            <span className="skill">MySQL</span>
            <span className="skill">PostgreSQL</span>
            <span className="skill">MongoDB</span>
            <span className="skill">NextJS</span>
            <span className="skill">React</span>
            <span className="skill">FastAPI</span>
            <span className="skill">Flask</span>
            <span className="skill">Django</span>
            <span className="skill">Scikit Learn</span>
            <span className="skill">Pandas</span>
            <span className="skill">Seaborn</span>
            <span className="skill">Matplotlib</span>
            <span className="skill">Docker</span>
            <span className="skill">Kubernetes</span>
            <span className="skill">TailwindCSS</span>
            <span className="skill">Bootstrap</span>
          </div>
        </div>
      </main>
      <footer className="flex flex-col max-w-4xl m-auto justify-around">
        <div className="flex w-full m-auto justify-around py-24">
          <Image
            src="/signature.png"
            // className="grayscale rounded-3xl"
            alt="signature"
            height={200}
            width={200}
          />
          <div className="flex flex-col justify-center gap-y-4">
            <p className="text-md font-bold">Social</p>
            <ul>
              <li>Linkedin</li>
              <li>Github</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-sm items-center py-6">
          <p>Designed and handcrafted by - yours truly.</p>
          <p>© 2024 Tushar Srivastava. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
