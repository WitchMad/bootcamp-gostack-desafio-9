import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const { format: FormatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function FormatDate(date) {
  const formated = format(date, "d 'de' MMMM 'de' yyyy", {
    locale: pt,
  });
  return formated;
}
