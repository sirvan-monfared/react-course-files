import { useState } from "react";

import TabButton from "../ui/TabButton";

export default function Tabs() {
  
  const [content, setContent] = useState("Please Click on one of the buttons");

  function clickHandler(name) {
    setContent(`${name} content goes here`);
  }

  return (
    <section class="features-section">
      <h2 class="section-title">Features</h2>
      <div class="features-grid">
        <TabButton icon="🚀" title="Fast Performance" onClick={() => clickHandler("tab1")} />

        <TabButton icon="🔒" title="Secure & Safe" onClick={() => clickHandler("tab2")} />

        <TabButton icon="📱" title="Responsive Design" onClick={() => clickHandler("tab3")} />

        <div>{content}</div>
      </div>
    </section>
  );
}
