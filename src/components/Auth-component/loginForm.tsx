'use client';   
import {
	Anchor,
	Button,
	Checkbox,
	Divider,
	Group,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Image,
    Center,
    Flex,
    Select
} from '@mantine/core';
export function LoginForm(){
    //submid đoạn này ô viết đi tôi k bt logic của ô, schema thì vẫn dùng cái loginSchema của ô thôi 
    // const onSubmit = (data: LoginPayloadType) => {
	return(
	<Flex w="100%" h="100%" className="flex-row items-center justify-center">
			<Paper radius="md" shadow="sm" className="max-w-sm w-full p-8">
				<Center className="mb-6">
					<Image src="public\images\img\logoPMthuoc.png" alt="logo" width={100} height={100} />
				</Center>
				<form >
					<Stack >
						{/* Loại tài khoản */}
						<Select
							label="Loại tài khoản"
							placeholder="Chọn loại tài khoản"
							data={[
								{ value: 'membership', label: 'Nhân viên' },
								{ value: 'user', label: 'Quản lý' },
								{ value: 'admin', label: 'Admin' },
							]}
							// onChange={(value) => setValue('role', value as any)}
						/>
						{/* Tên đăng nhập */}
						<TextInput
							label="Tên đăng nhập"
							placeholder="Nhập tên đăng nhập"
							// {...register('username')}
							// error={formState.errors.username?.message}
						/>
						{/* Mật khẩu */}
						<PasswordInput
							label="Mật khẩu"
							placeholder="Nhập mật khẩu"
							// {...register('password')}
							// error={formState.errors.password?.message}
						/>
					</Stack>

					{/* Tùy chọn lưu đăng nhập */}
                    <Group className="justify-between" mt="md">
                    <Checkbox label="Lưu thông tin đăng nhập" />
					</Group>

					{/* Nút đăng nhập */}
					<Button
						type="submit"
						fullWidth
						// loading={loading}
						// loaderPosition="left"
						// disabled={loading}
						mt="lg"
					>
						Đăng nhập
					</Button>
				</form>

				<Divider my="lg" />

				<Center>
					<Button variant="subtle" size="sm" onClick={() => alert('Chức năng này chưa khả dụng')}>
						Quên mật khẩu?
					</Button>
				</Center>
			</Paper>
		</Flex>
    )
}