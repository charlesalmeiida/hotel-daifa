import { Container } from "@/components/Global/Container"
import { itemsFaq } from "@/app/data/itemsFaq"
import { ItemFaq } from "./components/ItemFaq"
import { Header } from "@/components/Header"
import { useTranslations, useLocale } from "next-intl"

export default function FaqPage() {
  const t = useTranslations("Faq")
  const locale = useLocale()

  return (
    <>
      <Header />

      <section className="pt-14 pb-20 relative">
        <Container>
          <div className="flex flex-col lg:flex-row justify-around">
            <div>
              <div className="text-center lg:text-left max-w-[450px] block static lg:sticky top-[124px]">
                <h2 className="mt-4 text-gray-700 text-[32px] lg:text-[40px] mb-8">
                  {t("title")}
                </h2>
                <p className="mb-10 text-gray-900 opacity-80 mx-auto max-w-[470px]">
                  {t("text")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
              {itemsFaq.map((item) => (
                <div key={item.question}>
                  <ItemFaq
                    answer={
                      locale === "en"
                        ? item.answerEn
                        : locale === "es"
                        ? item.answerEs
                        : item.answer
                    }
                    question={
                      locale === "en"
                        ? item.questionEn
                        : locale === "es"
                        ? item.questionEs
                        : item.question
                    }
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
