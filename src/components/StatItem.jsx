export default function StatItem({ icon, title, description }) {
  return (
    <div class="stat-card">
      <div class="stat-icon">{icon}</div>
      <div class="stat-content">
        <h3 class="stat-value">{title}</h3>
        <p class="stat-label">{description}</p>
      </div>
    </div>
  );
}
