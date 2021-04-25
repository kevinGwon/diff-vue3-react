import { useState } from 'react';
import { useQueryParams } from '../hooks/useQueryParams';

const Params = () => {
  const [params, setParams] = useQueryParams();

  const [selectedStates, setSelectedStates] = useState(
    params.state ? params.state.split(',') : []
  );

  const [selectedCategorys, setSelectedCategory] = useState(
    params.category ? params.category.split(',') : []
  );

  const onChangeStates = (event) => {
    const state = event.target.id;
    const filteredState = selectedStates.includes(state)
      ? selectedStates.filter((item) => item !== state)
      : [...selectedStates, state];

    setSelectedStates(filteredState);
    setParams((params) => ({
      ...params,
      state: filteredState.join(','),
    }));
  };

  const onChangeCategorys = (event) => {
    const category = event.target.id;
    const filteredCategorys = selectedCategorys.includes(category)
      ? selectedCategorys.filter((item) => item !== category)
      : [...selectedCategorys, category];

    setSelectedCategory(filteredCategorys);
    setParams((params) => ({
      ...params,
      category: filteredCategorys.join(','),
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(params);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>State</legend>
        {['ongoing', 'pending', 'ended'].map((state) => (
          <div key={state}>
            <label htmlFor={state}>{state}</label>
            <input
              type="checkbox"
              id={state}
              value={state}
              checked={selectedStates.includes(state)}
              onChange={onChangeStates}
            />
          </div>
        ))}
        <br />
        <strong>Selected: {params.state}</strong>
      </fieldset>
      <fieldset>
        <legend>Category</legend>
        {['cooking', 'hair', 'design'].map((category) => (
          <div key={category}>
            <label htmlFor={category}>{category}</label>
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={selectedCategorys.includes(category)}
              onChange={onChangeCategorys}
            />
          </div>
        ))}
        <br />
        <strong>Selected: {params.category}</strong>
      </fieldset>
      <br />
      <button type="submit">전송</button>
    </form>
  );
};

export default Params;
