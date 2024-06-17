"use client"
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface inputFormProps {
  field: {
    [key: string]: any;
  };
}

function InputForm({field}: inputFormProps, placeholder: string, type: string) {
  return (
    <>
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} type={type} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
}

export default InputForm;
