import { ReactNode } from "react"
import { I18nUrlManager } from "../components/I18nUrlManager"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <I18nUrlManager />
          {children}
        </body>
      </html>
    </>
  )
}
