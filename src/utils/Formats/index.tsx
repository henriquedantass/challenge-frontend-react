import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";

export function formattedDate(date: Date) {
  const newDate = new Date(date);

  return format(newDate, "MM/dd/yyyy", { locale: enUS });
}

export const { format: formatPrice } = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
