import * as React from "react";
import {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from "./toast"; // Daha önce tanımlanan bileşenler

// useToast Kancasını Oluşturma
export function useToast() {
  const [toasts, setToasts] = React.useState<any[]>([]);

  const addToast = (toast: {
    title: string;
    description?: string;
    variant?: "default" | "destructive";
  }) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      { ...toast, id: Date.now() },
    ]);
  };

  const removeToast = (id: number) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
}
