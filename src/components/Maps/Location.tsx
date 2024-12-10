import { Container } from "../Global/Container"
import { TagSpan } from "../Global/TagSpan"
import { Maps } from "./Maps"
import { useTranslations } from "next-intl"

export function Location() {
  const t = useTranslations("Map")

  return (
    <>
      <Container>
        <div className="text-center space-y-6">
          <TagSpan>{t("tag")}</TagSpan>
          <h3 className="max-w-sm mx-auto text-gray-700">{t("text")}</h3>
        </div>
        <div>
          <Maps />
        </div>
      </Container>
    </>
  )
}
