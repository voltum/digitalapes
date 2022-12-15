import { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// Resources
import logo from "../public/img/logo.png";
import head_img from "../public/img/head_img.svg";

function Header() {
  const mobileNav = useRef();

  const navigation = [
    {
      href: "#about",
      anchor: "About us",
    },
    {
      href: "#service",
      anchor: "Service",
    },
    {
      href: "#contacts",
      anchor: "Contacts",
    },
  ];

  const openNav = () => {
    document.body.style.overflow = "hidden";
    mobileNav.current.style.display = "block";
    mobileNav.current.classList.add(styles.head_nav_mobile_animating);
    setTimeout(() => {
      mobileNav.current.classList.remove(styles.head_nav_mobile_animating);
    }, 1000);
  };

  const closeNav = () => {
    document.body.style.overflow = "auto";
    mobileNav.current.classList.add(styles.head_nav_mobile_animating_out);
    setTimeout(() => {
      mobileNav.current.classList.remove(styles.head_nav_mobile_animating_out);
      mobileNav.current.style.display = "none";
    }, 1000);
  };

  return (
    <div className={styles.header}>
      <div className={`${styles.head_nav_wrapper}`}>
        <nav className={`${styles.container} ${styles.head_nav}`}>
          <div>
            <Image src={logo} />
          </div>
          <div className={styles.header_nav_block}>
            <ul>
              {navigation.map((nav) => (
                <li key={nav.href}>
                  <a href={nav.href}>{nav.anchor}</a>
                </li>
              ))}
            </ul>
            <button className={styles.burger_btn} onClick={openNav} />
          </div>
        </nav>
      </div>
      <nav
        className={`${styles.head_nav_mobile} ${styles.container}`}
        ref={mobileNav}
      >
        <div className={styles.overlay}></div>
        <div className={styles.header_nav_mobile_block}>
          <div className={styles.nav_mobile_header}>
            <Image src={logo} />
            <button className={styles.close_btn} onClick={closeNav} />
          </div>
          <ul>
            {navigation.map((nav) => (
              <li key={nav.href} onClick={closeNav}>
                <a href={nav.href}>{nav.anchor}</a>
              </li>
            ))}
          </ul>
          <div className={styles.nav_mobile_footer}>
            <span>ceo@digitalapes.agency</span>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.head_block_wrapper}>
          <div className={styles.head_block}>
            <h1>Our objective</h1>
            <p>
              Full complex of services in promotion of Internet turnkey projects
              worldwide, from Europe to Asia. Deep dive into a project, ensure
              effective work with the target audience and business development
              of clients in the network. Thanks to it increase brand recognition
              and conversion
            </p>
            <a href="#contacts" className={styles.btn}>
              Start
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
