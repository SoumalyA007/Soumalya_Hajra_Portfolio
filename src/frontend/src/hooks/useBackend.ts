import type { ContactMessage } from "@/types/portfolio";
import { useMutation } from "@tanstack/react-query";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (_message: ContactMessage) => {
      // Portfolio static mode — simulate submission
      await new Promise((r) => setTimeout(r, 800));
      return { success: true };
    },
  });
}
