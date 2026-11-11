"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content } from "@/content";
import { Schetslijn } from "@/components/Schetslijn";

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const { company, nav, contact } = content;
  const diensten = nav.find((item) => "children" in item && item.children);

  useEffect(() => {
    setMenu(false);
    setDrop(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menu);
    return () => document.body.classList.remove("menu-open");
  }, [menu]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu(false);
        setDrop(false);
      }
    }
    function onResize() {
      if (window.innerWidth >= 960) setMenu(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function current(href: string) {
    return pathname === href ? "page" : undefined;
  }

  return (
    <header className="site-header" data-section="header">
      <a className="skip" href="#inhoud">
        Ga naar inhoud
      </a>
      <div className="site-header__bar">
        <Link href="/" className="site-header__logo">
          <Image
            src={company.logo}
            alt={company.name}
            width={company.logoWidth}
            height={company.logoHeight}
            unoptimized
            loading="eager"
            className="site-header__mark"
          />
        </Link>

        <nav className="site-nav" aria-label="Hoofdmenu">
          <div
            className="site-nav__drop"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
            onFocus={() => setDrop(true)}
            onBlur={(event) => {
              const next = event.relatedTarget;
              if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
                setDrop(false);
              }
            }}
          >
            <Link href="/diensten" className="site-nav__link" aria-current={current("/diensten")}>
              Diensten
            </Link>
            <button
              type="button"
              className="site-nav__chev"
              aria-expanded={drop}
              aria-controls="diensten-menu"
              onClick={() => setDrop((open) => !open)}
            >
              <span className="sr-only">{drop ? "Diensten sluiten" : "Diensten openen"}</span>
              <span aria-hidden="true">▾</span>
            </button>
            <ul id="diensten-menu" className={drop ? "site-nav__menu is-open" : "site-nav__menu"}>
              {diensten && "children" in diensten
                ? diensten.children.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} aria-current={current(item.href)} onClick={() => setDrop(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          {nav.map((item) =>
            "children" in item && item.children ? null : (
              <Link key={item.href} href={item.href} className="site-nav__link" aria-current={current(item.href)}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="site-header__actions">
          <a className="site-header__phone" href={`tel:${contact.phoneTel}`} data-cta="bellen">
            {contact.phone}
          </a>
          <Link href="/offerte" data-cta="offerte" className="btn btn-solid">
            Offerte
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menu}
          aria-controls="mobiel-menu"
          onClick={() => setMenu((open) => !open)}
        >
          <span className="sr-only">{menu ? "Menu sluiten" : "Menu openen"}</span>
          <span className="menu-toggle__lines" aria-hidden="true" data-open={menu ? "true" : "false"} />
        </button>
      </div>
      <Schetslijn ticks={["1", "2", "3"]} />

      {menu ? (
        <div id="mobiel-menu" className="mobile-menu">
          <nav aria-label="Mobiel menu">
            <p className="kicker">Diensten</p>
            {diensten && "children" in diensten
              ? diensten.children.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMenu(false)}>
                    {item.label}
                  </Link>
                ))
              : null}
            {nav.map((item) =>
              "children" in item && item.children ? null : (
                <Link key={item.href} href={item.href} onClick={() => setMenu(false)}>
                  {item.label}
                </Link>
              ),
            )}
            <a href={`tel:${contact.phoneTel}`} data-cta="bellen" onClick={() => setMenu(false)}>
              Bel {contact.phone}
            </a>
            <Link href="/offerte" data-cta="offerte" className="btn btn-solid" onClick={() => setMenu(false)}>
              Offerte
            </Link>
          </nav>
        </div>
      ) : (
        <div id="mobiel-menu" hidden />
      )}
    </header>
  );
}
