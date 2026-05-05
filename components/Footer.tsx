export default function Footer() {
  return (
    <footer
      className="mt-6 sm:mt-8 py-7 sm:py-8 font-lato"
      style={{ borderTop: "0.5px solid #F2E2DA" }}
    >
      <div className="w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        <span
          className="font-playfair italic text-[15px] sm:text-base"
          style={{ color: "#D4948A" }}
        >
          Sukriti Dubey
        </span>
        <span
          className="text-xs sm:text-[13px] font-lato"
          style={{ color: "#A4918D" }}
        >
          San Jose, CA
        </span>
      </div>
    </footer>
  );
}
