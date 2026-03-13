import { useState, useEffect } from "react";

const Footer = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/asadgohar-portfolio/visits/up")
      .then((r) => r.json())
      .then((d) => {
        const val = d?.value ?? d?.count ?? d?.hits;
        if (typeof val === "number") setCount(val);
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
        <p className="text-gray-600 text-sm">&copy; 2026 Asad Gohar</p>
        {count !== null && (
          <p className="text-gray-700 text-xs">{count.toLocaleString()} visitors</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
