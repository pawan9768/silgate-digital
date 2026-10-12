import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Youtube, Linkedin, Instagram } from "../assets/icons/SocialIcons";
import logoImg from "../assets/images/logo.png";
export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // scroll effect

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLOSE MOBILE MENU ON ROUTE CHANGE

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  //  MOBILE ACCORDION

  const toggleMobileSubmenu = (name) => {
    setMobileExpandedSection((current) => (current === name ? null : name));
  };

  //  CLOSE MOBILE MENU

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  };

  //  ACTIVE ROUTE

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isParentActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-[100] w-full">
      <nav
        className={`
          w-full
          bg-white/95
          backdrop-blur-md
          border-b border-slate-200
          transition-all duration-300
          ${scrolled ? "py-2 shadow-md" : "py-3"}
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center flex-shrink-0"
          >
            <img
              src={logoImg}
              alt="Silgate Solutions"
              className="
                h-9
                sm:h-10
                lg:h-12
                w-auto
                object-contain
              "
            />
          </Link>
          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* HOME */}
            <Link
              to="/"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Home
            </Link>
            {/* About us */}
            <Link
              to="/about"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/about")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              About Us
            </Link>
            {/* Services */}
            <Link
              to="/services"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/services")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Services
            </Link>

            {/* industries */}
            <Link
              to="/industries"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/industries")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Industries
            </Link>

            {/* blog */}
            <Link
              to="/blog"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/blog")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Blog
            </Link>

            {/* Case Studies */}
            <Link
              to="/case-studies"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/case-studies")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Case Studies
            </Link>

            {/* careers */}
            <Link
              to="/career"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/career")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Careers
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                text-xs
                font-semibold
                px-5
                py-2.5
                rounded-lg
                bg-[#F36C3D]
                text-white
                hover:bg-[#00529B]
                transition-all
                shadow-sm
              "
            >
              Contact Us
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* mobile header */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="
                text-xs
                font-semibold
                px-3
                py-2
                rounded-lg
                bg-[#00529B]
                text-white
                hover:bg-[#F36C3D]
                transition-colors
              "
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="
                p-2
                rounded-lg
                text-zinc-700
                hover:text-[#00529B]
                hover:bg-zinc-100
                transition-colors
              "
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close navigation menu"
            className="
              absolute
              inset-0
              w-full
              h-full
              bg-[#07172C]/70
              backdrop-blur-sm
            "
            onClick={closeMobileMenu}
          />
          {/* DRAWER */}
          <aside
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-full
              sm:max-w-md
              bg-white
              shadow-2xl
              flex
              flex-col
              overflow-hidden
            "
          >
            {/* Drawer header */}
            <div
              className="
                flex
                items-center
                justify-between
                p-4
                border-b
                border-zinc-100
                flex-shrink-0
              "
            >
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center"
              >
                <img
                  src={logoImg}
                  alt="Silgate Solutions"
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="
                  w-10
                  h-10
                  rounded-lg
                  bg-zinc-100
                  flex
                  items-center
                  justify-center
                  text-zinc-600
                  hover:text-[#00529B]
                  hover:bg-[#EBF3FB]
                  transition-colors
                "
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* mobile links */}
            <div
              className="
                flex-1
                overflow-y-auto
                p-5
                pb-8
              "
            >
              {/* HOME */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Home
              </Link>

              {/* about us */}
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/about") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                About Us
              </Link>

              {/* Services */}
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/services") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Services
              </Link>

              <Link
                to="/industries"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/industries") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Industries
              </Link>

              {/* resources */}
              {/* <div className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("resources")}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-3
                    text-base
                    font-semibold
                    text-zinc-900
                  "
                  aria-expanded={mobileExpandedSection === "resources"}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`
                      w-5
                      h-5
                      transition-transform
                      ${
                        mobileExpandedSection === "resources"
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>
                {mobileExpandedSection === "resources" && (
                  <div
                    className="
                      mb-3
                      ml-2
                      rounded-xl
                      bg-zinc-50
                      p-3
                    "
                  >
                    <Link
                      to="/blog"
                      onClick={closeMobileMenu}
                      className="
                        block
                        py-2
                        text-sm
                        text-zinc-700
                        hover:text-[#00529B]
                      "
                    >
                      Blog
                    </Link>
                    <Link
                      to="/case-studies"
                      onClick={closeMobileMenu}
                      className="
                        block
                        py-2
                        text-sm
                        text-zinc-700
                        hover:text-[#00529B]
                      "
                    >
                      Case Studies
                    </Link>
                  </div>
                )}
              </div> */}

              {/* blog */}
              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/blog") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Blog
              </Link>

              {/* case studies */}
              <Link
                to="/case-studies"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/case-studies") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Blog
              </Link>

              {/* careers */}
              <Link
                to="/career"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/career") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Careers
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="
                  block
                  mt-4
                  py-3
                  text-center
                  rounded-xl
                  bg-[#00529B]
                  text-white
                  font-semibold
                  hover:bg-[#F36C3D]
                  transition-colors
                "
              >
                Contact Us
              </Link>
            </div>
            {/* MOBILE FOOTER */}
            <div
              className="
                flex-shrink-0
                p-5
                border-t
                border-zinc-100
                bg-zinc-50
              "
            >
              <a
                href="tel:+918108810916"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-[#091E3A]
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-[#00529B]
                  transition-colors
                "
              >
                <Phone className="w-4 h-4 text-[#F36C3D]" />
                Call +91 81088 10916
              </a>
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-5
                  text-zinc-500
                  pt-4
                "
              >
                <a
                  href="https://youtube.com/@SilgateMedia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="hover:text-[#00529B]"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://in.linkedin.com/company/Silgate-media-pvt-ltd"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#00529B]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/Silgate.media/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#00529B]"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
