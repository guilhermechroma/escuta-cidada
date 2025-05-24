interface Props {
  name: string;
  message: string;
  type: string;
  placeholder: string;
}

function FormField(props: Props) {
  return (
    <>
      <label htmlFor={props.name}>{props.message}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default FormField;
