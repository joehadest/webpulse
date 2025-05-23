import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} WebPulse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
