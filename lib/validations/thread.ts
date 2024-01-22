import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().trim().min(3, "Minimum of 3 characters"),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().trim().min(3, "Minimum of 3 characters"),
});
