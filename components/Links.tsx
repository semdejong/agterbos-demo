import Link from "next/link";
import type { ReactNode } from "react";
import { content } from "@/content";

const { contact } = content;

export function CallLink({
  kind = "mobile",
  className,
  children,
}: {
  kind?: "mobile" | "landline";
  className?: string;
  children?: ReactNode;
}) {
  const mobile = kind === "mobile";
  return (
    <a
      href={mobile ? `tel:${contact.phoneTel}` : `tel:${contact.landlineTel}`}
      data-cta="bellen"
      className={className}
    >
      {children ?? (mobile ? contact.phone : contact.landline)}
    </a>
  );
}

export function MailLink({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <a href={`mailto:${contact.email}`} data-cta="mailen" className={className}>
      {children ?? contact.email}
    </a>
  );
}

export function OfferteLink({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <Link href="/offerte" data-cta="offerte" className={className}>
      {children ?? "Offerte"}
    </Link>
  );
}
