import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <section>
            <div className="container_section">
                <h1>404</h1>
                <p>La page que vous cherchez n'existe pas</p>
                <button onClick={() => navigate(-1)}>Retour</button>
            </div>
        </section>
    )
}