'use client';

import { Toast, ToastProvider } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, ...props }) => (
        <Toast key={id} {...props} />
      ))}
    </ToastProvider>
  );
}
