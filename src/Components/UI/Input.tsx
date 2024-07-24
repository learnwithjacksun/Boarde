interface InputField {
  type: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder: string;
}
const Input: React.FC<InputField> = ({ type,value, id, placeholder, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="inputs"
        autoComplete="off"
      />
    </>
  );
};

export default Input;
