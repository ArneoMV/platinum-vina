// Tiny class-name joiner — filters out falsy values and joins with spaces.
// Intentionally dependency-free (no clsx / tailwind-merge); we don't need
// conflict resolution, only conditional composition.
export type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
