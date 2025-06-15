import { create } from "zustand";

// Create a store
const notificationStore = create((set) => ({
  notifications: [], // initial state
  push: (newNotification) =>
    set((state) => ({
      notifications: [...state.notifications, newNotification],
    })),
  remove: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
  clear: () => set({ notifications: [] }),
}));

export default notificationStore;
