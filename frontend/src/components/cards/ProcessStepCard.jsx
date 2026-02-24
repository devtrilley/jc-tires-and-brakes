function ProcessStepCard({ num, title, desc }) {
  return (
    <div className="relative overflow-hidden rounded-xl p-8 text-center flex flex-col w-64 lg:w-72 xl:w-80 border border-[var(--jc-red-600)]/20 bg-white shadow-sm">
      <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[var(--jc-red-600)] flex items-center justify-center shrink-0">
        <span className="font-black text-xl text-white">{num}</span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default ProcessStepCard;