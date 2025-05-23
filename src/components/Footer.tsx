import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-4 z-50">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} WebPulse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
