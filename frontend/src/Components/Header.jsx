import React, { useEffect, useState } from 'react';
import "./Header.css";

function Header() {
  const username = sessionStorage.getItem("username")
  const [href, setHref] = useState("")
  const [artist, setArtist] = useState("")
  useEffect(() => {
    // console.log(sessionStorage.getItem("usertype"))
    if (sessionStorage.getItem("usertype") === "artist") {
      setHref("https://spotify-deploy.vercel.app/uploadsong")
      setArtist("Upload Song")
    }
  }, []);

  return (
    <div className="header">
      <div className="header_left">
        {/* <input
            placeholder="Search for Artists and Songs"
            type="text"
        />
        <button id='btn'>Search</button> */}
      </div>
      <div className="header_right">
        {/* <Avatar src= "" alt="Amna Sahar" /> */}
        <a href={href}>{artist}</a>
        <a href='https://spotify-deploy.vercel.app/settings'>{username}</a>
      </div>
    </div>
  )
}

export default Header