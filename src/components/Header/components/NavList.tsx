import { ItemNav } from "./ItemNav"

export function NavList() {
  return (
    <ul className="flex gap-16">
      <li>
        <ItemNav icon link="/">
          O hotel
        </ItemNav>
      </li>
      <li>
        <ItemNav link="/">Acomodações</ItemNav>
      </li>
      <li>
        <ItemNav link="/">Blog</ItemNav>
      </li>
      <li>
        <ItemNav link="/">Contato</ItemNav>
      </li>
    </ul>
  )
}
