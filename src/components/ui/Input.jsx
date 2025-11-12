export default function Input({type = 'text', title, ...attributes}) {
    console.log(attributes)
  return (
    <div className="form-group">
      <label htmlFor={attributes.id} className="form-label">
        {title}
      </label>
      <input type={type} {...attributes} />
    </div>
  );
}
