"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input type="text" name="title" placeholder="title" disabled={pending} />
      {errors?.title ? (
        <div>
          {errors.title.map((error) => (
            <span key={error} className="text-rose-500">
              {error}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};
