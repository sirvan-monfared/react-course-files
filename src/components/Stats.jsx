import StatItem from "./StatItem.jsx"

export default function Stats() {
  return (
    <section class="stats-section">
      <div class="stats-grid">
        <StatItem icon="📊" title="1,234" description="Total Users"/>
        <StatItem icon="💰" title="$45,678" description="Revenue"/>
        <StatItem icon="📈" title="89%" description="Growth Rate"/>
        <StatItem icon="⭐" title="4.8" description="Rating"/>
      </div>
    </section>
  );
}
