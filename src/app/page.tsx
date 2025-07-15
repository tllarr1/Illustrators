"use client";

import Image from "next/image";
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Header from './components/Header.jsx'; //Importing the header component
import './App.css';
//style page specifically for /app/page.tsx
import './page.css';
import { useEffect } from "react";


export default function Home() {

  const splash = [
    "Now in color!!",
    "What will you draw?",
    "Where's my supersuit?",
    "Not Minecraft",
    "To draw or not to draw"
  ]

  const index = Math.floor(Math.random() * (4 - 0 + 1) + 0);

  useEffect(() => {
    const splashElement = document.getElementById("Splash");
    if (splashElement) {
      splashElement.innerText = splash[index];
    }
  }, [index]);



  return (

    <>
 
    
        <header>

          <Header />

        </header>



        <main className="flex flex-col items-center justify-center">

          <div className="titleLogo"> 
         <Image src="/IllustratorsMainTitle.png" unoptimized={true} width={600} height={300} alt="Illustrators Main Title"/>

          <p id="Splash"></p>

          </div>
         
          <Link
            href="/lobby"
            className="play-btn pulse-hover">Play!</Link>

         

        </main>

        <div className="info">

          <div id="about-game">
            <h1>About the Game</h1>
            <p>Welcome to [Game Name]! Immerse yourself in a thrilling world of [brief description of game genre, e.g., epic fantasy adventures, strategic resource management, fast-paced puzzle challenges]. Developed by [Developer Name], this game offers a unique blend of [mention a key gameplay mechanic or feature] and [mention another key gameplay mechanic or feature], promising hours of engaging fun for players of all skill levels.</p>
            <p>Explore vast landscapes, uncover ancient mysteries, build your empire, or compete against friends in exciting multiplayer modes. With stunning visuals, captivating sound design, and a constantly evolving world, [Game Name] is more than just a game – it's an experience!</p>
          </div><br/>

          <div id="about-game2">
            <h1>About the Game</h1>
            <p>Welcome to [Game Name]! Immerse yourself in a thrilling world of [brief description of game genre, e.g., epic fantasy adventures, strategic resource management, fast-paced puzzle challenges]. Developed by [Developer Name], this game offers a unique blend of [mention a key gameplay mechanic or feature] and [mention another key gameplay mechanic or feature], promising hours of engaging fun for players of all skill levels.</p>
            <p>Explore vast landscapes, uncover ancient mysteries, build your empire, or compete against friends in exciting multiplayer modes. With stunning visuals, captivating sound design, and a constantly evolving world, [Game Name] is more than just a game – it's an experience!</p>
          </div><br/>


</div>


      
    </>
  );


}

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
