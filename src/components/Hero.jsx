import Button from "./Button.jsx"


export default function Hero() {
  return (
    <section class="hero">
      <h2 class="hero-title">Welcome to Our Platform</h2>
      <p class="hero-description">Build amazing React components and learn reusability</p>
      <div class="hero-actions">
        <Button className="btn-primary btn-large">Get Started</Button>
        <Button className="btn-outline btn-large">Learn More</Button>
      </div>
    </section>
  );
}
