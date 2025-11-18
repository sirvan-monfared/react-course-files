export default function TabButton({ icon, title, ...attributes }) {

  return (
    <a {...attributes}  class="feature-card">
      <div class="feature-icon">{icon}</div>
      <h3 class="feature-title">{title}</h3>
    </a>
  );
}
