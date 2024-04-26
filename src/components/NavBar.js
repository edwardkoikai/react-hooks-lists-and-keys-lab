import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const container = links.map((item)=>{
    return <a key={item} href={`#${item}`}>{item}</a>
  })

  return <nav>{container}</nav>;
}

export default NavBar;
