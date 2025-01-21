import { useState, ChangeEvent, FormEvent } from 'react';
// Type definitions for form data and errors
interface FormData {
  name: string;
  lastname: string;
  fathersname: string;
  mothersname: string;
  dob: string;
  clubname: string;
  instructorname: string;
  belt: string;
}

interface Errors {
  [key: string]: string;
}

// Custom Input Component
import React, { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`h-10 px-3 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${error ? 'border-red-500' : ''
          } ${className}`}
        {...props}
      />
    );
  }
);

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  error?: boolean;
  children?: React.ReactNode;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', children, error, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`h-10 px-3 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors appearance-none bg-white ${error ? 'border-red-500' : ''
          } ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        relative overflow-hidden group px-6 py-3 rounded-lg font-medium
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-blue-400
        before:bg-[length:200%_100%]
        before:animate-[gradient_8s_linear_infinite]
        hover:before:bg-[length:300%_100%]
        before:transition-all before:duration-500
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 text-white">
        {children}
      </span>
    </button>
  );
};

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);


const KarateRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastname: '',
    fathersname: '',
    mothersname: '',
    dob: '',
    clubname: '',
    instructorname: '',
    belt: 'white',
  });

  const [errors, setErrors] = useState<Errors>({});

  const beltOptions = [
    { value: 'white', label: 'White' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'blue', label: 'Blue' },
    { value: 'violet', label: 'Violet' },
    { value: 'green2', label: 'Green 2' },
    { value: 'green1', label: 'Green 1' },
    { value: 'brown4', label: 'Brown 4' },
    { value: 'brown3', label: 'Brown 3' },
    { value: 'brown2', label: 'Brown 2' },
    { value: 'brown1', label: 'Brown 1' },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Here you would typically send the data to your backend
    }
  };

  const InputField: React.FC<{ label: string; name: keyof FormData; type?: string }> = ({
    label,
    name,
    type = 'text',
  }) => (
    <div className="mb-4 w-full md:w-[calc(50%-1rem)]">
      <label className="block font-medium mb-1 text-sm" htmlFor={name}>
        {label}
      </label>
      <Input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="justify-center p-4 ">

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <h2 className="text-center text-2xl font-medium relative pb-2">
            Registration Form
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-purple-500" />
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-wrap justify-between">
              <InputField label="First Name:" name="name" />
              <InputField label="Last Name:" name="lastname" />
              <InputField label="Father's Name:" name="fathersname" />
              <InputField label="Mother's Name:" name="mothersname" />
              <InputField label="Date of Birth:" name="dob" type="date" />
              <InputField label="Club Name:" name="clubname" />
              <InputField label="Instructor Name:" name="instructorname" />
              <div className="mb-4 w-full md:w-[calc(50%-1rem)]">
                <label className="block font-medium mb-1 text-sm" htmlFor="belt">
                  Belt:
                </label>
                <Select
                  id="belt"
                  name="belt"
                  value={formData.belt}
                  onChange={handleChange}
                >
                  {beltOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {errors.belt && <p className="text-red-500 text-xs mt-1">{errors.belt}</p>}
              </div>
            </div>

            <Button
              className="w-full text-white bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-300 bg-[length:200%_200%] hover:animate-gradient360"
            >
              Submit
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default KarateRegistrationForm;
