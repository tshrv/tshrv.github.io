import Image from 'next/image'

function Logo() {
  return (
    <a href="/" className='cursor-pointer'>
      <Image
        src="/logo.svg"
        alt="TusharSrivastava.com"
        className="dark:invert"
        width={50}
        height={24}
        priority
      />
    </a>
    
  )
}

interface NavbarLinkItemProps {
  label: string
  targetLink: string
}

function NavbarLinkItem(props: NavbarLinkItemProps) {
  const { label, targetLink } = props
  return (
    <li className='font-medium hover:underline cursor-pointer'>
      <a href={targetLink} target='_blank'>{label}</a>
    </li>
  )
}

function NavbarLinks() {
  return (
    <ul className='flex flex-row items-center gap-x-8'>
      <NavbarLinkItem label="Email" targetLink="mailto:tusharsrivastava162@gmail.com" />
      <NavbarLinkItem label="LinkedIn" targetLink="https://www.linkedin.com/in/tshrv/" />
      <NavbarLinkItem label="Github" targetLink="https://github.com/tshrv" />
    </ul>
  )
}

function Navbar() {
  return (
    <nav className='flex flex-row justify-between'>
      <Logo/>
      <NavbarLinks/>
    </nav>
  )
}

function Title() {
  return (
    <div className='flex flex-col justify-center'>
      <Image
        src="/ts-photo.jpg"
        alt="TusharSrivastava.com"
        className="dark:invert"
        width={250}
        height={24}
        priority
      />
      <span className='text-5xl font-black'>TUSHAR</span>
      <span className='text-5xl font-medium'>SRIVASTAVA</span>
    </div>
  )
}

function Tagline() {
  return (
    <div className='flex flex-col justify-center items-end'>
      <span className='text-2xl font-medium'>OPEN SOURCE ENTHUSIAST</span>
      <span className='text-2xl font-black'>Transforming ideas into digital realities</span>
    </div>
  )
}

function Footer() {
  return (
    <div className='text-xs font-light'>
      <span>© 2023 Tushar Srivastava. All Rights Reserved.</span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <main className="w-screen min-h-screen flex flex-col items-center">
        <div className='flex flex-col grow w-4/6 p-12'>
          <Navbar/>
          <div className='grow flex flex-row justify-between'>
            <Title/>
            <Tagline/>    
          </div>
          <Footer/>
        </div>
      </main>
    </>
  )
}
