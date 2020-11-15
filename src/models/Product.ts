import * as Yup from 'yup';

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  count: number;
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().integer().positive().required(),
  count: Yup.number().integer().positive().required(),
});
