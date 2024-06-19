import React from 'react';
import { useForm } from 'react-hook-form';

const RadioForm = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Selected Gender: ${data.gender}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            value="female"
            {...register("gender", { required: true })}
          />
          Female
        </div>
        <div>
          <input
            type="radio"
            value="male"
            {...register("gender", { required: true })}
          />
          Male
        </div>
        <div>
          <input
            type="radio"
            value="other"
            {...register("gender", { required: true })}
          />
          Other
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RadioForm;
