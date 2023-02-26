import FieldItem from "../FieldItem/FieldItem";

function FieldList({ fields }) {
  if (fields.length === 0) return;
  // console.log(fields);
  return (
    <ol className="result">
      {fields.map((field) => (
        <FieldItem key={field.id} field={field} />
      ))}
    </ol>
  );
}

export default FieldList;
