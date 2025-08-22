export const ok = (data: unknown) => ({ success: true, data });
export const fail = (message: string, code?: string) => ({
  success: false,
  error: { message, code },
});
