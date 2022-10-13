import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export function Header() {
  return (
    <header className="sticky top-3 text-3xl mx-24">
      <link id="favicon" rel="shortcut icon" type="image/png"></link>
      <title>RTW3W10-LensProtocol</title>
      <p className="title float-left">
        <a href="https://docs.alchemy.com/docs/how-to-create-a-decentralized-twitter-with-lens-protocol"
        target="_blank" rel="noopener noreferrer">RoadToWeb3-Week10</a>&nbsp;
      </p>  
      <p className="text-white float-right"> 
      <a href="https://www.lensfrens.xyz/mitchelldanielw.lens" alt="@mitchelldanielw.lens"
        target="_blank" rel="noopener noreferrer">@mitchelldanielw.lens</a>
      </p>
    </header>
  )
}

export function Nav() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true) }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon className="w-5 h-5 text-yellow-600 inline" role="button" onClick={() => setTheme('light')} />
      )
    } else {
      return (
        <MoonIcon className="w-5 h-5 text-gray-900 inline" role="button" onClick={() => setTheme('dark')} />
      )
    }
  };

  return (
      <nav className="sticky top-0 text-2xl text-center">
      <Link href="/">[&nbsp; HOME &nbsp;]</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/posts/0x01432d">[&nbsp; POSTS &nbsp;]</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/follows/0x827516Eca72B5d226A542eD5884E4EffA50650D3">[&nbsp; FOLLOWS &nbsp;]</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/comments/0x0143-0x0e">[&nbsp; COMMENTS &nbsp;]</Link>&nbsp;&nbsp;&nbsp;
      <Link href="/wallet/0x827516Eca72B5d226A542eD5884E4EffA50650D3">[&nbsp; NFTs &nbsp;]</Link>&nbsp;&nbsp;
      {renderThemeChanger()}
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="sticky text-3xl">
      <p className="sticky float-bottom text-center mt-6">
      <a href="https://github.com/Mitchell45432" target="_blank" rel="noopener noreferrer">GitHub @Mitchell45432</a>
      </p>
    </footer>
  )
}