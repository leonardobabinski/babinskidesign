const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 border-t border-white/20">
      <div className="container-custom">
        <div className="text-center">
          <div className="text-white/80 text-sm">
            © {currentYear} Leonardo Babinski. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

