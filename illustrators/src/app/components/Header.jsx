import React from 'react';
import Link from 'next/link';
import './Header.css'

function Header(){
const handleClick = () => {
    const audio = new Audio('/sounds/click.wav');
    audio.volume = 0.5;
    audio.play().catch((e) => console.warn('Audio play failed:', e));
  };
return (
  
<div className="headerStyles">
      
        <Link href="/"><img src="/IllustratorsLogo.png" className="headerImage" alt="Illustrators Logo" title='Home'/></Link>

        <ul className="headerLinks">
          <li><Link href="/login" className="mt-3 pr-4"onClick={handleClick}> <b>Login</b> </Link></li>
          <li><Link href="/sign-up" className="mt-3 pr-4"onClick={handleClick}><b>Register</b> </Link></li> 
          <li><Link href="/profile" className="mt-3 pr-4"onClick={handleClick}><b>Profile</b></Link></li>
          <li><a href="/game" className="mt-3 pr-4"onClick={handleClick}><b>Game</b><br></br></a></li>
          <li><Link href="https://github.com/tllarr1/Illustrators.git" target="_blank" className="text-blue-500 mt-3 pr-4"><i className="bi bi-github"></i></Link></li>

        </ul>
  
    </div>
  

);

}

export default Header;