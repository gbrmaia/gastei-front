import * as React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Importe os ícones que você deseja usar do Radix Icons
import {
    HomeIcon,
    PersonIcon,
    CalendarIcon,
    EnvelopeClosedIcon,
    GearIcon,
    BellIcon,
    ChatBubbleIcon,
} from "@radix-ui/react-icons"

// Constante com os ícones disponíveis
const icons = [
    { value: "home", label: "Home", icon: HomeIcon },
    { value: "user", label: "Usuário", icon: PersonIcon },
    { value: "calendar", label: "Calendário", icon: CalendarIcon },
    { value: "email", label: "Email", icon: EnvelopeClosedIcon },
    { value: "settings", label: "Configurações", icon: GearIcon },
    { value: "notifications", label: "Notificações", icon: BellIcon },
    { value: "chat", label: "Chat", icon: ChatBubbleIcon },
]

export default function IconSelector() {
    const [selectedIcon, setSelectedIcon] = React.useState("")

    return (
        <Select onValueChange={setSelectedIcon} value={selectedIcon}>
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selecione um ícone" />
            </SelectTrigger>
            <SelectContent>
                {icons.map((icon) => (
                    <SelectItem key={icon.value} value={icon.value}>
                        <div className="flex items-center">
                            <icon.icon className="mr-2 h-4 w-4" />
                            <span>{icon.label}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}