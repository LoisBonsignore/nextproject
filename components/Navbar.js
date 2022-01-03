import Link from 'next/link'


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Projet Next.js</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/other"><a>Other</a></Link>
        </nav>
     );
}
 
export default Navbar;