import { z } from 'zod';

// login schema for validation in login form
export const loginSchema = z.object({
	role: z.enum(['admin', 'user', 'membership']),
	username: z.string().min(3, { message: 'Tên đăng nhập quá ngắn' }),
	password: z
		.string()
		.min(6, { message: 'Password is too short' })
		.max(20, { message: 'Password is too long' }),
});
export type LoginPayloadType = z.infer<typeof loginSchema>;
export type LoginFormType = LoginPayloadType;
