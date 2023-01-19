// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DateChange({ onChange, date }: DateChangeProps) {
  return (
    <DatePicker
      selected={date}
      onChange={(date) => onChange(date as Date | string)}
    />
  );
}

interface DateChangeProps {
  onChange: (date: string | Date) => void;
  date: Date;
}
