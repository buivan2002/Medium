import { z } from 'zod';

export const AdminSchema = z.object({
  username: z
    .string()
    .nonempty({ message: 'Tên tài khoản không được để trống' })
    .min(2, { message: 'Tên tài khoản phải có ít nhất 2 ký tự' }),
  password: z
    .string()
    .nonempty({ message: 'Mật khẩu không được để trống' })
    .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
  firstName: z.string().optional(), 
  lastName: z.string().optional(), 
  address: z.string().optional(), 
  zipCode: z.string().optional(), 
  dob: z
    .string()
    .optional() 
   ,
  phone: z.string().optional(), 
  email: z
    .string()
    .optional(), 
  gender: z.string().optional(), 
});
