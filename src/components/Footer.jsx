const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="h-[7vh] center">
            <p>&copy;{currentYear} CheckBit Pro | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;