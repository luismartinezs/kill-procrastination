import { cn } from "@/utils/cn";

export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <section className={cn("my-12", className)}>{children}</section>;
};