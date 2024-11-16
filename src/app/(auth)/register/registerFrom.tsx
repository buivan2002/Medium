"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z
.object({
  username: z.string().trim().min(2).max(256),
  email: z.string().email(),
  passwork: z.string().min(6).max(100),
  confirmPasswork: z.string().min(6).max(100)
})
.strict()
.superRefine(({ confirmPasswork, passwork }, ctx) => {
  if (confirmPasswork !== passwork) {
    ctx.addIssue({
      code: 'custom',
      message: 'Mật khẩu không khớp',
      path: ['confirmPassword']
    })
  }
})
export function RegisterPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          passwork: "",
          confirmPasswork: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Username Field */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-blue-500 mb-2">Tên đăng nhập</FormLabel>
                                    <FormControl >
                                        <Input placeholder="Tài khoản" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="passwork"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-blue-500 mb-2" >Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Mật khẩu" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                              <FormField
                            control={form.control}
                            name="confirmPasswork"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-blue-500 mb-2" >Nhập lại Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Mật khẩu" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Đăng ký
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

