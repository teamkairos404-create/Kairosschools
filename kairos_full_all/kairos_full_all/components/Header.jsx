
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header({school='Kairos Schools'}) {
  return (
    <header className="header">
      <div className="container header-inner">
        <motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.4}} style={{display:'flex',alignItems:'center',gap:12}}>
          <img src="/logo.svg" alt="Kairos Logo" style={{height:52}}/>
        </motion.div>

        <nav className="nav" style={{display:'flex',alignItems:'center'}}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/dashboard"><a>Dashboard</a></Link>
          <Link href="/competency"><a>Competency</a></Link>
          <Link href="/pedagogy"><a>Pedagogy</a></Link>
          <Link href="/videos"><a>Videos</a></Link>
          <Link href="/login"><a style={{marginLeft:12}} className="btn-primary">Sign in</a></Link>
        </nav>
      </div>
    </header>
  );
}
