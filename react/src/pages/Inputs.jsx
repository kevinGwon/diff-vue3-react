import useForm from '../hooks/useForm';

const Inputs = () => {
  const [form, onChange] = useForm({
    name: '',
    age: '',
    address: '',
  });
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>User</legend>
        <div class="input-item">
          <label for="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
          />
        </div>
        <div class="input-item">
          <label for="age">age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={form.age}
            onChange={onChange}
          />
        </div>
        <div class="input-item">
          <label for="address">address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={onChange}
          />
        </div>
      </fieldset>
      <br />
      <button type="submit">전송</button>
    </form>
  );
};

export default Inputs;
