import Button from "../Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

export default function ContactUs() {
  return (
    <section class="form-section">
      <h2 class="section-title">Contact Us</h2>
      <div class="form-container">
        <form class="contact-form">
          <Input
            title="Full Name"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your name"
          />

          <Input
            title="Email Address"
            type="email"
            id="email"
            className="form-input"
            name="email"
            placeholder="Enter your email"
          />

          <Input
            title="Subject"
            id="subject"
            name="subject"
            className="form-input"
            placeholder="Enter your subject"
          />

          <Textarea
            title="Message"
            name="message"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></Textarea>

          <div class="form-actions">
            <Button className="btn-primary btn-large">Send Message</Button>
            <Button className="btn-outline btn-large">Clear</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
