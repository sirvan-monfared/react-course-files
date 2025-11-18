import { useState } from "react";

import TabButton from "../ui/TabButton";

const tabs = [
  {
    id: 'tab1',
    icon: "🚀",
    title: "Fast Performance",
    description: "Throttle Body EFI (Self Tuning or User Tunable) Injectors and Sensors Built-In to an Easy-to-Install, Carb-Replacement EFI Throttle Body. For Dual or Single Plane, 4-Barrel Carb-Type Intakes and Dual Quad. Nearly Universal EFI for Stock-to-1200 HP Engines."
  },
  {
    id: 'tab2',
    icon: "🔒",
    title: "Secure & Safe",
    description: "are often used interchangeably to mean protected from harm, but they can also have distinct meanings. Generally, safe refers to being free from harm or risk, often related to accidents while secure implies protection from intentional threats like crime or theft, often achieved through active measures like locks or strong passwords"
  },
  {
    id: 'tab3',
    icon: "📱",
    title: "Responsive Design",
    description: "Responsive design is a web design approach that makes websites adapt to various screen sizes for optimal viewing on any device, from desktops to smartphones. To achieve this, you use a combination of flexible grids, flexible images, and CSS media queries to adjust layouts, dimensions, and styles based on the user's screen."
  }
]


export default function Tabs() {

  const [content, setContent] = useState("Please Click on one of the buttons");

  function clickHandler(id) {

    console.log(id)

    const index = tabs.findIndex(item => item.id === id);

    setContent(tabs[index].description);
  }

  return (
    <section class="features-section">
      <h2 class="section-title">Features</h2>
      <div class="features-grid">


        { tabs.map(tab => <TabButton icon={tab.icon} title={tab.title} onClick={() => clickHandler(tab.id)} />) }

        <div>{content}</div>
      </div>
    </section>
  );
}
