import { BrHeader } from "@govbr-ds/react-components";

export default function Header() {
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
            onClickLogin={function Dc() {}}
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
        />
    );
}
