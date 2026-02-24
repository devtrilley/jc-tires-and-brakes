import { Link, useNavigate, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton";

function Header({ menuOpen, setMenuOpen, scrollToForm }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (sectionId) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 h-full">
            <img
              src="/logo.svg"
              alt="JC's Tire & Brakes"
              draggable="false"
              className="h-14 md:h-16 w-auto cursor-pointer select-none"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+17049190401"
              className="
    flex items-center gap-2
    text-sm font-semibold
    px-4 py-2 rounded-full
    border
    border-[var(--jc-red-600)]
    text-[var(--jc-black)]
    bg-white
    hover:bg-[var(--jc-red-600)]
    hover:text-white
    hover:border-[var(--jc-red-600)]
    shadow-sm
  "
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (704) 919-0401
            </a>
            <button
              onClick={() => handleNavClick("services")}
              className="
  relative
  text-sm font-medium
  text-gray-700
  hover:text-black
  transition
  after:content-['']
  after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-[var(--jc-red-500)]
  after:rounded-full
  after:transition-all
  after:duration-300
  hover:after:w-full
"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("work")}
              className="
  relative
  text-sm font-medium
  text-gray-700
  hover:text-black
  transition
  after:content-['']
  after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-[var(--jc-red-500)]
  after:rounded-full
  after:transition-all
  after:duration-300
  hover:after:w-full
"
            >
              Work
            </button>
            <Link
              to="/gallery"
              className="
  relative
  text-sm font-medium
  text-gray-700
  hover:text-black
  transition
  after:content-['']
  after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-[var(--jc-red-500)]
  after:rounded-full
  after:transition-all
  after:duration-300
  hover:after:w-full
"
            >
              Gallery
            </Link>
            <button
              onClick={() => handleNavClick("faq")}
              className="
  relative
  text-sm font-medium
  text-gray-700
  hover:text-black
  transition
  after:content-['']
  after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-[var(--jc-red-500)]
  after:rounded-full
  after:transition-all
  after:duration-300
  hover:after:w-full
"
            >
              FAQ
            </button>
            <CTAButton onClick={scrollToForm} className="px-6 py-3 text-sm">
              Get a Free Estimate
            </CTAButton>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden bg-[var(--jc-black)] border-t border-white/10 px-4 space-y-3 transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <button
            onClick={() => {
              handleNavClick("services");
              setMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded"
          >
            Services
          </button>
          <button
            onClick={() => {
              handleNavClick("work");
              setMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded"
          >
            Gallery
          </button>
          <button
            onClick={() => {
              handleNavClick("faq");
              setMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded"
          >
            FAQ
          </button>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded"
          >
            Back to Top
          </button>
          <CTAButton
            onClick={() => {
              scrollToForm();
              setMenuOpen(false);
            }}
            className="w-full"
          >
            Get a Free Estimate
          </CTAButton>
        </div>
      </header>
    </>
  );
}

export default Header;
