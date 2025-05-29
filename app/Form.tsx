"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
    FormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";

type FormValues = {
    username: string;
    email: string;
    message: string;
};

export default function FormComponent() {
    const form = useForm<FormValues>({
        defaultValues: {
            username: '',
            email: '',
            message: ''
        }
    });
    const onSubmit = React.useCallback((values: FormValues) => {
        console.log(values, "submit");
    }, []);
    return (
        <Form {...form}>
            <form
                className="grid grid-cols-2 gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Matt" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="abcd@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="col-span-full">
                            <FormLabel>message</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Hi! I think about..."
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    variant="outline"
                    type="submit"
                    className="col-span-full"
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
}
