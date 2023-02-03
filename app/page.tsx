import { preferredTranslations } from "@/translations"
import Link from "next/link"
import { Form } from "./Form"

export default async function RootPage({
  searchParams,
}: {
  searchParams?: { language?: string }
}) {
  const i18n = preferredTranslations(searchParams?.language || null)

  return (
    <>
      <h1>{i18n.title}</h1>
      <Form placeholder={i18n.placeholder} greeting={i18n.greeting} />
      <Link
        href={`/?language=${i18n.languageSwitcher.code}`}
        style={{ display: "block", marginTop: "24px" }}
      >
        {i18n.languageSwitcher.label}
      </Link>
    </>
  )
}
