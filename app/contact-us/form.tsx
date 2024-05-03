// Assuming you have your Tailwind CSS configuration set up with light and dark mode styles

'use client';
import { baseMargin, cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formFields, schema, submitFormData } from './user.form.schema';
import { allProgramNames } from '@constants/index';

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: submitFormData) => {
    console.log(data);
  };

  return (
    <div className={`${baseMargin} py-20 bg-background text-foreground flex justify-center items-center min-h-screen`}>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label className={cn(formFields({label:"default"}))} htmlFor="program">Select Program</label>
          {/* Render select dropdown with options from allProgramNames array */}
          <select id="program" {...register('program', { required: true })} className={cn(formFields({select:"default"}))}>
            <option value="">Select Program</option>
            {allProgramNames.map((program, index) => (
              <option key={index} value={program}>{program}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className={cn(formFields({label:"default"}))} htmlFor="firstName">First Name</label>
          <input id="firstName" {...register('firstName')} className={cn(formFields({input:"default"}))} type="text" placeholder="First Name" />
          <p className={cn(formFields({error:"default"}))}>{errors.firstName?.message}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="age">Age</label>
          <input id="age" {...register('age')} className="shadow appearance-none border rounded w-full py-2 px-3 text-input leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Age" />
          <p className={cn(formFields({error:"default"}))}>{errors.age?.message}</p>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-primary hover:bg-accent text-primary-foreground font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
