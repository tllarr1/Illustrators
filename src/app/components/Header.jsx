import React from 'react';
import Link from 'next/link';
import './Header.css'

function Header() {
const handleClick = () => {
    const clickSound = new Audio('/Sounds/click.wav');
    clickSound.currentTime = 0;
    clickSound.play();
}
 


  return (

    <div className="headerStyles" onClick={handleClick}>
      
      <Link href="/"><img src="/IllustratorsLogo.png" className="headerImage" alt="Illustrators Logo" title='Home' /></Link>

      <ul className="headerLinks">
        <li><Link href="/login" className="links mt-3 pr-4"> <b>Login</b> </Link></li>
        <li><Link href="/sign-up" className="links mt-3 pr-4"><b>Register</b> </Link></li>
        <li><Link href="/profile" className="links mt-3 pr-4"><b>Profile</b></Link></li>
        <li><a href="/game" className="links mt-3 pr-4"><b>Game</b><br></br></a></li>
        <li><Link href="https://github.com/tllarr1/Illustrators.git" target="_blank" className="text-blue-500 mt-3 pr-4"><i className="bi bi-github"></i></Link></li>

      </ul>

    </div>


  );

}

export default Header;