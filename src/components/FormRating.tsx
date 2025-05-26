interface Props {
  name: string;
  id: string;
  rating: string[];
  message: string;
}

function FormRating(props: Props) {
  return (
    <>
      <label htmlFor={props.name}>{props.message}</label>
      <div className="nota" id={props.id}>
        <input type="radio" name={props.name} id={props.rating[0]} value={5} />
        <label htmlFor={props.rating[0]}>★</label>

        <input type="radio" name={props.name} id={props.rating[1]} value={4} />
        <label htmlFor={props.rating[1]}>★</label>

        <input type="radio" name={props.name} id={props.rating[2]} value={3} />
        <label htmlFor={props.rating[2]}>★</label>

        <input type="radio" name={props.name} id={props.rating[3]} value={2} />
        <label htmlFor={props.rating[3]}>★</label>

        <input type="radio" name={props.name} id={props.rating[4]} value={1} />
        <label htmlFor={props.rating[4]}>★</label>
      </div>
    </>
  );
}

export default FormRating;
