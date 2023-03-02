import { Currency } from '@/entities/Currency/model/types/currency';
import { Country } from '@/entities/Country';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number | string;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}