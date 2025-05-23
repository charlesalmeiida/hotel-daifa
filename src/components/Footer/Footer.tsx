import Image from "next/image"
import { Container } from "../Global/Container"
import { Contacts } from "./Contacts"
import { Socials } from "./Socials"
import { Copyright } from "./Copyright"
import LinksFooter from "@/app/data/LinksFooter.json"
import { BtnWpp } from "../Global/BtnWpp"
import { ItemNav } from "../Header/components/ItemNav"
import { useLocale } from "next-intl"
import { BannersWifi } from "../banners-wifi"

export function Footer() {
  const locale = useLocale()

  return (
    <footer className="bg-blue pt-14 lg:pt-20 pb-4">
      <Container>
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 justify-between items-start">
          <div className="space-y-10 flex flex-col items-center justify-center mx-auto lg:mx-0 lg:block">
            <Image
              src={"/svg/logo-white.svg"}
              width={72}
              height={61}
              alt="Logo do Hotel Daifa"
            />
            <p className="text-gray-50 text-center lg:text-left max-w-80">
              Profa. Maria Júlia Franco, 294 – Prainha, Florianópolis – SC,
              88020-280
            </p>
            <div className="flex items-center gap-8">
              <Socials />
            </div>
            <div>
              <Contacts />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mx-auto lg:mx-0 gap-10 lg:gap-14">
            {LinksFooter.map((section) => (
              <div key={section.page} className="space-y-6">
                <ItemNav color="secondary" bold link={section.link}>
                  {locale === "en"
                    ? section.pageEn
                    : locale === "es"
                    ? section.pageEs
                    : section.page}
                </ItemNav>
                {section.links &&
                  section.links.map((item) => (
                    <ItemNav color="secondary" key={item.name} link={item.link}>
                      {locale === "en"
                        ? item.nameEn
                        : locale === "es"
                        ? item.nameEs
                        : item.name}
                    </ItemNav>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <Copyright />
      </Container>
      <BannersWifi />
      <BtnWpp />
    </footer>
  )
}
