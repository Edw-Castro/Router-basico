import { Link } from "../Link"
const i18n = {
  es: {
    title: "sobre nosotros",
    button: "ir al inicio",
    description: "Hola mi nombre es Edward"
  },
  en: {
    title: 'About us',
    button: 'go to home page',
    description: "Hi!, My name is Edward"
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return(
      <>
        <h1>{i18n.About}</h1>
        <p>{i18n.description}</p>
        <Link to='/'>{i18n.button}</Link>
      </>
    )
  }