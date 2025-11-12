export default function Textarea({title, ...attributes}) {
  return (
    <div class="form-group">
      <label htmlFor={attributes.id} class="form-label">
        {title}
      </label>
      <textarea
        className={`form-textarea ${attributes.className ?? ''}`}
        {...attributes}
      ></textarea>
    </div>
  );
}
