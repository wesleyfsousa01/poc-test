import { BrHeader } from "@govbr-ds/react-components";
import LogoutButton from "./LogoutButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Header() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    

    function toLogin() {
        window.location.href = '/login';
    }

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('/check-auth');
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                console.error('Erro ao verificar autenticação', error);
            }
        };

        checkAuth();
    }, []);



    return (
        <BrHeader
            features={[
                {
                    icon: "chart-bar",
                    label: "Funcionalidade 1",
                    onClick: function Dc() {},
                },
                {
                    icon: "headset",
                    label: "Funcionalidade 2",
                    onClick: function Dc() {},
                },
                {
                    icon: "comment",
                    label: "Funcionalidade 3",
                    onClick: function Dc() {},
                },
                {
                    icon: "adjust",
                    label: "Funcionalidade 4",
                    onClick: function Dc() {},
                },
            ]}
            menuId="main-navigation"
            onClickLogin={toLogin}
            loggedIn={isAuthenticated}
            avatar={<LogoutButton />}
            onSearch={function Dc() {}}
            quickAccessLinks={[
                {
                    label: "Acesso Rápido 1",
                    onClick: function Dc() {},
                },
                {
                    label: "Acesso Rápido 2",
                    onClick: function Dc() {},
                },
            ]}
            showMenuButton
            showSearchBar
            signature="Secretaria Geral"
            subTitle="Sinajuve"
            title="ID Jovem"
            urlLogo="https://www.gov.br/ds/assets/img/govbr-logo.png"
        >
        </BrHeader>
    );
}
