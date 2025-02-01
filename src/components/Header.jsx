export default function Header() {
  return (
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-2.4 1.05-4.56 2.72-6h1.41l.77.79L7.5 9l.78 1.5 1.97.56.87 1.2-1.09 1.09v1.03L12 15.5l2.5 1.5.97-1.97.28-2.5-1.25-.72L14 10l-1.06-1.06-.44-2.04h3.04c1.74 1.46 2.87 3.63 2.87 6 0 4.41-3.59 8-8 8z" />
      </svg>
      <h1 className="brand-name">my travel journal</h1>
    </header>
  );
}
