import TeamMember from "../ui/TeamMember.jsx";

export default function TeamMembers() {
  const team_members = [
    {
      name: "John Doe",
      position: "Frontend Developer",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      position: "UI/UX Designer",
      email: "jane.smith@example.com",
    },
    {
      name: "Mike Johnson",
      position: "Backend Developer",
      email: "mike.johnson@example.com",
    },
    {
      name: "Sarah Williams",
      position: "Product Manager",
      email: "sarah.williams@example.com",
    },
  ];

  return (
    <section className="users-section">
      <h2 className="section-title">Team Members</h2>
      <div className="users-grid">
        {team_members.map((member) => (
          <TeamMember href="https://laraplus.ir" name={member.name} position={member.position} email={member.email} />
        ))}
      </div>
    </section>
  );
}
