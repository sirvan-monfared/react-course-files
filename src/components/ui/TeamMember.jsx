export default function TeamMember({name, position, email}) {

   const [firstName, lastName] = name.trim().split(' ')

  return (
    <div className="user-card">
      <div className="user-avatar">{firstName[0] + lastName[0]}</div>
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-role">{position}</p>
        <p className="user-email">{email}</p>
      </div>
      <div className="user-actions">
        <button className="btn btn-small btn-primary">View Profile</button>
        <button className="btn btn-small btn-outline">Message</button>
      </div>
    </div>
  );
}
