const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="h-[7vh] center">
            <p>&copy;{currentYear} CheckBit Pro<span className="hidden lg:inline"> | All Rights Reserved</span></p>
        </footer>
    );
};

export default Footer;