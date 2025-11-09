"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { BsList, BsTelephone, BsTelephoneFill, BsX } from "react-icons/bs";
import { phone } from "../_lib/constants";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={`header ${open ? "nav-open" : ""}`}>
      <a href="/">
        <img className="logo" src="img/logo.png" alt="کیک و شیرینی حاج علی" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link href="#home" className="main-nav-link">
              خانه
            </Link>
          </li>
          <li>
            <Link href="#about" className="main-nav-link">
              درباره ما
            </Link>
          </li>
          <li>
            <Link href="#menu" className="main-nav-link">
              منو
            </Link>
          </li>
          <li>
            <Link href="#cta" className="main-nav-link">
              ارتباط با ما
            </Link>
          </li>
          <li>
            <a
              href={`tel:${phone}`}
              className="main-nav-link nav-cta inline-flex! items-center gap-3"
            >
              <span>سفارش</span>
              <BsTelephone />
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={() => setOpen(!open)}>
        <BsList className="icon-mobile-nav bi bi-list" />
        <BsX className="icon-mobile-nav bi bi-x" />
      </button>
    </header>
  );
};

export default Hero;
