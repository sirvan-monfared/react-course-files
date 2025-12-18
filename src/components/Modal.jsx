import { useEffect } from "react";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      console.log("Key Prerssed: " + e.key);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      console.log("Cleaning...");
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("ALERT");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
