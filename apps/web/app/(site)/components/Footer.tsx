
interface FooterProps {}

const Footer = () => {
    const currentYear = new Date().getFullYear();


        return <footer className="bg-background-blue text-white py-4 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm tracking-wide">&copy; {currentYear} British Military Medal Registry. All rights reserved.</p>
            </div>
        </footer>;
}
export default Footer;