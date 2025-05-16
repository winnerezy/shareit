import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { io, Socket } from "socket.io-client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const socket: Socket = io(process.env.IP_ADDRESS + ":3005", {
  transports: ["websocket"],
});
