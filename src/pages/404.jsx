import { Link } from "../Link";

export default function Page404() {
    return (
        <>
            <div>
                <h1>This is NOT fine</h1>
                <img src="https://th.bing.com/th/id/R.99b3f897b1d505cab436b0d5d4abdc25?rik=cabUHlRn5hYedg&pid=ImgRaw&r=0" alt="Gif del perro This is Fine" />
            </div>
            <Link to="/">Volver al inicio</Link>
        </>
    )
}