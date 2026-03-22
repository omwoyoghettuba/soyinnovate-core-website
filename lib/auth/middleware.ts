import { z } from 'zod';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/session';

export type ActionState = {
  error?: string;
  success?: string;
  [key: string]: any;
};

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData
) => Promise<T>;

export function validatedAction<S extends z.ZodType<any, any>, T>(
  schema: S,
  action: ValidatedActionFunction<S, T>
) {
  return async (prevState: ActionState, formData: FormData) => {
    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    return action(result.data, formData);
  };
}

type ValidatedActionWithUserFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData,
  user: any
) => Promise<T>;

export function validatedActionWithUser<S extends z.ZodType<any, any>, T>(
  schema: S,
  _action: ValidatedActionWithUserFunction<S, T>
) {
  return async (prevState: ActionState, formData: FormData) => {
    return {
      error: 'Database not configured. Please contact support.'
    };
  };
}

export function withTeam(action: (formData: FormData, team: any) => Promise<any>) {
  return async (formData: FormData) => {
    return {
      error: 'Database not configured. Please contact support.'
    };
  };
}
