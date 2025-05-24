interface Props {
  name: string;
  message: string;
  placeholder: string;
}

function FormTextArea(props: Props) {
  return (
    <>
      <label htmlFor={props.name}>{props.message}</label>
      <textarea
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default FormTextArea;
