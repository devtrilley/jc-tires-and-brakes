import CTAButton from "../CTAButton";

function WhoWeServeSection({ scrollToForm }) {
  const customers = [
    { label: "Daily Drivers", icon: CarIcon },
    { label: "Fleet Owners", icon: TruckIcon },
    { label: "Families", icon: HomeIcon },
    { label: "First-Time Customers", icon: SparkleIcon },
    { label: "Used Car Buyers", icon: KeyIcon },
    { label: "Commuters", icon: RoadIcon },
    { label: "Small Businesses", icon: BuildingIcon },
    { label: "Anyone Who Needs It Fixed", icon: WrenchIcon },
  ];

  return (
    <section className="py-20 bg-[var(--jc-black)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Who We Serve
          </h2>
          <div className="h-1 w-20 bg-[var(--jc-red-600)] mb-5 rounded-full" />
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            We work on all makes and models. If you drive it, we service it.
            No dealership markup. No runaround. Just honest work.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {customers.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="
                rounded-2xl px-4 py-6
                text-center flex flex-col items-center gap-3
                bg-white/5
                border border-white/10
                shadow-[0_4px_16px_rgba(0,0,0,0.3)]
                transition-all duration-200 ease-out
                hover:-translate-y-1
                hover:bg-white/10
                hover:border-[var(--jc-red-600)]/60
                hover:shadow-[0_10px_28px_rgba(192,3,2,0.2)]
              "
            >
              <Icon />
              <div className="font-semibold text-sm md:text-base text-white">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAButton onClick={scrollToForm}>Get a Free Estimate</CTAButton>
        </div>
      </div>
    </section>
  );
}

export default WhoWeServeSection;

/* ================= ICONS ================= */
function IconBase({ children }) {
  return (
    <div className="w-10 h-10 text-[var(--jc-red-500)]">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        {children}
      </svg>
    </div>
  );
}
function CarIcon() {
  return <IconBase><path d="M5 11l1.5-4.5h11L19 11M3 11h18v6H3v-6Zm2 6v2h2v-2H5Zm12 0v2h2v-2h-2ZM7 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" /></IconBase>;
}
function TruckIcon() {
  return <IconBase><path d="M3 6h11v9H3V6Zm13 3h3l2 3v3h-5V9Zm-9 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /></IconBase>;
}
function HomeIcon() {
  return <IconBase><path d="M3 10.5L12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H4.5A1.5 1.5 0 0 1 3 19.5v-9Z" /></IconBase>;
}
function SparkleIcon() {
  return <IconBase><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2Z" /></IconBase>;
}
function KeyIcon() {
  return <IconBase><path d="M12.65 10A6 6 0 1 0 10 12.65L18 21l1.5-1.5-1-1L20 17l-1.5-1.5 1-1L18 13l-5.35-3ZM7 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></IconBase>;
}
function RoadIcon() {
  return <IconBase><path d="M3 3h2l4 18H3L1 3h2Zm16 0h2L19 21h-6l4-18h2ZM9 3h6l-2 9H11L9 3Z" /></IconBase>;
}
function BuildingIcon() {
  return <IconBase><path d="M4 22V2h16v20h-4v-4h-8v4H4Zm4-12h2v2H8v-2Zm0-4h2v2H8V6Zm6 4h2v2h-2v-2Zm0-4h2v2h-2V6Z" /></IconBase>;
}
function WrenchIcon() {
  return <IconBase><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3Z" /></IconBase>;
}