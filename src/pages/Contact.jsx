import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
    return (
        <div className="contact-page">
            <Navbar page="Contact" />
            <form>
                <div className="info-input">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <select>
                        <option>Booking</option>
                        <option>Delivery</option>
                        <option>Customer Service</option>
                        <option>Payment</option>
                        <option>Refund</option>
                    </select>
                </div>
                <div className="support-content">
                    <textarea placeholder="Your Message"></textarea>
                    <button className="support-send" type="submit">Send</button>
                </div>
            </form>
            <div className="support-img">

            </div>
            <Footer />
        </div>
    );
}

export default Contact;